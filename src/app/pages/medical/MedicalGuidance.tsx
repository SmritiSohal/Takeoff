import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import LockedCard from '../../components/LockedCard';
import UnlockModal from '../../components/UnlockModal';
import { usePremium } from '../../contexts/PremiumContext';
import { Heart, Activity, Eye, Stethoscope, Ear, TestTube, ArrowRight } from 'lucide-react';

export default function MedicalGuidance() {
  const navigate = useNavigate();
  const { premiumAccess } = usePremium();
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  
  const tests = [
    { name: "ECG (Electrocardiogram)", icon: Activity, description: "Tests heart function and rhythm" },
    { name: "Audiometry", icon: Ear, description: "Hearing test for both ears" },
    { name: "Blood Test", icon: TestTube, description: "Complete blood count and screening" },
    { name: "Vision Test", icon: Eye, description: "Visual acuity, color vision, depth perception" },
    { name: "Chest X-Ray", icon: Stethoscope, description: "Lung and chest cavity examination" },
    { name: "Physical Exam", icon: Heart, description: "Complete physical assessment" }
  ];

  return (
    <ModuleLayout
      title="Medical Guidance"
      subtitle="Navigate Your Medicals with Confidence"
    >
      <div className="space-y-8">
        {/* Intro */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <p className="text-[#626262] font-['Inter',sans-serif] text-center max-w-3xl mx-auto leading-[28px]">
            Medical fitness is non-negotiable. We provide a complete guide to both the Class 2 and Class 1
            medical examinations. You'll get access to comprehensive details about the tests involved and
            documents you'll need, so you can approach your medicals fully prepared.
          </p>
        </div>

        {/* Section 1: Class 2 vs Class 1 */}
        <div>
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white text-center mb-6">
            Understanding Medical Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Class 2 Medical */}
            <div className="bg-white rounded-[30px] p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#4094f4]" />
              </div>
              <h3 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
                Class 2 Medical
              </h3>
              <div className="space-y-3 text-[#626262] font-['Inter',sans-serif]">
                <p><span className="font-semibold text-black">For:</span> Student Pilot License (SPL)</p>
                <p><span className="font-semibold text-black">When:</span> Before starting flying training</p>
                <p><span className="font-semibold text-black">Where:</span> Any DGCA-approved doctor</p>
                <p><span className="font-semibold text-black">Validity:</span> 60 months (under 40 years)</p>
                <p><span className="font-semibold text-black">Cost:</span> Rs. 3,000 - 8,000 approx.</p>
                <div className="bg-blue-50 p-4 rounded-xl mt-4">
                  <p className="text-sm">
                    Your first medical. Less stringent than Class 1 and can be done at
                    authorized private clinics across India.
                  </p>
                </div>
              </div>
            </div>

            {/* Class 1 Medical */}
            <div className="bg-white rounded-[30px] p-8 hover:shadow-xl transition-shadow border-2 border-[#4094f4]">
              <div className="bg-green-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
                Class 1 Medical
              </h3>
              <div className="space-y-3 text-[#626262] font-['Inter',sans-serif]">
                <p><span className="font-semibold text-black">For:</span> Commercial Pilot License (CPL)</p>
                <p><span className="font-semibold text-black">When:</span> Before CPL license issue</p>
                <p><span className="font-semibold text-black">Where:</span> Only AFCME or IAM centers</p>
                <p><span className="font-semibold text-black">Validity:</span> 12 months (1 year)</p>
                <p><span className="font-semibold text-black">Cost:</span> Rs. 15,000 - 25,000 approx.</p>
                <div className="bg-green-50 p-4 rounded-xl mt-4">
                  <p className="text-sm">
                    Comprehensive medical for professional pilots. More thorough examination
                    at designated aviation medical centers only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Tests Overview */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black text-center mb-8">
            Medical Tests You'll Undergo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {tests.map((test, index) => {
              const Icon = test.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-[#4094f4] rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-['Inter',sans-serif] font-semibold text-black mb-1">
                      {test.name}
                    </h3>
                    <p className="text-[#626262] font-['Inter',sans-serif] text-sm">
                      {test.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
            <p className="text-[#626262] font-['Inter',sans-serif]">
              <span className="font-semibold text-black">Important:</span> Maintain good health habits.
              Avoid alcohol 24 hours before, get adequate sleep, and carry all required documents.
            </p>
          </div>
        </div>

        {/* Locked Section */}
        {premiumAccess.medicalResources ? (
          <div className="bg-white rounded-[30px] p-8 text-center">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
              ✨ Premium Access Unlocked
            </h2>
            <p className="text-[#626262] font-['Inter',sans-serif] mb-6">
              You now have access to all Medical Resources including Doctor Directory, Booking Guide, and NOC Process
            </p>
            <button
              onClick={() => navigate('/medical/resources')}
              className="bg-[#4094f4] text-white px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              Open Medical Resources
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="bg-white/10 rounded-[30px] p-8">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white text-center mb-8">
              Access Exclusive Medical Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LockedCard
                title="DGCA Approved Doctor Directory"
                description="Complete list of Class 2 doctors and Class 1 centers (AFCME/IAM) across India with contact details"
                ctaText="Unlock Directory"
                onClick={() => setShowUnlockModal(true)}
              />
              <LockedCard
                title="Class 1 Booking Guide"
                description="Step-by-step process to book appointments at IAM Delhi/Bangalore and AFCME, including wait times"
                ctaText="Unlock Guide"
                onClick={() => setShowUnlockModal(true)}
              />
              <LockedCard
                title="NOC Process Guide"
                description="Complete guide on getting No Objection Certificate if you had previous medical rejections"
                ctaText="Unlock Process"
                onClick={() => setShowUnlockModal(true)}
              />
            </div>
          </div>
        )}
      </div>

      <UnlockModal
        isOpen={showUnlockModal}
        onClose={() => {
          setShowUnlockModal(false);
          if (premiumAccess.medicalResources) {
            navigate('/medical/resources');
          }
        }}
        contentType="medicalResources"
        title="Unlock Medical Resources"
        features={[
          'Complete directory of DGCA approved doctors across India',
          'Class 1 medical booking guide for IAM & AFCME',
          'NOC process guide for medical rejections',
          'Direct contact information for all centers'
        ]}
      />
    </ModuleLayout>
  );
}