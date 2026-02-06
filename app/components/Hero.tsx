"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, Activity, Sparkles } from "lucide-react";
import { gsap } from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".animate-in", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      });

      // Heartbeat Pulse Animation
      gsap.to(pulseRef.current, {
        strokeDashoffset: 0,
        duration: 3,
        repeat: -1,
        ease: "none",
      });

      // Subtle Pulse Glow
      gsap.to(pulseRef.current, {
        opacity: 0.4,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating card
      gsap.to(cardRef.current, {
        y: -25,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 "
    >
      {/* ========= HEARTBEAT SVG BACKGROUND ========= */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20 pointer-events-none">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            ref={pulseRef}
            d="M0,100 L350,100 L370,80 L390,120 L410,40 L430,160 L450,100 L1000,100"
            fill="none"
            stroke="#155DFC"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2000"
            strokeDashoffset="2000"
          />
        </svg>
      </div>

      {/* ========= PREMIUM GLOW BACKGROUND ========= */}
      {/* <div className="absolute inset-0 -z-20">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-[radial-gradient(circle_at_center,_rgba(21,93,252,0.15)_0%,_transparent_65%)] blur-3xl" />
      </div> */}

      <main className="relative z-10 text-center max-w-5xl px-6">
        {/* ===== GLASS BADGE ===== */}
        <div className="animate-in mb-10 inline-flex items-center gap-2 px-5 py-2 rounded-full
                        bg-white/60 backdrop-blur-xl border border-white/50
                        shadow-lg">
          <Activity className="w-4 h-4 text-[#155DFC] animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
            India’s #1 Success Platform
          </span>
        </div>

        {/* ===== HEADLINE ===== */}
        <h1 className="animate-in text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-8 text-zinc-800">
          The Digital{" "}
          <span className="bg-gradient-to-r from-[#155DFC] to-blue-400 bg-clip-text text-transparent">
            Stethoscope
          </span>
          <br />
          for Every Aspirant
        </h1>

        {/* ===== SUBTEXT ===== */}
        <p className="animate-in text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          Built with clinical precision to guide your counselling journey —
          clarity, predictions and strategy in one place.
        </p>

        {/* ===== BUTTONS ===== */}
        <button
            className="
              btn m-auto text-white text-xl
               btn px-6 py-2 rounded-full bg-blue-500 capitalize
              shadow-[0_10px_30px_rgba(0,0,0,0.50)] font-semibold
            "
          >
           get started

            {/* shine effect */}
            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-white/20 blur-md" />
          </button>

        {/* ===== FLOATING CARD ===== */}
        <div
          ref={cardRef}
          className="hidden lg:block absolute -right-36 top-1/2 -translate-y-1/2"
        >
          <div className="p-[2px] rounded-[32px] bg-gradient-to-br from-[#155DFC] to-blue-400 shadow-2xl shadow-blue-200">
            <div className="bg-white rounded-[30px] p-7 text-left w-[240px]">
              <h4 className="text-5xl font-black text-[#155DFC] italic mb-2 tracking-tighter">
                #1
              </h4>
              <p className="text-[10px] font-black text-slate-600 leading-tight uppercase tracking-wider">
                INDIA'S NO.1 NEET <br /> COUNSELLING HUB
              </p>
              <div className="mt-6 h-1.5 rounded-full bg-[#155DFC]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;