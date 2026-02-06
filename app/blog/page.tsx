"use client";
import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  Search, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Flame,
  LayoutGrid,
  List
} from "lucide-react";

export default function Page() {
  const [filter, setFilter] = useState("ALL");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const containerRef = useRef(null);

  // Advanced Entry Animation
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".editorial-card", {
  //       opacity: 0,
  //       x: -20,
  //       stagger: 0.05,
  //       duration: 0.8,
  //       ease: "expo.out"
  //     });
  //   }, containerRef);
  //   return () => ctx.revert();
  // }, [filter, viewMode]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-4 lg:px-12 font-sans selection:bg-blue-100">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12" ref={containerRef}>
        
        {/* LEFT: TRENDING SIDEBAR (Clinical Precision) */}
        <aside className="lg:col-span-3 space-y-8 sticky top-24 h-fit hidden lg:block">
          <div className="bg-white border border-slate-200 p-8 rounded-[32px] shadow-sm">
            <div className="flex items-center gap-3 mb-6 text-[#155DFC]">
              <Flame size={20} fill="currentColor" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Trending Now</h4>
            </div>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Milestone 0{i}</div>
                  <h5 className="text-sm font-[1000] text-slate-900 group-hover:text-[#155DFC] transition-colors leading-tight">
                    State-wise Stipend Analysis for 2025 Sessions
                  </h5>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#155DFC] to-blue-400 p-8 rounded-[32px] text-white shadow-xl shadow-blue-100 relative overflow-hidden">
            <TrendingUp className="absolute right-[-10%] bottom-[-10%] w-32 h-32 opacity-20 rotate-12" />
            <h4 className="text-xl font-[1000] mb-2 relative z-10">Premium Insights</h4>
            <p className="text-xs font-bold opacity-80 mb-6 relative z-10 leading-relaxed">Unlock rank predictors and clinical seat allotment mapping.</p>
            <button className="w-full py-3 bg-white text-[#155DFC] rounded-xl font-[1000] text-[10px] uppercase tracking-widest">Upgrade Now</button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="lg:col-span-9 space-y-12">
          
          {/* TOP SEARCH & TOOLS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative flex-1 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#155DFC] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search across 20+ specialized clinical blogs..." 
                className="w-full bg-white border border-slate-200 pl-14 pr-6 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-50/50 transition-all font-bold text-slate-900 shadow-sm"
              />
            </div>
            <div className="flex items-center bg-white border border-slate-200 p-1.5 rounded-2xl gap-1">
              <button onClick={() => setViewMode("grid")} className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:bg-slate-50"}`}><LayoutGrid size={18} /></button>
              <button onClick={() => setViewMode("list")} className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:bg-slate-50"}`}><List size={18} /></button>
            </div>
          </div>

          {/* DYNAMIC FEED */}
          <div className={viewMode === "grid" ? "grid md:grid-cols-2 gap-8" : "space-y-6"}>
            {/* Using first entry as an example of the improved 20-post loop */}
            {[...Array(20)].map((_, i) => (
              <article 
                key={i} 
                className={`editorial-card group bg-white border border-slate-100 overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-100/50 ${
                  viewMode === "grid" ? "rounded-[40px] flex flex-col" : "rounded-[32px] flex flex-row items-center p-6 gap-8"
                }`}
              >
                <div className={`relative overflow-hidden ${viewMode === "grid" ? "h-64" : "h-40 w-64 flex-shrink-0 rounded-2xl"}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&sig=${i}`} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    alt="Blog" 
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[8px] font-black text-[#155DFC] uppercase tracking-widest border border-white/20 shadow-sm">
                      NEET SS
                    </span>
                  </div>
                </div>

                <div className={`flex flex-col justify-between ${viewMode === "grid" ? "p-8 gap-4" : "flex-1"}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Clock size={12} /> Feb 03, 2026</span>
                      <span className="flex items-center gap-1.5"><BookOpen size={12} /> 8 Min Read</span>
                    </div>
                    <h3 className={`${viewMode === "grid" ? "text-2xl" : "text-xl"} font-[1000] text-slate-900 tracking-tighter leading-tight group-hover:text-[#155DFC] transition-colors`}>
                      Documents Required for NEET SS Counselling: 2025 Checklist
                    </h3>
                    <p className="text-xs font-bold text-slate-400 leading-relaxed line-clamp-2">
                      A comprehensive guide to document verification, required formats, and essential certificates for 2025.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-50">
                    <span className="text-[10px] font-[1000] text-slate-900 tracking-widest uppercase">Clinical Data</span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#155DFC] group-hover:border-[#155DFC] group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}