"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SearchBar from "./SearchBar";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scalesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Main timeline for scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Phase 1: Zoom into Lady Justice (0-50%)
      tl.to(
        imageRef.current,
        {
          scale: 1.8,
          y: "-10%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Phase 2: Fade to scales (50-70%)
      tl.to(
        imageRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
        },
        0.5
      );

      tl.fromTo(
        scalesRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        0.5
      );

      // Phase 3: Zoom into scales (70-100%)
      tl.to(
        scalesRef.current,
        {
          scale: 1.5,
          y: "-5%",
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.7
      );

      // Fade in content after image zooms
      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0.6
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Lady Justice Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative w-[500px] h-[700px] md:w-[600px] md:h-[850px]">
          <img
            src="/lady-justice.jpg"
            alt="Lady Justice"
            className="w-full h-full object-contain gradient-fade-bottom"
          />
          {/* Gradient overlay for fade effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
      </div>

      {/* Golden Scales Close-up (revealed on scroll) */}
      <div
        ref={scalesRef}
        className="absolute inset-0 flex items-center justify-center opacity-0"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px]">
          <img
            src="/golden-scales.jpg"
            alt="Golden Scales of Justice"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
      </div>

      {/* Content (appears after scroll) */}
      <div
        ref={contentRef}
        className="relative z-10 text-center space-y-8 opacity-0"
        style={{ willChange: "transform, opacity" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-[8px] md:tracking-[12px]">
          BLACKLISTED.MN
        </h1>
        <p className="text-lg md:text-xl text-[#00f0ff] tracking-[4px]">
          Ð¨ÑƒÐ´Ð°Ñ€Ð³Ð° Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»
        </p>

        <SearchBar />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#00f0ff]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
