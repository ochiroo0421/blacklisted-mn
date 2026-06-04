"use client";

import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"landlord" | "tenant">("landlord");

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ð¥Ð°Ð¹Ð»Ñ‚
          </h1>
          <p className="text-[#00f0ff]">
            Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ ÑÑÐ²ÑÐ» Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡ Ñ…Ð°Ð¹Ñ…
          </p>
        </div>

        <div className="max-w-[700px] mx-auto mb-12">
          <div className="flex items-center gap-4 p-2 rounded-2xl bg-[#0a0a1a] border border-[#00f0ff]/50 neon-glow-cyan">
            <svg className="w-5 h-5 text-[#00f0ff] ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ð¥Ð°Ð¹Ñ…..."
              className="flex-1 bg-transparent text-white placeholder-[#00f0ff]/60 outline-none px-3 py-3"
            />
            <button className="px-8 py-3 bg-[#ff00ff] text-white font-bold text-sm tracking-[2px] rounded-xl neon-glow-pink hover:bg-[#ff00ff]/80 transition-colors">
              Ð¥ÐÐ™Ð¥
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <div className="inline-flex p-1 rounded-xl bg-[#0a0a1a]">
              <button
                onClick={() => setSearchType("landlord")}
                className={`px-8 py-2 rounded-lg text-sm font-bold tracking-[1px] transition-all ${
                  searchType === "landlord"
                    ? "bg-[#ff00ff] text-white neon-glow-pink"
                    : "text-[#00f0ff]"
                }`}
              >
                Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ò®Ò®Ð›Ð­Ð“Ð§
              </button>
              <button
                onClick={() => setSearchType("tenant")}
                className={`px-8 py-2 rounded-lg text-sm font-bold tracking-[1px] transition-all ${
                  searchType === "tenant"
                    ? "bg-[#ff00ff] text-white neon-glow-pink"
                    : "text-[#00f0ff]"
                }`}
              >
                Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ð­Ð“Ð§
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-[#a0a0a0]">
          <p>Ð¥Ð°Ð¹Ð»Ñ‚Ð°Ð° ÑÑ…Ð»Ò¯Ò¯Ð»ÑÑ…Ð¸Ð¹Ð½ Ñ‚ÑƒÐ»Ð´ Ð´ÑÑÑ€Ñ… Ñ‚Ð°Ð»Ð±Ð°Ñ€Ñ‚ Ð±Ð¸Ñ‡Ð½Ñ Ò¯Ò¯</p>
        </div>
      </div>
    </div>
  );
}
