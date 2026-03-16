import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { MapPin, Phone, Mail, Globe, ArrowLeft, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { fetchMedicalCenters } from '../../lib/supabase';

type MedicalCenter = {
  id: number;
  name: string;
  location: string;
  center_type: string;
  address: string | null;
  contact: string | null;
  email: string | null;
  website: string | null;
};

export default function MedicalResources() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');
  const [centers, setCenters] = useState<MedicalCenter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!accessToken) return;
      setLoading(true);
      setError(null);
      try {
        const rows = await fetchMedicalCenters(accessToken);
        setCenters(rows as MedicalCenter[]);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unable to load medical centers.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [accessToken]);

  const cities = useMemo(() => ['all', ...Array.from(new Set(centers.map((c) => c.location)))], [centers]);

  const filtered = centers.filter((center) => {
    const cityMatch = selectedCity === 'all' || center.location === selectedCity;
    const searchMatch =
      searchTerm === '' ||
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.location.toLowerCase().includes(searchTerm.toLowerCase());
    return cityMatch && searchMatch;
  });

  return (
    <ModuleLayout title="Medical Resources & Directory" subtitle="Live DGCA medical directory">
      <div className="space-y-8">
        <button
          onClick={() => navigate('/medical')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Medical Guidance
        </button>

        <div className="bg-white rounded-[30px] p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by center name or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-3 rounded-full font-['Inter',sans-serif] font-medium whitespace-nowrap transition-colors ${
                    selectedCity === city ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {city === 'all' ? 'All Cities' : city}
                </button>
              ))}
            </div>
          </div>

          {loading && <p className="text-center text-[#626262]">Loading medical directory...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((center) => (
              <div key={center.id} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-[#4094f4] transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-black">{center.name}</h3>
                    <p className="text-sm text-[#626262]">{center.center_type}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-[#626262]">
                  <p className="flex items-center gap-2"><MapPin className="w-4 h-4" />{center.location}</p>
                  {center.address && <p>{center.address}</p>}
                  {center.contact && <p className="flex items-center gap-2"><Phone className="w-4 h-4" />{center.contact}</p>}
                  {center.email && <p className="flex items-center gap-2"><Mail className="w-4 h-4" />{center.email}</p>}
                  {center.website && (
                    <a href={center.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#4094f4] hover:underline">
                      <Globe className="w-4 h-4" /> Visit website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
}
