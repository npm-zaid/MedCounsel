"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { 
  Quote, 
  Star, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Medal,
  Activity
} from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Dr. Arpit Verma",
    rank: "AIR 1,240",
    college: "Maulana Azad Medical College",
    content: "The accuracy of the predictor is frighteningly good. It predicted MAMC for me in Round 1 when every other platform said it was impossible. Truly a game-changer.",
    year: "2025 Batch",
    image: "https://i.pravatar.cc/150?u=arpit"
  },
  {
    name: "Dr. Sneha Kapoor",
    rank: "AIR 4,510",
    college: "VMMC, New Delhi",
    content: "Choice filling is an art, and MedCounsel is the brush. Their human-first support guided me through the complex stray vacancy rounds without any stress.",
    year: "2024 Batch",
    image: "https://i.pravatar.cc/150?u=sneha"
  },
  {
    name: "Dr. Rohan Mehra",
    rank: "AIR 8,900",
    college: "KGMU, Lucknow",
    content: "I was confused between State Quota and AIQ. The detailed analytics and historical trend mapping gave me the confidence to hold out for KGMU.",
    year: "2025 Batch",
    image: "https://i.pravatar.cc/150?u=rohan"
  }
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  const handleNext = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        gsap.fromTo(contentRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4 });
      }
    });
  };

  const handlePrev = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.3,
      onComplete: () => {
        setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
        gsap.fromTo(contentRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 });
      }
    });
  };

  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(21,93,252,0.05)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: Branding & Stats */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#155DFC] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-100">
              <Medal size={14} className="fill-current" /> Trust by Results
            </div>
            
            <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 tracking-tight leading-[0.9] mb-8">
              Real Stories. <br />
              <span className="text-[#155DFC]">Proven Success.</span>
            </h1>
            
            <p className="text-lg text-slate-500 font-bold leading-relaxed mb-12 max-w-md">
              Over 10,000 students secured their dream medical seats last year using our clinical-grade analytics.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-[1000] text-slate-900 tracking-tighter">98%</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Prediction Match</p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="text-4xl font-[1000] text-slate-900 tracking-tighter">12k+</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Verified Placements</p>
              </div>
            </div>
          </div>

          {/* RIGHT: The Testimonial "Glass Console" */}
          <div className="relative">
            {/* Background Decorative Cards */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-[#155DFC]/5 rounded-[60px] -rotate-3" />
            
            <div ref={cardRef} className="relative bg-white rounded-[60px] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(21,93,252,0.12)] border border-slate-100 overflow-hidden">
              
              {/* Quote Icon Background */}
              <Quote size={120} className="absolute -top-4 -left-4 text-slate-50 opacity-[0.05] -rotate-12" />

              <div ref={contentRef} className="relative z-10">
                <div className="flex items-center gap-1 text-amber-400 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>

                <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight mb-10 italic tracking-tight">
                  "{TESTIMONIALS[index].content}"
                </p>

                <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                  <div className="flex items-center gap-5">
                    <img 
                      src={TESTIMONIALS[index].image} 
                      alt={TESTIMONIALS[index].name}
                      className="w-16 h-16 rounded-3xl object-cover ring-4 ring-blue-50"
                    />
                    <div>
                      <h4 className="text-xl font-[1000] text-slate-900 leading-none mb-1">{TESTIMONIALS[index].name}</h4>
                      <p className="text-sm font-bold text-[#155DFC] uppercase tracking-widest">{TESTIMONIALS[index].rank}</p>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-[10px] font-black mb-2 uppercase border border-emerald-100">
                      <ShieldCheck size={12} /> Verified Merit
                    </div>
                    <p className="text-xs text-slate-400 font-bold uppercase">{TESTIMONIALS[index].college}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute bottom-10 right-10 flex gap-3 ">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 hover:bg-[#155DFC] hover:text-white transition-all flex items-center justify-center border border-slate-100"
                >
                  <ChevronLeft size={20} strokeWidth={3} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-2xl bg-[#155DFC] text-white shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                >
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>

            {/* Subtle Pulse Badge */}
            <div className="absolute -bottom-6 left-10 bg-white px-6 py-4 rounded-[24px] shadow-xl border border-slate-50 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-[1000] text-slate-900 uppercase tracking-widest">Live: 24 students matching right now</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}