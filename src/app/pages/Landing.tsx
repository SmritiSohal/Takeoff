import TakeOff from "../../imports/TakeOff";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add click handler to Sign Up nav link
    const allPs = document.querySelectorAll("p");
    allPs.forEach((p) => {
      if (p.textContent === "Sign Up") {
        p.style.cursor = "pointer";
        p.onclick = (e) => {
          e.preventDefault();
          navigate("/auth");
        };
      }
      if (p.textContent === "About us") {
        p.style.cursor = "pointer";
        p.onclick = (e) => {
          e.preventDefault();
          navigate("/about");
        };
      }
      if (p.textContent === "Tools ") {
        p.style.cursor = "pointer";
        p.onclick = (e) => {
          e.preventDefault();
          navigate("/auth");
        };
      }
    });

    // Add click handlers to CTA buttons
    const ctaButtons = document.querySelectorAll(
      '[class*="bg-black"][class*="rounded-[100px]"]',
    );
    ctaButtons.forEach((btn) => {
      (btn as HTMLElement).style.cursor = "pointer";
      (btn as HTMLElement).onclick = () => navigate("/auth");
    });
  }, [navigate]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Desktop Landing Page */}
      <div className="hidden md:block w-full [overflow-x:clip]">
        <TakeOff onNavigate={(path) => navigate(path)} />
      </div>
      
      {/* Mobile Landing Page */}
      <div className="md:hidden min-h-screen bg-[#545454] flex flex-col">
        {/* Mobile Header */}
        <div className="p-6 bg-gradient-to-r from-[#4094f4] to-[#2a7ad6]">
          <h1 className="font-['Inter',sans-serif] font-extrabold text-white text-5xl mb-2">TakeOff</h1>
          <p className="font-['Inter',sans-serif] font-bold text-white/90 text-lg">Aviation Tailored To You</p>
        </div>
        
        {/* Mobile Hero */}
        <div className="p-6 bg-white">
          <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black mb-4">Your Co-Pilot on the Ground</h2>
          <p className="font-['Inter',sans-serif] text-[#626262] text-base leading-relaxed mb-4">
            The journey to the cockpit is complex, filled with confusing paperwork, critical exams, and expensive decisions. <span className="font-bold text-black">TakeOff</span> simplifies it.
          </p>
          <p className="font-['Inter',sans-serif] text-[#626262] text-base leading-relaxed mb-6">
            We break down the entire process into clear, manageable steps, giving you the tools and verified information you need to navigate your path to becoming a pilot in India with confidence.
          </p>
          <button
            onClick={() => navigate("/auth")}
            className="w-full bg-black text-white px-6 py-4 rounded-full font-['Inter',sans-serif] font-semibold text-lg mb-4"
          >
            Get Started
          </button>
        </div>
        
        {/* Mobile Module Cards */}
        <div className="p-6 space-y-4">
          <h3 className="font-['Inter',sans-serif] font-bold text-white text-2xl mb-4">The Flight Plan</h3>
          
          <div className="bg-white rounded-[30px] p-6" onClick={() => navigate("/eligibility")}>
            <p className="font-['Inter',sans-serif] font-bold text-[#4094f4] text-sm uppercase mb-2">First Steps first</p>
            <h4 className="font-['Inter',sans-serif] font-bold text-black text-xl mb-3">Eligibility & Roadmap Generator</h4>
            <p className="font-['Inter',sans-serif] text-[#626262] text-sm leading-relaxed mb-4">
              Are you eligible? What's the first step? Answer a few simple questions and get a personalized roadmap to your CPL.
            </p>
            <div className="text-right text-[#4094f4] font-semibold">→</div>
          </div>
          
          <div className="bg-white rounded-[30px] p-6" onClick={() => navigate("/paperwork")}>
            <p className="font-['Inter',sans-serif] font-bold text-[#4094f4] text-sm uppercase mb-2">Cut Through the Red Tape</p>
            <h4 className="font-['Inter',sans-serif] font-bold text-black text-xl mb-3">DGCA Paperwork & Computer Number</h4>
            <p className="font-['Inter',sans-serif] text-[#626262] text-sm leading-relaxed mb-4">
              Get your unique Computer Number from the DGCA with our step-by-step walkthrough.
            </p>
            <div className="text-right text-[#4094f4] font-semibold">→</div>
          </div>
          
          <div className="bg-white rounded-[30px] p-6" onClick={() => navigate("/medical")}>
            <p className="font-['Inter',sans-serif] font-bold text-[#4094f4] text-sm uppercase mb-2">Navigate Your Medicals with Confidence</p>
            <h4 className="font-['Inter',sans-serif] font-bold text-black text-xl mb-3">Medical Guidance</h4>
            <p className="font-['Inter',sans-serif] text-[#626262] text-sm leading-relaxed mb-4">
              Complete guide to Class 2 and Class 1 medical examinations with DGCA-approved doctor directory.
            </p>
            <div className="text-right text-[#4094f4] font-semibold">→</div>
          </div>
          
          <div className="bg-white rounded-[30px] p-6" onClick={() => navigate("/exam-prep")}>
            <p className="font-['Inter',sans-serif] font-bold text-[#4094f4] text-sm uppercase mb-2">Ace Your DGCA Exams</p>
            <h4 className="font-['Inter',sans-serif] font-bold text-black text-xl mb-3">Exam Prep Toolkit</h4>
            <p className="font-['Inter',sans-serif] text-[#626262] text-sm leading-relaxed mb-4">
              Detailed syllabus breakdown, recommended books, and directory of trusted ground classes.
            </p>
            <div className="text-right text-[#4094f4] font-semibold">→</div>
          </div>
          
          <div className="bg-white rounded-[30px] p-6" onClick={() => navigate("/flying-schools")}>
            <p className="font-['Inter',sans-serif] font-bold text-[#4094f4] text-sm uppercase mb-2">Find Your Perfect Flying School</p>
            <h4 className="font-['Inter',sans-serif] font-bold text-black text-xl mb-3">Flying School Directory</h4>
            <p className="font-['Inter',sans-serif] text-[#626262] text-sm leading-relaxed mb-4">
              Explore and compare flying schools across India and abroad with detailed information.
            </p>
            <div className="text-right text-[#4094f4] font-semibold">→</div>
          </div>
        </div>
        
        {/* Mobile Footer CTA */}
        <div className="p-6 bg-gradient-to-r from-[#4094f4] to-[#2a7ad6] text-center">
          <h3 className="font-['Inter',sans-serif] font-bold text-white text-2xl mb-3">Ready for Takeoff?</h3>
          <p className="font-['Inter',sans-serif] text-white/90 text-sm mb-6">
            Your dream of flying is closer than you think. Start your journey now!
          </p>
          <button
            onClick={() => navigate("/auth")}
            className="bg-white text-[#4094f4] px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold text-lg shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
      
      {/* Floating Login CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => navigate("/auth")}
          className="bg-[#4094f4] text-white px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold shadow-2xl hover:bg-[#3380d8] transition-all hover:scale-105 flex items-center gap-3"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          Sign Up
        </button>
      </div>
    </div>
  );
}