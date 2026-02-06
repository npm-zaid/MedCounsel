import React from 'react';
import { ArrowUpRight, Stethoscope, Heart, Activity, Microscope, ClipboardList, Brain } from 'lucide-react';

const packages = [
  {
    title: "NEET UG",
    sub: "Under Graduate",
    desc: "MBBS & BDS",
    price: "₹3999",
    color: "bg-[#F3F0FF]",
    textColor: "text-[#6366F1]",
    icon: Stethoscope,
    illustration: "stethoscope"
  },
  {
    title: "NEET PG",
    sub: "Post Graduate",
    desc: "Medical MD/MS",
    price: "₹3999",
    color: "bg-[#FFF4ED]",
    textColor: "text-[#F97316]",
    icon: Heart,
    illustration: "heart"
  },
  {
    title: "NEET MDS",
    sub: "Dental Science",
    desc: "Master of Dental Science",
    price: "₹3999",
    color: "bg-[#FEFCE8]",
    textColor: "text-[#A16207]",
    icon: Activity,
    illustration: "tooth"
  },
  {
    title: "INICET",
    sub: "National Importance",
    desc: "Institute Entrance Test",
    price: "₹999",
    color: "bg-[#FFF1F2]",
    textColor: "text-[#E11D48]",
    icon: Microscope,
    illustration: "microscope"
  },
  {
    title: "DNB PDCET",
    sub: "Post Diploma",
    desc: "Centralized Entrance Test",
    price: "₹999",
    color: "bg-[#F0FDF4]",
    textColor: "text-[#16A34A]",
    icon: ClipboardList,
    illustration: "clipboard"
  },
  {
    title: "NEET SS",
    sub: "Super Speciality",
    desc: "Advanced Specialization",
    price: "FREE",
    color: "bg-[#F0F9FF]",
    textColor: "text-[#0284C7]",
    icon: Brain,
    illustration: "brain"
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-[900] text-slate-900 tracking-tight mb-4">
            More Than Data, for <span className="text-blue-600 font-black italic">Less</span> Than You Think
          </h1>
          <p className="text-slate-500 font-medium max-w-3xl mx-auto text-lg leading-relaxed">
            Smart packages with expert insights and real-time data without breaking the bank.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`group shadow-2xl shadow-black/20 relative overflow-hidden rounded-[40px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 ${pkg.color}`}
            >
              {/* Card Action Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className={`text-xs font-black tracking-widest uppercase mb-1 block ${pkg.textColor}`}>
                    {pkg.title}
                  </span>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                    {pkg.sub}
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-3 rounded-2xl group-hover:bg-white transition-colors">
                  <ArrowUpRight size={20} className={pkg.textColor} />
                </div>
              </div>

              {/* Main Content */}
              <div className="relative z-10">
                <h3 className={`text-6xl font-black mb-2 tracking-tighter ${pkg.textColor}`}>
                  {pkg.title.split(' ')[1] || pkg.title}
                </h3>
                <p className="text-slate-500 text-sm font-semibold mb-12">
                  {pkg.desc}
                </p>
                
                <div className="mt-auto">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                    Starting from
                  </p>
                  <p className="text-4xl font-black text-slate-900 tracking-tight">
                    {pkg.price}
                  </p>
                </div>
              </div>

              {/* Background Illustration Mockup */}
              <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.08] group-hover:opacity-[0.12] transition-opacity">
                <pkg.icon size={180} strokeWidth={1.5} className={pkg.textColor} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Label */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4 px-6 py-3 bg-slate-50 border border-slate-100 rounded-full">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Activity size={16} className="text-blue-600" />
            </div>
            <span className="text-sm font-bold text-slate-600 italic">
              Talk to our experts: <span className="text-slate-900 not-italic">080-690-36000</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}