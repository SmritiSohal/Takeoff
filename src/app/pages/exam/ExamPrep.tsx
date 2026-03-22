import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import LockedCard from '../../components/LockedCard';
import UnlockModal from '../../components/UnlockModal';
import { usePremium } from '../../contexts/PremiumContext';
import { BookOpen, Download, Navigation, Cloud, Scale, Cog, ArrowRight } from 'lucide-react';

export default function ExamPrep() {
  const navigate = useNavigate();
  const { premiumAccess } = usePremium();
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  
  const subjects = [
    {
      name: "Air Navigation",
      icon: Navigation,
      color: "bg-blue-50",
      iconBg: "bg-[#4094f4]",
      description: "Chart reading, flight planning, dead reckoning, radio navigation, and GPS systems"
    },
    {
      name: "Meteorology",
      icon: Cloud,
      color: "bg-sky-50",
      iconBg: "bg-sky-500",
      description: "Weather patterns, cloud types, atmospheric conditions, and aviation weather reports"
    },
    {
      name: "Air Regulation",
      icon: Scale,
      color: "bg-purple-50",
      iconBg: "bg-purple-500",
      description: "DGCA regulations, ICAO standards, airspace classification, and aviation law"
    },
    {
      name: "Technical General",
      icon: Cog,
      color: "bg-amber-50",
      iconBg: "bg-amber-500",
      description: "Aircraft systems, engines, instruments, aerodynamics, and principles of flight"
    }
  ];

  const freeBooks = [
    {
      title: "Air Navigation - Fundamentals",
      author: "DGCA Study Material",
      size: "12.5 MB"
    },
    {
      title: "Meteorology Basics for Pilots",
      author: "Aviation Press",
      size: "8.3 MB"
    },
    {
      title: "DGCA CAR (Civil Aviation Requirements)",
      author: "Official DGCA Publication",
      size: "15.7 MB"
    },
    {
      title: "Principles of Flight",
      author: "Oxford Aviation Academy",
      size: "10.2 MB"
    }
  ];

  return (
    <ModuleLayout
      title="Exam Prep Toolkit"
      subtitle="Ace Your DGCA Exams"
    >
      <div className="space-y-8">
        {/* Intro */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <p className="text-[#626262] font-['Inter',sans-serif] text-center max-w-3xl mx-auto leading-[28px]">
            Conquer the ground before you conquer the skies. This module is your central hub for all DGCA
            exam preparation. We provide a detailed breakdown of the syllabus for each subject, a curated
            library of recommended books and downloadable resources, and a directory of trusted ground
            classes across India to help you find the right coaching.
          </p>
        </div>

        {/* Section 1: Subject Cards */}
        <div>
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white text-center mb-6">
            DGCA Theory Subjects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[30px] p-8 hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className={`${subject.iconBg} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                    {subject.name}
                  </h3>
                  <p className="text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                    {subject.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-[#4094f4] p-6 rounded-r-xl">
            <p className="text-[#626262] font-['Inter',sans-serif]">
              <span className="font-semibold text-black">Note:</span> RTR (Restricted Radio Telephony) is also required
              separately. Each exam has 100 MCQs. You need 70% to pass. Exams are
              computer-based at DGCA regional offices.
            </p>
          </div>
        </div>

        {/* Section 2: Free Books */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <BookOpen className="w-8 h-8 text-[#4094f4]" />
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              Free Study Resources
            </h2>
          </div>
          <p className="text-[#626262] font-['Inter',sans-serif] text-center mb-8">
            Download these free study materials to get started with your preparation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {freeBooks.map((book, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-5 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-[#4094f4] rounded-xl w-12 h-14 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-black mb-1">
                      {book.title}
                    </h3>
                    <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                      {book.author}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF  {book.size}
                    </p>
                  </div>
                </div>
                <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors shrink-0 ml-4">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Section */}
        {premiumAccess.examPrep ? (
          <div className="bg-white rounded-[30px] p-8 text-center">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
              ✨ Premium Access Unlocked
            </h2>
            <p className="text-[#626262] font-['Inter',sans-serif] mb-6">
              You now have access to Complete Study Material, Question Banks, Cheat Sheets, and Mock Tests
            </p>
            <button
              onClick={() => navigate('/exam-prep/resources')}
              className="bg-[#4094f4] text-white px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              Open Exam Prep Resources
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="bg-white/10 rounded-[30px] p-8">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white text-center mb-8">
              Unlock Complete Exam Preparation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LockedCard
                title="Full Study Material"
                description="Complete notes, video lectures, and comprehensive guides for all 5 subjects from top aviation academies"
                ctaText="Unlock Full Material"
                onClick={() => setShowUnlockModal(true)}
              />
              <LockedCard
                title="Question Banks"
                description="1000+ practice questions with detailed explanations based on actual DGCA exam patterns"
                ctaText="Unlock Questions"
                onClick={() => setShowUnlockModal(true)}
              />
              <LockedCard
                title="Subject-wise Cheat Sheets"
                description="Quick revision notes, formulas, diagrams, and memory tricks for last-minute preparation"
                ctaText="Unlock Cheat Sheets"
                onClick={() => setShowUnlockModal(true)}
              />
              <LockedCard
                title="Mock Tests"
                description="Full-length computer-based practice tests with instant results and performance analytics"
                ctaText="Unlock Mock Tests"
                onClick={() => setShowUnlockModal(true)}
              />
            </div>
          </div>
        )}
      </div>

      <UnlockModal
        isOpen={showUnlockModal}
        onClose={() => setShowUnlockModal(false)}
        onUnlockSuccess={() => navigate('/exam-prep/resources')}
        contentType="examPrep"
        title="Unlock Exam Preparation Resources"
        features={[
          'Complete study material with video lectures for all subjects',
          '1000+ practice questions with explanations',
          'Subject-wise cheat sheets and quick revision notes',
          'Computer-based mock tests with instant results'
        ]}
      />
    </ModuleLayout>
  );
}