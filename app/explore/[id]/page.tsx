"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowLeft, MapPin, Stethoscope, Award, 
  BriefcaseMedical, Coins, Building, ShieldCheck, 
  Download, Share2, Activity, Globe, Heart
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { MEDICAL_COLLEGES } from "../page";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function CollegeBrief() {
  const containerRef = useRef(null);
  const router = useRouter();
  const params = useParams();

  const collegeId = Number(params.id);
  const college = MEDICAL_COLLEGES.find((c) => c.id === collegeId) || MEDICAL_COLLEGES[0];

  useEffect(()=>{
    window.scrollTo(0,0);
  })

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Smooth entrance for bento boxes
  

    // Parallax effect on the background typography
    gsap.to(".bg-text", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 2
      },
      x: -200
    });
  }, { scope: containerRef });

  const metrics = [
    { icon: BriefcaseMedical, label: "Total PG Seats", value: college.seats, color: "bg-[#155DFC]", sub: "Yearly intake" },
    { icon: Building, label: "In-Patient Beds", value: college.beds, color: "bg-indigo-500", sub: "Clinical capacity" },
    { icon: Coins, label: "Tuition Fee", value: college.fee, color: "bg-emerald-500", sub: "Annual estimate" },
    { icon: ShieldCheck, label: "Institution Type", value: college.type, color: "bg-amber-500", sub: college.category },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F0F4F9] pb-24 relative overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="bg-text absolute top-20 right-0 text-[25vw] font-black text-slate-200/40 whitespace-nowrap pointer-events-none z-0">
        {college.type} DOSSIER
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* NAV BAR */}
        <nav className="flex items-center justify-between py-8">
          <button 
            onClick={() => router.back()}
            className="group flex items-center gap-3 px-5 py-2.5 bg-white rounded-2xl border border-slate-200 text-slate-500 font-black text-[10px] uppercase tracking-widest hover:border-[#155DFC] hover:text-[#155DFC] transition-all"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Return to Explore
          </button>
          <div className="flex gap-3">
            <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-[#155DFC] hover:shadow-xl transition-all"><Share2 size={18} /></button>
            <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-red-500 hover:shadow-xl transition-all"><Heart size={18} /></button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: HERO & CLINICAL PROFILE (Col 8) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="reveal-item bg-white/80 backdrop-blur-2xl p-10 lg:p-14 rounded-[50px] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Stethoscope size={150} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-[#155DFC] text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                    Ranked #1 Clinical
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                    <Activity size={14} /> Live Seat Data
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-[1000] text-slate-900 tracking-tighter leading-none mb-8">
                  {college.name}
                </h1>

                <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Location</span>
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><MapPin size={14} className="text-[#155DFC]" /> {college.state}, India</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Foundation</span>
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><Award size={14} className="text-amber-500" /> Est. {college.established}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Official Portal</span>
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><Globe size={14} className="text-blue-400" /> {college.website}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-item bg-slate-900 p-12 rounded-[50px] text-white">
              <h3 className="text-2xl font-[1000] flex items-center gap-3 mb-6 tracking-tight">
                <Stethoscope className="text-blue-400" /> Clinical Profile & Exposure
              </h3>
              <p className="text-slate-400 font-bold leading-relaxed text-lg">
                As a premier {college.type} institute, {college.name} offers unparalleled hand-on surgical and medical training. 
                With a patient inflow of over 10,000+ daily in the OPD, postgraduate residents manage a diverse case mix 
                that is considered the gold standard for Indian medical education.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-white/5 rounded-[30px] border border-white/10">
                  <h4 className="text-[#155DFC] font-black text-xs uppercase tracking-widest mb-2">Hands-on Ratio</h4>
                  <p className="text-3xl font-[1000]">Excellent</p>
                </div>
                <div className="p-6 bg-white/5 rounded-[30px] border border-white/10">
                  <h4 className="text-emerald-400 font-black text-xs uppercase tracking-widest mb-2">OPD Load</h4>
                  <p className="text-3xl font-[1000]">Critical</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: METRICS (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {metrics.map((m, i) => (
                <div key={i} className="reveal-item group bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl ${m.color} flex items-center justify-center text-white shadow-lg shadow-inner`}>
                      <m.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{m.label}</p>
                      <p className="text-3xl font-[1000] text-slate-900 tracking-tighter">{m.value}</p>
                      <p className="text-[9px] font-bold text-slate-300 uppercase mt-1">{m.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="reveal-item w-full py-6 bg-white border-2 border-dashed border-slate-200 rounded-[40px] flex flex-col items-center justify-center gap-2 group hover:border-[#155DFC] transition-all">
              <Download className="text-slate-300 group-hover:text-[#155DFC] group-hover:bounce transition-all" size={32} />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900">Download Prospectus</span>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}