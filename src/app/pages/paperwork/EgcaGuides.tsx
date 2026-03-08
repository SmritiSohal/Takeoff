import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { FileText, Monitor, AlertCircle, CheckCircle, Download, ArrowLeft, Image as ImageIcon } from 'lucide-react';

export default function EgcaGuides() {
  const navigate = useNavigate();

  const portalSteps = [
    {
      step: 1,
      title: 'Registration on eGCA Portal',
      screens: ['Homepage navigation', 'Student registration form', 'OTP verification'],
      details: [
        'Visit https://egca.dgca.gov.in/fweb/',
        'Click on "Student Registration"',
        'Fill personal details exactly as per documents',
        'Verify mobile number and email with OTP',
        'Create a strong password and security question'
      ]
    },
    {
      step: 2,
      title: 'Document Upload',
      screens: ['Document selection', 'File upload interface', 'Preview & confirm'],
      details: [
        'Scan all documents in exact specifications',
        'Photo: 35x45mm, white background, JPEG < 50KB',
        'Signature: Black ink on white paper, JPEG < 50KB',
        'Certificates: PDF format, each < 1MB',
        'Upload and verify each document preview'
      ]
    },
    {
      step: 3,
      title: 'Application Submission',
      screens: ['Application form', 'Document checklist', 'Payment gateway'],
      details: [
        'Select "Computer Number Application"',
        'Fill all mandatory fields (marked with *)',
        'Double-check educational details match certificates',
        'Review complete application before submission',
        'Pay application fee (₹100) via online payment'
      ]
    },
    {
      step: 4,
      title: 'Verification & Approval',
      screens: ['Application status', 'DGCA verification', 'Computer number issue'],
      details: [
        'Track application status in your dashboard',
        'DGCA verification usually takes 7-15 working days',
        'Check for any queries or document requests',
        'Download Computer Number certificate after approval',
        'Save and print multiple copies for future use'
      ]
    }
  ];

  const commonErrors = [
    {
      error: 'Photo/Signature format incorrect',
      solution: 'Use online converters to resize to exact dimensions. Background must be pure white (#FFFFFF). Save as JPEG with compression.',
      prevention: 'Always preview uploaded image in portal before submission'
    },
    {
      error: 'Document size exceeds limit',
      solution: 'Use PDF compressor tools. Reduce DPI to 150-200. Remove unnecessary pages.',
      prevention: 'Check file size before upload. Portal shows size limit for each document type'
    },
    {
      error: 'Name mismatch in certificates',
      solution: 'Submit affidavit for name change with gazette notification. Contact DGCA helpdesk for guidance.',
      prevention: 'Ensure all certificates have identical name spelling before applying'
    },
    {
      error: 'Payment failed but amount deducted',
      solution: 'Wait 24-48 hours for auto-refund. Keep transaction ID. Contact bank if not reversed. Submit fresh application.',
      prevention: 'Use recommended browsers (Chrome/Firefox). Don\'t refresh during payment'
    },
    {
      error: 'Application stuck in verification',
      solution: 'Check portal for queries. Email DGCA regional office. Call helpline with application number.',
      prevention: 'Submit complete and accurate documents in first attempt'
    },
    {
      error: 'OTP not received',
      solution: 'Check spam folder. Wait 5 minutes and request resend. Try alternate email/mobile. Clear browser cache.',
      prevention: 'Use active email and mobile number. Ensure good network connectivity'
    }
  ];

  const photoSpecs = [
    { aspect: 'Dimensions', requirement: '35mm x 45mm (passport size)', detail: '450 x 350 pixels minimum' },
    { aspect: 'Background', requirement: 'Plain white (#FFFFFF)', detail: 'No shadows, patterns, or colors' },
    { aspect: 'File Format', requirement: 'JPEG only', detail: '.jpg or .jpeg extension' },
    { aspect: 'File Size', requirement: 'Less than 50 KB', detail: 'Compress if needed' },
    { aspect: 'Face Position', requirement: '70-80% of frame', detail: 'Centered, looking straight' },
    { aspect: 'Attire', requirement: 'Formal wear', detail: 'No caps, sunglasses, or accessories' }
  ];

  const signatureSpecs = [
    { aspect: 'Dimensions', requirement: '40mm x 10mm', detail: '400 x 100 pixels minimum' },
    { aspect: 'Background', requirement: 'Plain white paper', detail: 'Scan or photograph' },
    { aspect: 'Ink Color', requirement: 'Black or dark blue', detail: 'Clear and legible' },
    { aspect: 'File Format', requirement: 'JPEG only', detail: '.jpg or .jpeg extension' },
    { aspect: 'File Size', requirement: 'Less than 50 KB', detail: 'Compress if needed' },
    { aspect: 'Signature Style', requirement: 'Full signature', detail: 'Must match passport signature' }
  ];

  return (
    <ModuleLayout
      title="eGCA Portal Complete Guide"
      subtitle="Step-by-Step Navigation"
    >
      <div className="space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/paperwork')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Paperwork Hub
        </button>

        {/* Portal Navigation Guide */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-50 rounded-2xl w-14 h-14 flex items-center justify-center">
              <Monitor className="w-7 h-7 text-[#4094f4]" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              Complete Portal Walkthrough
            </h2>
          </div>

          <p className="text-[#626262] font-['Inter',sans-serif] mb-8 leading-relaxed">
            Follow this screen-by-screen guide to successfully navigate the eGCA portal and obtain your
            Computer Number without any errors or rejections.
          </p>

          <div className="space-y-8">
            {portalSteps.map((item, index) => (
              <div key={index} className="relative">
                {index !== portalSteps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-[#4094f4]/20" />
                )}
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4094f4] to-blue-600 text-white flex items-center justify-center font-['Inter',sans-serif] font-bold text-xl relative z-10">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-3">
                      {item.title}
                    </h3>
                    <div className="bg-gray-50 rounded-xl p-5 mb-4">
                      <p className="text-sm font-['Inter',sans-serif] font-semibold text-[#626262] mb-3 flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        Portal Screens:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.screens.map((screen, idx) => (
                          <span
                            key={idx}
                            className="bg-white px-4 py-2 rounded-full text-sm font-['Inter',sans-serif] text-black border border-gray-200"
                          >
                            {screen}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-[#626262] font-['Inter',sans-serif]">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo & Signature Specifications */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-purple-50 rounded-2xl w-14 h-14 flex items-center justify-center">
              <ImageIcon className="w-7 h-7 text-purple-600" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              Photo & Signature Formatting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Photo Specs */}
            <div>
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-[#4094f4] rounded-full" />
                Photograph Specifications
              </h3>
              <div className="space-y-3">
                {photoSpecs.map((spec, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-['Inter',sans-serif] font-semibold text-black text-sm">
                        {spec.aspect}
                      </span>
                      <span className="text-[#4094f4] font-['Inter',sans-serif] font-medium text-sm">
                        {spec.requirement}
                      </span>
                    </div>
                    <p className="text-xs text-[#626262] font-['Inter',sans-serif]">
                      {spec.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Specs */}
            <div>
              <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
                Signature Specifications
              </h3>
              <div className="space-y-3">
                {signatureSpecs.map((spec, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-['Inter',sans-serif] font-semibold text-black text-sm">
                        {spec.aspect}
                      </span>
                      <span className="text-green-600 font-['Inter',sans-serif] font-medium text-sm">
                        {spec.requirement}
                      </span>
                    </div>
                    <p className="text-xs text-[#626262] font-['Inter',sans-serif]">
                      {spec.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-[#4094f4] p-5 rounded-r-xl">
            <p className="font-['Inter',sans-serif] text-sm text-[#626262]">
              <span className="font-semibold text-black">Pro Tip:</span> Use online tools like
              "Passport Size Photo Maker" or "Compress JPEG" to format your images perfectly.
              Test upload on portal preview before final submission.
            </p>
          </div>
        </div>

        {/* Error Troubleshooting */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-red-50 rounded-2xl w-14 h-14 flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-red-600" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              Common Errors & Solutions
            </h2>
          </div>

          <div className="space-y-6">
            {commonErrors.map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl p-6 hover:border-[#4094f4] transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-red-100 rounded-full p-2 shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-2">
                      {item.error}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-['Inter',sans-serif] font-semibold text-green-700 mb-1">
                          ✓ Solution:
                        </p>
                        <p className="text-[#626262] font-['Inter',sans-serif] text-sm pl-4">
                          {item.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-['Inter',sans-serif] font-semibold text-blue-700 mb-1">
                          ⚡ Prevention:
                        </p>
                        <p className="text-[#626262] font-['Inter',sans-serif] text-sm pl-4">
                          {item.prevention}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="bg-gradient-to-br from-[#4094f4] to-blue-600 rounded-[30px] p-8 text-center">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-white mb-4">
            Download Complete Guide
          </h2>
          <p className="text-white/90 font-['Inter',sans-serif] mb-6 max-w-2xl mx-auto">
            Get the full PDF guide with annotated screenshots, checklist, and quick reference card
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#4094f4] px-6 py-3 rounded-full font-['Inter',sans-serif] font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
              <Download className="w-5 h-5" />
              eGCA Step-by-Step PDF
            </button>
            <button className="bg-white text-[#4094f4] px-6 py-3 rounded-full font-['Inter',sans-serif] font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
              <FileText className="w-5 h-5" />
              Document Checklist
            </button>
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
