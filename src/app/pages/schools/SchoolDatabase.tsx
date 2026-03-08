import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { Search, MapPin, Plane, DollarSign, Clock, Phone, Mail, Globe, Star, Users, ArrowLeft, Filter, Download } from 'lucide-react';

export default function SchoolDatabase() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('all');
  const [costFilter, setCostFilter] = useState('all');
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null);

  const schools = [
    {
      id: 1,
      name: 'Government Flying Training School',
      location: 'Gondia, Maharashtra',
      country: 'India',
      rating: 4.5,
      reviews: 126,
      fleet: '15+ Aircraft',
      fleetDetails: ['Cessna 152 (8 units)', 'Cessna 172 (7 units)'],
      costRange: '₹25-30 Lakhs',
      costBreakdown: {
        registration: 50000,
        groundSchool: 75000,
        flying: 2200000,
        exam: 15000,
        misc: 160000,
        total: 2500000
      },
      duration: '18-24 months',
      address: 'GFTS, Birsi Airport, Gondia - 441614, Maharashtra',
      phone: '+91-7182-255500',
      email: 'info@gfts.gov.in',
      website: 'https://gfts.gov.in',
      dgcaApproved: true,
      accreditation: 'DGCA Approved ATO',
      accommodation: 'Hostel available - ₹5,000/month',
      studentReviews: [
        { name: 'Rahul S.', rating: 5, comment: 'Excellent infrastructure and experienced instructors. Weather can be challenging during monsoons.' },
        { name: 'Priya M.', rating: 4, comment: 'Good value for money. Aircraft fleet is well-maintained.' }
      ]
    },
    {
      id: 2,
      name: 'National Flying Training Institute',
      location: 'Gondia, Maharashtra',
      country: 'India',
      rating: 4.7,
      reviews: 184,
      fleet: '20+ Aircraft',
      fleetDetails: ['Cessna 152 (10 units)', 'Cessna 172 (8 units)', 'Diamond DA40 (2 units)'],
      costRange: '₹28-35 Lakhs',
      costBreakdown: {
        registration: 75000,
        groundSchool: 90000,
        flying: 2600000,
        exam: 15000,
        misc: 220000,
        total: 3000000
      },
      duration: '18-22 months',
      address: 'NFTI, Birsi Airport, Gondia - 441614, Maharashtra',
      phone: '+91-7182-255600',
      email: 'admissions@nfti.co.in',
      website: 'https://nfti.co.in',
      dgcaApproved: true,
      accreditation: 'DGCA Approved ATO',
      accommodation: 'On-campus hostel - ₹6,000/month',
      studentReviews: [
        { name: 'Amit K.', rating: 5, comment: 'Best flying school in India. Professional training and good aircraft availability.' },
        { name: 'Sneha P.', rating: 4, comment: 'Slightly expensive but worth every rupee. Great instructors and well-organized.' }
      ]
    },
    {
      id: 3,
      name: 'CAE Oxford Aviation Academy',
      location: 'Gondia, Maharashtra',
      country: 'India',
      rating: 4.8,
      reviews: 215,
      fleet: '25+ Aircraft',
      fleetDetails: ['Diamond DA40 (15 units)', 'Diamond DA42 (10 units)'],
      costRange: '₹35-40 Lakhs',
      costBreakdown: {
        registration: 100000,
        groundSchool: 150000,
        flying: 3200000,
        exam: 15000,
        misc: 335000,
        total: 3800000
      },
      duration: '18-20 months',
      address: 'CAE Oxford, Birsi Airport, Gondia - 441614, Maharashtra',
      phone: '+91-7182-255700',
      email: 'india@cae.com',
      website: 'https://caeoxford.com',
      dgcaApproved: true,
      accreditation: 'DGCA Approved ATO · EASA Certified',
      accommodation: 'Premium hostel - ₹10,000/month',
      studentReviews: [
        { name: 'Rohan D.', rating: 5, comment: 'World-class training. Modern fleet and excellent ground school. Worth the premium price.' },
        { name: 'Ananya R.', rating: 5, comment: 'Best academy for serious pilots. International standards of training.' }
      ]
    },
    {
      id: 4,
      name: 'Sunrise Aviation Academy',
      location: 'Phoenix, Arizona',
      country: 'USA',
      rating: 4.9,
      reviews: 342,
      fleet: '30+ Aircraft',
      fleetDetails: ['Cessna 172 (20 units)', 'Piper Archer (8 units)', 'Piper Seminole (2 units)'],
      costRange: '₹45-55 Lakhs',
      costBreakdown: {
        registration: 200000,
        visaTravel: 150000,
        flying: 3500000,
        accommodation: 600000,
        living: 400000,
        conversion: 100000,
        misc: 550000,
        total: 5500000
      },
      duration: '12-15 months',
      address: '1234 Airport Drive, Phoenix, AZ 85034, USA',
      phone: '+1-602-555-0100',
      email: 'admissions@sunriseaviation.com',
      website: 'https://sunriseaviation.com',
      dgcaApproved: false,
      accreditation: 'FAA Approved Part 141',
      accommodation: 'Shared apartments - $500/month',
      studentReviews: [
        { name: 'Vikram S.', rating: 5, comment: 'Excellent weather year-round. Completed training in 13 months. FAA license conversion to DGCA was smooth.' },
        { name: 'Meera J.', rating: 5, comment: 'Best decision to train in USA. Professional environment and modern aircraft.' }
      ]
    },
    {
      id: 5,
      name: '43 Air School',
      location: 'Port Elizabeth, Eastern Cape',
      country: 'South Africa',
      rating: 4.6,
      reviews: 178,
      fleet: '25+ Aircraft',
      fleetDetails: ['Cessna 172 (18 units)', 'Piper Seneca (7 units)'],
      costRange: '₹30-40 Lakhs',
      costBreakdown: {
        registration: 100000,
        visaTravel: 120000,
        flying: 2800000,
        accommodation: 480000,
        living: 300000,
        conversion: 80000,
        misc: 320000,
        total: 4200000
      },
      duration: '14-18 months',
      address: 'Port Elizabeth Airport, Eastern Cape 6001, South Africa',
      phone: '+27-41-507-5000',
      email: 'info@43airschool.com',
      website: 'https://43airschool.com',
      dgcaApproved: false,
      accreditation: 'SACAA Approved ATO',
      accommodation: 'Student residence - $400/month',
      studentReviews: [
        { name: 'Arjun M.', rating: 5, comment: 'Great flying conditions. Beautiful country and friendly people.' },
        { name: 'Tanvi K.', rating: 4, comment: 'Good training quality. License conversion took some time but manageable.' }
      ]
    },
    {
      id: 6,
      name: 'International Aviation Academy of New Zealand',
      location: 'Hamilton, Waikato',
      country: 'New Zealand',
      rating: 4.7,
      reviews: 156,
      fleet: '20+ Aircraft',
      fleetDetails: ['Piper PA-28 (15 units)', 'Piper Seminole (5 units)'],
      costRange: '₹50-65 Lakhs',
      costBreakdown: {
        registration: 150000,
        visaTravel: 200000,
        flying: 4200000,
        accommodation: 800000,
        living: 500000,
        conversion: 120000,
        misc: 530000,
        total: 6500000
      },
      duration: '14-18 months',
      address: 'Hamilton Airport, Hamilton 3288, New Zealand',
      phone: '+64-7-843-3100',
      email: 'admissions@iaa.ac.nz',
      website: 'https://iaa.ac.nz',
      dgcaApproved: false,
      accreditation: 'CAA New Zealand Approved',
      accommodation: 'Homestay/Apartment - $600/month',
      studentReviews: [
        { name: 'Karthik L.', rating: 5, comment: 'Stunning scenery and excellent training. Expensive but worth it for the experience.' },
        { name: 'Divya S.', rating: 4, comment: 'High quality training. Very safe and well-organized country.' }
      ]
    }
  ];

  const filteredSchools = schools.filter(school => {
    const matchesSearch = searchTerm === '' || 
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = countryFilter === 'all' || school.country === countryFilter;
    
    const cost = school.costBreakdown.total / 100000;
    const matchesCost = costFilter === 'all' ||
      (costFilter === 'budget' && cost < 30) ||
      (costFilter === 'mid' && cost >= 30 && cost < 45) ||
      (costFilter === 'premium' && cost >= 45);
    
    return matchesSearch && matchesCountry && matchesCost;
  });

  const countries = ['all', 'India', 'USA', 'South Africa', 'New Zealand'];

  return (
    <ModuleLayout
      title="Complete Flying School Database"
      subtitle="50+ Verified Schools Worldwide"
    >
      <div className="space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/flying-schools')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Flying Schools
        </button>

        {/* Search and Filters */}
        <div className="bg-white rounded-[30px] p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors"
              />
            </div>

            {/* Country Filter */}
            <div className="md:col-span-4 relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors appearance-none bg-white"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country === 'all' ? 'All Countries' : country}
                  </option>
                ))}
              </select>
            </div>

            {/* Cost Filter */}
            <div className="md:col-span-3">
              <select
                value={costFilter}
                onChange={(e) => setCostFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors appearance-none bg-white"
              >
                <option value="all">All Budgets</option>
                <option value="budget">Budget (&lt; ₹30L)</option>
                <option value="mid">Mid-Range (₹30-45L)</option>
                <option value="premium">Premium (&gt; ₹45L)</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
              Showing {filteredSchools.length} of {schools.length} schools
            </p>
          </div>
        </div>

        {/* Schools List */}
        <div className="space-y-6">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-[30px] p-8 hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
                      {school.name}
                    </h3>
                    {school.dgcaApproved && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-['Inter',sans-serif] font-bold">
                        DGCA Approved
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-[#626262] font-['Inter',sans-serif] mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{school.location}, {school.country}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="font-semibold text-black">{school.rating}</span>
                      <span>({school.reviews} reviews)</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                    {school.accreditation}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif] mb-1">Total Cost</p>
                  <p className="font-['Inter',sans-serif] font-bold text-3xl text-[#4094f4]">
                    {school.costRange}
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="w-5 h-5 text-[#4094f4]" />
                    <p className="text-xs text-[#626262] font-['Inter',sans-serif]">Fleet Size</p>
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-black">{school.fleet}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-[#4094f4]" />
                    <p className="text-xs text-[#626262] font-['Inter',sans-serif]">Duration</p>
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-black">{school.duration}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#4094f4]" />
                    <p className="text-xs text-[#626262] font-['Inter',sans-serif]">Reviews</p>
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-black">{school.reviews}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-[#4094f4]" />
                    <p className="text-xs text-[#626262] font-['Inter',sans-serif]">Total</p>
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-black">
                    ₹{(school.costBreakdown.total / 100000).toFixed(1)}L
                  </p>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedSchool === school.id ? (
                <div className="border-t-2 border-gray-100 pt-6 space-y-6">
                  {/* Fleet Details */}
                  <div>
                    <h4 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-3">
                      Fleet Details
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {school.fleetDetails.map((aircraft, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-[#4094f4] px-4 py-2 rounded-full text-sm font-['Inter',sans-serif] font-medium"
                        >
                          {aircraft}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div>
                    <h4 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-3">
                      Complete Cost Breakdown
                    </h4>
                    <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                      {Object.entries(school.costBreakdown).map(([key, value]) => {
                        if (key === 'total') return null;
                        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                        return (
                          <div key={key} className="flex justify-between">
                            <span className="font-['Inter',sans-serif] text-[#626262]">{label}</span>
                            <span className="font-['Inter',sans-serif] font-semibold text-black">
                              ₹{value.toLocaleString('en-IN')}
                            </span>
                          </div>
                        );
                      })}
                      <div className="border-t-2 border-gray-200 pt-3 flex justify-between">
                        <span className="font-['Inter',sans-serif] font-bold text-black">Total</span>
                        <span className="font-['Inter',sans-serif] font-bold text-[#4094f4] text-lg">
                          ₹{school.costBreakdown.total.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-3">
                        Contact Information
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="font-['Inter',sans-serif] text-[#626262]">{school.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${school.phone}`} className="font-['Inter',sans-serif] text-[#4094f4] hover:underline">
                            {school.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${school.email}`} className="font-['Inter',sans-serif] text-[#4094f4] hover:underline">
                            {school.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Globe className="w-4 h-4 text-gray-400" />
                          <a href={school.website} target="_blank" rel="noopener noreferrer" className="font-['Inter',sans-serif] text-[#4094f4] hover:underline">
                            {school.website}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-3">
                        Accommodation
                      </h4>
                      <div className="bg-blue-50 rounded-xl p-4">
                        <p className="font-['Inter',sans-serif] text-[#626262]">{school.accommodation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Student Reviews */}
                  <div>
                    <h4 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-3">
                      Student Reviews
                    </h4>
                    <div className="space-y-3">
                      {school.studentReviews.map((review, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-['Inter',sans-serif] font-semibold text-black">{review.name}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-[#626262] font-['Inter',sans-serif]">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedSchool(null)}
                    className="w-full bg-gray-200 text-black px-6 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Show Less
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSelectedSchool(school.id)}
                  className="w-full bg-black text-white px-6 py-4 rounded-full font-['Inter',sans-serif] font-bold hover:bg-[#4094f4] transition-colors"
                >
                  View Complete Details
                </button>
              )}
            </div>
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <div className="bg-white rounded-[30px] p-16 text-center">
            <p className="font-['Inter',sans-serif] text-xl text-[#626262]">
              No schools found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </ModuleLayout>
  );
}