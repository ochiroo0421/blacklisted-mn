"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SearchSection() {
  const [searchType, setSearchType] = useState<"landlord" | "tenant">("landlord");
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-24" style={{ background: '#0F2D4D' }}>
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(222, 209, 198, 0.3) 0%, transparent 70%)',
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
          <div className="space-y-4">
            <div className="text-[#DED1C6] text-[13px] font-semibold tracking-[4px]">
              Ð¥ÐÐ™Ð›Ð¢
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ ÑÑÐ²ÑÐ» Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡ Ñ…Ð°Ð¹Ñ…
            </h2>
            <p className="text-[#DED1C6]/60 max-w-lg mx-auto">
              Ð”Ò¯Ò¯Ñ€ÑÐ³, ÑƒÑ‚Ð°ÑÐ½Ñ‹ Ð´ÑƒÐ³Ð°Ð°Ñ€, Ð½ÑÑ€ÑÑÑ€ Ñ…Ð°Ð¹Ð¶ Ò¯Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´Ð»Ò¯Ò¯Ð´Ð¸Ð¹Ð³ ÑƒÐ½ÑˆÐ¸Ð½Ð° ÑƒÑƒ
            </p>
          </div>

          <div className="inline-flex p-1.5 rounded-2xl bg-[#0F2D4D] border border-[#174871]/50">
            <button
              onClick={() => setSearchType("landlord")}
              className={`px-8 py-3 rounded-xl text-sm font-bold tracking-[1px] transition-all ${
                searchType === "landlord" 
                  ? "bg-[#DED1C6] text-[#0F2D4D] neon-glow-accent" 
                  : "text-[#DED1C6]/60 hover:text-[#DED1C6]"
              }`}
            >
              Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ò®Ò®Ð›Ð­Ð“Ð§
            </button>
            <button
              onClick={() => setSearchType("tenant")}
              className={`px-8 py-3 rounded-xl text-sm font-bold tracking-[1px] transition-all ${
                searchType === "tenant" 
                  ? "bg-[#DED1C6] text-[#0F2D4D] neon-glow-accent" 
                  : "text-[#DED1C6]/60 hover:text-[#DED1C6]"
              }`}
            >
              Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ð­Ð“Ð§
            </button>
          </div>

          <div className="relative">
            <div className="flex items-center gap-4 p-2 rounded-2xl bg-[#0F2D4D] border border-[#174871]/50 neon-glow-primary">
              <svg className="w-6 h-6 text-[#DED1C6] ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchType === "landlord" ? "Ð”Ò¯Ò¯Ñ€ÑÐ³, ÑƒÑ‚Ð°ÑÐ½Ñ‹ Ð´ÑƒÐ³Ð°Ð°Ñ€, Ð½ÑÑ€ÑÑÑ€ Ñ…Ð°Ð¹Ñ…..." : "Ð”Ò¯Ò¯Ñ€ÑÐ³, ÑƒÑ‚Ð°ÑÐ½Ñ‹ Ð´ÑƒÐ³Ð°Ð°Ñ€, Ð½ÑÑ€ÑÑÑ€ Ñ…Ð°Ð¹Ñ…..."}
                className="flex-1 bg-transparent text-white placeholder-[#DED1C6]/40 outline-none px-4 py-4 text-base"
              />
              <button className="px-8 py-4 bg-[#174871] text-white font-bold text-sm tracking-[2px] rounded-xl hover:bg-[#174871]/80 transition-all">
                Ð¥ÐÐ™Ð¥
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Ð£Ð»Ð°Ð°Ð½Ð±Ð°Ð°Ñ‚Ð°Ñ€", "Ð”Ð°Ñ€Ñ…Ð°Ð½", "Ð­Ñ€Ð´ÑÐ½ÑÑ‚", "Ð‘Ð°ÑÐ½-Ó¨Ð»Ð³Ð¸Ð¹", "Ð¥Ó©Ð²ÑÐ³Ó©Ð»"].map((city) => (
              <button
                key={city}
                className="px-4 py-2 rounded-full border border-[#174871]/50 text-[#DED1C6]/60 text-sm hover:border-[#A77693] hover:text-[#A77693] transition-all"
              >
                {city}
              </button>
            ))}
          </div>

          <div className="text-[#DED1C6]/40 text-sm">
            Ð­Ð½Ñ 7 Ñ…Ð¾Ð½Ð¾Ð³Ñ‚ Ñ…Ð°Ð¼Ð³Ð¸Ð¹Ð½ Ð¸Ñ… Ñ…Ð°Ð¹Ð³Ð´ÑÐ°Ð½:{" "}
            <span className="text-[#A77693] cursor-pointer hover:underline">Ð‘Ð°ÑÐ½Ð³Ð¾Ð» Ð´Ò¯Ò¯Ñ€ÑÐ³</span>
            {", "}
            <span className="text-[#A77693] cursor-pointer hover:underline">Ð‘Ð°Ñ‚</span>
            {", "}
            <span className="text-[#A77693] cursor-pointer hover:underline">Ð¡Ò¯Ñ…Ð±Ð°Ð°Ñ‚Ð°Ñ€ Ð´Ò¯Ò¯Ñ€ÑÐ³</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
