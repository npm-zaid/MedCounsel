"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, MapPin, GraduationCap, Stethoscope, 
  Building2, Info, Filter, X, ChevronRight 
} from "lucide-react";

// REAL DATASET: 20+ ENTRIES
export const MEDICAL_COLLEGES = [
  { id: 1, name: "AIIMS New Delhi", type: "INI", state: "Delhi", seats: 776, beds: 3194, fee: "₹1,628", category: "Government" },
  { id: 2, name: "PGIMER Chandigarh", type: "INI", state: "Chandigarh", seats: 130, beds: 500, fee: "₹2,292", category: "Government" },
  { id: 3, name: "JIPMER Puducherry", type: "INI", state: "Puducherry", seats: 119, beds: 2059, fee: "₹5,380", category: "Government" },
  { id: 4, name: "MAMC New Delhi", type: "State", state: "Delhi", seats: 246, beds: 2800, fee: "₹15,600", category: "Government" },
  { id: 5, name: "KGMU Lucknow", type: "State", state: "Uttar Pradesh", seats: 200, beds: 4500, fee: "₹1,64,000", category: "Government" },
  { id: 6, name: "VMMC & Safdarjung Hospital", type: "Central", state: "Delhi", seats: 343, beds: 2900, fee: "₹30,000", category: "Government" },
  { id: 7, name: "Madras Medical College", type: "State", state: "Tamil Nadu", seats: 240, beds: 2722, fee: "₹1,47,000", category: "Government" },
  { id: 8, name: "IMS BHU Varanasi", type: "Central", state: "Uttar Pradesh", seats: 160, beds: 1200, fee: "₹25,000", category: "Government" },
  { id: 9, name: "CMC Vellore", type: "Private", state: "Tamil Nadu", seats: 180, beds: 2800, fee: "₹4,50,000", category: "Private" },
  { id: 10, name: "KMC Manipal", type: "Deemed", state: "Karnataka", seats: 250, beds: 2032, fee: "₹17,00,000", category: "Private" },
  { id: 11, name: "Seth GS Medical College (KEM)", type: "State", state: "Maharashtra", seats: 220, beds: 1800, fee: "₹1,14,000", category: "Government" },
  { id: 12, name: "Grant Medical College (JJ)", type: "State", state: "Maharashtra", seats: 180, beds: 2844, fee: "₹1,25,000", category: "Government" },
  { id: 13, name: "BJ Medical College Pune", type: "State", state: "Maharashtra", seats: 210, beds: 1296, fee: "₹1,15,000", category: "Government" },
  { id: 14, name: "SCTIMST Trivandrum", type: "INI", state: "Kerala", seats: 85, beds: 239, fee: "₹65,000", category: "Government" },
  { id: 15, name: "Amrita School of Medicine", type: "Deemed", state: "Kerala", seats: 120, beds: 1450, fee: "₹18,50,000", category: "Private" },
  { id: 16, name: "ILBS New Delhi", type: "Autonomous", state: "Delhi", seats: 45, beds: 155, fee: "₹85,000", category: "Government" },
  { id: 17, name: "St. John's Medical College", type: "Private", state: "Karnataka", seats: 100, beds: 1350, fee: "₹6,50,000", category: "Private" },
  { id: 18, name: "RML Hospital (ABVIMS)", type: "Central", state: "Delhi", seats: 180, beds: 1500, fee: "₹35,000", category: "Government" },
  { id: 19, name: "Lady Hardinge (LHMC)", type: "Central", state: "Delhi", seats: 193, beds: 1270, fee: "₹28,000", category: "Government" },
  { id: 20, name: "NIMHANS Bengaluru", type: "INI", state: "Karnataka", seats: 27, beds: 1000, fee: "₹55,000", category: "Government" },
  { id: 21, name: "UCMS New Delhi", type: "Central", state: "Delhi", seats: 203, beds: 1450, fee: "₹20,000", category: "Government" },
];

