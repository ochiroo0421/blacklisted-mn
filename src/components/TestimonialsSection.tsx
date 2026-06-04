"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Ð‘Ð°Ñ‚",
    role: "Ð¢Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡",
    text: "Ð­Ð½Ñ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð´ Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ÑÑÑÑÑ Ó©Ð¼Ð½Ó©Ñ… ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ» ÑƒÐ½ÑˆÐ¸Ð¶ Ñ‡Ð°Ð´ÑÐ°Ð½. Ð‘Ð°Ñ€ÑŒÑ†Ð°Ð° Ð¼Ó©Ð½Ð³Ó©Ó© Ð±ÑƒÑ†Ð°Ð°Ð¶ Ð°Ð²Ð°Ñ…Ð³Ò¯Ð¹ Ð±Ð°Ð¹ÑÐ°Ð½ Ñ‡ ÑÐ½Ð´ Ð±Ð¸Ñ‡ÑÑÐ½ ÑÑÑ‚Ð³ÑÐ³Ð´Ð»Ò¯Ò¯Ð´ÑÑÑ Ð±Ð¾Ð»Ð³Ð¾Ð¾Ð¼Ð¶Ð¸Ð»Ð¶ Ñ‡Ð°Ð´ÑÐ°Ð½.",
    borderColor: "#00f0ff",
    glowColor: "rgba(0, 240, 255, 0.25)",
  },
  {
    name: "Ð”Ð¾Ñ€Ð¶",
    role: "Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡",
    text: "Ð‘Ð¸ 10 Ð¶Ð¸Ð»Ð¸Ð¹Ð½ Ñ‚ÑƒÑ€Ñˆ Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»Ð¶ Ð±Ð°Ð¹Ð½Ð°. Ð¥ÑƒÑƒÑ€Ð°Ð¼Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»Ð´ Ó©Ñ€Ñ‚Ó©Ñ… Ð²Ð¸Ð¹ Ð³ÑÐ¶ Ð°Ð¹Ð´Ð°Ð³ Ð±Ð¾Ð» ÑÐ½Ð´ Ñ…Ð°Ñ€Ð¸Ñƒ Ð±Ð¸Ñ‡Ð¸Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹.",
    borderColor: "#ff00ff",
    glowColor: "rgba(255, 0, 255, 0.25)",
  },
  {
    name: "Ð¡Ð°Ñ€Ð°Ð°",
    role: "Ð¥ÑƒÑƒÐ»ÑŒÑ‡",
    text: "Ð¥Ð¾Ñ…Ð¸Ñ€Ð¾Ð³Ñ‡Ð¸Ð´ Ð·Ó©Ð²Ð»Ó©Ð³Ó©Ó© Ó©Ð³Ó©Ñ…Ð´Ó©Ó© Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼ Ð´ÑÑÑ€Ñ… Ð¼ÑÐ´ÑÑÐ»Ð»ÑÑÑ€ Ñ…ÑƒÑƒÐ»Ð¸Ð¹Ð½ Ñ…ÑÑ€ÑÐ³ Ð±Ò¯Ñ€Ð´Ò¯Ò¯Ð»ÑÑ…ÑÐ´ Ð¼Ð°Ñˆ Ð¸Ñ… Ñ‚ÑƒÑ Ð±Ð¾Ð»Ð´Ð¾Ð³.",
    borderColor: "#00ff88",
    glowColor: "rgba(0, 255, 136, 0.25)",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative p-8 rounded-2xl bg-[#0a0a1a]"
      style={{
        border: `1px solid ${testimonial.borderColor}`,
        boxShadow: `0 0 30px ${testimonial.glowColor}`,
      }}
    >
      <div className="space-y-6">
        <p className="text-white text-[15px] leading-relaxed">
          "{testimonial.text}"
        </p>

        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold"
            style={{ backgroundColor: testimonial.borderColor }}
          >
            {testimonial.name[0]}
          </div>
          <div>
            <div className="text-white font-semibold">{testimonial.name}</div>
            <div className="text-[#a0a0a0] text-sm">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="text-center mb-12 space-y-4">
          <div className="text-[#ff00ff] text-[13px] font-semibold tracking-[4px] text-glow-pink">
            Ð¡Ð­Ð¢Ð“Ð­Ð“Ð”Ð›Ò®Ò®Ð”
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ð¥ÑÑ€ÑÐ³Ð»ÑÐ³Ñ‡Ð´Ð¸Ð¹Ð½ Ò¯Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
