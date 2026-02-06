"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Stethoscope, 
  FileText, 
  ShieldQuestion 
} from "lucide-react";

const FAQ_DATA = [
  {
    question: "How accurate is the NEET Rank Predictor?",
    answer: "Our predictor utilizes a Proprietary Clinical Algorithm calibrated with 10 years of MCC and State-wise historical data. It maintains a 99.2% accuracy rate by accounting for category-wise shifts and seat increments in real-time.",
    icon: <Stethoscope size={20} />
  },
  {
    question: "Does it cover State Quota or only All India Quota?",
    answer: "We provide deep-dive analytics for both AIQ (15%) and State Quotas (85%) across all 28 Indian states. This includes private medical colleges, deemed universities, and minority institutions.",
    icon: <FileText size={20} />
  },
  {
    question: "What happens if the seat matrix changes mid-counseling?",
    answer: "Our engine is live-synced with official notification APIs. The moment a new seat is added or a college is de-recognized, your dashboard and probability scores update within 5 minutes.",
    icon: <HelpCircle size={20} />
  },
  {
    question: "Is there human support for Choice Filling?",
    answer: "Yes. While our AI suggests the optimal list, our 'Premium Clinical Support' connects you with senior counselors who review your choice list to ensure zero errors during the submission window.",
    icon: <ShieldQuestion size={20} />
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden relative">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 pointer-events-none border-l border-slate-100" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT SIDE: STICKY BRANDING */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#155DFC] text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-blue-100">
              Information Center
            </div>
            
            <h1 className="text-6xl md:text-7xl font-[1000] text-slate-900 tracking-tighter leading-[0.9] mb-10">
             Expected <br />
              <span className="text-[#155DFC] italic">Queries.</span>
            </h1>
            
            <p className="text-slate-500 font-bold text-lg leading-relaxed mb-12">
              Everything you need to know about the most precise medical counseling engine in India.
            </p>

            <div className="p-8 rounded-[40px] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#155DFC] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <p className="relative z-10 font-bold mb-4">Still have doubts?</p>
              <button className="relative z-10 px-6 py-3 bg-[#155DFC] rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
                Talk to a counselor
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: MORPHING ACCORDION */}
          <div className="lg:w-2/3 space-y-6">
            {FAQ_DATA.map((item, i) => {
              const isOpen = openIndex === i;
              
              return (
                <div 
                  key={i} 
                  className={`
                    group transition-all duration-500 rounded-[32px] border-2
                    ${isOpen ? 'bg-white border-[#155DFC] shadow-[0_30px_60px_-15px_rgba(21,93,252,0.15)]' : 'bg-transparent border-slate-100 hover:border-slate-200'}
                  `}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`
                        w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500
                        ${isOpen ? 'bg-[#155DFC] text-white rotate-[360deg]' : 'bg-slate-50 text-slate-400 group-hover:text-[#155DFC]'}
                      `}>
                        {item.icon}
                      </div>
                      <span className={`text-xl font-[1000] tracking-tight transition-colors duration-500 ${isOpen ? 'text-slate-900' : 'text-slate-600'}`}>
                        {item.question}
                      </span>
                    </div>
                    
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500
                      ${isOpen ? 'bg-[#155DFC] text-white rotate-180' : 'bg-slate-100 text-slate-400'}
                    `}>
                      {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                    </div>
                  </button>

                  <div className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="px-8 pb-10 ml-[72px]">
                      <p className="text-slate-500 font-bold leading-relaxed text-lg max-w-xl">
                        {item.answer}
                      </p>
                      
                      <div className="mt-8 flex items-center gap-4">
                        <div className="h-[2px] w-8 bg-blue-100" />
                        <span className="text-[10px] font-black text-[#155DFC] uppercase tracking-widest">
                          Official Resolution
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}