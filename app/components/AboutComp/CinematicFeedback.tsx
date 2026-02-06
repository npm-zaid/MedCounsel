"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const TESTIMONIALS = [
  { name: "Athul", text: "ZyNerd saved me days of research." },
  { name: "Gampa Abhinay", text: "ZyNerd is the GOAT" },
  { name: "VIDHU K NATH", text: "Excellent worth it... thankful to ZyNerd" },
  { name: "Medha Paul", text: "Today, as I am a final..." },
  { name: "Saransh Gupta", text: "Great app" },
  { name: "Animesh das", text: "Very good app for aspirants" },
  { name: "Arjit Singh", text: "Thank you, ZyNerd, for being a dedicated partner." },
  { name: "Aiswarya", text: "ZyNerd made my counselling journey much easier." },
  { name: "Abubaker sidik", text: "ZyNerd app was a game-changer!" },
];

export default function CinematicFeedback() {
  const containerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1: Moves Left
      gsap.to(row1Ref.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });

      // Row 2: Moves Right
      gsap.to(row2Ref.current, {
        xPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });

      // Row 3: Moves Left (Faster)
      gsap.to(row3Ref.current, {
        xPercent: -35,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const FeedbackCard = ({ item }: { item: typeof TESTIMONIALS[0] }) => (
    <div className="flex-shrink-0 w-[350px] bg-white border border-slate-100 p-6 rounded-[30px] shadow-sm flex flex-col gap-4">
      <p className="text-sm font-bold text-slate-600 leading-relaxed italic">"{item.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#155DFC] to-blue-400 flex items-center justify-center text-white text-[10px] font-black">
          {item.name.charAt(0)}
        </div>
        <span className="text-xs font-[1000] text-slate-900 uppercase tracking-widest">{item.name}</span>
      </div>
    </div>
  );

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center overflow-hidden relative py-20">
      
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-[1000] text-slate-200/40 pointer-events-none select-none">
        COMMUNITY
      </div>

      <div className="text-center mb-12 relative z-10 px-6">
        <h2 className="text-5xl lg:text-7xl font-[1000] text-slate-900 tracking-tighter leading-none mb-4">
          What Our <br />
          <span className="bg-gradient-to-r from-[#155DFC] to-blue-400 bg-clip-text text-transparent">Community Says.</span>
        </h2>
        <p className="text-slate-400 font-bold text-lg">Real feedback from India's No.1 NEET counselling platform.</p>
      </div>

      {/* THE CINEMATIC WALL */}
      <div className="w-full flex flex-col gap-6 relative z-10">
        {/* ROW 1 */}
        <div ref={row1Ref} className="flex gap-6 whitespace-nowrap px-4">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
            <FeedbackCard key={`r1-${i}`} item={item} />
          ))}
        </div>

        {/* ROW 2 */}
        <div ref={row2Ref} className="flex gap-6 whitespace-nowrap px-4 -translate-x-1/2">
          {[...TESTIMONIALS, ...TESTIMONIALS].reverse().map((item, i) => (
            <FeedbackCard key={`r2-${i}`} item={item} />
          ))}
        </div>

        {/* ROW 3 */}
        <div ref={row3Ref} className="flex gap-6 whitespace-nowrap px-4">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
            <FeedbackCard key={`r3-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}