"use client";
import React from 'react';
import { 
  Stethoscope, 
  Apple, 
  Play, 
  Instagram, 
  Twitter, 
  Youtube, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white pt-24 pb-12 px-6 overflow-hidden">
      <div className='absolute inset-0 bg-gradient-to-t z-0 from-blue-500 via-blue-500/10 to-transparent'></div>
      {/* Background Grid - matches your Hero UI */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#155DFC 1.5px, transparent 1.5px), linear-gradient(90deg, #155DFC 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper CTA: The App Box */}
        <div className="relative bg-[#155DFC] rounded-[60px] p-10 md:p-16 overflow-hidden mb-24 shadow-2xl shadow-blue-500/20 group">
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-white/20">
                Next-Gen Mobile Platform
              </div>
              <h2 className="text-4xl md:text-6xl font-[1000] text-white tracking-tight mb-4 leading-[0.9]">
                Counselling in your <br />
                <span className="italic opacity-80">Pocket.</span>
              </h2>
              <p className="text-blue-100 font-bold max-w-sm text-lg">
                Get real-time seat alerts and rank analysis on the go.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="flex items-center gap-3 bg-white text-[#155DFC] px-6 py-4 rounded-[24px] font-[1000] text-[11px] uppercase tracking-widest transition-all hover:scale-105 hover:shadow-2xl shadow-blue-900/40">
                <Apple size={20} fill="currentColor" /> App Store
              </button>
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-[24px] font-[1000] text-[11px] uppercase tracking-widest transition-all hover:scale-105 hover:shadow-2xl">
                <Play size={20} fill="currentColor" /> Play Store
              </button>
            </div>
          </div>

          {/* Large Watermark Icon */}
          <Stethoscope size={300} className="absolute -bottom-20 -right-20 opacity-10 text-white rotate-12 pointer-events-none group-hover:rotate-6 transition-transform duration-700" />
        </div>

        {/* Lower Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#155DFC] p-2.5 rounded-2xl shadow-lg shadow-blue-500/30">
                <Stethoscope className="text-white w-6 h-6" strokeWidth={3} />
              </div>
              <span className="text-3xl font-[1000] tracking-tighter text-slate-900 uppercase">
                Med<span className="text-[#155DFC]">Counsel</span>
              </span>
            </div>
            <p className="text-zinc-600 font-bold max-w-xs leading-relaxed mb-10 text-base">
              India's #1 medical counselling platform, engineered with precision for every aspirant.
            </p>
            <div className="flex gap-5">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border-2 border-zinc-600 flex items-center justify-center text-zinc-600 hover:bg-[#155DFC] hover:text-white hover:border-[#155DFC] transition-all hover:-translate-y-1">
                  <Icon size={20} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {[
            { 
              title: "Platform", 
              links: ["College Predictor", "Cut-off Analysis", "Choice Filling", "Seat Matrix"] 
            },
            { 
              title: "Resources", 
              links: ["State Counselling", "Counselling FAQs", "Latest News", "Documentation"] 
            },
            { 
              title: "Company", 
              links: ["About Us", "Privacy Policy", "Terms of Service", "Contact Support"] 
            }
          ].map((group, idx) => (
            <div key={idx}>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8 border-l-4 border-[#155DFC] pl-4">
                {group.title}
              </h4>
              <ul className="space-y-5 text-[13px] font-bold text-zinc-600">
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="hover:text-[#155DFC] transition-colors flex items-center group">
                      {link}
                      <ChevronRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className=" flex flex-col  justify-between items-center gap-6 text-black text-[10px] font-black tracking-[0.2em] uppercase">
        <div className='h-[2px] mb-4 w-full bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent'></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
            <p>© 2026 MedCounsel Technologies. Built by Engineers.</p>
          <div className="flex gap-10 ">
            <span className="flex items-center gap-2 hover:text-[#155DFC] transition-colors cursor-pointer">
              India's #1 Platform <ExternalLink size={12} strokeWidth={3} />
            </span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}