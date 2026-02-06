"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Settings,
  ShieldCheck,
  Handshake,
  Microscope,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     /* ========= HEADER ========= */
  //     gsap.from(".feature-header", {
  //       scrollTrigger: {
  //         trigger: ".feature-header",
  //         start: "top 85%",
  //       },
  //       y: 60,
  //       opacity: 0,
  //       duration: 1.1,
  //       ease: "power3.out",
  //     });

  //     /* ========= CARDS STAGGER ========= */
  //     gsap.from(".feature-item", {
  //       scrollTrigger: {
  //         trigger: ".feature-grid",
  //         start: "top 80%",
  //       },
  //       y: 80,
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 0.18,
  //       ease: "power3.out",
  //     });

  //     /* ========= FLOAT PARALLAX ========= */
  //     gsap.to(".feature-item", {
  //       y: -15,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         scrub: 2,
  //       },
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#F6F9FF] overflow-hidden"
    >
      {/* ========= PREMIUM GLOW BACKGROUND ========= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(21,93,252,0.18)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute right-[-200px] bottom-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(21,93,252,0.15)_0%,_transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ========= HEADER ========= */}
        <div className="feature-header text-center mb-24">
          <div
            className="
            inline-flex items-center gap-2
            px-4 py-1.5 rounded-full
            bg-white/60 backdrop-blur-lg
            border border-white/50
            text-[#155DFC]
            text-[11px] font-bold
            uppercase tracking-widest
            shadow-md mb-6
          "
          >
            <Microscope size={14} />
            The Engineering Behind the Care
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Built by Engineers. <br />
            <span className="bg-gradient-to-r from-[#155DFC] to-blue-400 bg-clip-text text-transparent">
              Refined by Doctors.
            </span>
          </h1>
        </div>

        {/* ========= GRID ========= */}
        <div className="feature-grid grid md:grid-cols-3 gap-10">

          {/* ========= CARD TEMPLATE ========= */}
          {[
            {
              icon: <Settings />,
              title: "Engineered",
              text:
                "Advanced modelling simulates every counselling outcome with 99.9% precision.",
              dark: false,
            },
            {
              icon: <ShieldCheck />,
              title: "Doctor Refined",
              text:
                "Policies and logic validated by senior doctors and PG students.",
              dark: true,
            },
            {
              icon: <Handshake />,
              title: "Trust of 100k+",
              text:
                "India’s largest NEET counselling community trusted for 5+ years.",
              dark: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`
                feature-item group relative p-9 rounded-[36px]
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
                ${
                  item.dark
                    ? "bg-gradient-to-br from-[#155DFC] to-blue-500 text-white shadow-[0_20px_60px_rgba(21,93,252,0.35)]"
                    : "bg-white/70 backdrop-blur-xl border border-white/60"
                }
              `}
            >
              {/* ICON */}
              <div
                className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-8
                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
                  ${
                    item.dark
                      ? "bg-white/20 border border-white/30"
                      : "bg-gradient-to-br from-[#155DFC] to-blue-400 text-white shadow-lg"
                  }
                `}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black mb-4 tracking-tight">
                {item.title}
              </h3>

              {/* TEXT */}
              <p
                className={`leading-relaxed font-medium mb-8 ${
                  item.dark ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {item.text}
              </p>

              {/* LINK */}
              <div
                className={`
                  flex items-center gap-2 text-xs font-bold uppercase tracking-widest
                  transition-all
                  ${item.dark ? "text-white" : "text-[#155DFC]"}
                `}
              >
                Learn More
                <ChevronRight className="group-hover:translate-x-1 transition" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
