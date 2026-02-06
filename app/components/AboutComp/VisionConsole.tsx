"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  Eye, 
  Target, 
  Compass, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Zap
} from "lucide-react";

// DYNAMIC DATA HUB
const VISION_DATA: any = {
  "The Vision": {
    subtitle: "Future Outlook",
    title: "The Vision",
    desc: "To become the most trusted companion for every medical aspirant in India, providing clarity, confidence, and fairness in the counselling process.",
    impact: "We envision a future where no student is disadvantaged by a lack of information.",
    icon: <Eye size={24} />,
    color: "from-[#155DFC] to-blue-400"
  },
  "The Mission": {
    subtitle: "Our Execution",
    title: "The Mission",
    desc: "Our goal is to simplify complex processes into empowering experiences that shape careers and lives.",
    impact: "Democratizing elite-level counselling data for every PG aspirant nationwide.",
    icon: <Target size={24} />,
    color: "from-blue-600 to-cyan-400"
  },
  "Our Principles": {
    subtitle: "Core DNA",
    title: "Our Principles",
    desc: "Integrity, Transparency, and Accuracy. We stand by the data we provide and the doctors we support.",
    impact: "Building the foundation of India's medical future with ethical guidance.",
    icon: <Compass size={24} />,
    color: "from-indigo-600 to-[#155DFC]"
  }
};

export default function VisionConsole() {
  const [activeTab, setActiveTab] = useState("The Vision");
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".vision-content", 
        { opacity: 0, x: 30, filter: "blur(8px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }
      );
    }, contentRef);
    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section className="min-h-screen w-full bg-slate-50 flex items-center justify-center overflow-hidden p-6 relative">
      {/* Brand Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#155DFC 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-0 rounded-[48px] overflow-hidden bg-white shadow-2xl border border-slate-100 relative z-10 h-[600px]">
        
        {/* LEFT: THE NAVIGATION DOCK (5 Columns) */}
        <div className="lg:col-span-5 bg-slate-900 p-12 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 text-blue-400 text-[9px] font-black uppercase tracking-[0.3em] border border-white/10">
              <Sparkles size={12} /> What We Stand For
            </div>
            
            <h2 className="text-4xl font-[1000] text-white tracking-tighter leading-tight">
              Driven by Purpose, <br />
              <span className="text-slate-500 italic">Inspired by Doctors.</span>
            </h2>

            <div className="space-y-3 pt-6">
              {Object.keys(VISION_DATA).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 border ${
                    activeTab === key 
                    ? "bg-[#155DFC] border-[#155DFC] shadow-lg shadow-blue-900/40" 
                    : "bg-white/5 border-white/5 hover:border-white/20"
                  }`}
                >
                  <span className={`text-sm font-black uppercase tracking-widest transition-colors ${activeTab === key ? "text-white" : "text-slate-400"}`}>
                    {key}
                  </span>
                  <ArrowRight size={18} className={`transition-transform duration-300 ${activeTab === key ? "text-white translate-x-1" : "text-slate-600 opacity-0 group-hover:opacity-100"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
              <ShieldCheck size={16} />
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certified Guidance</p>
          </div>
        </div>

        {/* RIGHT: DYNAMIC STAGE (7 Columns) */}
        <div className="lg:col-span-7 p-16 flex items-center bg-white relative" ref={contentRef}>
          <div className="vision-content space-y-8">
            <div className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${VISION_DATA[activeTab].color} flex items-center justify-center text-white shadow-xl shadow-blue-100`}>
              {VISION_DATA[activeTab].icon}
            </div>

            <div>
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">
                {VISION_DATA[activeTab].subtitle}
              </p>
              <h3 className="text-6xl font-[1000] text-slate-900 tracking-tighter mb-6 leading-[0.9]">
                {VISION_DATA[activeTab].title}
              </h3>
              <p className="text-xl font-bold text-slate-500 leading-relaxed">
                {VISION_DATA[activeTab].desc}
              </p>
            </div>

            <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Zap size={18} className="text-blue-500" />
              </div>
              <p className="text-sm font-bold text-slate-400 italic leading-relaxed">
                "{VISION_DATA[activeTab].impact}"
              </p>
            </div>
          </div>

          {/* Corner Aesthetic */}
          <div className="absolute top-10 right-10 text-[120px] font-[1000] text-slate-50 select-none leading-none pointer-events-none uppercase">
            {VISION_DATA[activeTab].title.split(' ')[1] || 'VIBE'}
          </div>
        </div>

      </div>
    </section>
  );
}