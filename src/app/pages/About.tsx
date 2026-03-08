import { useNavigate } from 'react-router';
import { ArrowLeft, Heart, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#545454] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="bg-white rounded-[30px] p-8 md:p-12 mb-8 text-center">
          <h1 className="font-['Inter',sans-serif] font-extrabold text-5xl md:text-6xl text-black mb-4">
            About <span className="text-[#4094f4]">TakeOff</span>
          </h1>
          <p className="font-['Inter',sans-serif] text-xl text-[#626262] max-w-3xl mx-auto leading-relaxed">
            Your trusted co-pilot on the ground, simplifying the complex journey to the cockpit
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-[30px] p-8 md:p-12 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center">
              <Target className="w-8 h-8 text-[#4094f4]" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black">
              Our Mission
            </h2>
          </div>
          <p className="text-[#626262] font-['Inter',sans-serif] text-lg leading-relaxed mb-4">
            The journey to becoming a commercial pilot in India is filled with obstacles—confusing paperwork, 
            overwhelming regulations, expensive decisions, and a severe lack of clear, reliable information. 
            For most aspiring pilots, this complexity becomes a barrier that delays or even derails their dreams.
          </p>
          <p className="text-[#626262] font-['Inter',sans-serif] text-lg leading-relaxed">
            <span className="font-bold text-black">TakeOff</span> exists to change that. We break down the entire pilot 
            training process into clear, manageable steps, providing you with verified information, practical tools, and 
            expert guidance at every stage—from eligibility checks to choosing the right flying school.
          </p>
        </div>

        {/* Why We Created TakeOff */}
        <div className="bg-gradient-to-br from-[#4094f4] to-blue-600 rounded-[30px] p-8 md:p-12 mb-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl">
              Why We Created TakeOff
            </h2>
          </div>
          <p className="font-['Inter',sans-serif] text-lg leading-relaxed mb-4">
            TakeOff was born from firsthand experience. Our founder was an aspiring pilot herself who struggled 
            through the maze of confusing information, conflicting advice, and hidden costs that plague the aviation 
            training industry in India.
          </p>
          <p className="font-['Inter',sans-serif] text-lg leading-relaxed mb-4">
            She watched her peers make costly mistakes—choosing the wrong schools, missing critical deadlines, 
            and spending thousands more than necessary—all because there was no single, reliable source of 
            information to guide them.
          </p>
          <p className="font-['Inter',sans-serif] text-lg leading-relaxed">
            After experiencing these challenges firsthand and seeing countless others struggle with the same issues, 
            she decided to create the solution she wished had existed: a comprehensive, trustworthy portal that 
            demystifies the entire pilot training journey and empowers aspiring pilots with the knowledge they need 
            to succeed.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-[30px] p-8 md:p-12 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-50 rounded-2xl w-16 h-16 flex items-center justify-center">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black">
              How TakeOff Helps You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                ✈️ Clear Roadmaps
              </h3>
              <p className="text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                Step-by-step guidance from eligibility checks to license issuance, so you always know what comes next
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                📋 Simplified Paperwork
              </h3>
              <p className="text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                Easy-to-follow guides for DGCA documentation, Computer Number, and all regulatory requirements
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                🏥 Medical Guidance
              </h3>
              <p className="text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                Complete information on Class 1 and Class 2 medicals with DGCA-approved doctor directories
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                📚 Exam Preparation
              </h3>
              <p className="text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                Comprehensive study resources, book recommendations, and downloadable materials for all DGCA subjects
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                🏫 School Intelligence
              </h3>
              <p className="text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                Detailed database of flying schools in India and abroad with costs, reviews, and insider information
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                💰 Financial Planning
              </h3>
              <p className="text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                Transparent cost breakdowns, financing options, and realistic budgeting tools
              </p>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-50 rounded-2xl w-16 h-16 flex items-center justify-center">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black">
              Built By Pilots, For Pilots
            </h2>
          </div>
          <p className="text-[#626262] font-['Inter',sans-serif] text-lg leading-relaxed mb-4">
            Every piece of information on TakeOff has been carefully researched, verified, and tested by people 
            who have actually been through the process. We understand your concerns because we've faced them 
            ourselves.
          </p>
          <p className="text-[#626262] font-['Inter',sans-serif] text-lg leading-relaxed mb-6">
            Whether you're a 12th-grader trying to understand if you're eligible, a college student planning your 
            timeline and budget, or someone making the career switch to aviation—TakeOff is here to guide you 
            every step of the way.
          </p>

          <div className="bg-gradient-to-r from-[#4094f4] to-blue-600 rounded-2xl p-8 text-center">
            <p className="font-['Inter',sans-serif] font-bold text-2xl text-white mb-4">
              Ready to Start Your Journey?
            </p>
            <button
              onClick={() => navigate('/auth')}
              className="bg-white text-[#4094f4] px-10 py-4 rounded-full font-['Inter',sans-serif] font-bold text-lg hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
