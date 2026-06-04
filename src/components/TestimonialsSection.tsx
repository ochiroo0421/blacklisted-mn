"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Ð‘Ð°Ñ‚",
    role: "Ð¢Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡",
    text: "Ð­Ð½Ñ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð´ Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ÑÑÑÑÑ Ó©Ð¼Ð½Ó©Ñ… ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ» ÑƒÐ½ÑˆÐ¸Ð¶ Ñ‡Ð°Ð´ÑÐ°Ð½. Ð‘Ð°Ñ€ÑŒÑ†Ð°Ð° Ð¼Ó©Ð½Ð³Ó©Ó© Ð±ÑƒÑ†Ð°Ð°Ð¶ Ð°Ð²Ð°Ñ…Ð³Ò¯Ð¹ Ð±Ð°Ð¹ÑÐ°Ð½ Ñ‡ ÑÐ½Ð´ Ð±Ð¸Ñ‡ÑÑÐ½ ÑÑÑ‚Ð³ÑÐ³Ð´Ð»Ò¯Ò¯Ð´ÑÑÑ Ð±Ð¾Ð»Ð³Ð¾Ð¾Ð¼Ð¶Ð¸Ð»Ð¶ Ñ‡Ð°Ð´ÑÐ°Ð½.",
    rating: 5,
    borderColor: "#B8F60D",
    glowColor: "rgba(184, 246, 13, 0.2)",
  },
  {
    name: "Ð”Ð¾Ñ€Ð¶",
    role: "Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡",
    text: "Ð‘Ð¸ 10 Ð¶Ð¸Ð»Ð¸Ð¹Ð½ Ñ‚ÑƒÑ€Ñˆ Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»Ð¶ Ð±Ð°Ð¹Ð½Ð°. Ð¥ÑƒÑƒÑ€Ð°Ð¼Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»Ð´ Ó©Ñ€Ñ‚Ó©Ñ… Ð²Ð¸Ð¹ Ð³ÑÐ¶ Ð°Ð¹Ð´Ð°Ð³ Ð±Ð¾Ð» ÑÐ½Ð´ Ñ…Ð°Ñ€Ð¸Ñƒ Ð±Ð¸Ñ‡Ð¸Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹.",
    rating: 4,
    borderColor: "#6574FF",
    glowColor: "rgba(101, 116, 255, 0.3)",
  },
  {
    name: "Ð¡Ð°Ñ€Ð°Ð°",
    role: "Ð¥ÑƒÑƒÐ»ÑŒÑ‡",
    text: "Ð¥Ð¾Ñ…Ð¸Ñ€Ð¾Ð³Ñ‡Ð¸Ð´ Ð·Ó©Ð²Ð»Ó©Ð³Ó©Ó© Ó©Ð³Ó©Ñ…Ð´Ó©Ó© Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼ Ð´ÑÑÑ€Ñ… Ð¼ÑÐ´ÑÑÐ»Ð»ÑÑÑ€ Ñ…ÑƒÑƒÐ»Ð¸Ð¹Ð½ Ñ…ÑÑ€ÑÐ³ Ð±Ò¯Ñ€Ð´Ò¯Ò¯Ð»ÑÑ…ÑÐ´ Ð¼Ð°Ñˆ Ð¸Ñ… Ñ‚ÑƒÑ Ð±Ð¾Ð»Ð´Ð¾Ð³.",
    rating: 5,
    borderColor: "#8103FC",
    glowColor: "rgba(129, 3, 252, 0.2)",
  },
];

function StarRating({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4"
          fill={star <= rating ? color : "transparent"}
          stroke={color}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative p-8 rounded-2xl bg-[#2B103D]"
      style={{
        border: `1px solid ${testimonial.borderColor}40`,
        boxShadow: `0 0 30px ${testimonial.glowColor}`,
      }}
    >
      <div className="space-y-6">
        <StarRating rating={testimonial.rating} color={testimonial.borderColor} />
        
        <p className="text-white text-[15px] leading-relaxed">
          "{testimonial.text}"
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-[#6574FF]/20">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: testimonial.borderColor }}
          >
            {testimonial.name[0]}
          </div>
          <div>
            <div className="text-white font-semibold">{testimonial.name}</div>
            <div className="text-white/50 text-sm">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative" style={{ background: '#2B103D' }}>
      <div className="absolute inset-0 gradient-radial-dark" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#B8F60D] text-[13px] font-semibold tracking-[4px]">
            Ð¡Ð­Ð¢Ð“Ð­Ð“Ð”Ð›Ò®Ò®Ð”
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ð¥ÑÑ€ÑÐ³Ð»ÑÐ³Ñ‡Ð´Ð¸Ð¹Ð½ Ò¯Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»
          </h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Ð‘Ð¾Ð´Ð¸Ñ‚ Ñ…ÑÑ€ÑÐ³Ð»ÑÐ³Ñ‡Ð´Ð¸Ð¹Ð½ Ð±Ð¾Ð´Ð¸Ñ‚ Ñ‚ÑƒÑ€ÑˆÐ»Ð°Ð³Ð°. Ð¢Ð° Ñ‡ Ð±Ð°Ñ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ» Ð±Ð¸Ñ‡Ð¸Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border border-[#6574FF] text-white/50 font-bold text-sm tracking-[2px] rounded-xl hover:border-[#B8F60D] hover:text-[#B8F60D] transition-all">
            Ð‘Ò®Ð¥ Ð¡Ð­Ð¢Ð“Ð­Ð“Ð”Ð›Ò®Ò®Ð”Ð˜Ð™Ð“ Ð¥ÐÐ ÐÐ¥
          </button>
        </div>
      </div>
    </section>
  );
}
