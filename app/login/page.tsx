"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  ShieldCheck, 
  Stethoscope, 
  Lock, 
  User, 
  Fingerprint,
  Activity,
  ArrowRight
} from "lucide-react";

export default function page() {
  const containerRef = useRef(null);
  const pulseRef = useRef(null);



  return (
    <main ref={containerRef} className="min-h-screen mt-[20vh] w-full flex items-center justify-center bg-[#F8FAFC] overflow-hidden relative">
      
      {/* KINETIC DATA BACKGROUND (Medical Stream) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="data-particle absolute bottom-[-10%] w-[1px] h-20 bg-gradient-to-t from-transparent via-[#155DFC] to-transparent"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full h-[700px] grid lg:grid-cols-2 bg-white rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative z-10 mx-6">
        
        {/* LEFT: THE NEURAL SCANNER */}
        <div className="bg-slate-900 relative hidden lg:flex flex-col items-center justify-center p-16 overflow-hidden">
          {/* Animated Circles */}
          <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-[300px] h-[300px] border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <div className="relative">
              <div ref={pulseRef} className="absolute inset-0 bg-[#155DFC] rounded-full scale-100" />
              <div className="w-24 h-24 rounded-full bg-[#155DFC] flex items-center justify-center text-white relative z-10 shadow-2xl shadow-blue-500/50">
                <Fingerprint size={40} />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-[1000] text-white tracking-tighter">Clinical Precision <br /><span className="text-blue-400">Secured Access.</span></h2>
              <p className="text-slate-400 font-bold text-sm leading-relaxed max-w-xs">
                Welcome back, Doctor. Your personalized counselling roadmap is ready for verification.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                <Activity size={14} className="text-blue-400" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Real-time Data</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Encrypted</span>
              </div>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-10 left-10 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#155DFC]">
              <Stethoscope size={18} />
            </div>
            <span className="text-white font-[1000] tracking-tighter text-xl">MedCounsel</span>
          </div>
        </div>

        {/* RIGHT: THE LOGIN CONSOLE */}
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-white">
          <div className="space-y-10">
            <div className="login-form-el space-y-2">
              <h1 className="text-4xl font-[1000] text-slate-900 tracking-tighter">Login to Portal</h1>
              <p className="text-slate-400 font-bold text-sm">Enter your credentials to continue your journey.</p>
            </div>

            <form className="space-y-6">
              <div className="login-form-el space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email / NEET Roll No.</label>
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#155DFC] transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder="doctor@zynerd.com"
                    className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#155DFC] focus:ring-4 focus:ring-blue-50 transition-all font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="login-form-el space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Password</label>
                  <button type="button" className="text-[10px] font-black text-[#155DFC] uppercase tracking-widest hover:underline">Forgot?</button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#155DFC] transition-colors" size={18} />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#155DFC] focus:ring-4 focus:ring-blue-50 transition-all font-bold text-slate-900"
                  />
                </div>
              </div>

              <button className="login-form-el w-full py-5 bg-[#155DFC] hover:bg-slate-900 text-white rounded-2xl font-[1000] text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3 group">
                Authenticate Session <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="login-form-el pt-6 text-center">
              <p className="text-slate-400 font-bold text-xs">
                New aspirant? <button className="text-[#155DFC] font-black hover:underline">Create Account</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-[1000] text-slate-900/[0.02] pointer-events-none select-none tracking-tighter">
        ACCESS
      </div>
    </main>
  );
}