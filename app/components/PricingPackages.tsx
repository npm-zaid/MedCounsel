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
  Check,
  Zap
} from "lucide-react";

const PACKAGES = [
  {
    name: "Pro",
    type: "All India & State Counsellings",
    price: "4499",
    color: "orange",
    theme: "bg-[#FFF5F1] border-orange-200 text-orange-600",
    btnTheme: "bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-200",
    features: [
      { text: "Priority Call & Email Support", icon: <PhoneCall size={16} /> },
      { text: "Latest Updates through Events and Announcements", icon: <Megaphone size={16} /> },
      { text: "Premium Videos & Webinars", icon: <PlayCircle size={16} /> },
      { text: "Comprehensive, Up-to-Date Information & Insights", icon: <FileText size={16} /> },
      { text: "Pro Tools - Allotment Mapping & Rank Scan", icon: <Settings size={16} /> },
      { text: "All India & 40+ State Counsellings Covered", icon: <Globe size={16} /> },
    ]
  },
  {
    name: "Standard",
    type: "All India Only",
    price: "4099",
    color: "indigo",
    theme: "bg-[#F5F3FF] border-indigo-200 text-indigo-600",
    btnTheme: "bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-indigo-200",
    features: [
      { text: "Priority Call & Email Support", icon: <PhoneCall size={16} /> },
      { text: "Latest Updates through Events and Announcements", icon: <Megaphone size={16} /> },
      { text: "Premium Videos & Webinars", icon: <PlayCircle size={16} /> },
      { text: "Comprehensive, Up-to-Date Information & Insights", icon: <FileText size={16} /> },
      { text: "Insights Limited to All India Counselling Only", icon: <Zap size={16} /> },
    ]
  }
];

export default function PricingPackages() {
  const [activeTab, setActiveTab] = useState("NEET PG");
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pricing-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Gradients from Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(21,93,252,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ========= HEADER SECTION ========= */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-[1000] text-slate-900 tracking-tighter mb-6">
            More Than Data, for <span className="text-[#155DFC]">Less Than You Think</span>
          </h2>
          <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto mb-12">
            Smart packages with expert insights and real-time data without breaking the bank.
          </p>

          {/* Sub-Category Switcher */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {["NEET PG", "INICET", "DNB PDCET"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === tab ? "bg-white text-slate-900 shadow-md" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ========= PRICING GRID ========= */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={idx}
              className="pricing-card group relative bg-white rounded-[48px] border border-slate-100 p-2 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className={`rounded-[40px] p-10 h-full flex flex-col ${idx === 0 ? 'bg-orange-50/30' : 'bg-indigo-50/30'}`}>
                
                {/* Top Info */}
                <div className="mb-10">
                  <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${pkg.color === 'orange' ? 'text-orange-500' : 'text-indigo-500'}`}>
                    NEET PG 2025
                  </p>
                  <h3 className={`text-4xl font-[1000] tracking-tighter mb-4 ${pkg.color === 'orange' ? 'text-orange-600' : 'text-indigo-600'}`}>
                    {pkg.name}
                  </h3>
                  <div className="inline-block px-4 py-1.5 rounded-lg bg-white border border-white shadow-sm text-xs font-bold text-slate-600">
                    {pkg.type}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-3xl font-[1000] text-slate-900">₹</span>
                  <span className="text-6xl font-[1000] text-slate-900 tracking-tighter">{pkg.price}</span>
                  <span className="text-sm font-bold text-slate-400 ml-2">+GST</span>
                </div>

                {/* Key Features Section */}
                <div className="flex-1 bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-white shadow-inner mb-10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Key Features</p>
                  <ul className="space-y-5">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${idx === 0 ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'}`}>
                          {feat.icon}
                        </div>
                        <span className="text-sm font-bold text-slate-600 leading-tight">
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className={`w-full py-5 rounded-2xl text-white font-[1000] text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl ${pkg.btnTheme}`}>
                  Purchase Now
                </button>
                
                <p className="text-center mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Valid till Jan 31, 2026
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}