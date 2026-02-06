"use client";
import React from "react";
import { Activity, Users, School, MapPin } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { 
      label: "Aspirants Assisted", 
      number: "100k+", 
      icon: Users, 
      color: "bg-[#F3F0FF]", // Soft Lavender
      textColor: "text-[#6366F1]",
      border: "border-indigo-100"
    },
    { 
      label: "Medical Colleges", 
      number: "700+", 
      icon: School, 
      color: "bg-[#F0FDF4]", // Soft Mint
      textColor: "text-[#16A34A]",
      border: "border-emerald-100"
    },
    { 
      label: "States Covered", 
      number: "28", 
      icon: MapPin, 
      color: "bg-[#FFFBEB]", // Soft Amber
      textColor: "text-[#B45309]",
      border: "border-amber-100"
    },
    { 
      label: "Data Points Analyzed", 
      number: "12M", 
      icon: Activity, 
      color: "bg-[#FFF1F2]", // Soft Rose
      textColor: "text-[#E11D48]",
      border: "border-rose-100"
    },
  ];

  return (
    <section className="relative  my-4 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
     

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`group relative shadow-2xl shadow-black/20 p-10 rounded-[48px] overflow-hidden ${stat.color} border-2 ${stat.border} 
                           transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]`}
              >
                {/* Icon Container */}
                <div className="mb-14 w-16 h-16 rounded-[22px] bg-white shadow-sm flex items-center justify-center 
                                transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={28} className={stat.textColor} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h4 className={`text-6xl font-[1000] tracking-tighter mb-2 ${stat.textColor}`}>
                    {stat.number}
                  </h4>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500/80">
                    {stat.label}
                  </p>
                </div>

                {/* Background Watermark Icon */}
                <Icon 
                  size={140} 
                  strokeWidth={1}
                  className={`absolute -bottom-6 -right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity ${stat.textColor}`} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;