import { useState } from 'react';
import { X, Check, Sparkles } from 'lucide-react';
import { usePremium } from '../contexts/PremiumContext';
import { useAuth } from '../contexts/AuthContext';

type UnlockModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUnlockSuccess?: () => void;
  contentType: 'eligibilityPlanner' | 'paperworkGuides' | 'medicalResources' | 'examPrep' | 'schoolDatabase';
  title: string;
  features: string[];
};

export default function UnlockModal({ isOpen, onClose, onUnlockSuccess, title }: UnlockModalProps) {
  const { unlockContent } = usePremium();
  const { accessToken, user } = useAuth();
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const allPremiumFeatures = [
    '📊 Financial & Timeline Planner with cost breakdowns',
    '📋 Complete eGCA portal walkthrough & document guides',
    '🏥 DGCA-approved medical examiner directory',
    '📚 1200+ exam questions & downloadable study materials',
    '🏫 Flying school database with 50+ verified schools',
    '💰 Financing options and scholarship information',
    '📖 Subject-wise books and question banks (regularly updated)',
    '✈️ India vs Abroad training comparison guides',
  ];

  const completeUnlock = async () => {
    setIsUnlocking(false);
    setIsUnlocked(true);
    await unlockContent();

    setTimeout(() => {
      setIsUnlocked(false);
      onClose();
      if (onUnlockSuccess) {
        onUnlockSuccess();
      }
    }, 1200);
  };

  const handleUnlock = async () => {
    if (!accessToken || !user) {
      setError('Please sign in to unlock premium features.');
      return;
    }

    setError(null);
    setIsUnlocking(true);

    try {
      await completeUnlock();
    } catch (unlockError) {
      setError(unlockError instanceof Error ? unlockError.message : 'Unable to unlock premium features.');
      setIsUnlocking(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[30px] max-w-lg w-full p-8 md:p-10 relative animate-in fade-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
          disabled={isUnlocking}
        >
          <X className="w-6 h-6" />
        </button>

        {!isUnlocked ? (
          <>
            <div className="text-center mb-8">
              <div className="bg-gradient-to-br from-[#4094f4] to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-2">{title}</h2>
              <p className="text-[#626262] font-['Inter',sans-serif]">Get instant access to premium content</p>
            </div>

            <div className="space-y-3 mb-8">
              <h3 className="font-['Inter',sans-serif] font-semibold text-black mb-4">🌟 All Premium Features You'll Unlock:</h3>
              {allPremiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-[#626262] font-['Inter',sans-serif] text-sm">{feature}</p>
                </div>
              ))}
            </div>

            {error && <p className="mb-4 text-sm text-red-600 text-center">{error}</p>}

            <button
              onClick={handleUnlock}
              disabled={isUnlocking}
              className="w-full bg-black text-white py-4 rounded-full font-['Inter',sans-serif] font-bold text-lg hover:bg-[#4094f4] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isUnlocking ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Unlock Premium Content
                </>
              )}
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-2">Unlocked Successfully!</h3>
          </div>
        )}
      </div>
    </div>
  );
}
