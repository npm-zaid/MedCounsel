"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ArrowLeft,
  MapPin,
  Stethoscope,
  Award,
  BriefcaseMedical,
  Coins,
  Building,
  ShieldCheck,
  TrendingUp,
  Download
} from "lucide-react";
import { useParams } from "next/navigation";

/* ================= TYPES ================= */

type MedicalCollege = {
  id: number;
  name: string;
  type: string;
  state: string;
  seats: number;
  beds: number;
  fee: string;
  category: string;
  ranking: number;
  established: number;
};

/* ================= DATA ================= */

const MEDICAL_COLLEGES: MedicalCollege[] = [
  { id: 1, name: "AIIMS New Delhi", type: "INI", state: "Delhi", seats: 776, beds: 3194, fee: "₹1,628", category: "Government", ranking: 1, established: 1956 },
  { id: 2, name: "PGIMER Chandigarh", type: "INI", state: "Chandigarh", seats: 130, beds: 500, fee: "₹2,292", category: "Government", ranking: 2, established: 1962 },
  { id: 3, name: "JIPMER Puducherry", type: "INI", state: "Puducherry", seats: 119, beds: 2059, fee: "₹5,380", category: "Government", ranking: 3, established: 1823 },
  { id: 4, name: "MAMC New Delhi", type: "State", state: "Delhi", seats: 246, beds: 2800, fee: "₹15,600", category: "Government", ranking: 7, established: 1958 },
  { id: 5, name: "KGMU Lucknow", type: "State", state: "Uttar Pradesh", seats: 200, beds: 4500, fee: "₹1,64,000", category: "Government", ranking: 10, established: 1911 },
  { id: 6, name: "VMMC & Safdarjung Hospital", type: "Central", state: "Delhi", seats: 343, beds: 2900, fee: "₹30,000", category: "Government", ranking: 8, established: 2001 },
  { id: 7, name: "Madras Medical College", type: "State", state: "Tamil Nadu", seats: 240, beds: 2722, fee: "₹1,47,000", category: "Government", ranking: 5, established: 1835 },
  { id: 8, name: "IMS BHU Varanasi", type: "Central", state: "Uttar Pradesh", seats: 160, beds: 1200, fee: "₹25,000", category: "Government", ranking: 6, established: 1960 },
  { id: 9, name: "CMC Vellore", type: "Private", state: "Tamil Nadu", seats: 180, beds: 2800, fee: "₹4,50,000", category: "Private", ranking: 4, established: 1900 },
  { id: 10, name: "KMC Manipal", type: "Deemed", state: "Karnataka", seats: 250, beds: 2032, fee: "₹17,00,000", category: "Private", ranking: 12, established: 1953 },
];

/* ================= COMPONENT ================= */

export default function CollegeBrief() {
  const containerRef = useRef(null);
  const params = useParams<{ id: string }>();
  const collegeId = Number(params.id);

  const college = MEDICAL_COLLEGES.find(c => c.id === collegeId);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  if (!college) {
    return (
      <div className="p-20 text-center font-bold text-slate-500">
        College not found
      </div>
    );
  }

  const InfoCard = ({
    icon: Icon,
    label,
    value,
    color
  }: {
    icon: React.ElementType;
    label: string;
    value: string | number;
    color: string;
  }) => (
    <div className="bento-item bg-white border border-slate-100 p-6 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon size={20} className="text-white" />
      </div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-xl font-[1000] text-slate-900 tracking-tight mt-1">{value}</p>
    </div>
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F8FAFC] pb-20 pt-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="bento-item grid lg:grid-cols-12 gap-10 items-end mb-12 bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-[#155DFC] text-[9px] font-black uppercase rounded-lg border border-blue-100">
                {college.type}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-[1000] text-slate-900 tracking-tighter leading-none">
              {college.name}
            </h1>

            <div className="flex items-center gap-4 text-slate-400 font-bold">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-[#155DFC]" />
                {college.state}
              </div>

              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />

              <div className="flex items-center gap-1.5">
                <Award size={16} className="text-amber-500" />
                NIRF Rank #{college.ranking}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">
                Established
              </p>
              <p className="text-5xl font-[1000] text-slate-200">
                {college.established}
              </p>
            </div>
          </div>
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <InfoCard icon={BriefcaseMedical} label="PG Seat Count" value={college.seats} color="bg-[#155DFC]" />
          <InfoCard icon={Building} label="Hospital Beds" value={college.beds} color="bg-indigo-500" />
          <InfoCard icon={Coins} label="Annual Fee" value={college.fee} color="bg-emerald-500" />
          <InfoCard icon={ShieldCheck} label="Category" value={college.category} color="bg-amber-500" />
        </div>

        {/* SIDEBAR */}
        <div className="bento-item bg-slate-900 p-8 rounded-[40px] text-white overflow-hidden relative group max-w-md">
          <TrendingUp className="absolute right-[-10%] bottom-[-10%] w-32 h-32 opacity-10 group-hover:scale-110 transition-transform duration-700" />
          <h4 className="text-xl font-[1000] mb-4">Seat Predictor</h4>
          <p className="text-xs font-bold text-slate-400 leading-relaxed mb-6">
            Based on your rank, see probability of getting clinical branches.
          </p>
          <button className="w-full py-4 bg-[#155DFC] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#155DFC] transition-all">
            Check Probability
          </button>
        </div>

      </div>
    </main>
  );
}