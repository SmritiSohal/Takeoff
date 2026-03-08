import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { BookOpen, Download, Play, FileText, Target, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

export default function ExamPrepResources() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('navigation');
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const subjects = [
    { id: 'navigation', name: 'Air Navigation', color: 'bg-blue-500' },
    { id: 'meteorology', name: 'Meteorology', color: 'bg-sky-500' },
    { id: 'regulation', name: 'Air Regulation', color: 'bg-purple-500' },
    { id: 'technical', name: 'Technical General', color: 'bg-amber-500' }
  ];

  const studyMaterials = {
    navigation: {
      chapters: [
        { title: 'Basic Navigation Principles', books: 3, questionBanks: 2 },
        { title: 'Dead Reckoning & Map Reading', books: 2, questionBanks: 2 },
        { title: 'Radio Navigation (VOR, NDB, DME)', books: 4, questionBanks: 3 },
        { title: 'GPS & Modern Navigation Systems', books: 2, questionBanks: 1 },
        { title: 'Flight Planning & Fuel Calculations', books: 3, questionBanks: 2 }
      ],
      books: [
        { title: 'Air Navigation - Complete Guide', author: 'CAE Oxford', pages: 450, format: 'PDF' },
        { title: 'Navigation Calculations Workbook', author: 'Aviation Academy', pages: 180, format: 'PDF' },
        { title: 'Radio Navigation Handbook', author: 'DGCA Approved', pages: 320, format: 'PDF' }
      ]
    },
    meteorology: {
      chapters: [
        { title: 'Atmosphere & Atmospheric Pressure', books: 2, questionBanks: 2 },
        { title: 'Wind & Weather Systems', books: 3, questionBanks: 2 },
        { title: 'Clouds, Fog & Visibility', books: 2, questionBanks: 2 },
        { title: 'Aviation Weather Reports (METAR, TAF)', books: 2, questionBanks: 1 },
        { title: 'Tropical Meteorology & Monsoons', books: 2, questionBanks: 2 }
      ],
      books: [
        { title: 'Meteorology for Pilots', author: 'Oxford Aviation', pages: 380, format: 'PDF' },
        { title: 'Weather Briefing Guide', author: 'DGCA', pages: 220, format: 'PDF' },
        { title: 'Cloud Atlas for Aviators', author: 'Met Department', pages: 150, format: 'PDF' }
      ]
    },
    regulation: {
      chapters: [
        { title: 'DGCA & ICAO Structure', books: 2, questionBanks: 1 },
        { title: 'Airspace Classification (A-G)', books: 2, questionBanks: 2 },
        { title: 'Flight Rules (VFR & IFR)', books: 3, questionBanks: 2 },
        { title: 'Licensing & Certification', books: 2, questionBanks: 1 },
        { title: 'Air Traffic Services', books: 2, questionBanks: 2 }
      ],
      books: [
        { title: 'DGCA CAR (Civil Aviation Requirements)', author: 'Official DGCA', pages: 520, format: 'PDF' },
        { title: 'Air Law for CPL', author: 'Aviation Press', pages: 290, format: 'PDF' },
        { title: 'ICAO Annexes Summary', author: 'International', pages: 180, format: 'PDF' }
      ]
    },
    technical: {
      chapters: [
        { title: 'Principles of Flight', books: 4, questionBanks: 3 },
        { title: 'Aircraft Engines & Propellers', books: 3, questionBanks: 2 },
        { title: 'Aircraft Systems & Instruments', books: 4, questionBanks: 3 },
        { title: 'Aircraft Performance & Loading', books: 3, questionBanks: 2 },
        { title: 'Aircraft Structures & Materials', books: 2, questionBanks: 2 }
      ],
      books: [
        { title: 'Principles of Flight', author: 'Oxford Aviation', pages: 480, format: 'PDF' },
        { title: 'Aircraft Technical Manual', author: 'CAE', pages: 550, format: 'PDF' },
        { title: 'Engine Systems Guide', author: 'Aviation Academy', pages: 320, format: 'PDF' }
      ]
    }
  };

  const cheatSheets = [
    { title: 'Navigation Formulas Quick Reference', pages: 4, downloads: 1240 },
    { title: 'Cloud Types & Weather Symbols', pages: 2, downloads: 1580 },
    { title: 'Airspace Classification Chart', pages: 3, downloads: 1350 },
    { title: 'V-Speeds & Performance Charts', pages: 5, downloads: 1620 },
    { title: 'Radio Telephony Phraseology', pages: 3, downloads: 1490 },
    { title: 'METAR/TAF Decoding Guide', pages: 2, downloads: 1710 }
  ];

  const mockTests = [
    { subject: 'Air Navigation', questions: 100, duration: 120, difficulty: 'Medium', attempts: 3 },
    { subject: 'Meteorology', questions: 100, duration: 120, difficulty: 'Medium', attempts: 3 },
    { subject: 'Air Regulation', questions: 100, duration: 120, difficulty: 'Easy', attempts: 2 },
    { subject: 'Technical General', questions: 100, duration: 120, difficulty: 'Hard', attempts: 4 },
    { subject: 'Full Mock Test (All Subjects)', questions: 400, duration: 480, difficulty: 'Hard', attempts: 1 }
  ];

  const currentSubjectData = studyMaterials[selectedSubject as keyof typeof studyMaterials];

  const handleMockTest = (subject: string) => {
    // Simulate taking a mock test
    const randomScore = Math.floor(Math.random() * 30) + 70; // Score between 70-100
    setMockTestScore(randomScore);
    setTimeout(() => setMockTestScore(null), 5000);
  };

  return (
    <ModuleLayout
      title="Complete Exam Preparation"
      subtitle="Master All DGCA Subjects"
    >
      <div className="space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/exam-prep')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Exam Prep
        </button>

        {/* Subject Selector */}
        <div className="bg-white rounded-[30px] p-6">
          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`px-6 py-3 rounded-full font-['Inter',sans-serif] font-semibold transition-all ${
                  selectedSubject === subject.id
                    ? `${subject.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>

        {/* Study Material */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-50 rounded-2xl w-14 h-14 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-[#4094f4]" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              Complete Study Material - {subjects.find(s => s.id === selectedSubject)?.name}
            </h2>
          </div>

          {/* Chapters */}
          <div className="space-y-4 mb-8">
            {currentSubjectData.chapters.map((chapter, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#4094f4] transition-colors"
              >
                <button
                  onClick={() => setExpandedChapter(expandedChapter === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4094f4] text-white flex items-center justify-center font-['Inter',sans-serif] font-bold">
                      {index + 1}
                    </div>
                    <div className="text-left">
                      <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                        {chapter.books} books · {chapter.questionBanks} question banks
                      </p>
                    </div>
                  </div>
                  {expandedChapter === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {expandedChapter === index && (
                  <div className="p-6 bg-white border-t-2 border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-['Inter',sans-serif] font-bold text-[#4094f4]">
                          {chapter.books}
                        </p>
                        <p className="text-sm text-[#626262] font-['Inter',sans-serif] mt-1">
                          Books
                        </p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <p className="text-2xl font-['Inter',sans-serif] font-bold text-purple-600">
                          {chapter.questionBanks}
                        </p>
                        <p className="text-sm text-[#626262] font-['Inter',sans-serif] mt-1">
                          Question Banks
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button className="flex-1 bg-[#4094f4] text-white px-4 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        Watch Videos
                      </button>
                      <button className="flex-1 bg-black text-white px-4 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download Notes
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Books */}
          <div>
            <h3 className="font-['Inter',sans-serif] font-bold text-xl text-black mb-4">
              Recommended Books
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentSubjectData.books.map((book, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-[#4094f4] rounded-xl w-16 h-20 flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-['Inter',sans-serif] font-bold text-black mb-2">
                    {book.title}
                  </h4>
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif] mb-1">
                    {book.author}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    {book.pages} pages · {book.format}
                  </p>
                  <button className="w-full bg-black text-white px-4 py-2 rounded-full font-['Inter',sans-serif] font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question Bank Stats */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-[30px] p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center">
              <FileText className="w-7 h-7 text-purple-600" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black">
              Question Banks & Notes - Downloadable PDFs
            </h2>
          </div>

          <p className="text-center text-[#626262] font-['Inter',sans-serif] mb-6">
            Access regularly updated question banks and comprehensive notes for all DGCA subjects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-50 rounded-xl w-14 h-14 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#4094f4]" />
                </div>
                <div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black">
                    Air Navigation Question Bank
                  </h3>
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                    500+ questions · Last updated: March 2026
                  </p>
                </div>
              </div>
              <button className="w-full bg-black text-white px-4 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sky-50 rounded-xl w-14 h-14 flex items-center justify-center">
                  <Target className="w-7 h-7 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black">
                    Meteorology Question Bank
                  </h3>
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                    450+ questions · Last updated: March 2026
                  </p>
                </div>
              </div>
              <button className="w-full bg-black text-white px-4 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-50 rounded-xl w-14 h-14 flex items-center justify-center">
                  <Target className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black">
                    Air Regulation Question Bank
                  </h3>
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                    400+ questions · Last updated: March 2026
                  </p>
                </div>
              </div>
              <button className="w-full bg-black text-white px-4 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-50 rounded-xl w-14 h-14 flex items-center justify-center">
                  <Target className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black">
                    Technical General Question Bank
                  </h3>
                  <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                    600+ questions · Last updated: March 2026
                  </p>
                </div>
              </div>
              <button className="w-full bg-black text-white px-4 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center">
            <p className="text-[#626262] font-['Inter',sans-serif] mb-1">
              <span className="font-bold text-black">1950+</span> total practice questions
            </p>
            <p className="text-sm text-gray-400 font-['Inter',sans-serif]">
              All question banks follow DGCA exam pattern and are regularly updated
            </p>
          </div>
        </div>

        {/* Cheat Sheets */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-6">
            Quick Revision Cheat Sheets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cheatSheets.map((sheet, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl hover:bg-gray-100 transition-colors border-2 border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#4094f4] rounded-xl w-12 h-16 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-['Inter',sans-serif] font-semibold text-black mb-1">
                      {sheet.title}
                    </h3>
                    <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                      {sheet.pages} pages · {sheet.downloads.toLocaleString()} downloads
                    </p>
                  </div>
                </div>
                <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Tests */}
        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-6">
            Computer-Based Mock Tests
          </h2>

          <div className="space-y-4">
            {mockTests.map((test, index) => (
              <div
                key={index}
                className={`border-2 rounded-2xl p-6 ${
                  index === mockTests.length - 1
                    ? 'border-[#4094f4] bg-blue-50/50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-['Inter',sans-serif] font-bold text-lg text-black mb-2">
                      {test.subject}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-[#626262] font-['Inter',sans-serif]">
                      <span>📝 {test.questions} Questions</span>
                      <span>⏱️ {test.duration} Minutes</span>
                      <span className={`px-3 py-1 rounded-full ${
                        test.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                        test.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {test.difficulty}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleMockTest(test.subject)}
                    className="bg-black text-white px-6 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-[#4094f4] transition-colors"
                  >
                    Start Test
                  </button>
                </div>

                {test.attempts > 0 && (
                  <div className="bg-gray-100 rounded-xl p-4">
                    <p className="text-sm text-[#626262] font-['Inter',sans-serif]">
                      Previous attempts: {test.attempts} · Best score: {Math.floor(Math.random() * 15) + 85}%
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mock Test Result Modal */}
        {mockTestScore !== null && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-[30px] max-w-md w-full p-8 text-center animate-in zoom-in duration-300">
              <div className={`${mockTestScore >= 70 ? 'bg-green-100' : 'bg-red-100'} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6`}>
                <CheckCircle className={`w-12 h-12 ${mockTestScore >= 70 ? 'text-green-600' : 'text-red-600'}`} />
              </div>
              <h2 className="font-['Inter',sans-serif] font-bold text-3xl text-black mb-2">
                {mockTestScore}%
              </h2>
              <p className="text-[#626262] font-['Inter',sans-serif] mb-6">
                {mockTestScore >= 70 ? '🎉 You Passed! Great job!' : '💪 Keep practicing!'}
              </p>
              <p className="text-sm text-gray-400 font-['Inter',sans-serif]">
                Passing score: 70% · You scored: {mockTestScore}/100
              </p>
            </div>
          </div>
        )}
      </div>
    </ModuleLayout>
  );
}