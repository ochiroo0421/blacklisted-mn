"use client";

import { useState } from "react";

export default function SearchBar() {
  const [searchType, setSearchType] = useState<"landlord" | "tenant">("landlord");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log("Searching for:", searchQuery, "Type:", searchType);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto space-y-4">
      {/* Search Input */}
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center gap-4 p-2 rounded-2xl bg-[#0a0a1a] border border-[#00f0ff]/50 neon-glow-cyan">
          <svg
            className="w-5 h-5 text-[#00f0ff] ml-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡Ð¸Ð¹Ð½ Ð½ÑÑ€, ÑƒÑ‚Ð°ÑÐ½Ñ‹ Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÑÐ²ÑÐ» Ð´Ò¯Ò¯Ñ€ÑÐ³..."
            className="flex-1 bg-transparent text-white placeholder-[#00f0ff]/60 outline-none px-3 py-3"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#ff00ff] text-white font-bold text-sm tracking-[2px] rounded-xl hover:bg-[#ff00ff]/80 transition-colors neon-glow-pink"
          >
            Ð¥ÐÐ™Ð¥
          </button>
        </div>
      </form>

      {/* Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-xl bg-[#0a0a1a]">
          <button
            onClick={() => setSearchType("landlord")}
            className={`px-10 py-2.5 rounded-lg text-sm font-bold tracking-[1px] transition-all ${
              searchType === "landlord"
                ? "bg-[#ff00ff] text-white neon-glow-pink"
                : "text-[#00f0ff] hover:text-white"
            }`}
          >
            Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ò®Ò®Ð›Ð­Ð“Ð§
          </button>
          <button
            onClick={() => setSearchType("tenant")}
            className={`px-10 py-2.5 rounded-lg text-sm font-bold tracking-[1px] transition-all ${
              searchType === "tenant"
                ? "bg-[#ff00ff] text-white neon-glow-pink"
                : "text-[#00f0ff] hover:text-white"
            }`}
          >
            Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ð­Ð“Ð§
          </button>
        </div>
      </div>
    </div>
  );
}
