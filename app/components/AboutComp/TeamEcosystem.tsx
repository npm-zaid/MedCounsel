"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  Database, 
  Search, 
  Lightbulb, 
  Share2,
  Cpu,
  ShieldCheck
} from "lucide-react";

export default function TeamEcosystem() {
  const containerRef = useRef(null);
  const centerRef = useRef(null);

  const teams = [
    { 
      name: "Source Team", 
      desc: "Front-liners scanning official websites and notifications daily.", 
      icon: <Search size={20} />,
      // Responsive positioning classes
      pos: "lg:top-0 lg:left-0",
      color: "border-blue-200"
    },
    { 
      name: "Knowledge Team", 
      desc: "Connectors tracking updates to ensure support teams stay ahead.", 
      icon: <Lightbulb size={20} />,
      pos: "lg:top-0 lg:right-0",
      color: "border-cyan-200"
    },
    { 
      name: "Data Team", 
      desc: "Organizers converting raw updates into structured clinical data.", 
      icon: <Database size={20} />,
      pos: "lg:bottom-0 lg:left-0",
      color: "border-indigo-200"
    },
    { 
      name: "Tech Ops", 
      desc: "Engineers maintaining the neural engine of the counselling portal.", 
      icon: <Cpu size={20} />,
      pos: "lg:bottom-0 lg:right-0",
      color: "border-slate-200"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for team cards (only if not on mobile for better performance)
      gsap.to(".team-module", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "power1.inOut"
      });
      
      gsap.to(".nexus-line", {
        strokeDashoffset: 0,
        duration: 3,
        repeat: -1,
        ease: "none"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-white flex items-center justify-center overflow-hidden relative p-6 md:p-10">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#155DFC 1px, transparent 1px), linear-gradient(90deg, #155DFC 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl w-full relative flex flex-col items-center">
        
        {/* HEADER */}
        <div className="text-center mb-12 lg:mb-16 space-y-4 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#155DFC] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] border border-blue-100">
            <Share2 size={12} /> Collaborative Excellence
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[1000] text-slate-900 tracking-tighter leading-[0.95]">
            The People Behind <br />
            <span className="bg-gradient-to-r from-[#155DFC] to-blue-400 bg-clip-text text-transparent italic">The Platform.</span>
          </h2>
          <p className="text-slate-400 font-bold text-xs md:text-sm max-w-md mx-auto leading-relaxed px-4">
            A lot happens behind the scenes to make NEET counselling simple. These are the teams working to keep you one step ahead.
          </p>
        </div>

        {/* ECOSYSTEM VISUAL WRAPPER */}
        <div className="relative w-full min-h-fit lg:h-[600px] flex flex-col lg:block">
          
          {/* CENTRAL NEXUS - Hidden on mobile or moved to top/bottom of list */}
          <div ref={centerRef} className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group items-center justify-center">
            <div className="w-40 h-40 xl:w-48 xl:h-48 rounded-[50px] xl:rounded-[60px] bg-white border-8 border-slate-50 shadow-2xl flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105 duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#155DFC]/10 to-transparent" />
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Leadership" 
              />
              <div className="absolute bottom-0 w-full py-2 bg-slate-900/80 backdrop-blur-md text-center">
                <p className="text-[8px] font-black text-white uppercase tracking-widest">Core Platform</p>
              </div>
            </div>
            {/* Pulsing Ring */}
            <div className="absolute inset-[-15px] border-2 border-blue-100 rounded-[70px] animate-ping opacity-20" />
          </div>

          {/* TEAM MODULES: Grid on Mobile, Absolute on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:block gap-4 w-full h-full">
            {teams.map((team, i) => (
              <div 
                key={i} 
                className={`team-module relative lg:absolute ${team.pos} w-full lg:w-[260px] xl:w-[280px] p-5 md:p-6 bg-white/70 backdrop-blur-xl border ${team.color} rounded-[24px] md:rounded-[32px] shadow-sm lg:shadow-xl transition-all duration-500 z-20 group`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#155DFC] text-white shrink-0">
                    {team.icon}
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">{team.name}</h4>
                </div>
                <p className="text-[11px] font-bold text-slate-400 leading-relaxed">
                  {team.desc}
                </p>
              </div>
            ))}
          </div>

          {/* SVG Connections - Only visible on desktop where positions are fixed */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none opacity-20">
             <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#155DFC', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#60A5FA', stopOpacity:1}} />
              </linearGradient>
            </defs>
            {/* These paths are calibrated to the center point and the lg:pos classes */}
            <path d="M 280,100 Q 450,150 500,300" stroke="url(#grad1)" strokeWidth="2" fill="none" className="nexus-line" strokeDasharray="10 10" strokeDashoffset="100" />
            <path d="M 850,100 Q 650,150 640,300" stroke="url(#grad1)" strokeWidth="2" fill="none" className="nexus-line" strokeDasharray="10 10" strokeDashoffset="100" />
            <path d="M 280,500 Q 450,450 500,300" stroke="url(#grad1)" strokeWidth="2" fill="none" className="nexus-line" strokeDasharray="10 10" strokeDashoffset="100" />
            <path d="M 850,500 Q 650,450 640,300" stroke="url(#grad1)" strokeWidth="2" fill="none" className="nexus-line" strokeDasharray="10 10" strokeDashoffset="100" />
          </svg>
        </div>

        {/* FOOTER DETAIL */}
        <div className="mt-12 flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
          <ShieldCheck size={16} className="text-blue-500 shrink-0" />
          <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] md:tracking-[0.2em]">
            Human Verified. Machine Optimized.
          </p>
        </div>

      </div>
    </section>
  );
}