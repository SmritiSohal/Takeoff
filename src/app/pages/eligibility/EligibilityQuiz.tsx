import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { ArrowRight } from 'lucide-react';

export default function EligibilityQuiz() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    stream: '',
    physicsPercent: '',
    mathsPercent: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('eligibilityData', JSON.stringify(formData));
    navigate('/eligibility/result');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = formData.age && formData.stream &&
    (formData.stream !== 'pcm' || (formData.physicsPercent && formData.mathsPercent));

  return (
    <ModuleLayout
      title="Eligibility Check"
      subtitle="First Steps First"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-3">
              Let's Check Your Eligibility
            </h2>
            <p className="text-[#626262] font-['Inter',sans-serif]">
              Answer these questions to see if you meet the basic requirements for pilot training
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Age */}
            <div>
              <label className="block font-['Inter',sans-serif] font-semibold text-black mb-2">
                What is your age?
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4094f4] font-['Inter',sans-serif] transition-colors"
                placeholder="Enter your age"
                min="1"
                max="100"
              />
            </div>

            {/* Stream */}
            <div>
              <label className="block font-['Inter',sans-serif] font-semibold text-black mb-2">
                What was your 10+2 stream?
              </label>
              <select
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4094f4] font-['Inter',sans-serif] bg-white transition-colors"
              >
                <option value="">Select your stream</option>
                <option value="pcm">PCM (Physics, Chemistry, Maths)</option>
                <option value="pcb">PCB (Physics, Chemistry, Biology)</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
              </select>
            </div>

            {/* Conditional fields for PCM stream */}
            {formData.stream === 'pcm' && (
              <>
                <div>
                  <label className="block font-['Inter',sans-serif] font-semibold text-black mb-2">
                    Physics Percentage
                  </label>
                  <input
                    type="number"
                    name="physicsPercent"
                    value={formData.physicsPercent}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4094f4] font-['Inter',sans-serif] transition-colors"
                    placeholder="Enter percentage"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block font-['Inter',sans-serif] font-semibold text-black mb-2">
                    Maths Percentage
                  </label>
                  <input
                    type="number"
                    name="mathsPercent"
                    value={formData.mathsPercent}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#4094f4] font-['Inter',sans-serif] transition-colors"
                    placeholder="Enter percentage"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-black text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-colors font-['Inter',sans-serif] font-medium flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Check Eligibility
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </ModuleLayout>
  );
}
