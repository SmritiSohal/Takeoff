import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  ArrowLeft,
  LayoutDashboard,
  Plane,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";

interface ModuleLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function ModuleLayout({
  children,
  title,
  subtitle,
}: ModuleLayoutProps) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-[#545454]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <span className="font-['Inter',sans-serif] font-extrabold text-2xl text-black">
                TakeOff
              </span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-['Inter',sans-serif] font-medium text-sm"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
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
                    onClick={() => navigate("/dashboard")}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 font-['Inter',sans-serif] font-medium transition-colors md:hidden"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </button>
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

      {/* Hero Title Section */}
      {title && (
        <div className="bg-gradient-to-b from-[#545454] to-[#3a3a3a] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {subtitle && (
              <p className="text-[#4094f4] font-['Inter',sans-serif] font-bold text-sm uppercase tracking-[0.4px] mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-white font-['Inter',sans-serif] font-bold text-4xl md:text-5xl tracking-[0.4px]">
              {title}
            </h1>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {children}
      </div>

      {/* Footer */}
      <div className="bg-[#3a3a3a] border-t border-gray-600 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 font-['Inter',sans-serif] text-sm">
            TakeOff — Your Co-Pilot on the Ground
          </p>
        </div>
      </div>
    </div>
  );
}