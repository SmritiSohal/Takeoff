const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('Supabase environment variables are missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

const storageKey = 'takeoff.supabase.session';

export type SupabaseSession = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user: {
    id: string;
    email?: string;
    user_metadata?: {
      full_name?: string;
    };
  };
};

export type TakeoffUser = {
  id: string;
  email: string;
  name: string;
  isPremium: boolean;
};

function authHeaders(token?: string) {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${token ?? SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
  };
}

function getStoredSession(): SupabaseSession | null {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as SupabaseSession;
  } catch {
    localStorage.removeItem(storageKey);
    return null;
  }
}

function storeSession(session: SupabaseSession | null) {
  if (!session) {
    localStorage.removeItem(storageKey);
    return;
  }

  localStorage.setItem(storageKey, JSON.stringify(session));
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${SUPABASE_URL}${path}`, init);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed: ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export async function signUpWithEmail(email: string, password: string, fullName: string) {
  return request<{ session: SupabaseSession | null; user: SupabaseSession['user'] }>(`/auth/v1/signup`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({
      email,
      password,
      data: {
        full_name: fullName,
      },
    }),
  });
}

export async function signInWithEmail(email: string, password: string) {
  return request<SupabaseSession>(`/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ email, password }),
  });
}

export async function signOutSession(accessToken: string) {
  await request(`/auth/v1/logout`, {
    method: 'POST',
    headers: authHeaders(accessToken),
  });
}

export async function fetchProfile(accessToken: string, userId: string) {
  return request<Array<{ id: string; email: string; full_name: string | null; is_premium: boolean }>>(
    `/rest/v1/users?id=eq.${userId}&select=id,email,full_name,is_premium`,
    {
      headers: authHeaders(accessToken),
    },
  );
}

export async function upsertProfile(accessToken: string, payload: { id: string; email: string; full_name: string }) {
  await request(`/rest/v1/users`, {
    method: 'POST',
    headers: {
      ...authHeaders(accessToken),
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify({
      ...payload,
      is_premium: false,
    }),
  });
}

export async function updatePremiumStatus(accessToken: string, userId: string, isPremium: boolean) {
  await request(`/rest/v1/users?id=eq.${userId}`, {
    method: 'PATCH',
    headers: {
      ...authHeaders(accessToken),
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      is_premium: isPremium,
    }),
  });
}

export async function fetchSchools(accessToken: string) {
  return request<Array<Record<string, unknown>>>(
    '/rest/v1/schools?select=*&order=rating.desc.nullslast,name.asc',
    {
      headers: authHeaders(accessToken),
    },
  );
}

export async function fetchFeaturedSchools(accessToken?: string | null) {
  return request<Array<Record<string, unknown>>>(
    '/rest/v1/schools?select=*&is_featured=eq.true&order=rating.desc.nullslast,name.asc',
    {
      headers: authHeaders(accessToken ?? undefined),
    },
  );
}

export async function fetchMedicalCenters(accessToken: string) {
  return request<Array<Record<string, unknown>>>(
    '/rest/v1/medical_centers?select=*&order=location.asc,name.asc',
    {
      headers: authHeaders(accessToken),
    },
  );
}

export async function fetchStudyMaterial(accessToken?: string | null) {
  return request<Array<Record<string, unknown>>>(
    '/rest/v1/study_material?select=*&order=subject.asc,title.asc',
    {
      headers: authHeaders(accessToken ?? undefined),
    },
  );
}

export function loadSession() {
  return getStoredSession();
}

export function saveSession(session: SupabaseSession | null) {
  storeSession(session);
}

export function toTakeoffUser(session: SupabaseSession, profile?: { full_name: string | null; is_premium: boolean }): TakeoffUser {
  const email = session.user.email ?? '';
  const derivedName = profile?.full_name ?? session.user.user_metadata?.full_name ?? email.split('@')[0] ?? 'Pilot';

  return {
    id: session.user.id,
    email,
    name: derivedName,
    isPremium: profile?.is_premium ?? false,
  };
}

// ── PKCE helpers ────────────────────────────────────────────────────────────
function generateCodeVerifier(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

async function generateCodeChallenge(verifier: string): Promise<string> {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

export async function sendPasswordResetEmail(email: string) {
  const redirectTo = `${window.location.origin}/reset-password`;
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  sessionStorage.setItem('pkce_code_verifier', codeVerifier);

  await request(`/auth/v1/recover?redirect_to=${encodeURIComponent(redirectTo)}`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ email, code_challenge: codeChallenge, code_challenge_method: 's256' }),
  });
}

export async function exchangeRecoveryCode(code: string): Promise<SupabaseSession> {
  const codeVerifier = sessionStorage.getItem('pkce_code_verifier') ?? '';
  return request<SupabaseSession>(`/auth/v1/token?grant_type=pkce`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ auth_code: code, code_verifier: codeVerifier }),
  });
}

export async function updatePassword(accessToken: string, newPassword: string) {
  await request('/auth/v1/user', {
    method: 'PUT',
    headers: authHeaders(accessToken),
    body: JSON.stringify({ password: newPassword }),
  });
}

export async function createPremiumOrder(accessToken: string) {
  return request<{ orderId: string; amount: number; currency: string; keyId: string; profileId: string }>(
    '/functions/v1/create-razorpay-order',
    {
      method: 'POST',
      headers: authHeaders(accessToken),
    },
  );
}

export async function verifyPremiumPayment(
  accessToken: string,
  payload: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string },
) {
  return request<{ success: boolean }>(
    '/functions/v1/verify-razorpay-payment',
    {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    },
  );
}
