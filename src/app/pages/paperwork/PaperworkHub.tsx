import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import LockedCard from '../../components/LockedCard';
import UnlockModal from '../../components/UnlockModal';
import { usePremium } from '../../contexts/PremiumContext';
import { FileText, CheckSquare, ArrowRight } from 'lucide-react';

export default function PaperworkHub() {
  const navigate = useNavigate();
  const { premiumAccess } = usePremium();
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  
  const requiredDocuments = [
    "10th Marksheet (certified copy)",
    "12th Marksheet (certified copy)",
    "Valid Passport",
    "Passport-size photographs (DGCA spec)",
    "Birth Certificate or Age Proof",
    "Address Proof (Aadhar/Voter ID/DL)"
  ];

  const lockedGuides = [
    {
      title: "eGCA Portal Walkthrough",
      description: "Step-by-step screen-by-screen guide to navigate the DGCA portal without errors"
    },
    {
      title: "Board Verification Guide",
      description: "How to get your educational certificates verified by the education board"
    },
    {
      title: "Photo & Signature Formatting",
      description: "Exact specifications, file sizes, and formatting requirements for all documents"
    },
    {
      title: "Error Troubleshooting",
      description: "Common errors on eGCA portal and how to resolve them quickly"
    }
  ];

  return (
    <ModuleLayout
      title="DGCA Paperwork & Computer Number"
      subtitle="Cut Through the Red Tape"
    >
      <div className="space-y-8">
        {/* Section 1: What is Computer Number */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="bg-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center shrink-0">
              <FileText className="w-8 h-8 text-[#4094f4]" />
            </div>
            <div>
              <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
                What is a Computer Number?
              </h2>
              <div className="space-y-4 text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                <p>
                  Your <span className="font-semibold text-black">Computer Number</span> is your unique identification
                  number issued by the Directorate General of Civil Aviation (DGCA). This is the first critical
                  step in your pilot training journey.
                </p>
                <p>
                  Think of it as your "DGCA Student ID" — you'll need this number to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Register for DGCA ground exams</li>
                  <li>Apply for your medical examination</li>
                  <li>Enroll in a flying school</li>
                  <li>Track your entire training progress</li>
                  <li>Eventually apply for your CPL license</li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-[#4094f4] p-4 rounded-r-xl">
                  <p>
                    <span className="font-semibold text-black">Important:</span> You cannot begin your official pilot training
                    without obtaining your Computer Number first. The process involves registering on the eGCA
                    (e-Governance for Civil Aviation) portal and submitting verified documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Required Documents Checklist */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <div className="bg-green-50 rounded-2xl w-16 h-16 flex items-center justify-center shrink-0">
              <CheckSquare className="w-8 h-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-3">
                Required Documents Checklist
              </h2>
              <p className="text-[#626262] font-['Inter',sans-serif]">
                Make sure you have all these documents ready before starting your Computer Number application:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocuments.map((doc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 p-5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-['Inter',sans-serif] font-medium text-black">
                  {doc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
            <p className="text-[#626262] font-['Inter',sans-serif]">
              <span className="font-semibold text-black">Pro Tip:</span> Get multiple certified copies of your educational
              certificates. You'll need them for medical exams, flying school applications, and various DGCA processes.
            </p>
          </div>
        </div>

        {/* Locked Section */}
        {premiumAccess.paperworkGuides ? (
          <div className="bg-white rounded-[30px] p-8 text-center">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
              ✨ Premium Access Unlocked
            </h2>
            <p className="text-[#626262] font-['Inter',sans-serif] mb-6">
              You now have access to all eGCA Portal Guides and Documentation Resources
            </p>
            <button
              onClick={() => navigate('/paperwork/egca-guides')}
              className="bg-[#4094f4] text-white px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              Open eGCA Guides
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="bg-white/10 rounded-[30px] p-8">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white text-center mb-8">
              Unlock Complete eGCA Portal Guides
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lockedGuides.map((guide, index) => (
                <LockedCard
                  key={index}
                  title={guide.title}
                  description={guide.description}
                  ctaText="Unlock Full Guide"
                  onClick={() => setShowUnlockModal(true)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <UnlockModal
        isOpen={showUnlockModal}
        onClose={() => {
          setShowUnlockModal(false);
          if (premiumAccess.paperworkGuides) {
            navigate('/paperwork/egca-guides');
          }
        }}
        contentType="paperworkGuides"
        title="Unlock eGCA Portal Guides"
        features={[
          'Complete step-by-step portal walkthrough with screenshots',
          'Photo & signature formatting specifications',
          'Board verification process guide',
          'Error troubleshooting and solutions'
        ]}
      />
    </ModuleLayout>
  );
}