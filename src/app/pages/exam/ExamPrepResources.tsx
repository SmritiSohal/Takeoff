import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { BookOpen, FileText, ArrowLeft, Download, Search, Filter } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { fetchStudyMaterial } from '../../lib/supabase';

type StudyMaterial = {
  id: number;
  subject: string;
  title: string;
  category: string | null;
  description: string | null;
  file_url: string | null;
  premium: boolean;
};

export default function ExamPrepResources() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const load = async () => {
      if (!accessToken) return;
      setLoading(true);
      setError(null);
      try {
        const rows = await fetchStudyMaterial(accessToken);
        setMaterials(rows as StudyMaterial[]);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unable to load study materials.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [accessToken]);

  const subjects = useMemo(() => ['all', ...Array.from(new Set(materials.map((m) => m.subject)))], [materials]);
  const categories = useMemo(() => ['all', ...Array.from(new Set(materials.map((m) => m.category).filter(Boolean)))], [materials]);

  const visibleMaterials = materials.filter((m) => {
    const matchSubject = selectedSubject === 'all' || m.subject === selectedSubject;
    const matchCategory = selectedCategory === 'all' || m.category === selectedCategory;
    const matchSearch = searchTerm === '' || m.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSubject && matchCategory && matchSearch;
  });

  return (
    <ModuleLayout title="Complete Exam Preparation" subtitle="Live question banks + study materials">
      <div className="space-y-8">
        <button
          onClick={() => navigate('/exam-prep')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Exam Prep
        </button>

        <div className="bg-white rounded-[30px] p-8 md:p-10">
          {/* Search + Category */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            <div className="md:col-span-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by resource name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-4 relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Subject pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`px-6 py-3 rounded-full font-['Inter',sans-serif] font-semibold transition-all ${
                  selectedSubject === subject ? 'bg-[#4094f4] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {subject === 'all' ? 'All Subjects' : subject}
              </button>
            ))}
          </div>

          {loading && <p className="text-center text-[#626262]">Loading study materials...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleMaterials.map((material) => (
              <div key={material.id} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-[#4094f4] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-black text-lg">{material.title}</h3>
                    <p className="text-sm text-[#626262]">{material.subject}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${material.premium ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                    {material.premium ? 'Premium' : 'Free'}
                  </span>
                </div>

                <p className="text-sm text-[#626262] mb-4">{material.description ?? 'No description provided.'}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{material.category ?? 'material'}</span>
                  {material.file_url ? (
                    <a
                      href={material.file_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Open
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm">
                      <FileText className="w-4 h-4" />
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {!loading && visibleMaterials.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-[#626262]">No materials match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </ModuleLayout>
  );
}
