"use client";
import React from "react";
import { 
  AlertCircle, 
  BookOpen, 
  MapPin, 
  Search, 
  MessageSquare, 
  ShieldCheck,
  ChevronRight 
} from "lucide-react";

const ChaosSection = () => {
  const chaosData = [
    {
      title: "Unpredictable Trends",
      desc: "Last Year’s Cutoffs Won’t Save You. You need multi-year trends, current seat data, and insights on how others are choosing.",
      icon: <AlertCircle className="text-red-500" />,
      span: "lg:col-span-2",
      bg: "bg-red-50/50 border-red-100"
    },
    {
      title: "The Rules Vary. A Lot.",
      desc: "Every state/counselling/quota has its own rules, fees, and eligibility, and they change every round.",
      icon: <MapPin className="text-[#155DFC]" />,
      span: "lg:col-span-1",
      bg: "bg-blue-50/50 border-blue-100"
    },
    {
      title: "Decoding Quotas & Options",
      desc: "AIQ, State Quota, Deemed, Private, MBBS or BDS? Each path affects your fees, choices and future career.",
      icon: <BookOpen className="text-indigo-500" />,
      span: "lg:col-span-1",
      bg: "bg-white border-slate-100"
    },
    {
      title: "Which College? Which Seat?",
      desc: "150,000+ seats, 1000+ colleges. Find the ones that fit your rank, budget, and life goals perfectly.",
      icon: <Search className="text-emerald-600" />,
      span: "lg:col-span-2",
      bg: "bg-emerald-50/30 border-emerald-100"
    },
    {
      title: "Myths & WhatsApp Advice",
      desc: "Official data is scattered and hard to decode, while everyone in Telegram groups has unreliable opinions.",
      icon: <MessageSquare className="text-amber-500" />,
      span: "lg:col-span-1",
      bg: "bg-amber-50/40 border-amber-100"
    },
    {
      title: "Make Confident Choices",
      desc: "A single mistake in your choice list can set you back. You are expected to make confident decisions on the 1st try.",
      icon: <ShieldCheck className="text-white" />,
      span: "lg:col-span-2",
      bg: "bg-[#155DFC] border-[#155DFC] text-white",
      isPrimary: true
    }
  ];

  return (
    <section className="relative py-10 bg-white/50 backdrop-blur-2xl overflow-hidden">
      {/* Background Grid Pattern matching your Hero */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#155DFC 1.5px, transparent 1.5px), linear-gradient(90deg, #155DFC 1.5px, transparent 1.5px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#155DFC] text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-100 shadow-sm">
            Reality Check
          </div>
          <h1 className="text-5xl md:text-6xl font-[1000] text-slate-900 tracking-tight leading-[0.95] mb-6">
            The Counselling <span className="text-[#155DFC] italic">Chaos.</span>
          </h1>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Understanding medical admissions shouldn't be a gamble. We simplify the complexity.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaosData.map((card, i) => (
            <div
              key={i}
              className={`${card.span} ${card.bg} relative p-10 rounded-[40px] border-2 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between overflow-hidden group`}
            >
              <div>
                {/* Icon Glass Container */}
                {/* <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:rotate-6 ${card.isPrimary ? 'bg-white/20' : 'bg-white border border-slate-100'}`}>
                  {React.cloneElement(card.icon as React.ReactElement, { size: 24, strokeWidth: 2.5 })}
                </div> */}

                <h1 className={`text-2xl font-[1000] mb-4 tracking-tighter ${card.isPrimary ? 'text-white' : 'text-slate-900'}`}>
                  {card.title}
                </h1>
                <p className={`font-semibold leading-relaxed mb-6 ${card.isPrimary ? 'text-blue-50/80 text-lg' : 'text-slate-500'}`}>
                  {card.desc}
                </p>
              </div>

              {card.isPrimary && (
                <button className="flex items-center gap-2 w-fit bg-white text-[#155DFC] px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-wider hover:scale-105 transition-all">
                  Get Started Now <ChevronRight size={14} strokeWidth={3} />
                </button>
              )}
              
           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChaosSection;