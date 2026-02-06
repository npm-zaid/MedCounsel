"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  Users, 
  Handshake, 
  ArrowRight,
  Heart
} from "lucide-react";

export default function CTA() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic effect for cards
      const cards = document.querySelectorAll(".magnetic-card");
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e: any) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
          gsap.to(card, { x, y, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#155DFC 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#155DFC] text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100">
            <Heart size={14} fill="currentColor" /> The Next Chapter
          </div>
          <h2 className="text-6xl lg:text-7xl font-[1000] text-slate-900 tracking-tighter leading-none">
            Be A Part Of <br />
            <span className="bg-gradient-to-r from-[#155DFC] to-blue-400 bg-clip-text text-transparent italic">Our Journey.</span>
          </h2>
          <p className="text-slate-400 font-bold text-lg max-w-2xl mx-auto">
            Hop on board and make an impact by shaping the future of NEET counselling for students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* JOIN US CARD */}
          <div className="magnetic-card group relative bg-slate-50 border border-slate-100 p-12 rounded-[50px] overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-100">
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-[#155DFC] group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-[1000] text-slate-900 tracking-tighter">Be a Part of Us</h3>
              <p className="text-slate-500 font-bold leading-relaxed">
                Join a passionate team making a real difference for students and Doctors across India.
              </p>
              <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#155DFC] transition-all">
                Explore Careers <ArrowRight size={16} />
              </button>
            </div>
            {/* Illustration Background Placeholder */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
               <Users size={200} strokeWidth={1} className="text-[#155DFC]" />
            </div>
          </div>

          {/* COLLABORATE CARD */}
          <div className="magnetic-card group relative bg-blue-50/30 border border-blue-100 p-12 rounded-[50px] overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-200">
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <Handshake size={32} />
              </div>
              <h3 className="text-4xl font-[1000] text-slate-900 tracking-tighter">Collaborate with ZyNerd</h3>
              <p className="text-slate-500 font-bold leading-relaxed">
                We welcome partners to collaborate on creating new opportunities and solutions together.
              </p>
              <button className="flex items-center gap-3 px-8 py-4 bg-[#155DFC] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-xl hover:shadow-blue-200 transition-all">
                Partner with us <ArrowRight size={16} />
              </button>
            </div>
            {/* Illustration Background Placeholder */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
               <Handshake size={200} strokeWidth={1} className="text-[#155DFC]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}