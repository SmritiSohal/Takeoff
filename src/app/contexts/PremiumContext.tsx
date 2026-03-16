import { createContext, useContext, ReactNode } from 'react';
import { useAuth } from './AuthContext';

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
  const { user, refreshUser } = useAuth();

  const isPremium = !!user?.isPremium;

  const premiumAccess: PremiumContent = {
    eligibilityPlanner: isPremium,
    paperworkGuides: isPremium,
    medicalResources: isPremium,
    examPrep: isPremium,
    schoolDatabase: isPremium,
  };

  const unlockContent = async () => {
    await refreshUser();
  };

  const unlockAll = async () => {
    await refreshUser();
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
