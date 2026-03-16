import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import ModuleLayout from '../../components/ModuleLayout';
import { Search, MapPin, Plane, DollarSign, Clock, Phone, ArrowLeft, Filter } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { fetchSchools } from '../../lib/supabase';

type School = {
  id: number;
  name: string;
  location: string;
  country: string;
  fleet_size: number | null;
  estimated_cost_inr: number | null;
  duration_months: number | null;
  hidden_fees: string | null;
  contact: string | null;
  rating: number | null;
};

export default function SchoolDatabase() {
  const navigate = useNavigate();
  const { accessToken } = useAuth();
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('all');

  useEffect(() => {
    const load = async () => {
      if (!accessToken) return;
      setLoading(true);
      setError(null);
      try {
        const rows = await fetchSchools(accessToken);
        setSchools(rows as School[]);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unable to load schools.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [accessToken]);

  const countries = useMemo(
    () => ['all', ...Array.from(new Set(schools.map((school) => school.country).filter(Boolean)))],
    [schools],
  );

  const filteredSchools = schools.filter((school) => {
    const matchesSearch =
      searchTerm === '' ||
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCountry = countryFilter === 'all' || school.country === countryFilter;
    return matchesSearch && matchesCountry;
  });

  return (
    <ModuleLayout title="Complete Flying School Database" subtitle="Live data from TakeOff backend">
      <div className="space-y-8">
        <button
          onClick={() => navigate('/flying-schools')}
          className="flex items-center gap-2 text-white hover:text-[#4094f4] transition-colors font-['Inter',sans-serif] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Flying Schools
        </button>

        <div className="bg-white rounded-[30px] p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search schools by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-4 relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full font-['Inter',sans-serif] focus:border-[#4094f4] outline-none transition-colors bg-white"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country === 'all' ? 'All countries' : country}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {loading && <p className="text-white text-center">Loading school database...</p>}
        {error && <p className="text-red-300 text-center">{error}</p>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSchools.map((school) => (
            <div key={school.id} className="bg-white rounded-[24px] p-6 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-xl text-black">{school.name}</h3>
                  <p className="text-sm text-gray-500">{school.country}</p>
                </div>
                {school.rating ? (
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ★ {school.rating}
                  </span>
                ) : null}
              </div>
              <div className="space-y-2 text-sm text-[#626262]">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" />{school.location}</p>
                <p className="flex items-center gap-2"><Plane className="w-4 h-4" />Fleet: {school.fleet_size ?? 'N/A'}</p>
                <p className="flex items-center gap-2"><DollarSign className="w-4 h-4" />Estimated cost: {school.estimated_cost_inr ? `₹${(school.estimated_cost_inr / 100000).toFixed(1)}L` : 'N/A'}</p>
                <p className="flex items-center gap-2"><Clock className="w-4 h-4" />Duration: {school.duration_months ? `${school.duration_months} months` : 'N/A'}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" />{school.contact ?? 'Contact hidden'}</p>
              </div>
              {school.hidden_fees && <p className="text-xs text-gray-500">Hidden fees note: {school.hidden_fees}</p>}
            </div>
          ))}
        </div>
      </div>
    </ModuleLayout>
  );
}
