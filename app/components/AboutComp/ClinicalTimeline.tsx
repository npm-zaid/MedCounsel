"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { 
  History, 
  ChevronRight, 
  ChevronLeft,
  Calendar,
  Flag,
  Rocket,
  ShieldCheck,
  Globe
} from "lucide-react";

const MILESTONES = [
  {
    year: "2014",
    title: "The Genesis",
    desc: "Started as RxPG, providing targeted support for Tamil Nadu PG aspirants with focused counseling help.",
    icon: <Flag size={20} />
  },
  {
    year: "2017",
    title: "NEET PG Simplified",
    desc: "Began providing simplified NEET PG information specifically for Tamil Nadu candidates.",
    icon: <Rocket size={20} />
  },
  {
    year: "2018",
    title: "Building Community",
    desc: "Launched NEET PG guidance on Facebook with the NEET PG Stats & Counselling Support group.",
    icon: <ShieldCheck size={20} />
  },
  {
    year: "2019",
    title: "National Expansion",
    desc: "Expanded nationwide to cover NEET PG AIQ, DNB, and All State Counsellings.",
    icon: <Globe size={20} />
  }
];

export default function ClinicalTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".timeline-card", 
      { opacity: 0, x: 50, rotateY: 20 },
      { opacity: 1, x: 0, rotateY: 0, stagger: 0.1, duration: 0.8, ease: "power4.out" }
    );
  }, [activeIndex]);

  const next = () => setActiveIndex((prev) => (prev + 1) % MILESTONES.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + MILESTONES.length) % MILESTONES.length);

  return (
    <section className="pb-[10vh] w-full bg-white flex items-center justify-center overflow-hidden p-6 relative">
      {/* Neural Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#155DFC 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl w-full relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#155DFC] text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100">
              <History size={14} /> Our Journey
            </div>
            <h2 className="text-5xl lg:text-6xl font-[1000] text-slate-900 tracking-tighter leading-none">
              One Milestone <br />
              <span className="bg-gradient-to-r from-[#155DFC] to-blue-400 bg-clip-text text-transparent italic">At A Time.</span>
            </h2>
          </div>
          
          {/* Custom Navigation */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button onClick={prev} className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:border-[#155DFC] hover:text-[#155DFC] transition-all group">
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white hover:bg-[#155DFC] transition-all group shadow-xl shadow-blue-100">
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* TIMELINE TRACK */}
        <div className="relative pt-12">
          {/* The Progress Pipe */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-100">
            <div 
              className="h-full bg-gradient-to-r from-[#155DFC] to-blue-400 transition-all duration-1000 ease-in-out" 
              style={{ width: `${((activeIndex + 1) / MILESTONES.length) * 100}%` }}
            />
          </div>

          {/* DYNAMIC GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 perspective-1000">
            {MILESTONES.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <div key={i} className="timeline-card group">
                  {/* The Pulse Node */}
                  <div className={`absolute -top-[7px] left-8 w-4 h-4 rounded-full border-4 border-white transition-all duration-500 z-20 ${isActive ? 'bg-[#155DFC] scale-150 shadow-[0_0_20px_rgba(21,93,252,0.5)]' : 'bg-slate-200'}`} />
                  
                  <div className={`
                    mt-8 p-8 rounded-[40px] border-2 transition-all duration-500 h-[320px] flex flex-col
                    ${isActive ? 'bg-white border-[#155DFC] shadow-2xl scale-105' : 'bg-slate-50/50 border-transparent hover:border-slate-200 opacity-60'}
                  `}>
                    <div className="flex justify-between items-start mb-6">
                      <span className={`text-4xl font-[1000] tracking-tighter ${isActive ? 'text-[#155DFC]' : 'text-slate-300'}`}>
                        {item.year}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isActive ? 'bg-[#155DFC] text-white rotate-[360deg]' : 'bg-white text-slate-300 shadow-sm'}`}>
                        {item.icon}
                      </div>
                    </div>

                    <h3 className={`text-xl font-[1000] tracking-tight mb-4 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm font-bold leading-relaxed flex-1 ${isActive ? 'text-slate-500' : 'text-slate-400'}`}>
                      {item.desc}
                    </p>

                    <div className={`flex items-center gap-2 mt-6 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="h-[2px] w-6 bg-blue-100" />
                      <span className="text-[10px] font-black text-[#155DFC] uppercase tracking-widest">Historical Milestone</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Expiry / Footer Detail */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <div className="h-px w-12 bg-slate-200" />
        <p className="text-[9px] font-[1000] text-slate-300 uppercase tracking-[0.5em]">
          Clinical Heritage since 2014
        </p>
        <div className="h-px w-12 bg-slate-200" />
      </div>
    </section>
  );
}