export default function page() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedType, setSelectedType] = useState("All Types");

  // EXTRACT UNIQUE VALUES FOR FILTERS
  const states = ["All States", ...new Set(MEDICAL_COLLEGES.map(c => c.state))];
  const types = ["All Types", ...new Set(MEDICAL_COLLEGES.map(c => c.type))];

  // SEARCH & FILTER LOGIC
  const filteredColleges = useMemo(() => {
    return MEDICAL_COLLEGES.filter(clg => {
      const matchesSearch = clg.name.toLowerCase().includes(search.toLowerCase());
      const matchesState = selectedState === "All States" || clg.state === selectedState;
      const matchesType = selectedType === "All Types" || clg.type === selectedType;
      return matchesSearch && matchesState && matchesType;
    });
  }, [search, selectedState, selectedType]);

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans selection:bg-blue-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:pt-32">
        
        {/* HEADER SECTION */}
        <div className="mb-16">
          <h1 className="text-5xl font-[1000] tracking-tighter mb-4">Medical Colleges in India</h1>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]">
            Exploring {filteredColleges.length} clinical institutes for 2025-26 Session
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* SIDEBAR FILTERS */}
          <aside className="lg:col-span-3 space-y-8 bg-blue-50 border border-slate-100 p-8 rounded-[40px] h-fit sm:sticky top-32 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Filter size={14} /> Filter Engine
              </h3>
              {(search || selectedState !== "All States" || selectedType !== "All Types") && (
                <button onClick={() => {setSearch(""); setSelectedState("All States"); setSelectedType("All Types")}} className="text-[10px] text-[#155DFC] font-black uppercase underline decoration-2 underline-offset-4">Reset</button>
              )}
            </div>

            <div className="space-y-6">
              {/* STATE FILTER */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Select State</label>
                <select 
                  value={selectedState} 
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-xs font-bold focus:ring-4 focus:ring-blue-50 focus:border-[#155DFC] outline-none transition-all cursor-pointer"
                >
                  {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* TYPE FILTER */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Institute Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map(t => (
                    <button 
                      key={t}
                      onClick={() => setSelectedType(t)}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase border transition-all ${selectedType === t ? 'bg-[#155DFC] text-white border-[#155DFC] shadow-lg shadow-blue-100' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN RESULTS AREA */}
          <main className="lg:col-span-9 space-y-8">
            {/* SEARCH INPUT */}
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#155DFC] transition-colors" size={20} />
              <input 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by Name (e.g. AIIMS, MAMC)..." 
                className="w-full bg-blue-50 border border-slate-200 pl-16 pr-8 py-6 rounded-[32px] text-lg font-bold shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all"
              />
            </div>

            {/* RESULTS GRID */}
            <div className="space-y-4">
              {filteredColleges.length > 0 ? (
                filteredColleges.map((clg) => (
                  <div key={clg.id} className="group bg-blue-50 border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-[#155DFC]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${clg.category === 'Government' ? 'bg-blue-50 text-[#155DFC] border-blue-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                            {clg.category}
                          </span>
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-1.5"><MapPin size={12} /> {clg.state}</span>
                        </div>
                        <h2 className="text-2xl font-[1000] text-slate-900 leading-tight group-hover:text-[#155DFC] transition-colors">
                          {clg.name}
                        </h2>
                        <div className="flex flex-wrap gap-6 pt-2">
                           <div className="flex items-center gap-2 text-xs font-bold text-slate-500"><GraduationCap size={14} className="text-[#155DFC]"/> {clg.seats} PG Seats</div>
                           <div className="flex items-center gap-2 text-xs font-bold text-slate-500"><Stethoscope size={14} className="text-emerald-500"/> {clg.beds} Beds</div>
                           <div className="flex items-center gap-2 text-xs font-bold text-slate-500"><Building2 size={14} className="text-amber-500"/> {clg.type} Institute</div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-50">
                        <div className="text-right">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Annual Fee</p>
                          <p className="text-xl font-[1000] text-slate-900">{clg.fee}</p>
                        </div>
                        <button onClick={() => router.push(`/explore/${clg.id}`)}  className="flex items-center gap-2 cursor-pointer bg-[#155DFC] text-white px-6 py-3 active:scale-95 transition-all duration-300 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-100">
                          Clinical Info <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-slate-50 rounded-[40px] border border-dashed border-slate-200">
                  <Info className="mx-auto mb-4 text-slate-300" size={40} />
                  <p className="text-slate-500 font-bold">No clinical institutes match your current criteria.</p>
                  <button onClick={() => {setSearch(""); setSelectedState("All States")}} className="mt-4 text-[#155DFC] font-black uppercase text-[10px]">Clear all filters</button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}