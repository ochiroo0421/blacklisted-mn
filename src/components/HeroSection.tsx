"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Fade out content on scroll
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=60%",
          scrub: 1,
        },
        opacity: 0,
        y: -80,
        ease: "power2.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0A0C12] overflow-hidden"
    >
      <div className="absolute inset-0 gradient-radial-dark" />
      
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 54, 97, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 54, 97, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div
          ref={contentRef}
          className="text-center max-w-4xl mx-auto pt-20"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Ð¢ÐÐÐ« Ð¥ÐÐ ÐÐÐ“Ò®Ð™
                <br />
                <span className="text-[#DB5227] text-glow-accent">Ð—Ò®Ð™Ð›Ð¡ Ð‘ÐÐ™Ð“ÐÐ</span>
                <br />
                <span className="text-[#76828E]">Ð§ Ð®Ðœ Ð‘Ð˜Ð›Ò®Ò®?</span>
              </h1>
            </div>

            <p className="text-xl text-[#76828E] max-w-2xl mx-auto leading-relaxed">
              Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ Ð±Ð¾Ð»Ð¾Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð´Ð¸Ð¹Ð½ Ò¯Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»Ð´ Ñ‚ÑƒÐ»Ð³ÑƒÑƒÑ€Ð»Ð°Ð½ 
              ÑˆÑƒÐ´Ð°Ñ€Ð³Ð° Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»Ð¸Ð¹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾
            </p>

            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#DB5227]">2,500+</div>
                <div className="text-xs text-[#76828E] tracking-[1px] mt-1">Ð‘Ò¯Ñ€Ñ‚Ð³ÑÐ»Ñ‚ÑÐ¹</div>
              </div>
              <div className="w-px h-12 bg-[#023661]/50" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#023661]">8,000+</div>
                <div className="text-xs text-[#76828E] tracking-[1px] mt-1">Ð¡ÑÑ‚Ð³ÑÐ³Ð´ÑÐ»</div>
              </div>
              <div className="w-px h-12 bg-[#023661]/50" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[#76828E]">95%</div>
                <div className="text-xs text-[#76828E] tracking-[1px] mt-1">Ð˜Ñ‚Ð³ÑÐ»Ñ†ÑÐ»</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[#76828E] text-xs tracking-[2px]">Ð”ÐžÐžÐ¨ Ð“Ò®Ð™Ð›Ð“Ð­Ð­Ð Ð­Ð™</span>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#DB5227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0C12] to-transparent z-10" />
    </section>
  );
}
