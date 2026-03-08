import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { MapPin, Phone, Mail, Globe, Calendar, Clock, FileText, ArrowLeft, Search } from 'lucide-react';

export default function MedicalResources() {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const class2Doctors = [
    { name: 'Dr. Rajesh Kumar', location: 'Delhi', address: 'Safdarjung Enclave, New Delhi', phone: '+91-9876543210', email: 'dr.rajesh@aviationmed.com', class: 'Class 2', certified: true },
    { name: 'Dr. Priya Sharma', location: 'Mumbai', address: 'Andheri West, Mumbai', phone: '+91-9876543211', email: 'priya.sharma@medfly.in', class: 'Class 2', certified: true },
    { name: 'Dr. Amit Patel', location: 'Bangalore', address: 'Indiranagar, Bangalore', phone: '+91-9876543212', email: 'amit.patel@aviamed.com', class: 'Class 2', certified: true },
    { name: 'Dr. Suresh Menon', location: 'Hyderabad', address: 'Banjara Hills, Hyderabad', phone: '+91-9876543213', email: 'suresh@skymedical.in', class: 'Class 2', certified: true },
    { name: 'Dr. Kavita Singh', location: 'Pune', address: 'Koregaon Park, Pune', phone: '+91-9876543214', email: 'kavita.singh@aviation.med', class: 'Class 2', certified: true },
    { name: 'Dr. Vikram Reddy', location: 'Chennai', address: 'T Nagar, Chennai', phone: '+91-9876543215', email: 'vikram@aeromedical.in', class: 'Class 2', certified: true },
  ];

  const class1Centers = [
    {
      name: 'Institute of Aerospace Medicine (IAM)',
      location: 'Bangalore',
      address: 'Vimanapura Post, Bangalore - 560017',
      phone: '+91-80-2252-2101',
      email: 'iam@indianairforce.nic.in',
      website: 'https://indianairforce.nic.in',
      workingDays: 'Mon-Fri',
      timings: '9:00 AM - 5:00 PM',
      bookingProcess: 'Online booking via IAM portal, 2-3 months waiting period',
      cost: '₹18,000 - ₹22,000'
    },
    {
      name: 'Institute of Aerospace Medicine (IAM)',
      location: 'Delhi',
      address: 'Rajokri, New Delhi - 110038',
      phone: '+91-11-2569-9215',
      email: 'iam.delhi@indianairforce.nic.in',
      website: 'https://indianairforce.nic.in',
      workingDays: 'Mon-Fri',
      timings: '9:00 AM - 5:00 PM',
      bookingProcess: 'Online booking via IAM portal, 2-3 months waiting period',
      cost: '₹18,000 - ₹22,000'
    },
    {
      name: 'Air Force Central Medical Establishment (AFCME)',
      location: 'Delhi',
      address: 'Subroto Park, New Delhi - 110010',
      phone: '+91-11-2569-9200',
      email: 'afcme@indianairforce.nic.in',
      website: 'https://indianairforce.nic.in',
      workingDays: 'Mon-Fri',
      timings: '8:30 AM - 4:30 PM',
      bookingProcess: 'Walk-in with prior appointment, shorter waiting time',
      cost: '₹16,000 - ₹20,000'
    }
  ];

  const bookingSteps = [
    {
      step: 1,
      title: 'Check Eligibility',
      details: 'Must have Class 2 medical certificate and Computer Number before applying for Class 1'
    },
    {
      step: 2,
      title: 'Choose Center',
      details: 'Select IAM Bangalore, IAM Delhi, or AFCME based on location and waiting time'
    },
    {
      step: 3,
      title: 'Online Registration',
      details: 'Visit IAM/AFCME portal, create account, fill application form with all details'
    },
    {
      step: 4,
      title: 'Document Upload',
      details: 'Upload Class 2 certificate, Computer Number, educational certificates, ID proof, photos'
    },
    {
      step: 5,
      title: 'Slot Booking',
      details: 'Select available date (usually 2-3 months ahead). Pay booking fee online'
    },
    {
      step: 6,
      title: 'Medical Examination Day',
      details: 'Arrive early (8 AM). Carry all original documents. Complete all tests. Results in 7-10 days'
    }
  ];

  const nocProcess = [
    {
      scenario: 'Previous Medical Rejection',
      reason: 'Failed vision, hearing, or other medical parameter in past',
      steps: [
        'Get re-evaluation from specialist doctor for the specific issue',
        'Obtain fitness certificate from specialist',
        'Apply for NOC from DGCA regional office with medical reports',
        'Wait for NOC approval (15-30 days)',
        'Book fresh medical with NOC copy'
      ]
    },
    {
      scenario: 'Medical Condition During Training',
      reason: 'Developed health issue after getting Class 2 but before Class 1',
      steps: [
        'Get treatment and medical clearance from specialist',
        'Submit detailed medical history and current status report',
        'Apply for NOC with specialist recommendation',
        'DGCA medical board review (30-45 days)',
        'Proceed with Class 1 if NOC granted'
      ]
    },
    {
      scenario: 'Appeal After Class 1 Rejection',
      reason: 'Failed Class 1 medical examination',
      steps: [
        'Request detailed examination report within 7 days',
        'Consult aviation medicine specialist for second opinion',
        'Submit appeal with additional medical evidence',
        'Appear for re-examination if appeal accepted',
        'Final decision by Chief Medical Officer'
      ]
    }
  ];

  const filteredDoctors = class2Doctors.filter(doctor => 
    (selectedState === 'all' || doctor.location === selectedState) &&
    (searchTerm === '' || doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     doctor.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const states = ['all', ...Array.from(new Set(class2Doctors.map(d => d.location)))];

  return (
    <ModuleLayout
      title="Medical Resources & Directory"
      subtitle="Complete Medical Examination Guide"
    >
      <div className="space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/medical')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Medical Guidance
        </button>

        {/* Class 2 Doctor Directory */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-6">
            DGCA Approved Class 2 Medical Examiners
          </h2>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by doctor name or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-6 py-3 rounded-full font-['Inter',sans-serif] font-medium whitespace-nowrap transition-colors ${
                    selectedState === state
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {state === 'all' ? 'All Cities' : state}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl p-6 hover:border-[#4094f4] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-1">
                      {doctor.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#626262] font-['Inter',sans-serif]">
                      <MapPin className="w-4 h-4" />
                      {doctor.location}
                    </div>
                  </div>
                  <span className="bg-blue-50 text-[#4094f4] px-3 py-1 rounded-full text-xs font-['Inter',sans-serif] font-semibold">
                    Class 2 Certified
                  </span>
                </div>

                <p className="text-sm text-[#626262] font-['Inter',sans-serif] mb-4">
                  {doctor.address}
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${doctor.phone}`} className="font-['Inter',sans-serif] text-[#4094f4] hover:underline">
                      {doctor.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${doctor.email}`} className="font-['Inter',sans-serif] text-[#4094f4] hover:underline">
                      {doctor.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class 1 Centers */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-6">
            Class 1 Medical Centers (IAM & AFCME)
          </h2>

          <div className="space-y-6">
            {class1Centers.map((center, index) => (
              <div
                key={index}
                className="border-2 border-[#4094f4]/30 rounded-2xl p-6 bg-blue-50/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-1">
                      {center.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[#626262] font-['Inter',sans-serif]">
                      <MapPin className="w-5 h-5 text-[#4094f4]" />
                      <span className="font-semibold">{center.location}</span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-['Inter',sans-serif] font-bold">
                    Class 1 Center
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[#626262] font-['Inter',sans-serif] mb-3">
                      <span className="font-semibold text-black">Address:</span> {center.address}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="font-['Inter',sans-serif] text-[#626262]">{center.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="font-['Inter',sans-serif] text-[#626262]">{center.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <a href={center.website} className="font-['Inter',sans-serif] text-[#4094f4] hover:underline">
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="font-['Inter',sans-serif] text-[#626262]">
                          <span className="font-semibold text-black">Days:</span> {center.workingDays}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="font-['Inter',sans-serif] text-[#626262]">
                          <span className="font-semibold text-black">Timings:</span> {center.timings}
                        </span>
                      </div>
                      <div className="bg-white rounded-xl p-3 mt-2">
                        <p className="text-sm font-['Inter',sans-serif] text-[#626262]">
                          <span className="font-semibold text-black">Cost:</span> {center.cost}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border-l-4 border-[#4094f4]">
                  <p className="text-sm font-['Inter',sans-serif] text-[#626262]">
                    <span className="font-semibold text-black">Booking Process:</span> {center.bookingProcess}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class 1 Booking Guide */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-8 text-center">
            How to Book Class 1 Medical
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {bookingSteps.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4094f4] to-blue-600 text-white flex items-center justify-center font-['Inter',sans-serif] font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#626262] font-['Inter',sans-serif] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NOC Process Guide */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-50 rounded-2xl w-14 h-14 flex items-center justify-center">
              <FileText className="w-7 h-7 text-orange-600" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              NOC (No Objection Certificate) Process
            </h2>
          </div>

          <p className="text-[#626262] font-['Inter',sans-serif] mb-8">
            If you've had medical rejections or special medical conditions, you may need an NOC from DGCA.
            Here's how to proceed in different scenarios:
          </p>

          <div className="space-y-6">
            {nocProcess.map((item, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-2xl p-6">
                <div className="mb-4">
                  <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-2">
                    {item.scenario}
                  </h3>
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif] italic">
                    {item.reason}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="font-['Inter',sans-serif] font-semibold text-black mb-3 text-sm">
                    Steps to Follow:
                  </p>
                  <ol className="space-y-2">
                    {item.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="font-['Inter',sans-serif] font-bold text-[#4094f4] shrink-0">
                          {idx + 1}.
                        </span>
                        <span className="text-[#626262] font-['Inter',sans-serif] text-sm">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
            <p className="font-['Inter',sans-serif] text-sm text-[#626262]">
              <span className="font-semibold text-black">Important:</span> NOC process can take 30-60 days.
              Always maintain detailed medical records and get specialist opinions. Contact DGCA medical cell
              for specific guidance on your case.
            </p>
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
