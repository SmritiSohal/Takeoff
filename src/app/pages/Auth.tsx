import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Plane, Lock, Mail, User, CheckCircle2, BookOpen, FileText, Stethoscope, GraduationCap, Building2 } from 'lucide-react';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        await signUp(name, email, password);
      } else {
        await signIn(email, password);
      }
      navigate('/dashboard');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Authentication failed. Please try again.';
      setError(message);
      console.error('Authentication error:', error);
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Eligibility Checker',
      description: 'Interactive quiz to assess your aviation career readiness',
    },
    {
      icon: BookOpen,
      title: 'Personalized Roadmap',
      description: 'Step-by-step guidance tailored to your goals',
    },
    {
      icon: FileText,
      title: 'Document Guides',
      description: 'Comprehensive paperwork assistance and eGCA support',
    },
    {
      icon: Stethoscope,
      title: 'Medical Resources',
      description: 'Class 1 & Class 2 medical exam preparation',
    },
    {
      icon: GraduationCap,
      title: 'Exam Prep Tools',
      description: 'Study materials for all DGCA subjects',
    },
    {
      icon: Building2,
      title: 'School Database',
      description: 'Compare flying schools in India and abroad',
    },
  ];

  return (
    <div className="min-h-screen bg-[#545454] font-['Inter',sans-serif] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl flex gap-8 items-center">
        {/* Left side - Benefits */}
        <div className="hidden lg:flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="w-12 h-12 text-[#4094f4]" />
            <h1 className="text-4xl font-bold text-white">TakeOff</h1>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Your Complete Aviation Resource Portal
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Join thousands of aspiring pilots on their journey to the skies
          </p>

          <div className="grid gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/5 rounded-[20px] p-4 backdrop-blur-sm"
                >
                  <div className="bg-[#4094f4] rounded-full p-2 mt-1">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 bg-white/10 rounded-[20px] p-6 backdrop-blur-sm border border-[#4094f4]/30">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-[#4094f4]" />
              <h3 className="text-white font-semibold text-lg">
                Premium Features Available
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Unlock advanced tools including Financial Planning Calculator, Complete eGCA Guide Package, Medical Test Prep Resources, Full Exam Question Banks, and Detailed School Comparison Database.
            </p>
          </div>
        </div>

        {/* Right side - Auth Form */}
        <div className="flex-1 max-w-md w-full">
          <div className="bg-white rounded-[30px] p-8 shadow-2xl">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-[#4094f4]" />
              <h1 className="text-2xl font-bold text-black">TakeOff</h1>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-600">
                {isSignUp
                  ? 'Start your aviation journey today'
                  : 'Sign in to continue your journey'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#4094f4] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required={isSignUp}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#4094f4] focus:outline-none transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-[#4094f4] focus:outline-none transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded accent-[#4094f4]" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-[#4094f4] hover:underline font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {error && <p className="text-sm text-red-600 text-center">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? 'Please wait...'
                  : isSignUp
                  ? 'Create Account'
                  : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setName('');
                    setEmail('');
                    setPassword('');
                  }}
                  className="text-[#4094f4] font-semibold hover:underline"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>

            {/* Mobile Benefits Summary */}
            <div className="lg:hidden mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Get access to eligibility checker, roadmap, document guides, medical resources, exam prep, and school database
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
