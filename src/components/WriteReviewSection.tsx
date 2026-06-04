"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WriteReviewSection() {
  const [reviewType, setReviewType] = useState<"landlord" | "tenant">("landlord");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ reviewType, name, location, rating, review });
  };

  return (
    <section ref={ref} className="relative py-24" style={{ background: '#2B103D' }}>
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(184, 246, 13, 0.8) 0%, transparent 70%)',
          filter: 'blur(100px)'
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
            <div className="text-[#B8F60D] text-[13px] font-semibold tracking-[4px]">
              Ð¡Ð­Ð¢Ð“Ð­Ð“Ð”Ð­Ð› Ð‘Ð˜Ð§Ð˜Ð¥
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ ÑÑÐ²ÑÐ» Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð¸Ð¹Ð½ Ñ‚Ð°Ð»Ð°Ð°Ñ€ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ» Ð±Ð¸Ñ‡Ð¸Ñ…
            </h2>
            <p className="text-white/60 max-w-lg mx-auto">
              Ð¢Ð°Ð½Ñ‹ Ð±Ð¸Ñ‡ÑÑÐ½ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ» Ð±ÑƒÑÐ°Ð´ Ñ…ÑÑ€ÑÐ³Ð»ÑÐ³Ñ‡Ð´ÑÐ´ Ñ‚ÑƒÑÐ°Ð»Ð¶, ÑˆÑƒÐ´Ð°Ñ€Ð³Ð° Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»Ð¸Ð¹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ð½Ð¾
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#2B103D] border border-[#6574FF]/50">
              <button
                type="button"
                onClick={() => setReviewType("landlord")}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-[1px] transition-all ${
                  reviewType === "landlord" 
                    ? "bg-[#B8F60D] text-[#2B103D] neon-glow-accent" 
                    : "text-white/50 hover:text-white"
                }`}
              >
                Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ò®Ò®Ð›Ð­Ð“Ð§
              </button>
              <button
                type="button"
                onClick={() => setReviewType("tenant")}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-[1px] transition-all ${
                  reviewType === "tenant" 
                    ? "bg-[#B8F60D] text-[#2B103D] neon-glow-accent" 
                    : "text-white/50 hover:text-white"
                }`}
              >
                Ð¢Ò®Ð Ð­Ð­Ð¡Ð›Ð­Ð“Ð§
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={reviewType === "landlord" ? "Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡Ð¸Ð¹Ð½ Ð½ÑÑ€" : "Ð¢Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð¸Ð¹Ð½ Ð½ÑÑ€"}
                className="w-full px-6 py-4 bg-[#2B103D] border border-[#6574FF]/50 rounded-xl text-white placeholder-white/40 outline-none focus:border-[#B8F60D] focus:shadow-[0_0_15px_rgba(184,246,13,0.3)] transition-all text-base"
              />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ð‘Ð°Ð¹Ñ€ÑˆÐ¸Ð» (Ð´Ò¯Ò¯Ñ€ÑÐ³, Ñ…Ð¾Ñ€Ð¾Ð¾...)"
                className="w-full px-6 py-4 bg-[#2B103D] border border-[#6574FF]/50 rounded-xl text-white placeholder-white/40 outline-none focus:border-[#B8F60D] focus:shadow-[0_0_15px_rgba(184,246,13,0.3)] transition-all text-base"
              />
            </div>

            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-2 transition-transform hover:scale-110"
                >
                  <svg
                    className={`w-10 h-10 transition-colors ${
                      star <= rating ? "text-[#B8F60D]" : "text-[#6574FF]/30"
                    }`}
                    fill={star <= rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
              ))}
            </div>

            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Ð¢Ð°Ð½Ñ‹ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»... Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ ÑÑÐ²ÑÐ» Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð¸Ð¹Ð½ Ñ‚Ð°Ð»Ð°Ð°Ñ€ Ð±Ð¸Ñ‡Ð½Ñ Ò¯Ò¯"
              rows={5}
              className="w-full px-6 py-4 bg-[#2B103D] border border-[#6574FF]/50 rounded-xl text-white placeholder-white/40 outline-none focus:border-[#B8F60D] focus:shadow-[0_0_15px_rgba(184,246,13,0.3)] transition-all text-base resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 bg-[#B8F60D] text-[#2B103D] font-bold text-sm tracking-[3px] rounded-xl hover:bg-[#B8F60D]/80 transition-all neon-glow-accent"
            >
              Ð¡Ð­Ð¢Ð“Ð­Ð“Ð”Ð­Ð› Ð˜Ð›Ð“Ð­Ð­Ð¥
            </button>
          </form>

          <div className="flex items-center justify-center gap-6 pt-4 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ð‘Ð°Ñ‚Ð°Ð»Ð³Ð°Ð°Ð¶ÑÐ°Ð½
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              ÐÑƒÑƒÑ†Ð»Ð°Ð»Ñ‚Ð°Ð¹
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Ð¥Ð°Ñ€Ð¸Ñƒ Ð±Ð¸Ñ‡Ð¸Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
