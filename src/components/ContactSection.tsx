"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClasses = "w-full px-4 py-3 bg-[#0f1118] border border-[#023661]/50 rounded-lg text-white placeholder-[#76828E]/40 outline-none focus:border-[#DB5227] focus:shadow-[0_0_15px_rgba(219,82,39,0.3)] transition-all";

  return (
    <section ref={ref} className="py-24 bg-[#0A0C12] relative">
      <div className="absolute inset-0 gradient-radial-dark" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#DB5227] text-[13px] font-semibold tracking-[4px] text-glow-accent">
            Ð¥ÐžÐ›Ð‘ÐžÐž Ð‘ÐÐ Ð˜Ð¥
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ð‘Ð¸Ð´ÑÐ½Ñ‚ÑÐ¹ Ñ…Ð¾Ð»Ð±Ð¾Ð³Ð´Ð¾Ñ…
          </h2>
          <p className="text-[#76828E] max-w-lg mx-auto">
            ÐÑÑƒÑƒÑ… Ð·Ò¯Ð¹Ð» Ð±Ð°Ð¹Ð½Ð° ÑƒÑƒ? Ð‘Ð¸Ð´ Ñ‚Ð°Ð½Ð´ Ñ‚ÑƒÑÐ°Ð»ÑŠÑ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#0f1118] border border-[#023661]/20">
                <div className="w-12 h-12 rounded-xl bg-[#023661]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#DB5227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Ð˜-Ð¼ÑÐ¹Ð»</div>
                  <div className="text-[#76828E]">info@blacklisted.mn</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#0f1118] border border-[#023661]/20">
                <div className="w-12 h-12 rounded-xl bg-[#023661]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#DB5227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Ð£Ñ‚Ð°Ñ</div>
                  <div className="text-[#76828E]">+976 11 11 1111</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#0f1118] border border-[#023661]/20">
                <div className="w-12 h-12 rounded-xl bg-[#023661]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#DB5227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Ð¥Ð°ÑÐ³</div>
                  <div className="text-[#76828E]">Ð£Ð»Ð°Ð°Ð½Ð±Ð°Ð°Ñ‚Ð°Ñ€, ÐœÐ¾Ð½Ð³Ð¾Ð»</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-[#0f1118] border border-[#023661]/30 space-y-6"
              style={{ boxShadow: "0 0 40px rgba(2, 54, 97, 0.15)" }}
            >
              <div className="space-y-2">
                <label className="text-[#DB5227] text-xs font-semibold tracking-[2px]">
                  ÐÐ­Ð 
                </label>
                <input
                  type="text"
                  placeholder="Ð¢Ð°Ð½Ñ‹ Ð½ÑÑ€"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#DB5227] text-xs font-semibold tracking-[2px]">
                  Ð˜-ÐœÐ­Ð™Ð›
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#DB5227] text-xs font-semibold tracking-[2px]">
                  Ð£Ð¢ÐÐ¡
                </label>
                <input
                  type="tel"
                  placeholder="+976 XX XX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#DB5227] text-xs font-semibold tracking-[2px]">
                  ÐœÐ•Ð¡Ð¡Ð•Ð–
                </label>
                <textarea
                  placeholder="Ð¢Ð°Ð½Ñ‹ Ð¼ÐµÑÑÐµÐ¶..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#DB5227] text-white font-bold text-sm tracking-[3px] rounded-xl hover:bg-[#DB5227]/80 transition-all neon-glow-accent"
              >
                Ð˜Ð›Ð“Ð­Ð­Ð¥
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
