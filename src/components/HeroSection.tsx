"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const ladyJusticeRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Blur and fade Lady Justice on scroll
      gsap.to(ladyJusticeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=80%",
          scrub: 1,
        },
        filter: "blur(20px) brightness(0.3)",
        opacity: 0,
        scale: 1.1,
        ease: "power2.inOut",
      });

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
      {/* Radial gradient background */}
      <div className="absolute inset-0 gradient-radial-dark" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 54, 97, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(2, 54, 97, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex min-h-screen">
        
        {/* Left Side - Content (38.2% - Golden Ratio complement) */}
        <div
          ref={contentRef}
          className="w-[38.2%] flex flex-col justify-center px-12 md:px-20 pt-20"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#023661]/30 border border-[#023661]/50">
              <div className="w-2 h-2 rounded-full bg-[#DB5227] animate-pulse" />
              <span className="text-[#76828E] text-xs font-semibold tracking-[2px]">ÐœÐžÐÐ“ÐžÐ›Ð«Ð Ð¢Ò®Ð Ð­Ð­Ð¡Ð˜Ð™Ð Ð¨Ò®Ò®Ð¥</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Ð¢ÐÐÐ« Ð¥ÐÐ ÐÐÐ“Ò®Ð™
                <br />
                <span className="text-[#DB5227] text-glow-accent">Ð—Ò®Ð™Ð›Ð¡ Ð‘ÐÐ™Ð“ÐÐ</span>
                <br />
                <span className="text-[#76828E]">Ð§ Ð®Ðœ Ð‘Ð˜Ð›Ò®Ò®?</span>
              </h1>
            </div>

            <p className="text-lg text-[#76828E] max-w-md leading-relaxed">
              Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ Ð±Ð¾Ð»Ð¾Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð´Ð¸Ð¹Ð½ Ò¯Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»Ð´ Ñ‚ÑƒÐ»Ð³ÑƒÑƒÑ€Ð»Ð°Ð½ 
              ÑˆÑƒÐ´Ð°Ñ€Ð³Ð° Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»Ð¸Ð¹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-[#DB5227] text-white font-bold text-sm tracking-[2px] rounded-xl hover:bg-[#DB5227]/80 transition-all neon-glow-accent">
                Ð¥ÐÐ™Ð›Ð¢ Ð­Ð¥Ð›Ò®Ò®Ð›Ð­Ð¥
              </button>
              <button className="px-8 py-4 border border-[#023661] text-[#76828E] font-bold text-sm tracking-[2px] rounded-xl hover:border-[#DB5227] hover:text-[#DB5227] transition-all">
                Ð¡Ð­Ð¢Ð“Ð­Ð“Ð”Ð­Ð› Ð‘Ð˜Ð§Ð˜Ð¥
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-6 pt-6 border-t border-[#023661]/30">
              <div>
                <div className="text-2xl font-bold text-[#DB5227]">2,500+</div>
                <div className="text-xs text-[#76828E] tracking-[1px]">Ð‘Ò¯Ñ€Ñ‚Ð³ÑÐ»Ñ‚ÑÐ¹</div>
              </div>
              <div className="w-px h-10 bg-[#023661]/50" />
              <div>
                <div className="text-2xl font-bold text-[#023661]">8,000+</div>
                <div className="text-xs text-[#76828E] tracking-[1px]">Ð¡ÑÑ‚Ð³ÑÐ³Ð´ÑÐ»</div>
              </div>
              <div className="w-px h-10 bg-[#023661]/50" />
              <div>
                <div className="text-2xl font-bold text-[#76828E]">95%</div>
                <div className="text-xs text-[#76828E] tracking-[1px]">Ð˜Ñ‚Ð³ÑÐ»Ñ†ÑÐ»</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Lady Justice (61.8% - Golden Ratio) */}
        <div
          ref={imageContainerRef}
          className="w-[61.8%] relative flex items-center justify-center"
        >
          {/* Glow behind Lady Justice */}
          <div 
            className="absolute w-[80%] h-[80%] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(219, 82, 39, 0.4) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}
          />

          {/* Lady Justice Image */}
          <img
            ref={ladyJusticeRef}
            src="/lady-justice.jpg"
            alt="Lady Justice"
            className="absolute w-full h-full object-contain object-center"
            style={{
              willChange: "transform, opacity, filter",
              mixBlendMode: "lighten",
              filter: "contrast(1.1) brightness(0.9)",
            }}
          />

          {/* Gradient overlays for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C12] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0C12] to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#0A0C12] to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[#76828E] text-xs tracking-[2px]">Ð”ÐžÐžÐ¨ Ð“Ò®Ð™Ð›Ð“Ð­Ð­Ð Ð­Ð™</span>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#DB5227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0C12] to-transparent z-10" />
    </section>
  );
}
