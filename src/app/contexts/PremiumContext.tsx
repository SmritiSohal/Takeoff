import { createContext, useContext, useState, ReactNode } from 'react';

type PremiumContent = {
  eligibilityPlanner: boolean;
  paperworkGuides: boolean;
  medicalResources: boolean;
  examPrep: boolean;
  schoolDatabase: boolean;
};

type PremiumContextType = {
  premiumAccess: PremiumContent;
  unlockContent: (content: keyof PremiumContent) => void;
  unlockAll: () => void;
};

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export function PremiumProvider({ children }: { children: ReactNode }) {
  const [premiumAccess, setPremiumAccess] = useState<PremiumContent>({
    eligibilityPlanner: false,
    paperworkGuides: false,
    medicalResources: false,
    examPrep: false,
    schoolDatabase: false,
  });

  const unlockContent = (content: keyof PremiumContent) => {
    setPremiumAccess((prev) => ({ ...prev, [content]: true }));
  };

  const unlockAll = () => {
    setPremiumAccess({
      eligibilityPlanner: true,
      paperworkGuides: true,
      medicalResources: true,
      examPrep: true,
      schoolDatabase: true,
    });
  };

  return (
    <PremiumContext.Provider value={{ premiumAccess, unlockContent, unlockAll }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
}
