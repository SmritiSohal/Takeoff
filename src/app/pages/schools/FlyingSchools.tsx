import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import UnlockModal from '../../components/UnlockModal';
import { usePremium } from '../../contexts/PremiumContext';
import { Plane, MapPin, DollarSign, Clock, Eye, Lock, ArrowRight } from 'lucide-react';

export default function FlyingSchools() {
  const navigate = useNavigate();
  const { premiumAccess } = usePremium();
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('all');

  const trainingLocations = [
    {
      country: "India",
      icon: "IN",
      benefits: [
        "Lower overall cost (Rs. 25-35 lakhs)",
        "No visa or travel complications",
        "DGCA license directly applicable",
        "Family support nearby"
      ],
      challenges: [
        "Weather delays during monsoons",
        "Limited advanced aircraft",
        "Higher waiting times for slots"
      ]
    },
    {
      country: "USA",
      icon: "US",
      benefits: [
        "Excellent weather year-round",
        "Advanced training infrastructure",
        "FAA license (globally recognized)",
        "Faster training completion"
      ],
      challenges: [
        "Higher cost (Rs. 40-60 lakhs total)",
        "Visa requirements (M-1)",
        "License conversion needed for India",
        "Living expenses"
      ]
    },
    {
      country: "South Africa",
      icon: "ZA",
      benefits: [
        "Good weather conditions",
        "Moderate costs (Rs. 30-45 lakhs)",
        "English-speaking environment",
        "Quality training standards"
      ],
      challenges: [
        "Distance from India",
        "Limited school options",
        "License conversion required",
        "Accommodation costs"
      ]
    },
    {
      country: "New Zealand",
      icon: "NZ",
      benefits: [
        "High training standards",
        "Scenic flying environments",
        "Safe airspace",
        "Modern fleet"
      ],
      challenges: [
        "Very expensive (Rs. 50-70 lakhs)",
        "Far from India",
        "Strict visa requirements",
        "Long training duration"
      ]
    }
  ];

  const featuredSchools = [
    {
      name: "Government Flying Training School",
      location: "Gondia, Maharashtra",
      country: "India",
      fleetSize: "15+ Aircraft",
      costRange: "Rs. 25-30 Lakhs",
      duration: "18-24 months",
      aircraft: "Cessna 152, Cessna 172"
    },
    {
      name: "National Flying Training Institute",
      location: "Gondia, Maharashtra",
      country: "India",
      fleetSize: "20+ Aircraft",
      costRange: "Rs. 28-35 Lakhs",
      duration: "18-22 months",
      aircraft: "Cessna 152, Cessna 172, Diamond DA40"
    },
    {
      name: "CAE Oxford Aviation Academy",
      location: "Gondia, Maharashtra",
      country: "India",
      fleetSize: "25+ Aircraft",
      costRange: "Rs. 35-40 Lakhs",
      duration: "18-20 months",
      aircraft: "Diamond DA40, DA42"
    },
    {
      name: "Sunrise Aviation",
      location: "Phoenix, Arizona",
      country: "USA",
      fleetSize: "30+ Aircraft",
      costRange: "Rs. 45-55 Lakhs",
      duration: "12-15 months",
      aircraft: "Cessna 172, Piper Archer, Seminole"
    }
  ];

  const databasePreview = [
    { school: "ABC Flying Club", location: "Delhi, India", fleet: "Cessna 152/172", cost: "Rs. 28L", duration: "20 mo", contact: "---" },
    { school: "Sky Pilot Academy", location: "Jaipur, India", fleet: "DA40/DA42", cost: "Rs. 32L", duration: "18 mo", contact: "---" },
    { school: "Wings Aviation", location: "Bangalore, India", fleet: "Cessna 172", cost: "Rs. 30L", duration: "22 mo", contact: "---" },
    { school: "Pacific Flight Training", location: "Auckland, NZ", fleet: "Piper PA-28", cost: "Rs. 55L", duration: "14 mo", contact: "---" },
    { school: "Eagle Air Academy", location: "Cape Town, SA", fleet: "Cessna 172/182", cost: "Rs. 38L", duration: "16 mo", contact: "---" },
  ];

  const filteredSchools = selectedCountry === 'all'
    ? featuredSchools
    : featuredSchools.filter(school => school.country === selectedCountry);

  return (
    <ModuleLayout
      title="Flying School Intelligence"
      subtitle="Find Your Perfect Flying School"
    >
      <div className="space-y-8">
        {/* Intro */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <p className="text-[#626262] font-['Inter',sans-serif] text-center max-w-3xl mx-auto leading-[28px]">
            Choosing a flying school is the biggest investment you'll make. Our comprehensive directory
            allows you to explore and compare flying schools across India and abroad. Get access to
            up-to-date, structured information on their aircraft fleet, estimated fees and duration,
            location, and direct contact details.
          </p>
        </div>

        {/* Section 1: India vs Abroad Guide */}
        <div>
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white text-center mb-6">
            Where Should You Train?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingLocations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center font-['Inter',sans-serif] font-bold text-lg text-[#4094f4]">
                    {location.icon}
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
                    {location.country}
                  </h3>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-['Inter',sans-serif] font-semibold text-black mb-3 flex items-center gap-2">
                    <span className="text-green-600">+</span> Benefits
                  </h4>
                  <ul className="space-y-2">
                    {location.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-[#626262] font-['Inter',sans-serif] flex items-start gap-2"
                      >
                        <span className="text-green-500 shrink-0 mt-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="3" />
                          </svg>
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="font-['Inter',sans-serif] font-semibold text-black mb-3 flex items-center gap-2">
                    <span className="text-orange-500">!</span> Challenges
                  </h4>
                  <ul className="space-y-2">
                    {location.challenges.map((challenge, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-[#626262] font-['Inter',sans-serif] flex items-start gap-2"
                      >
                        <span className="text-orange-400 shrink-0 mt-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="3" />
                          </svg>
                        </span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Featured Schools */}
        <div className="bg-white rounded-[30px] p-8 md:p-12">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black text-center mb-2">
            Featured Flying Schools
          </h2>
          <p className="text-[#626262] font-['Inter',sans-serif] text-center mb-8">
            Free preview of select schools. Unlock the full database for complete details on 50+ schools.
          </p>

          {/* Filter */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              {['all', 'India', 'USA'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedCountry(filter)}
                  className={`px-6 py-2 rounded-full font-['Inter',sans-serif] font-medium text-sm transition-colors ${
                    selectedCountry === filter
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter === 'USA' ? 'Abroad' : filter}
                </button>
              ))}
            </div>
          </div>

          {/* Schools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSchools.map((school, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl p-6 hover:border-[#4094f4] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-1">
                      {school.name}
                    </h3>
                    <p className="text-sm text-[#626262] font-['Inter',sans-serif] flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {school.location}
                    </p>
                  </div>
                  <span className="bg-blue-50 text-[#4094f4] px-3 py-1 rounded-full text-xs font-['Inter',sans-serif] font-semibold">
                    {school.country}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Plane className="w-4 h-4 text-gray-400" />
                    <span className="font-['Inter',sans-serif] font-medium text-[#626262]">
                      Fleet: {school.fleetSize}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <span className="font-['Inter',sans-serif] font-medium text-[#626262]">
                      Cost: {school.costRange}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="font-['Inter',sans-serif] font-medium text-[#626262]">
                      Duration: {school.duration}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-[#626262] font-['Inter',sans-serif] mb-3">
                    <span className="font-semibold text-black">Aircraft:</span> {school.aircraft}
                  </p>
                  <button className="w-full bg-black text-white px-4 py-2.5 rounded-full hover:bg-gray-800 transition-colors font-['Inter',sans-serif] font-medium text-sm flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Section: Full Database Table */}
        {premiumAccess.schoolDatabase ? (
          <div className="bg-white rounded-[30px] p-8 text-center">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
              ✨ Premium Access Unlocked
            </h2>
            <p className="text-[#626262] font-['Inter',sans-serif] mb-6">
              You now have access to the Complete Flying School Database with 50+ verified schools
            </p>
            <button
              onClick={() => navigate('/flying-schools/database')}
              className="bg-[#4094f4] text-white px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              Open School Database
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-[30px] p-8 md:p-12 border-2 border-gray-300">
            <div className="text-center mb-8">
              <div className="bg-[#4094f4] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black mb-3">
                Full Flying School Database
              </h2>
              <p className="text-[#626262] font-['Inter',sans-serif] max-w-2xl mx-auto">
                Access our comprehensive database with 50+ verified schools across India, USA,
                South Africa, Philippines, and New Zealand.
              </p>
            </div>

            {/* Locked Table Preview */}
            <div className="bg-white rounded-2xl overflow-hidden mb-8 relative">
              {/* Blur overlay */}
              <div className="absolute inset-0 backdrop-blur-[2px] bg-white/60 z-10 flex items-center justify-center">
                <button
                  onClick={() => setShowUnlockModal(true)}
                  className="bg-black text-white px-8 py-4 rounded-full font-['Inter',sans-serif] font-bold flex items-center gap-3 hover:bg-[#4094f4] transition-colors shadow-xl"
                >
                  <Lock className="w-5 h-5" />
                  Unlock Full Database
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      {["School", "Location", "Fleet", "Cost", "Duration", "Contact"].map((col) => (
                        <th
                          key={col}
                          className="px-6 py-4 text-left font-['Inter',sans-serif] font-semibold text-black text-sm"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {databasePreview.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="px-6 py-4 font-['Inter',sans-serif] text-sm text-gray-400">{row.school}</td>
                        <td className="px-6 py-4 font-['Inter',sans-serif] text-sm text-gray-400">{row.location}</td>
                        <td className="px-6 py-4 font-['Inter',sans-serif] text-sm text-gray-400">{row.fleet}</td>
                        <td className="px-6 py-4 font-['Inter',sans-serif] text-sm text-gray-400">{row.cost}</td>
                        <td className="px-6 py-4 font-['Inter',sans-serif] text-sm text-gray-400">{row.duration}</td>
                        <td className="px-6 py-4 font-['Inter',sans-serif] text-sm text-gray-400">{row.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { title: "Complete Cost Breakdown", desc: "Tuition, accommodation, hidden fees, and total estimates" },
                { title: "Direct Contact Details", desc: "Phone, email, website, and admission coordinator info" },
                { title: "Student Reviews", desc: "Real feedback from current and former students" }
              ].map((feature) => (
                <div key={feature.title} className="bg-white rounded-xl p-5">
                  <h4 className="font-['Inter',sans-serif] font-semibold text-black mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowUnlockModal(true)}
                className="bg-[#4094f4] text-white px-10 py-4 rounded-full hover:bg-[#3380d8] transition-colors font-['Inter',sans-serif] font-bold text-lg inline-flex items-center gap-3"
              >
                <Lock className="w-6 h-6" />
                Unlock Full Database
              </button>
            </div>
          </div>
        )}
      </div>

      <UnlockModal
        isOpen={showUnlockModal}
        onClose={() => {
          setShowUnlockModal(false);
          if (premiumAccess.schoolDatabase) {
            navigate('/flying-schools/database');
          }
        }}
        contentType="schoolDatabase"
        title="Unlock School Database"
        features={[
          'Complete database of 50+ flying schools worldwide',
          'Detailed cost breakdowns including hidden fees',
          'Direct contact information for admissions',
          'Student reviews and ratings for each school'
        ]}
      />
    </ModuleLayout>
  );
}