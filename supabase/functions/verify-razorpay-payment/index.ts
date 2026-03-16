import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

async function hmacSha256(secret: string, payload: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const supabaseAdmin = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );

  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return new Response(JSON.stringify({ error: 'Missing auth header' }), { status: 401, headers: corsHeaders });
  }

  const token = authHeader.replace('Bearer ', '');
  const {
    data: { user },
    error: userError,
  } = await supabaseAdmin.auth.getUser(token);

  if (userError || !user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });
  }

  const body = await req.json();
  const orderId = body.razorpay_order_id as string;
  const paymentId = body.razorpay_payment_id as string;
  const providedSignature = body.razorpay_signature as string;

  if (!orderId || !paymentId || !providedSignature) {
    return new Response(JSON.stringify({ error: 'Missing payment details' }), { status: 400, headers: corsHeaders });
  }

  const secret = Deno.env.get('RAZORPAY_KEY_SECRET');
  if (!secret) {
    return new Response(JSON.stringify({ error: 'RAZORPAY_KEY_SECRET not configured' }), { status: 500, headers: corsHeaders });
  }

  const expectedSignature = await hmacSha256(secret, `${orderId}|${paymentId}`);
  const isValid = expectedSignature === providedSignature;

  if (!isValid) {
    return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 400, headers: corsHeaders });
  }

  const { error: paymentUpdateError } = await supabaseAdmin
    .from('payments')
    .update({ payment_id: paymentId, signature: providedSignature, status: 'paid' })
    .eq('order_id', orderId)
    .eq('user_id', user.id);

  if (paymentUpdateError) {
    return new Response(JSON.stringify({ error: paymentUpdateError.message }), { status: 500, headers: corsHeaders });
  }

  const { error: userUpdateError } = await supabaseAdmin
    .from('users')
    .update({ is_premium: true, premium_activated_at: new Date().toISOString(), payment_reference: paymentId })
    .eq('id', user.id);

  if (userUpdateError) {
    return new Response(JSON.stringify({ error: userUpdateError.message }), { status: 500, headers: corsHeaders });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
