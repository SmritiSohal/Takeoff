import { useNavigate } from 'react-router';
import { useState } from 'react';
import ModuleLayout from '../../components/ModuleLayout';
import LockedCard from '../../components/LockedCard';
import UnlockModal from '../../components/UnlockModal';
import { usePremium } from '../../contexts/PremiumContext';
import { CheckCircle, Map, ArrowRight } from 'lucide-react';

export default function EligibilityLanding() {
  const navigate = useNavigate();
  const { premiumAccess } = usePremium();
  const [showUnlockModal, setShowUnlockModal] = useState(false);

  const roadmapSteps = [
    { id: 1, title: "Medical Examination", description: "Class 2 medical clearance" },
    { id: 2, title: "Computer Number", description: "DGCA registration & unique ID" },
    { id: 3, title: "DGCA Ground Exams", description: "5 theory subjects" },
    { id: 4, title: "Flying Training", description: "200+ hours flight time" },
    { id: 5, title: "License Issue", description: "CPL certificate" }
  ];

  return (
    <ModuleLayout
      title="Eligibility & Roadmap"
      subtitle="First Steps First"
    >
      <div className="space-y-8">
        {/* Intro Text */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <p className="text-[#626262] font-['Inter',sans-serif] text-center max-w-3xl mx-auto leading-[28px]">
            Are you eligible? What's the first step? Our interactive tool is the perfect place to start.
            Answer a few simple questions about your age and academic background, and we'll instantly
            generate a personalized, step-by-step roadmap that shows you the entire journey from
            where you are today to earning your Commercial Pilot License (CPL).
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Single Card: Eligibility Checker & Roadmap */}
          <div className="bg-white rounded-[30px] p-8 md:p-10 hover:shadow-xl transition-shadow">
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[#4094f4]" />
              </div>
              <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black mb-4">
                Eligibility Checker & CPL Roadmap
              </h2>
              <p className="text-[#626262] font-['Inter',sans-serif] mb-6 leading-relaxed">
                Answer a few quick questions about your age and academic background.
                We'll instantly tell you if you meet the basic requirements to start your pilot training
                and generate a personalized 5-step roadmap to your CPL.
              </p>

              {/* Steps Preview */}
              <div className="space-y-3 mb-8">
                {roadmapSteps.map((step) => (
                  <div key={step.id} className="flex items-start gap-3">
                    <div className="bg-[#4094f4] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-['Inter',sans-serif] font-bold text-sm">
                      {step.id}
                    </div>
                    <div>
                      <p className="font-['Inter',sans-serif] font-semibold text-black">
                        {step.title}
                      </p>
                      <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('/eligibility/quiz')}
                className="bg-black text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-colors font-['Inter',sans-serif] font-bold text-lg flex items-center justify-center gap-2"
              >
                Start Eligibility Check
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Locked Card or Access to Premium */}
        {premiumAccess.eligibilityPlanner ? (
          <div className="bg-white rounded-[30px] p-8 text-center">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
              ✨ Premium Access Unlocked
            </h2>
            <p className="text-[#626262] font-['Inter',sans-serif] mb-6">
              You now have access to the complete Financial & Timeline Planner
            </p>
            <button
              onClick={() => navigate('/eligibility/financial-planner')}
              className="bg-[#4094f4] text-white px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              Open Financial Planner
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="bg-white/10 rounded-[30px] p-8">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white text-center mb-6">
              Premium Planning Tools
            </h2>
            <LockedCard
              title="Detailed Financial & Timeline Planner"
              description="Get access to month-by-month planning, cost breakdowns, financing options, and estimated timelines for each training path."
              ctaText="Unlock Detailed Planner"
              onClick={() => setShowUnlockModal(true)}
            />
          </div>
        )}
      </div>

      <UnlockModal
        isOpen={showUnlockModal}
        onClose={() => setShowUnlockModal(false)}
        onUnlockSuccess={() => navigate('/eligibility/financial-planner')}
        contentType="eligibilityPlanner"
        title="Unlock Financial Planner"
        features={[
          'Complete cost breakdown for India and Abroad training',
          'Month-by-month timeline with milestones',
          'Financing options with loan details',
          'Downloadable PDF financial plan'
        ]}
      />
    </ModuleLayout>
  );
}