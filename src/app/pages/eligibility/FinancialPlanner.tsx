import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { Calculator, TrendingUp, Calendar, IndianRupee, Download, ArrowLeft } from 'lucide-react';

export default function FinancialPlanner() {
  const navigate = useNavigate();
  const [trainingPath, setTrainingPath] = useState<'india' | 'abroad'>('india');

  const costBreakdownIndia = [
    { category: 'Computer Number & Registration', amount: 5000 },
    { category: 'Class 2 Medical', amount: 6000 },
    { category: 'Ground Classes', amount: 80000 },
    { category: 'DGCA Exam Fees (5 subjects)', amount: 12500 },
    { category: 'Flying Training (200+ hours)', amount: 2200000 },
    { category: 'Class 1 Medical', amount: 20000 },
    { category: 'Books & Study Material', amount: 25000 },
    { category: 'Miscellaneous', amount: 51500 }
  ];

  const costBreakdownAbroad = [
    { category: 'Computer Number & Registration', amount: 5000 },
    { category: 'Class 2 Medical (India)', amount: 6000 },
    { category: 'Visa & Travel', amount: 150000 },
    { category: 'Flying Training (FAA CPL)', amount: 3500000 },
    { category: 'Accommodation (12-15 months)', amount: 600000 },
    { category: 'Living Expenses', amount: 400000 },
    { category: 'License Conversion to DGCA', amount: 100000 },
    { category: 'Books & Materials', amount: 50000 },
    { category: 'Miscellaneous', amount: 189000 }
  ];

  const timeline = [
    { month: 'Month 1-2', milestone: 'Computer Number & Medical', cost: '₹11,000', details: ['Apply for Computer Number', 'Complete Class 2 Medical', 'Gather required documents'] },
    { month: 'Month 3-7', milestone: 'Ground Classes & Exams', cost: '₹92,500', details: ['Enroll in ground school', 'Study 5 DGCA subjects', 'Pass all theory exams'] },
    { month: 'Month 8-22', milestone: 'Flying Training', cost: '₹22,00,000', details: ['Enroll in DGCA approved school', 'Complete 200+ flight hours', 'Cross-country navigation'] },
    { month: 'Month 23', milestone: 'Class 1 Medical & License', cost: '₹20,000', details: ['Complete Class 1 Medical', 'Final documentation', 'CPL license issue'] }
  ];

  const financingOptions = [
    {
      title: 'Education Loan',
      provider: 'Major Banks (SBI, HDFC, ICICI)',
      amount: 'Up to ₹20-30 Lakhs',
      interest: '9-12% p.a.',
      tenure: '7-10 years',
      collateral: 'Required for amounts > 7.5L',
      points: ['Co-applicant required', 'Moratorium period available', 'Tax benefits under Section 80E']
    },
    {
      title: 'NBFC Loans',
      provider: 'Bajaj Finserv, Auxilo, Avanse',
      amount: 'Up to ₹40 Lakhs',
      interest: '11-14% p.a.',
      tenure: '7-15 years',
      collateral: 'Varies by amount',
      points: ['Faster processing', 'Higher approval rates', 'Flexible repayment options']
    },
    {
      title: 'Airline Cadet Programs',
      provider: 'IndiGo, Air India, SpiceJet',
      amount: 'Full sponsorship or partial',
      interest: 'Bond period (5-10 years)',
      tenure: 'Employment contract',
      collateral: 'Service bond',
      points: ['Guaranteed job after training', 'Pay-after-employment schemes', 'Competitive selection process']
    }
  ];

  const currentBreakdown = trainingPath === 'india' ? costBreakdownIndia : costBreakdownAbroad;
  const totalCost = currentBreakdown.reduce((sum, item) => sum + item.amount, 0);

  return (
    <ModuleLayout
      title="Financial & Timeline Planner"
      subtitle="Plan Your Investment & Journey"
    >
      <div className="space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/eligibility')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Eligibility
        </button>

        {/* Path Selector */}
        <div className="bg-white rounded-[30px] p-8">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black text-center mb-6">
            Select Your Training Path
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setTrainingPath('india')}
              className={`px-8 py-4 rounded-full font-['Inter',sans-serif] font-semibold transition-all ${
                trainingPath === 'india'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Training in India
            </button>
            <button
              onClick={() => setTrainingPath('abroad')}
              className={`px-8 py-4 rounded-full font-['Inter',sans-serif] font-semibold transition-all ${
                trainingPath === 'abroad'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Training Abroad (USA)
            </button>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-50 rounded-2xl w-14 h-14 flex items-center justify-center">
              <Calculator className="w-7 h-7 text-[#4094f4]" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              Complete Cost Breakdown
            </h2>
          </div>

          <div className="space-y-3 mb-6">
            {currentBreakdown.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span className="font-['Inter',sans-serif] font-medium text-black">
                  {item.category}
                </span>
                <span className="font-['Inter',sans-serif] font-bold text-[#4094f4]">
                  ₹{item.amount.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-gray-200 pt-6">
            <div className="flex items-center justify-between p-6 bg-gradient-to-br from-[#4094f4] to-blue-600 rounded-2xl text-white">
              <div className="flex items-center gap-3">
                <IndianRupee className="w-8 h-8" />
                <span className="font-['Inter',sans-serif] font-bold text-xl">
                  Total Estimated Cost
                </span>
              </div>
              <span className="font-['Inter',sans-serif] font-bold text-3xl">
                ₹{(totalCost / 100000).toFixed(1)}L
              </span>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
            <p className="text-[#626262] font-['Inter',sans-serif] text-sm">
              <span className="font-semibold text-black">Note:</span> Costs may vary by 10-15% depending on
              the flying school, location, and current market rates. Always verify with schools directly.
            </p>
          </div>
        </div>

        {/* Month-by-Month Timeline */}
        {trainingPath === 'india' && (
          <div className="bg-white rounded-[30px] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-green-50 rounded-2xl w-14 h-14 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
                Month-by-Month Timeline
              </h2>
            </div>

            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <div key={index} className="relative">
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-[#4094f4]/30" />
                  )}
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#4094f4] text-white flex items-center justify-center font-['Inter',sans-serif] font-bold relative z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-[#626262] font-['Inter',sans-serif] mb-1">
                              {phase.month}
                            </p>
                            <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black">
                              {phase.milestone}
                            </h3>
                          </div>
                          <span className="bg-blue-100 text-[#4094f4] px-4 py-2 rounded-full font-['Inter',sans-serif] font-bold text-sm">
                            {phase.cost}
                          </span>
                        </div>
                        <ul className="space-y-2 mt-4">
                          {phase.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-[#626262] font-['Inter',sans-serif] text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4094f4]" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Financing Options */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-purple-50 rounded-2xl w-14 h-14 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-purple-600" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              Financing Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financingOptions.map((option, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl p-6 hover:border-[#4094f4] transition-colors"
              >
                <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-[#626262] font-['Inter',sans-serif] mb-6">
                  {option.provider}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#626262] font-['Inter',sans-serif]">Loan Amount</span>
                    <span className="font-['Inter',sans-serif] font-semibold text-black">{option.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#626262] font-['Inter',sans-serif]">Interest Rate</span>
                    <span className="font-['Inter',sans-serif] font-semibold text-black">{option.interest}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#626262] font-['Inter',sans-serif]">Tenure</span>
                    <span className="font-['Inter',sans-serif] font-semibold text-black">{option.tenure}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#626262] font-['Inter',sans-serif]">Collateral</span>
                    <span className="font-['Inter',sans-serif] font-semibold text-black">{option.collateral}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {option.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4094f4] mt-1.5 shrink-0" />
                      <p className="text-xs text-[#626262] font-['Inter',sans-serif]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Report */}
        <div className="bg-gradient-to-br from-[#4094f4] to-blue-600 rounded-[30px] p-8 text-center">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white mb-4">
            Download Your Personalized Financial Plan
          </h2>
          <p className="text-white/90 font-['Inter',sans-serif] mb-6 max-w-2xl mx-auto">
            Get a PDF report with detailed cost breakdowns, payment schedules, and financing options
            tailored to your selected training path.
          </p>
          <button className="bg-white text-[#4094f4] px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold inline-flex items-center gap-3 hover:bg-gray-100 transition-colors">
            <Download className="w-5 h-5" />
            Download PDF Report
          </button>
        </div>
      </div>
    </ModuleLayout>
  );
}
