import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  CheckCircle,
  FileText,
  Heart,
  BookOpen,
  Plane,
  ArrowRight,
  Map,
  LayoutDashboard,
  User,
  LogOut,
  ChevronDown,
} from 'lucide-react';

const modules = [
  {
    id: 'eligibility',
    title: 'Eligibility & Roadmap',
    subtitle: 'First Steps First',
    description:
      'Check if you meet the requirements and get a personalized roadmap to your CPL.',
    icon: CheckCircle,
    color: '#22c55e',
    bgColor: 'bg-green-50',
    href: '/eligibility',
  },
  {
    id: 'paperwork',
    title: 'Paperwork Hub',
    subtitle: 'Cut Through the Red Tape',
    description:
      'Everything about the Computer Number, eGCA portal, and required documents.',
    icon: FileText,
    color: '#4094f4',
    bgColor: 'bg-blue-50',
    href: '/paperwork',
  },
  {
    id: 'medical',
    title: 'Medical Guidance',
    subtitle: 'Navigate Your Medicals',
    description:
      'Understand Class 2 & Class 1 medicals, required tests, and approved doctors.',
    icon: Heart,
    color: '#ef4444',
    bgColor: 'bg-red-50',
    href: '/medical',
  },
  {
    id: 'exam',
    title: 'Exam Prep Toolkit',
    subtitle: 'Ace Your DGCA Exams',
    description:
      'Subject breakdowns, free books, study materials, and question banks.',
    icon: BookOpen,
    color: '#a855f7',
    bgColor: 'bg-purple-50',
    href: '/exam-prep',
  },
  {
    id: 'schools',
    title: 'Flying School Intelligence',
    subtitle: 'Find Your Perfect School',
    description:
      'Compare flying schools across India & abroad with verified data and costs.',
    icon: Plane,
    color: '#f59e0b',
    bgColor: 'bg-amber-50',
    href: '/flying-schools',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <span className="font-['Inter',sans-serif] font-extrabold text-2xl text-black">
              TakeOff
            </span>
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-['Inter',sans-serif] font-medium text-sm"
            >
              Home
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#4094f4] flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                {user && (
                  <span className="font-['Inter',sans-serif] font-medium text-sm text-black hidden md:block">
                    {user.name}
                  </span>
                )}
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-[15px] shadow-xl border border-gray-100 overflow-hidden z-50">
                  {user && (
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-['Inter',sans-serif] font-semibold text-sm text-black">
                        {user.name}
                      </p>
                      <p className="font-['Inter',sans-serif] text-xs text-gray-500">
                        {user.email}
                      </p>
                    </div>
                  )}
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 font-['Inter',sans-serif] font-medium transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#545454]">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1761813409441-5c157440ab98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrcGl0JTIwcGlsb3QlMjBhdmlhdGlvbiUyMGluc3RydW1lbnQlMjBwYW5lbHxlbnwxfHx8fDE3NzIxMDYwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <LayoutDashboard className="w-5 h-5 text-[#4094f4]" />
            <p className="text-[#4094f4] font-['Inter',sans-serif] font-bold text-sm uppercase tracking-[0.4px]">
              Your Co-Pilot on the Ground
            </p>
          </div>
          <h1 className="font-['Inter',sans-serif] font-bold text-4xl md:text-5xl text-white tracking-[0.4px] mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-[#ebebeb] font-['Inter',sans-serif] max-w-2xl mx-auto leading-relaxed">
            Your journey to the cockpit starts here. Explore each module below to
            navigate through the entire process of becoming a commercial pilot in
            India.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Modules', value: '5', sub: 'Complete guides' },
            { label: 'Steps', value: '5', sub: 'To your CPL' },
            { label: 'Schools', value: '50+', sub: 'In database' },
            { label: 'Resources', value: '20+', sub: 'Free downloads' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-[20px] p-6 text-center shadow-sm"
            >
              <p className="font-['Inter',sans-serif] font-bold text-3xl text-[#4094f4]">
                {stat.value}
              </p>
              <p className="font-['Inter',sans-serif] font-semibold text-black mt-1">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500 font-['Inter',sans-serif]">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Module Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => navigate(module.href)}
                className="w-full bg-white rounded-[20px] p-6 md:p-8 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg group text-left"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`${module.bgColor} rounded-2xl w-16 h-16 flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-8 h-8" style={{ color: module.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#4094f4] font-['Inter',sans-serif] font-bold text-xs uppercase tracking-[0.4px] mb-1">
                      {module.subtitle}
                    </p>
                    <h2 className="font-['Inter',sans-serif] font-bold text-xl md:text-2xl text-black mb-1">
                      {module.title}
                    </h2>
                    <p className="text-gray-500 font-['Inter',sans-serif] text-sm md:text-base">
                      {module.description}
                    </p>
                  </div>
                  <div className="shrink-0 hidden md:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full group-hover:bg-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium text-sm">
                    Explore
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 md:hidden group-hover:text-[#4094f4] transition-colors" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Recommended Path */}
        <div className="mt-12 bg-gradient-to-r from-[#4094f4] to-[#2e78d4] rounded-[30px] p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Map className="w-8 h-8" />
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl">
              Recommended Path
            </h2>
          </div>
          <p className="font-['Inter',sans-serif] mb-8 opacity-90 max-w-2xl">
            Not sure where to start? Follow this order for the smoothest journey
            to your CPL:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              'Eligibility Check',
              'Medical',
              'Computer Number',
              'DGCA Exams',
              'Flying School',
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="bg-white text-[#4094f4] rounded-full w-6 h-6 flex items-center justify-center font-['Inter',sans-serif] font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="font-['Inter',sans-serif] font-medium text-sm">
                    {step}
                  </span>
                </div>
                {i < 4 && (
                  <ArrowRight className="w-4 h-4 opacity-60 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#545454] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 font-['Inter',sans-serif] text-sm">
            TakeOff — Your Co-Pilot on the Ground
          </p>
        </div>
      </div>
    </div>
  );
}