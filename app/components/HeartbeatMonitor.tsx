"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Activity, ShieldCheck, Zap, Users } from 'lucide-react';

export default function HeartbeatMonitor() {
  const pathRef = useRef<SVGPathElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const vitals = [
    { label: "Predictor Accuracy", value: "99.2%", icon: Zap, color: "text-blue-500" },
    { label: "Active Aspirants", value: "12,450", icon: Users, color: "text-green-500" },
    { label: "Data Verification", value: "Triple-Check", icon: ShieldCheck, color: "text-amber-500" }
  ];

  useEffect(() => {
    // GSAP Heartbeat Animation
    const heartbeat = () => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "none",
      })
      .to(pathRef.current, {
        opacity: 0.3,
        duration: 0.5,
        yoyo: true,
        repeat: 1
      }, "-=0.5");
    };

    heartbeat();
  }, [activeTab]); // Resets/re-syncs pulse when state changes

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Pulse Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Monitor Display */}
          <div className="relative aspect-video bg-black rounded-[40px] border-4 border-slate-800 shadow-2xl overflow-hidden group">
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] text-white/50 uppercase">Live Diagnostic Terminal</span>
            </div>

            {/* SVG Heartbeat Path */}
            <svg 
              viewBox="0 0 800 200" 
              className="w-full h-full stroke-blue-500 fill-none"
              preserveAspectRatio="none"
            >
              {/* Static Background Grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.05"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Animated Path */}
              <path
                ref={pathRef}
                d="M0,100 L150,100 L170,80 L190,120 L210,40 L230,160 L250,100 L400,100 L420,80 L440,120 L460,20 L480,180 L500,100 L800,100"
                strokeWidth="3"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Floating Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <p className="text-blue-400 font-black text-4xl italic tracking-tighter">
                  {vitals[activeTab].value}
                </p>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  Current Vital: {vitals[activeTab].label}
                </p>
              </div>
              <Activity className="text-blue-500/50 animate-bounce" size={32} />
            </div>
          </div>

          {/* Right: Interactive State Controls */}
          <div className="space-y-6">
            <h2 className="text-5xl font-[950] text-white tracking-tight leading-[0.9] mb-8">
              Every Beat <br />
              <span className="text-blue-500">Data Driven.</span>
            </h2>
            
            <div className="grid gap-4">
              {vitals.map((vital, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center justify-between p-6 rounded-[32px] border transition-all duration-300 ${
                    activeTab === idx 
                    ? "bg-white border-white shadow-xl scale-[1.02]" 
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${activeTab === idx ? 'bg-slate-100' : 'bg-white/5'}`}>
                      <vital.icon className={activeTab === idx ? vital.color : "text-white/40"} size={24} />
                    </div>
                    <div className="text-left">
                      <p className={`text-[10px] font-black uppercase tracking-widest ${activeTab === idx ? 'text-slate-400' : 'text-white/30'}`}>
                        System Metric
                      </p>
                      <h4 className={`text-lg font-black ${activeTab === idx ? 'text-slate-900' : 'text-white'}`}>
                        {vital.label}
                      </h4>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                    activeTab === idx ? 'border-slate-200 text-slate-900' : 'border-white/10 text-white/20'
                  }`}>
                    {idx + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}