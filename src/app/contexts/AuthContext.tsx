import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import {
  fetchProfile,
  loadSession,
  saveSession,
  signInWithEmail,
  signOutSession,
  signUpWithEmail,
  toTakeoffUser,
  upsertProfile,
  type SupabaseSession,
  type TakeoffUser,
} from '../lib/supabase';

type AuthContextType = {
  user: TakeoffUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  accessToken: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<SupabaseSession | null>(null);
  const [user, setUser] = useState<TakeoffUser | null>(null);
  const [loading, setLoading] = useState(true);

  const hydrateProfile = async (currentSession: SupabaseSession) => {
    const profileRows = await fetchProfile(currentSession.access_token, currentSession.user.id);
    if (profileRows.length === 0) {
      await upsertProfile(currentSession.access_token, {
        id: currentSession.user.id,
        email: currentSession.user.email ?? '',
        full_name: currentSession.user.user_metadata?.full_name ?? (currentSession.user.email?.split('@')[0] ?? 'Pilot'),
      });

      setUser(toTakeoffUser(currentSession, { full_name: currentSession.user.user_metadata?.full_name ?? null, is_premium: false }));
      return;
    }

    setUser(toTakeoffUser(currentSession, profileRows[0]));
  };

  useEffect(() => {
    const boot = async () => {
      const stored = loadSession();
      if (!stored) {
        setLoading(false);
        return;
      }

      setSession(stored);

      try {
        await hydrateProfile(stored);
      } catch (error) {
        console.error('Failed to hydrate user profile:', error);
        setSession(null);
        setUser(null);
        saveSession(null);
      } finally {
        setLoading(false);
      }
    };

    boot();
  }, []);

  const signIn = async (email: string, password: string) => {
    const signedInSession = await signInWithEmail(email, password);
    saveSession(signedInSession);
    setSession(signedInSession);
    await hydrateProfile(signedInSession);
  };

  const signUp = async (name: string, email: string, password: string) => {
    const result = await signUpWithEmail(email, password, name);

    if (!result.session) {
      throw new Error('Sign in to continue');
    }

    saveSession(result.session);
    setSession(result.session);
    await upsertProfile(result.session.access_token, {
      id: result.session.user.id,
      email,
      full_name: name,
    });

    setUser(toTakeoffUser(result.session, { full_name: name, is_premium: false }));
  };

  const signOut = async () => {
    if (session?.access_token) {
      try {
        await signOutSession(session.access_token);
      } catch (error) {
        console.error('Supabase sign-out error:', error);
      }
    }

    saveSession(null);
    setSession(null);
    setUser(null);
  };

  const refreshUser = async () => {
    if (!session) return;
    await hydrateProfile(session);
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      isAuthenticated: !!user,
      loading,
      accessToken: session?.access_token ?? null,
      signIn,
      signUp,
      signOut,
      refreshUser,
    }),
    [user, loading, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
