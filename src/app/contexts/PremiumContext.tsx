import { createContext, useContext, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { updatePremiumStatus } from '../lib/supabase';

type PremiumContent = {
  eligibilityPlanner: boolean;
  paperworkGuides: boolean;
  medicalResources: boolean;
  examPrep: boolean;
  schoolDatabase: boolean;
};

type PremiumContextType = {
  premiumAccess: PremiumContent;
  unlockContent: () => Promise<void>;
  unlockAll: () => Promise<void>;
};

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export function PremiumProvider({ children }: { children: ReactNode }) {
  const { user, refreshUser, accessToken } = useAuth();

  const isPremium = !!user?.isPremium;

  const premiumAccess: PremiumContent = {
    eligibilityPlanner: isPremium,
    paperworkGuides: isPremium,
    medicalResources: isPremium,
    examPrep: isPremium,
    schoolDatabase: isPremium,
  };

  const unlockContent = async () => {
    if (!user?.id || !accessToken) return;
    if (user.isPremium) return;

    try {
      await updatePremiumStatus(accessToken, user.id, true);
      await refreshUser();
    } catch (error) {
      console.error('Failed to unlock premium content:', error);
      throw error;
    }
  };

  const unlockAll = async () => {
    if (!user?.id || !accessToken) return;
    if (user.isPremium) return;

    try {
      await updatePremiumStatus(accessToken, user.id, true);
      await refreshUser();
    } catch (error) {
      console.error('Failed to unlock all premium content:', error);
      throw error;
    }
  };

  return <PremiumContext.Provider value={{ premiumAccess, unlockContent, unlockAll }}>{children}</PremiumContext.Provider>;
}

export function usePremium() {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
}
