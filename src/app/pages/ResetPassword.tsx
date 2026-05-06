import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { updatePassword, exchangeRecoveryCode } from '../lib/supabase';
import { Plane, Lock, CheckCircle2 } from 'lucide-react';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // PKCE flow (newer Supabase default): ?code=xxx in query string
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    if (code) {
      exchangeRecoveryCode(code)
        .then((session) => setAccessToken(session.access_token))
        .catch(() => setError('Invalid or expired reset link. Please request a new one.'));
      return;
    }

    // Implicit flow (older): #access_token=xxx&type=recovery in hash
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');
    const type = params.get('type');
    if (token && type === 'recovery') {
      setAccessToken(token);
      return;
    }

    setError('Invalid or expired reset link. Please request a new one.');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (!accessToken) return;

    setLoading(true);
    setError(null);
    try {
      await updatePassword(accessToken, newPassword);
      setDone(true);
      setTimeout(() => navigate('/auth'), 2500);
    } catch {
      setError('Failed to update password. The link may have expired — please request a new one.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#545454] font-['Inter',sans-serif] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[30px] p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Plane className="w-8 h-8 text-[#4094f4]" />
            <h1 className="text-2xl font-bold text-black">TakeOff</h1>
          </div>

          {done ? (
            <div className="text-center py-4">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-2">Password Updated</h2>
              <p className="text-gray-600">Your password has been reset successfully. Redirecting you to sign in…</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-black mb-2">Set New Password</h2>
                <p className="text-gray-600">Enter and confirm your new password below</p>
              </div>

              {error && !accessToken ? (
                <div className="text-center">
                  <p className="text-red-600 text-sm mb-6">{error}</p>
                  <button
                    onClick={() => navigate('/auth')}
                    className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-[#4094f4] transition-all"
                  >
                    Back to Sign In
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#4094f4] focus:outline-none transition-colors"
                        placeholder="Enter new password"
                        required
                        minLength={6}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#4094f4] focus:outline-none transition-colors"
                        placeholder="Confirm new password"
                        required
                      />
                    </div>
                  </div>

                  {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-[#4094f4] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Updating…' : 'Update Password'}
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/auth')}
            className="text-white/80 hover:text-white transition-colors text-sm"
          >
            ← Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
