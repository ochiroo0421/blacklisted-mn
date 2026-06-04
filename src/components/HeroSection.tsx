"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ladyJusticeRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
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
      className="relative min-h-screen overflow-hidden"
      style={{ background: '#0A0C12' }}
    >
      {/* Futuristic background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(101, 116, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(129, 3, 252, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(184, 246, 13, 0.05) 0%, transparent 50%)'
        }}
      />
      
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(101, 116, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(101, 116, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6574FF 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #8103FC 0%, transparent 70%)', filter: 'blur(100px)' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #B8F60D 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 flex min-h-screen">
        
        <div
          ref={contentRef}
          className="w-[45%] flex flex-col justify-center pl-[8%] pr-8 pt-20"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
                Ð¢ÐÐÐ« Ð¥ÐÐ ÐÐÐ“Ò®Ð™
                <br />
                <span className="text-[#B8F60D]" style={{ textShadow: '0 0 20px rgba(184, 246, 13, 0.5)' }}>Ð—Ò®Ð™Ð›Ð¡ Ð‘ÐÐ™Ð“ÐÐ</span>
                <br />
                <span className="text-[#6574FF]">Ð§ Ð®Ðœ Ð‘Ð˜Ð›Ò®Ò®?</span>
              </h1>
            </div>

            <p className="text-base text-[#76828E] max-w-md leading-relaxed">
              Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ Ð±Ð¾Ð»Ð¾Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð´Ð¸Ð¹Ð½ Ò¯Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»Ð´ Ñ‚ÑƒÐ»Ð³ÑƒÑƒÑ€Ð»Ð°Ð½ 
              ÑˆÑƒÐ´Ð°Ñ€Ð³Ð° Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»Ð¸Ð¹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-[#6574FF]/20">
              <div>
                <div className="text-xl font-bold text-[#B8F60D]">2,500+</div>
                <div className="text-xs text-[#76828E] tracking-[1px]">Ð‘Ò¯Ñ€Ñ‚Ð³ÑÐ»Ñ‚ÑÐ¹</div>
              </div>
              <div className="w-px h-8 bg-[#6574FF]/30" />
              <div>
                <div className="text-xl font-bold text-[#6574FF]">8,000+</div>
                <div className="text-xs text-[#76828E] tracking-[1px]">Ð¡ÑÑ‚Ð³ÑÐ³Ð´ÑÐ»</div>
              </div>
              <div className="w-px h-8 bg-[#6574FF]/30" />
              <div>
                <div className="text-xl font-bold text-[#8103FC]">95%</div>
                <div className="text-xs text-[#76828E] tracking-[1px]">Ð˜Ñ‚Ð³ÑÐ»Ñ†ÑÐ»</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[55%] relative flex items-center justify-center">
          <div 
            className="absolute w-[80%] h-[80%] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(184, 246, 13, 0.3) 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}
          />

          <img
            ref={ladyJusticeRef}
            src="/lady-justice.jpg"
            alt="Lady Justice"
            className="absolute w-full h-full object-contain object-center"
            style={{
              willChange: "transform, opacity, filter",
              mixBlendMode: "lighten",
              filter: "contrast(1.2) brightness(1.1)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C12] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A0C12] to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#0A0C12] to-transparent" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[#76828E] text-xs tracking-[2px]">Ð”ÐžÐžÐ¨ Ð“Ò®Ð™Ð›Ð“Ð­Ð­Ð Ð­Ð™</span>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#B8F60D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0C12] to-transparent z-10" />
    </section>
  );
}
