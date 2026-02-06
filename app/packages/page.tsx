"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { 
  PhoneCall, 
  Megaphone, 
  PlayCircle, 
  FileText, 
  Settings, 
  Globe,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

const PRICING_DATA: any = {
  "NEET PG": [
    {
      name: "Pro",
      price: "4499",
      color: "orange",
      type: "All India & State Counsellings",
      features: [
        { text: "Priority Call & Email Support", icon: <PhoneCall size={16} /> },
        { text: "Pro Tools - Allotment Mapping", icon: <Settings size={16} /> },
        { text: "All India & 40+ State Covered", icon: <Globe size={16} /> },
        { text: "Latest Updates & Announcements", icon: <Megaphone size={16} /> },
      ]
    },
    {
      name: "Standard",
      price: "4099",
      color: "indigo",
      type: "All India Only",
      features: [
        { text: "Priority Call & Email Support", icon: <PhoneCall size={16} /> },
        { text: "Premium Videos & Webinars", icon: <PlayCircle size={16} /> },
        { text: "Insights Limited to AIQ Only", icon: <Zap size={16} /> },
        { text: "Comprehensive Information", icon: <FileText size={16} /> },
      ]
    }
  ],
  "INICET": [
    {
      name: "Elite",
      price: "2999",
      color: "orange",
      type: "Institutional Focus",
      features: [
        { text: "INICET Rank Predictor", icon: <Settings size={16} /> },
        { text: "Institutional Preference Tools", icon: <Globe size={16} /> },
        { text: "24/7 Priority Support", icon: <PhoneCall size={16} /> },
      ]
    },
    {
      name: "Basic",
      price: "1999",
      color: "indigo",
      type: "AIQ Analytics Only",
      features: [
        { text: "Standard Rank Analytics", icon: <FileText size={16} /> },
        { text: "PDF Reports & Downloads", icon: <FileText size={16} /> },
      ]
    }
  ],
  "DNB PDCET": [
    {
      name: "Master",
      price: "3499",
      color: "orange",
      type: "Post-Diploma Specialist",
      features: [
        { text: "DNB Hospital Mapping", icon: <Settings size={16} /> },
        { text: "Stipend & Bond Analytics", icon: <FileText size={16} /> },
      ]
    }
  ]
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("NEET PG");
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    // Disable tilt on mobile for better UX
    if (window.innerWidth < 1024) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = (card: HTMLDivElement) => {
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
  };

  useEffect(() => {
    gsap.fromTo(".pricing-card", 
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" }
    );
  }, [activeTab]);

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#155DFC 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#155DFC] text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6 border border-blue-100">
            <Sparkles size={12} /> Flexible Plans
          </div>
          <h2 className="text-4xl md:text-6xl font-[1000] text-slate-900 tracking-tighter mb-6 md:mb-8 leading-tight">
            Smart Data, <span className="text-[#155DFC]">Smarter Pricing.</span>
          </h2>

          {/* DYNAMIC TAB SWITCHER - Scrollable on mobile */}
          <div className="flex overflow-x-auto no-scrollbar md:inline-flex p-1.5 bg-slate-100/80 backdrop-blur-md rounded-[20px] md:rounded-[24px] border border-slate-200 shadow-inner max-w-full">
            {Object.keys(PRICING_DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap flex-1 md:flex-none px-6 md:px-10 py-2.5 md:py-3.5 rounded-[15px] md:rounded-[18px] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === tab ? "bg-white text-[#155DFC] shadow-lg md:scale-105" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PRICING GRID */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto items-stretch">
          {PRICING_DATA[activeTab].map((pkg: any, idx: number) => (
            <div 
              key={idx}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className="pricing-card group relative h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`
                h-full rounded-[40px] md:rounded-[50px] p-0.5 md:p-1 border transition-all duration-500
                ${pkg.color === 'orange' ? 'border-orange-100 bg-orange-50/20 md:hover:border-orange-400' : 'border-indigo-100 bg-indigo-50/20 md:hover:border-indigo-400'}
              `}>
                <div className="bg-white rounded-[38px] md:rounded-[46px] p-6 md:p-10 h-full flex flex-col shadow-sm group-hover:shadow-2xl transition-all border border-white">
                  
                  <div className="flex justify-between items-start mb-6 md:mb-10">
                    <div>
                      <p className={`text-[9px] md:text-[10px] font-[1000] uppercase tracking-[0.3em] mb-2 ${pkg.color === 'orange' ? 'text-orange-500' : 'text-indigo-500'}`}>
                        {activeTab} 2026
                      </p>
                      <h3 className="text-3xl md:text-4xl font-[1000] text-slate-900 tracking-tighter leading-none mb-3">
                        {pkg.name}
                      </h3>
                      <span className="inline-block px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {pkg.type}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 md:mb-10 flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-[1000] text-slate-900 tracking-tighter">₹{pkg.price}</span>
                    <span className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">+GST</span>
                  </div>

                  <div className="flex-1 bg-slate-50/50 rounded-[28px] md:rounded-[35px] p-5 md:p-8 border border-slate-100 mb-8 md:mb-10 group-hover:bg-white transition-colors duration-500 shadow-inner group-hover:shadow-none">
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 md:mb-6">Clinical Benefits</p>
                    <ul className="space-y-4 md:space-y-5">
                      {pkg.features.map((feat: any, fIdx: number) => (
                        <li key={fIdx} className="flex items-center gap-3 md:gap-4 group/item">
                          <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 transition-all md:group-hover/item:rotate-12 ${pkg.color === 'orange' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'}`}>
                            {feat.icon}
                          </div>
                          <span className="text-xs md:text-sm font-bold text-slate-600 leading-tight">
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`
                    w-full py-4 md:py-5 rounded-[18px] md:rounded-[22px] text-white font-[1000] text-[10px] md:text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all
                    ${pkg.color === 'orange' ? 'bg-orange-500 md:hover:bg-orange-600 shadow-xl shadow-orange-100' : 'bg-indigo-600 md:hover:bg-indigo-700 shadow-xl shadow-indigo-100'}
                  `}>
                    Secure Your Seat <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 md:mt-12 text-[8px] md:text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.4em]">
          Algorithm Calibrated for 2026 Batch
        </p>
      </div>
    </section>
  );
}