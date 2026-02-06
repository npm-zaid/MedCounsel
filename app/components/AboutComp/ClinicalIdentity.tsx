"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  Database, 
  Search, 
  BarChart3, 
  ShieldCheck,
  Zap,
  Microscope
} from "lucide-react";

export default function ClinicalIdentity() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const methods = [
    { 
      title: "HISTORICAL DATA MINING", 
      desc: "Deep analysis of 10+ years of MCC and State-wise seat matrices.",
      icon: <Database size={18} /> 
    },
    { 
      title: "PREDICTIVE ALGORITHMS", 
      desc: "Proprietary AI that accounts for real-time seat increments and category shifts.",
      icon: <Zap size={18} /> 
    },
    { 
      title: "HUMAN VALIDATION", 
      desc: "Every data point is cross-verified by senior medical education consultants.",
      icon: <ShieldCheck size={18} /> 
    }
  ];

  return (
    <section ref={sectionRef} className="pb-[20vh] w-full flex items-center justify-center overflow-hidden relative px-6">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#155DFC 1px, transparent 1px), linear-gradient(90deg, #155DFC 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT: THE PROCESS */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#155DFC] text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100">
            <Microscope size={14} /> Methodology
          </div>

          <h1 className="text-6xl lg:text-7xl font-[1000] text-slate-900 tracking-tighter leading-[0.9]">
            The Science <br />
            <span className="bg-gradient-to-r from-[#155DFC] to-blue-400 bg-clip-text text-transparent italic">Behind the Seat.</span>
          </h1>

          <p className="text-slate-500 font-bold text-lg max-w-lg leading-relaxed">
            Just like a lab report needs precision, our engine analyzes millions of data points to ensure your counseling strategy is based on facts, not guesswork.
          </p>

          {/* VERTICAL PROCESS TRACE */}
          <div className="space-y-8 relative">
            <div className="absolute left-[21px] top-2 bottom-2 w-[2px] bg-slate-100" />
            {methods.map((step, i) => (
              <div key={i} className="group flex items-start gap-6 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-[#155DFC] group-hover:text-[#155DFC] transition-all duration-300 shadow-sm">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-sm font-bold max-w-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: THE DATA VISUAL */}
        <div className="relative flex justify-center lg:justify-end h-full">
          {/* Main Visual Frame: Data Blueprint */}
          <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[60px] bg-slate-900 overflow-hidden border-[12px] border-slate-50 shadow-2xl flex items-center justify-center p-8">
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#155DFC 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
            
            {/* Mock Data UI Elements */}
            <div className="relative z-10 w-full space-y-6">
              <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] animate-pulse">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2 w-24 bg-blue-400/30 rounded" />
                  <BarChart3 className="text-blue-400" size={20} />
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-white/10 rounded" />
                  <div className="h-1 w-3/4 bg-white/10 rounded" />
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#155DFC] to-blue-400 rounded-[30px] shadow-xl shadow-blue-500/20">
                <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-2">Live Accuracy</p>
                <p className="text-4xl font-[1000] text-white tracking-tighter">99.2%</p>
              </div>
            </div>
          </div>

          {/* FLOATING PERFORMANCE BADGE */}
          <div className="absolute -top-6 -right-6 lg:right-0 bg-white p-6 rounded-[35px] shadow-[0_20px_50px_rgba(21,93,252,0.15)] border border-slate-100 flex flex-col items-center">
            <span className="text-4xl font-[1000] text-[#155DFC] tracking-tighter">Real-Time</span>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mt-2 leading-tight">
              Synced with <br /> official APIs
            </p>
          </div>

          {/* SEARCH STATUS OVERLAY */}
          <div className="absolute -bottom-8 -left-8 bg-[#155DFC] text-white p-6 rounded-[30px] shadow-2xl flex items-center gap-4 border border-blue-400">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Search size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest">Scanning</p>
              <p className="text-sm font-bold leading-none">4,500+ Medical Colleges</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}