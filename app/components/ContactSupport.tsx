"use client";
import React from "react";
import {
  Phone,
  Mail,
  Zap,
  HeartPulse,
  UserCircle2,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function MedicalSupportConsole() {
  const supportSpecs = [
    { 
      label: "Response Time", 
      value: "< 5 Mins", 
      icon: <Zap className="text-amber-500" />,
      color: "bg-amber-50"
    },
    { 
      label: "Support Type", 
      value: "100% Human", 
      icon: <UserCircle2 className="text-blue-500" />,
      color: "bg-blue-50"
    },
    { 
      label: "Availability", 
      value: "Unrestricted", 
      icon: <Sparkles className="text-purple-500" />,
      color: "bg-purple-50"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden bg-white rounded-[60px] border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
          
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            
            {/* --- LEFT CONSOLE: The "Doctor's Office" --- */}
            <div className="lg:w-5/12 p-12 lg:p-16 bg-gradient-to-br from-[#155DFC] to-blue-700 text-white relative overflow-hidden">
              <div className="relative z-10 h-full flex flex-col">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-12 w-fit">
                  <HeartPulse size={14} strokeWidth={3} className="animate-pulse" />
                  Clinical Support Line
                </div>

                <h2 className="text-5xl md:text-6xl font-[1000] tracking-tighter leading-none mb-8">
                  Talk to <br />
                  <span className="italic text-blue-200">Real Experts.</span>
                </h2>

                <p className="text-blue-100/80 font-bold text-lg leading-relaxed mb-auto">
                  Skip the AI and chatbots. Connect instantly with medical professionals who understand the weight of your journey.
                </p>

                <div className="mt-12 p-8 rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-4">Direct Connection</p>
                  <a href="tel:08069036000" className="flex items-center gap-4 text-3xl font-[1000] tracking-tight hover:text-blue-200 transition-colors">
                    <Phone size={32} strokeWidth={3} fill="currentColor" />
                    080-690-36000
                  </a>
                </div>
              </div>

              {/* Decorative Circle Watermarks */}
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
              <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-[60px]" />
            </div>

            {/* --- RIGHT CONSOLE: The "Specs & Email" --- */}
            <div className="lg:w-7/12 p-12 lg:p-16 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                {supportSpecs.map((spec, i) => (
                  <div key={i} className={`${spec.color} p-6 rounded-[32px] border border-transparent hover:border-slate-200 transition-all group`}>
                    <div className="mb-4 bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {spec.icon}
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{spec.label}</p>
                    <p className="text-lg font-[1000] text-slate-900 tracking-tight">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#155DFC] group-hover:text-white transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div className="flex-1 border-b border-slate-100 pb-8">
                    <h4 className="text-2xl font-[1000] text-slate-900 mb-2 tracking-tight flex items-center gap-2">
                      Email our Experts
                      <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#155DFC] transition-colors" />
                    </h4>
                    <p className="text-slate-500 font-semibold">Drop us a line at hello@zynerd.com and get a clinical response within 24 hours.</p>
                  </div>
                </div>

                <div className="p-8 rounded-[40px] bg-blue-50/50 border-2 border-dashed border-blue-200 flex items-center justify-between">
                  <p className="text-blue-900 font-bold max-w-[240px]">Need a custom counselling roadmap?</p>
                  <button className="bg-[#155DFC] text-white px-8 py-4 rounded-full font-[900] text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
                    Start Session
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}