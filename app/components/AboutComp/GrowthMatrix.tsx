"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  Users2, 
  TrendingUp, 
  MapPin, 
  Briefcase,
  Zap,
  ArrowUpRight
} from "lucide-react";

export default function GrowthMatrixLight() {
  const containerRef = useRef(null);

  const stats = [
    { 
      id: "users",
      val: "1.5L+", 
      label: "Registered Users", 
      sub: "Active aspirants across India", 
      icon: <Users2 size={22} />,
      grid: "col-span-12 md:col-span-7",
      delay: 0.1
    },
    { 
      id: "market",
      val: "60%", 
      label: "Market Dominance", 
      sub: "NEET PG 2024 candidates trust our data", 
      icon: <TrendingUp size={22} />,
      grid: "col-span-12 md:col-span-5",
      delay: 0.2
    },
    { 
      id: "team",
      val: "60+", 
      label: "Core Experts", 
      sub: "Engineers & Medical Data Analysts", 
      icon: <Briefcase size={22} />,
      grid: "col-span-12 md:col-span-5",
      delay: 0.3
    },
    { 
      id: "offices",
      val: "2", 
      label: "Strategic Hubs", 
      sub: "Chennai Tech Hub & Nagercoil Media Center", 
      icon: <MapPin size={22} />,
      grid: "col-span-12 md:col-span-7",
      delay: 0.4
    }
  ];



  return (
    <section className="h-screen w-full bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Soft Brand Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center z-10" ref={containerRef}>
        
        {/* LEFT: TEXT STAGE */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 text-[#155DFC] text-[10px] font-black uppercase tracking-[0.3em] border border-blue-200/50">
            <Zap size={14} fill="currentColor" /> Velocity
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-[1000] text-slate-900 tracking-tighter leading-[0.9]">
            Going Stronger, <br />
            <span className="bg-gradient-to-r from-[#155DFC] to-blue-400 bg-clip-text text-transparent italic">Growing Bigger.</span>
          </h2>

          <p className="text-slate-500 font-bold text-lg max-w-lg leading-relaxed">
            Guiding students with smart tools that make NEET counselling clear and stress-free across every state.
          </p>

          <button className="group flex items-center gap-4 text-slate-900 font-black text-xs uppercase tracking-[0.2em] transition-all hover:text-[#155DFC]">
            <span className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-[#155DFC] group-hover:border-[#155DFC] group-hover:text-white transition-all">
              <ArrowUpRight size={20} />
            </span>
            Explore Our Impact
          </button>
        </div>

        {/* RIGHT: THE BENTO GRID */}
        <div className="grid grid-cols-12 gap-5">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`stat-card relative ${stat.grid} bg-white border border-slate-200 p-8 rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(21,93,252,0.1)] hover:border-[#155DFC]/30 transition-all duration-500 cursor-default group overflow-hidden`}
            >
              {/* Internal Accent Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#155DFC] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-slate-50 text-[#155DFC] border border-slate-100 flex items-center justify-center transition-all group-hover:bg-[#155DFC] group-hover:text-white group-hover:rotate-6">
                    {stat.icon}
                  </div>
                  <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                    Milestone
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-5xl font-[1000] text-slate-900 tracking-tighter">
                    {stat.val}
                  </div>
                  <div className="text-xs font-black text-[#155DFC] uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>

                <p className="mt-4 text-[11px] font-bold text-slate-400 leading-relaxed max-w-[220px]">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Mark */}
      <div className="absolute bottom-[-2%] right-[-2%] text-[180px] font-[1000] text-slate-900/[0.03] select-none pointer-events-none uppercase">
        Network
      </div>
    </section>
  );
}