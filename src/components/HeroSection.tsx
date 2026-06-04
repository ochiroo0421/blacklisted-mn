"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const ladyJusticeRef = useRef<HTMLImageElement>(null);
  const scalesRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [searchType, setSearchType] = useState<"landlord" | "tenant">("landlord");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Phase 1: Lady Justice zoom in and move to center (0-40%)
      tl.to(
        ladyJusticeRef.current,
        {
          scale: 2.5,
          x: "-20%",
          y: "10%",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out content during zoom
      tl.to(
        contentRef.current,
        {
          opacity: 0,
          y: -50,
          duration: 0.3,
          ease: "power2.in",
        },
        0.1
      );

      // Phase 2: Crossfade Lady Justice to Golden Scales (40-60%)
      tl.to(
        ladyJusticeRef.current,
        {
          opacity: 0,
          scale: 3,
          duration: 0.2,
          ease: "power2.inOut",
        },
        0.4
      );

      tl.fromTo(
        scalesRef.current,
        {
          opacity: 0,
          scale: 1.5,
        },
        {
          opacity: 1,
          scale: 2.5,
          duration: 0.2,
          ease: "power2.out",
        },
        0.45
      );

      // Phase 3: Golden Scales final zoom (60-100%)
      tl.to(
        scalesRef.current,
        {
          scale: 3.5,
          x: "10%",
          y: "-5%",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0.6
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Main Content Area */}
      <div className="relative z-10 flex min-h-screen">
        
        {/* Left Side - Content (38.2% - Golden Ratio complement) */}
        <div
          ref={contentRef}
          className="w-[38.2%] flex flex-col justify-center px-12 md:px-20 pt-20"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Ð‘Ð˜Ð”
                <br />
                <span className="text-[#00f0ff]">Ð›Ð£Ð™Ð’ÐÐ Ð§Ð”Ð«Ð“</span>
                <br />
                Ð˜Ð›Ð§Ð˜Ð›ÐÐ­
              </h1>
            </div>

            <p className="text-lg text-[#a0a0a0] max-w-md leading-relaxed">
              Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ Ð±Ð¾Ð»Ð¾Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð´Ð¸Ð¹Ð½ Ò¯Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»Ð´ Ñ‚ÑƒÐ»Ð³ÑƒÑƒÑ€Ð»Ð°Ð½ 
              ÑˆÑƒÐ´Ð°Ñ€Ð³Ð° Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»Ð¸Ð¹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾
            </p>

            <div className="pt-4">
              <div className="flex items-center gap-4 p-2 rounded-2xl bg-[#0a0a1a] border border-[#00f0ff]/50 neon-glow-cyan">
                <svg className="w-5 h-5 text-[#00f0ff] ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡Ð¸Ð¹Ð½ Ð½ÑÑ€, ÑƒÑ‚Ð°Ñ..."
                  className="flex-1 bg-transparent text-white placeholder-[#00f0ff]/60 outline-none px-3 py-3 text-sm"
                />
                <button className="px-6 py-3 bg-[#ff00ff] text-white font-bold text-xs tracking-[2px] rounded-xl hover:bg-[#ff00ff]/80 transition-colors neon-glow-pink">
                  Ð¥ÐÐ™Ð¥
                </button>
              </div>

              <div className="flex justify-center mt-3">
                <div className="inline-flex p-1 rounded-xl bg-[#0a0a1a]">
                  <button
                    onClick={() => setSearchType("landlord")}
                    className={`px-8 py-2 rounded-lg text-xs font-bold tracking-[1px] transition-all ${
                      searchType === "landlord" ? "bg-[#ff00ff] text-white neon-glow-pink" : "text-[#00f0ff]"
                    }`}
                  >
                    Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ò®Ò®Ð›Ð­Ð“Ð§
                  </button>
                  <button
                    onClick={() => setSearchType("tenant")}
                    className={`px-8 py-2 rounded-lg text-xs font-bold tracking-[1px] transition-all ${
                      searchType === "tenant" ? "bg-[#ff00ff] text-white neon-glow-pink" : "text-[#00f0ff]"
                    }`}
                  >
                    Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ð­Ð“Ð§
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="text-3xl font-bold text-[#00f0ff]">2,500+</div>
              <div className="text-sm text-[#a0a0a0]">Ð‘Ò¯Ñ€Ñ‚Ð³ÑÐ»Ñ‚ÑÐ¹<br />Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡</div>
              <div className="w-px h-10 bg-[#00f0ff]/30"></div>
              <div className="text-3xl font-bold text-[#ff00ff]">8,000+</div>
              <div className="text-sm text-[#a0a0a0]">Ò®Ð½ÑÐ½Ñ‡<br />ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»</div>
            </div>
          </div>
        </div>

        {/* Right Side - Lady Justice (61.8% - Golden Ratio) */}
        <div
          ref={imageContainerRef}
          className="w-[61.8%] relative flex items-center justify-center"
        >
          {/* Lady Justice Image */}
          <img
            ref={ladyJusticeRef}
            src="/lady-justice.jpg"
            alt="Lady Justice"
            className="absolute w-full h-full object-contain object-center"
            style={{
              willChange: "transform, opacity",
              mixBlendMode: "lighten",
              filter: "contrast(1.1) brightness(0.9)",
            }}
          />

          {/* Golden Scales Image (initially hidden) */}
          <img
            ref={scalesRef}
            src="/golden-scales.jpeg"
            alt="Golden Scales"
            className="absolute w-full h-full object-contain object-center opacity-0"
            style={{
              willChange: "transform, opacity",
              mixBlendMode: "lighten",
              filter: "contrast(1.2) brightness(1)",
            }}
          />

          {/* Gradient overlay for smooth transition to black */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-[#00f0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
