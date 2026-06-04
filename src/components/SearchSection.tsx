"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SearchSection() {
  const [searchType, setSearchType] = useState<"landlord" | "tenant">("landlord");
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-24 bg-[#0A0C12]">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(219, 82, 39, 0.5) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Section header */}
          <div className="space-y-4">
            <div className="text-[#DB5227] text-[13px] font-semibold tracking-[4px] text-glow-accent">
              Ð¥ÐÐ™Ð›Ð¢
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ ÑÑÐ²ÑÐ» Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡ Ñ…Ð°Ð¹Ñ…
            </h2>
            <p className="text-[#76828E] max-w-lg mx-auto">
              ÐÑÑ€, ÑƒÑ‚Ð°ÑÐ½Ñ‹ Ð´ÑƒÐ³Ð°Ð°Ñ€, ÑÑÐ²ÑÐ» Ñ…Ð°ÑÐ³Ð°Ð°Ñ€ Ñ…Ð°Ð¹Ð¶ Ò¯Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´Ð»Ò¯Ò¯Ð´Ð¸Ð¹Ð³ ÑƒÐ½ÑˆÐ¸Ð½Ð° ÑƒÑƒ
            </p>
          </div>

          {/* Search Type Toggle */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0f1118] border border-[#023661]/50">
            <button
              onClick={() => setSearchType("landlord")}
              className={`px-8 py-3 rounded-xl text-sm font-bold tracking-[1px] transition-all ${
                searchType === "landlord" 
                  ? "bg-[#DB5227] text-white neon-glow-accent" 
                  : "text-[#76828E] hover:text-white"
              }`}
            >
              Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ò®Ò®Ð›Ð­Ð“Ð§
            </button>
            <button
              onClick={() => setSearchType("tenant")}
              className={`px-8 py-3 rounded-xl text-sm font-bold tracking-[1px] transition-all ${
                searchType === "tenant" 
                  ? "bg-[#DB5227] text-white neon-glow-accent" 
                  : "text-[#76828E] hover:text-white"
              }`}
            >
              Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ð­Ð“Ð§
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <div className="flex items-center gap-4 p-2 rounded-2xl bg-[#0f1118] border border-[#023661]/50 neon-glow-primary">
              <svg className="w-6 h-6 text-[#DB5227] ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchType === "landlord" ? "Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡Ð¸Ð¹Ð½ Ð½ÑÑ€, ÑƒÑ‚Ð°Ñ..." : "Ð¢Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð¸Ð¹Ð½ Ð½ÑÑ€, ÑƒÑ‚Ð°Ñ..."}
                className="flex-1 bg-transparent text-white placeholder-[#76828E]/60 outline-none px-4 py-4 text-base"
              />
              <button className="px-8 py-4 bg-[#023661] text-white font-bold text-sm tracking-[2px] rounded-xl hover:bg-[#023661]/80 transition-all">
                Ð¥ÐÐ™Ð¥
              </button>
            </div>
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Ð£Ð»Ð°Ð°Ð½Ð±Ð°Ð°Ñ‚Ð°Ñ€", "Ð”Ð°Ñ€Ñ…Ð°Ð½", "Ð­Ñ€Ð´ÑÐ½ÑÑ‚", "Ð‘Ð°ÑÐ½-Ó¨Ð»Ð³Ð¸Ð¹", "Ð¥Ó©Ð²ÑÐ³Ó©Ð»"].map((city) => (
              <button
                key={city}
                className="px-4 py-2 rounded-full border border-[#023661]/50 text-[#76828E] text-sm hover:border-[#DB5227] hover:text-[#DB5227] transition-all"
              >
                {city}
              </button>
            ))}
          </div>

          {/* Recent searches hint */}
          <div className="text-[#76828E]/60 text-sm">
            Ð­Ð½Ñ 7 Ñ…Ð¾Ð½Ð¾Ð³Ñ‚ Ñ…Ð°Ð¼Ð³Ð¸Ð¹Ð½ Ð¸Ñ… Ñ…Ð°Ð¹Ð³Ð´ÑÐ°Ð½:{" "}
            <span className="text-[#DB5227] cursor-pointer hover:underline">Ð‘Ð°ÑÐ½Ð³Ð¾Ð» Ð´Ò¯Ò¯Ñ€ÑÐ³</span>
            {", "}
            <span className="text-[#DB5227] cursor-pointer hover:underline">Ð‘Ð°Ñ‚</span>
            {", "}
            <span className="text-[#DB5227] cursor-pointer hover:underline">Ð¡Ò¯Ñ…Ð±Ð°Ð°Ñ‚Ð°Ñ€ Ð´Ò¯Ò¯Ñ€ÑÐ³</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
