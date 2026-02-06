"use client";
import React, { useState, useEffect, useRef } from "react";
import { Stethoscope, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef(null);
  const mobileRef = useRef(null);
  const router = useRouter();

  /* ================= Scroll effect ================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    gsap.from(navRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= Mobile animation ================= */
  useEffect(() => {
    if (!mobileRef.current) return;

    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
      );

      gsap.from(".mobile-link", {
        y: 15,
        opacity: 0,
        stagger: 0.07,
        delay: 0.1,
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-xl shadow-blue-500/20  bg-gradient-to-r from-white/20 via-transparent to-white/20 backdrop-blur-3xl px-4 py-3 w-[95%] rounded-full m-auto mt-5`}
    >
      <div className="max-w-7xl  flex items-center justify-between">

        {/* ========= LOGO ========= */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div
          onClick={() => router.push("/")}
            className="
              p-2.5 rounded-xl
              bg-gradient-to-br from-[#155DFC] to-blue-400
              shadow-[0_8px_25px_rgba(21,93,252,0.35)]
              transition-all duration-300
              group-hover:rotate-6 group-hover:scale-110
            "
          >
            <Stethoscope className="text-white w-5 h-5" />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            MedCounsel
          </span>
        </div>

        {/* ========= DESKTOP LINKS ========= */}
        <div className="hidden md:flex items-center gap-10">
          {["explore", "packages", "about", "blog"].map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase()}`}
              className=" active:text-[#155DFC]
                relative text-sm font-semibold text-slate-600
                hover:text-[#155DFC] capitalize
                transition-colors duration-300
                group
              "
            >
              {item}

              {/* animated underline */}
              <span
                className="
                  absolute -bottom-1 left-1/2 -translate-x-1/2
                  w-0 h-[2px] 
                  bg-gradient-to-r from-[#155DFC] to-blue-400
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* ========= ACTION BUTTONS ========= */}
        <div className="hidden md:flex items-center gap-3">

          <button
            className="
              text-sm font-semibold
              bg-black
              text-white
               btn px-6 py-2 rounded-full
              shadow-[0_10px_30px_rgba(0,0,0,0.50)]
              transition-all 
            "
          >
            Join Now
          </button>

          <button
          onClick={() => router.push("/login")}
            className="
             btn bg-blue-500 text-white px-6 py-2 font-semibold rounded-full
            "
          >
            Log In

            {/* shine effect */}
            <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-white/20 blur-md" />
          </button>
        </div>

        {/* ========= MOBILE TOGGLE ========= */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 transition"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ========= MOBILE MENU ========= */}
      {isMobileMenuOpen && (
        <div
          ref={mobileRef}
          className="
            md:hidden
            absolute top-full left-0 w-full
            bg-white/90 backdrop-blur-xl
            border-b border-slate-100
            p-6 flex flex-col gap-5
            shadow-xl
          "
        >
          {["explore", "packages", "about", "blog"].map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase()}`}
              className="mobile-link font-semibold capitalize text-slate-900 text-lg"
            >
              {item}
            </a>
          ))}

          <button
            className="
              mobile-link mt-2
              bg-gradient-to-r from-[#155DFC] to-blue-500
              text-white py-3 rounded-xl font-bold
              shadow-lg
            "
          >
            Start Counseling Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
