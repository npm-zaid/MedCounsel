"use client";
import React, { useState } from "react";
import { 
  Activity, 
  Search, 
  ShieldCheck, 
  Zap, 
  Crosshair,
  ChevronRight,
  Database
} from "lucide-react";

export default function InteractiveCommandCenter() {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { label: "Data Points", value: "1.2M+", icon: <Database size={16} /> },
    { label: "Accuracy", value: "99.8%", icon: <Activity size={16} /> },
    { label: "Live Users", value: "4.5k", icon: <Zap size={16} /> }
  ];

  return (
    <section className="min-h-screen bg-white flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
      
      {/* --- AMBIENT NEURAL GRID --- */}
      <div className="absolute inset-0 z-0 opacity-[0.08]" 
           style={{ 
             backgroundImage: `radial-gradient(#155DFC 2px, transparent 2px)`, 
             backgroundSize: '40px 40px' 
           }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-white" />
      </div>

      {/* --- MAIN INTERACTIVE CONTAINER --- */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-8">
        
        {/* --- LEFT PANEL: CONTROL CONSOLE --- */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-900 rounded-[30px] md:rounded-[40px] p-6 md:p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#155DFC] blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#155DFC] flex items-center justify-center shadow-lg shadow-blue-500/40">
                  <Crosshair className="text-white" size={20} strokeWidth={3} />
                </div>
                <span className="text-[10px] md:text-sm font-black tracking-[0.3em] uppercase">Med-AI v4.0</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-[1000] leading-[0.9] tracking-tighter mb-4 md:mb-6">
                Predictive <br />
                <span className="text-[#155DFC]">Diagnostics.</span>
              </h2>
              <p className="text-slate-400 font-bold text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
                The world's most advanced medical admission engine. Instant analysis, zero guesswork.
              </p>

              <button className="w-full py-4 bg-[#155DFC] rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Launch Full Predictor <ChevronRight size={14} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Stats Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border-2 border-slate-50 p-4 md:p-6 rounded-[24px] md:rounded-[32px] flex items-center justify-between hover:border-[#155DFC]/20 transition-all cursor-default shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-50 text-[#155DFC] flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <span className="text-[9px] md:text-[11px] font-[1000] text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
                <span className="text-lg md:text-xl font-[1000] text-slate-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT PANEL: THE "GLASS" DASHBOARD --- */}
        <div className="relative min-h-[500px] bg-slate-50/50 rounded-[30px] md:rounded-[50px] border border-slate-200 p-4 md:p-8 flex flex-col shadow-inner group">
          
          {/* Top Navigation Blur - Scrollable on mobile */}
          <div className="flex gap-2 md:gap-4 p-1.5 md:p-2 bg-white/80 backdrop-blur-xl rounded-[20px] md:rounded-[24px] border border-white w-full sm:w-fit shadow-sm mb-6 md:mb-8 overflow-x-auto no-scrollbar">
            {['Recommendations', 'Trends', 'Matrix'].map((tab, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-1 sm:flex-none whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-[15px] md:rounded-[18px] text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === i ? 'bg-[#155DFC] text-white shadow-lg shadow-blue-500/30' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dynamic Content Card */}
          <div className="flex-1 bg-white rounded-[30px] md:rounded-[40px] border border-white shadow-2xl p-6 md:p-10 relative overflow-hidden">
            <div className="flex justify-between items-start md:items-center mb-8 md:mb-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-[1000] text-slate-900 tracking-tighter">Live Probabilities</h3>
                <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Based on Rank: 14,000</p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
                <Search size={18} />
              </div>
            </div>

            {/* Simulated Data Rows */}
            <div className="space-y-3 md:space-y-4">
              {[
                { name: "Grant Medical College", city: "Mumbai", chance: 85 },
                { name: "Bangalore Medical College", city: "Bangalore", chance: 92 },
                { name: "BJ Medical College", city: "Pune", chance: 78 },
              ].map((college, i) => (
                <div key={i} className="p-4 md:p-6 rounded-[24px] md:rounded-[28px] bg-slate-50/50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white hover:shadow-xl hover:border-[#155DFC]/20 transition-all duration-500 group/row">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="text-2xl md:text-4xl font-[1000] text-slate-100 group-hover/row:text-blue-100 transition-colors">0{i+1}</div>
                    <div>
                      <h4 className="text-slate-900 font-black text-sm md:text-lg leading-tight mb-0.5">{college.name}</h4>
                      <p className="text-slate-400 text-[9px] md:text-xs font-bold uppercase tracking-widest">{college.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-8">
                    <div className="flex-1 sm:w-32 h-1.5 md:h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-[#155DFC] transition-all duration-1000"
                        style={{ width: `${college.chance}%` }}
                      />
                    </div>
                    <span className="text-lg md:text-xl font-[1000] text-slate-900 min-w-[3rem] text-right">{college.chance}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Insight Badge */}
            <div className="mt-6 md:mt-8 p-4 md:p-5 bg-emerald-50 rounded-[20px] md:rounded-[24px] border border-emerald-100 flex items-start sm:items-center gap-3 md:gap-4">
              <div className="shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <ShieldCheck size={14} strokeWidth={3} />
              </div>
              <p className="text-[9px] md:text-[11px] font-black text-emerald-700 uppercase tracking-widest leading-relaxed">
                Algorithm Verified: Calibrated to the latest 2026 seat matrix.
              </p>
            </div>
          </div>

          {/* Background Decor - Hidden on small screens to reduce clutter */}
          <Activity size={300} className="hidden md:block absolute -bottom-20 -right-20 text-[#155DFC] opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
        </div>
      </div>
    </section>
  );
}