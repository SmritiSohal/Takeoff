import { useState } from 'react';
import { X, Check, Sparkles } from 'lucide-react';
import { usePremium } from '../contexts/PremiumContext';

type UnlockModalProps = {
  isOpen: boolean;
  onClose: () => void;
  contentType: 'eligibilityPlanner' | 'paperworkGuides' | 'medicalResources' | 'examPrep' | 'schoolDatabase';
  title: string;
  features: string[];
};

export default function UnlockModal({ isOpen, onClose, contentType, title }: UnlockModalProps) {
  const { unlockContent } = usePremium();
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isOpen) return null;

  // All premium features across all modules
  const allPremiumFeatures = [
    '📊 Financial & Timeline Planner with cost breakdowns',
    '📋 Complete eGCA portal walkthrough & document guides',
    '🏥 DGCA-approved medical examiner directory',
    '📚 1200+ exam questions & downloadable study materials',
    '🏫 Flying school database with 50+ verified schools',
    '💰 Financing options and scholarship information',
    '📖 Subject-wise books and question banks (regularly updated)',
    '✈️ India vs Abroad training comparison guides'
  ];

  const handleUnlock = () => {
    setIsUnlocking(true);
    
    // Simulate unlock process
    setTimeout(() => {
      setIsUnlocking(false);
      setIsUnlocked(true);
      unlockContent(contentType);
      
      // Close modal after showing success
      setTimeout(() => {
        setIsUnlocked(false);
        onClose();
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[30px] max-w-lg w-full p-8 md:p-10 relative animate-in fade-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
          disabled={isUnlocking}
        >
          <X className="w-6 h-6" />
        </button>

        {!isUnlocked ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-br from-[#4094f4] to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-2">
                {title}
              </h2>
              <p className="text-[#626262] font-['Inter',sans-serif]">
                Get instant access to premium content
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <h3 className="font-['Inter',sans-serif] font-semibold text-black mb-4">
                🌟 All Premium Features You'll Unlock:
              </h3>
              {allPremiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-[#626262] font-['Inter',sans-serif] text-sm">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="text-center">
                <p className="text-[#626262] font-['Inter',sans-serif] text-sm mb-2">
                  One-time payment
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 line-through font-['Inter',sans-serif]">
                    ₹2,999
                  </span>
                  <span className="font-['Inter',sans-serif] font-bold text-4xl text-black">
                    ₹1,499
                  </span>
                </div>
                <p className="text-[#4094f4] font-['Inter',sans-serif] text-sm font-semibold mt-1">
                  Limited time offer - 50% off!
                </p>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="bg-blue-50 border border-[#4094f4]/30 rounded-xl p-4 mb-6">
              <p className="text-sm text-[#626262] font-['Inter',sans-serif] text-center">
                <span className="font-semibold text-[#4094f4]">Demo Mode:</span> Content will be unlocked instantly for preview purposes
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleUnlock}
              disabled={isUnlocking}
              className="w-full bg-black text-white py-4 rounded-full font-['Inter',sans-serif] font-bold text-lg hover:bg-[#4094f4] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isUnlocking ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Unlocking...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Unlock Now
                </>
              )}
            </button>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-2">
              Unlocked Successfully!
            </h3>
            <p className="text-[#626262] font-['Inter',sans-serif]">
              Redirecting to your premium content...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}