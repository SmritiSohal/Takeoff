import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

  const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID');
  const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET');

  if (!razorpayKeyId || !razorpayKeySecret) {
    return new Response(JSON.stringify({ error: 'Razorpay env vars are missing' }), { status: 500, headers: corsHeaders });
  }

  const amount = Number(Deno.env.get('PREMIUM_PRICE_PAISE') ?? '199900');

  const orderResponse = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${razorpayKeyId}:${razorpayKeySecret}`)}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency: 'INR',
      receipt: `takeoff-${user.id}-${Date.now()}`,
      payment_capture: 1,
      notes: {
        user_id: user.id,
        product: 'takeoff_premium_unlock',
      },
    }),
  });

  if (!orderResponse.ok) {
    const errorText = await orderResponse.text();
    return new Response(errorText, { status: 500, headers: corsHeaders });
  }

  const order = await orderResponse.json();

  const { error: paymentInsertError } = await supabaseAdmin.from('payments').insert({
    user_id: user.id,
    provider: 'razorpay',
    order_id: order.id,
    status: 'created',
    amount: order.amount,
    currency: order.currency,
    metadata: order,
  });

  if (paymentInsertError) {
    return new Response(JSON.stringify({ error: paymentInsertError.message }), { status: 500, headers: corsHeaders });
  }

  return new Response(
    JSON.stringify({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: razorpayKeyId,
      profileId: user.id,
    }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
  );
});
