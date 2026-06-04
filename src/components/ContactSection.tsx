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

  const inputClasses = "w-full px-4 py-3 bg-black border border-[#00f0ff]/50 rounded-lg text-white placeholder-[#00f0ff]/40 outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all";

  return (
    <section ref={ref} className="py-20 bg-[#050508]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="text-center mb-12 space-y-4">
          <div className="text-[#ff00ff] text-[13px] font-semibold tracking-[4px] text-glow-pink">
            Ð¥ÐžÐ›Ð‘ÐžÐž Ð‘ÐÐ Ð˜Ð¥
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ð‘Ð¸Ð´ÑÐ½Ñ‚ÑÐ¹ Ñ…Ð¾Ð»Ð±Ð¾Ð³Ð´Ð¾Ñ…
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="p-10 rounded-2xl bg-[#0a0a1a] border border-[#00f0ff]/30 space-y-6"
            style={{ boxShadow: "0 0 40px rgba(0, 240, 255, 0.15)" }}
          >
            <div className="space-y-2">
              <label className="text-[#00f0ff] text-xs font-semibold tracking-[2px]">
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
              <label className="text-[#00f0ff] text-xs font-semibold tracking-[2px]">
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
              <label className="text-[#00f0ff] text-xs font-semibold tracking-[2px]">
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
              <label className="text-[#00f0ff] text-xs font-semibold tracking-[2px]">
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
              className="w-full py-4 bg-[#00f0ff] text-black font-bold text-sm tracking-[3px] rounded-xl hover:bg-[#00f0ff]/80 transition-all"
              style={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.5)" }}
            >
              Ð˜Ð›Ð“Ð­Ð­Ð¥
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
