"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Ð‘Ð°Ñ‚Ð°Ð»Ð³Ð°Ð°Ð¶ÑÐ°Ð½ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»",
    description: "Ð‘Ò¯Ñ… ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ» Ð±Ð°Ñ‚Ð°Ð»Ð³Ð°Ð°Ð¶ÑƒÑƒÐ»ÑÐ°Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ Ð±Ð¾Ð»Ð¾Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð´ÑÑÑ Ð¸Ñ€Ð´ÑÐ³. Ð¥ÑƒÑƒÑ€Ð°Ð¼Ñ‡ Ð¼ÑÐ´ÑÑÐ»ÑÐ»Ð³Ò¯Ð¹.",
    color: "#DB5227",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Ð¥ÑÐ»Ð±Ð°Ñ€ Ñ…Ð°Ð¹Ð»Ñ‚",
    description: "ÐÑÑ€, ÑƒÑ‚Ð°Ñ, Ñ…Ð°ÑÐ³Ð°Ð°Ñ€ Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡ Ð±Ð¾Ð»Ð¾Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ»ÑÐ³Ñ‡Ð¸Ð¹Ð³ Ñ…Ð°Ð¹Ð¶, Ð±ÑƒÑÐ´Ñ‹Ð½ Ñ‚ÑƒÑ€ÑˆÐ»Ð°Ð³Ñ‹Ð³ Ñ…Ð°Ñ€Ð°Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹.",
    color: "#023661",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "Ð¥Ð°Ñ€Ð¸Ñƒ Ð±Ð¸Ñ‡Ð¸Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶",
    description: "Ð¢Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡Ð¸Ð´ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»Ð´ Ñ…Ð°Ñ€Ð¸Ñƒ Ð±Ð¸Ñ‡Ð¸Ñ…, Ñ‚Ð°Ð¹Ð»Ð±Ð°Ñ€ Ó©Ð³Ó©Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹. Ð¥Ð¾Ñ‘Ñ€ Ñ‚Ð°Ð»Ñ‹Ð½ Ò¯Ð·ÑÐ» Ð±Ð¾Ð´Ð»Ñ‹Ð³ ÑÐ¾Ð½ÑÐ¾Ð½Ð¾.",
    color: "#76828E",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Ð˜Ð» Ñ‚Ð¾Ð´ ÑÑ‚Ð°Ñ‚Ð¸ÑÑ‚Ð¸Ðº",
    description: "Ð‘Ò¯Ñ€Ñ‚Ð³ÑÐ»Ñ‚ÑÐ¹ Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡Ð´Ð¸Ð¹Ð½ Ò¯Ð½ÑÐ»Ð³ÑÑ, ÑÑÑ‚Ð³ÑÐ³Ð´Ð»Ð¸Ð¹Ð½ Ñ‚Ð¾Ð¾, Ð±Ð°Ñ‚Ð°Ð»Ð³Ð°Ð°Ð¶ÑÐ°Ð½ Ð¼ÑÐ´ÑÑÐ»Ð»Ð¸Ð¹Ð³ Ñ…Ð°Ñ€Ð°Ñ… Ð±Ð¾Ð»Ð¾Ð¼Ð¶Ñ‚Ð¾Ð¹.",
    color: "#DB5227",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-8 rounded-2xl bg-[#0f1118] border border-[#023661]/20 hover:border-[#DB5227]/40 transition-all group"
    >
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors"
        style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
      >
        {feature.icon}
      </div>
      
      <h3 className="text-white text-lg font-bold mb-3">{feature.title}</h3>
      <p className="text-[#76828E] text-sm leading-relaxed">{feature.description}</p>
      
      <div 
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ background: `radial-gradient(circle, ${feature.color} 0%, transparent 70%)` }}
      />
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#0A0C12] relative">
      <div className="absolute inset-0 gradient-radial-dark" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#DB5227] text-[13px] font-semibold tracking-[4px] text-glow-accent">
            Ð‘ÐžÐ›ÐžÐœÐ–Ð£Ð£Ð”
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ð¯Ð°Ð³Ð°Ð°Ð´ BLACKLISTED.MN?
          </h2>
          <p className="text-[#76828E] max-w-lg mx-auto">
            ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»Ð´ Ð¸Ñ‚Ð³ÑÐ»Ñ†ÑÐ», Ð¸Ð» Ñ‚Ð¾Ð´ Ð±Ð°Ð¹Ð´Ð»Ñ‹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ñ… Ð·Ð¾Ñ€Ð¸Ð»Ð³Ð¾Ñ‚Ð¾Ð¹
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
