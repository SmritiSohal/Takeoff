import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import LockedCard from '../../components/LockedCard';
import UnlockModal from '../../components/UnlockModal';
import { usePremium } from '../../contexts/PremiumContext';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface EligibilityData {
  age: string;
  stream: string;
  physicsPercent: string;
  mathsPercent: string;
}

export default function EligibilityResult() {
  const navigate = useNavigate();
  const { premiumAccess } = usePremium();
  const [isEligible, setIsEligible] = useState(true);
  const [eligibilityData, setEligibilityData] = useState<EligibilityData | null>(null);
  const [showUnlockModal, setShowUnlockModal] = useState(false);

  const handlePlannerClick = () => {
    if (premiumAccess.eligibilityPlanner) {
      navigate('/eligibility/financial-planner');
    } else {
      setShowUnlockModal(true);
    }
  };

  useEffect(() => {
    const data = sessionStorage.getItem('eligibilityData');
    if (!data) {
      navigate('/eligibility/quiz');
      return;
    }

    const parsedData: EligibilityData = JSON.parse(data);
    setEligibilityData(parsedData);

    // DGCA CPL Eligibility Rules:
    // 1. Age: Minimum 17 years
    // 2. Education: Pass in 10+2 with Physics and Maths (minimum 50% in each)
    const age = parseInt(parsedData.age);
    
    let eligible = true;
    
    // Check age
    if (age < 17) {
      eligible = false;
    }
    
    // Check stream and marks
    if (parsedData.stream === 'pcm') {
      const physicsPercent = parseFloat(parsedData.physicsPercent);
      const mathsPercent = parseFloat(parsedData.mathsPercent);
      
      if (physicsPercent < 50 || mathsPercent < 50) {
        eligible = false;
      }
    } else {
      // If not PCM stream, not eligible (need Physics and Maths)
      eligible = false;
    }

    setIsEligible(eligible);
  }, [navigate]);

  const roadmapSteps = [
    {
      id: 1,
      title: "Medical Examination",
      description: "Get Class 2 medical certificate from DGCA-approved doctor",
      timeline: "Week 1-2"
    },
    {
      id: 2,
      title: "Computer Number",
      description: "Register on eGCA portal and obtain unique Computer Number",
      timeline: "Week 2-3"
    },
    {
      id: 3,
      title: "DGCA Ground Exams",
      description: "Prepare and clear 5 theory subjects (Air Navigation, Meteorology, etc.)",
      timeline: "Month 2-6"
    },
    {
      id: 4,
      title: "Flying Training",
      description: "Complete 200+ hours of flight training at approved flying school",
      timeline: "Month 7-18"
    },
    {
      id: 5,
      title: "License Issue",
      description: "Submit documents and receive CPL certificate from DGCA",
      timeline: "Month 19-20"
    }
  ];

  if (!eligibilityData) {
    return null;
  }

  return (
    <ModuleLayout
      title="Your Eligibility Result"
      subtitle="First Steps First"
    >
      <div className="space-y-8">
        {/* Result Card */}
        <div className={`rounded-[30px] p-8 md:p-12 ${isEligible ? 'bg-green-50 border-2 border-green-200' : 'bg-orange-50 border-2 border-orange-200'}`}>
          <div className="flex flex-col items-center text-center gap-6">
            {isEligible ? (
              <>
                <div className="bg-green-100 rounded-full p-4">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <div>
                  <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black mb-3">
                    Congratulations! You're Eligible
                  </h2>
                  <p className="text-[#626262] font-['Inter',sans-serif] max-w-2xl leading-relaxed">
                    Based on your age ({eligibilityData.age} years) and academic qualifications,
                    you meet the basic eligibility criteria to begin your pilot training journey.
                    See your personalized roadmap below to understand the next steps.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-orange-100 rounded-full p-4">
                  <XCircle className="w-16 h-16 text-orange-600" />
                </div>
                <div>
                  <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black mb-3">
                    Not Eligible Yet
                  </h2>
                  <p className="text-[#626262] font-['Inter',sans-serif] max-w-2xl mb-4 leading-relaxed">
                    {parseInt(eligibilityData.age) < 17
                      ? "You need to be at least 17 years old to start CPL training."
                      : "For CPL training, you need Physics and Maths at 10+2 level with at least 50% marks in each."}
                  </p>
                  <div className="bg-white rounded-2xl p-6 mt-6 max-w-2xl mx-auto text-left">
                    <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                      NIOS Option Available
                    </h3>
                    <p className="text-[#626262] font-['Inter',sans-serif]">
                      Don't worry! If you don't have Physics and Maths at the 10+2 level, you can complete
                      these subjects through <span className="font-semibold text-black">NIOS (National Institute of Open Schooling)</span>.
                      This is a common and accepted pathway.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black mb-3">
              Your 5-Step CPL Roadmap
            </h2>
            <p className="text-[#626262] font-['Inter',sans-serif]">
              Here's the complete journey from today to your Commercial Pilot License
            </p>
          </div>

          <div className="space-y-0 max-w-3xl mx-auto">
            {roadmapSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-[#4094f4] text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0 font-['Inter',sans-serif] font-bold text-lg">
                    {step.id}
                  </div>
                  {index < roadmapSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black">
                        {step.title}
                      </h3>
                      <span className="bg-blue-50 text-[#4094f4] px-3 py-1 rounded-full text-xs font-['Inter',sans-serif] font-semibold whitespace-nowrap">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-[#626262] font-['Inter',sans-serif]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              onClick={() => navigate('/eligibility/quiz')}
              className="bg-[#4094f4] text-white px-8 py-3.5 rounded-full hover:bg-[#3380d8] transition-colors font-['Inter',sans-serif] font-medium inline-flex items-center gap-2"
            >
              Retake Quiz
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Locked / Unlocked Planner Section */}
        {premiumAccess.eligibilityPlanner ? (
          <div className="bg-white rounded-[30px] p-8 text-center">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
              ✨ Premium Access Unlocked
            </h2>
            <p className="text-[#626262] font-['Inter',sans-serif] mb-6">
              Your Financial & Timeline Planner is ready with full cost breakdowns and month-by-month planning.
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
              description="Get a month-by-month breakdown, complete cost estimates for India and abroad, financing options, scholarship information, and realistic timelines."
              ctaText="Unlock Detailed Planner"
              onClick={handlePlannerClick}
            />
          </div>
        )}
      </div>

      <UnlockModal
        isOpen={showUnlockModal}
        onClose={() => setShowUnlockModal(false)}
        onUnlockSuccess={() => navigate('/eligibility/financial-planner')}
        contentType="eligibilityPlanner"
        title="Unlock Financial & Timeline Planner"
        features={[
          'Month-by-month cost breakdown for India and abroad',
          'Financing options and scholarship information',
          'Realistic training timelines',
          'Personalised planning based on your profile',
        ]}
      />
    </ModuleLayout>
  );
}