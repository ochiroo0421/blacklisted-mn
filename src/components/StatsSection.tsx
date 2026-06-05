"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 2500, suffix: "+", label: "Ð‘Ò¯Ñ€Ñ‚Ð³ÑÐ»Ñ‚ÑÐ¹ Ñ‚Ò¯Ñ€ÑÑÑÐ»Ò¯Ò¯Ð»ÑÐ³Ñ‡", color: "#DED1C6" },
  { value: 8000, suffix: "+", label: "Ò®Ð½ÑÐ½Ñ‡ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»", color: "#174871" },
  { value: 95, suffix: "%", label: "Ð‘Ð°Ñ‚Ð°Ð»Ð³Ð°Ð°Ð¶ÑÐ°Ð½ ÑÑÑ‚Ð³ÑÐ³Ð´ÑÐ»", color: "#A77693" },
  { value: 50, suffix: "Mâ‚®", label: "Ð¥Ð°Ð´Ð³Ð°Ð»Ð°Ð³Ð´ÑÐ°Ð½ Ð±Ð°Ñ€ÑŒÑ†Ð°Ð°", color: "#DED1C6" },
];

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      countRef.current = Math.floor(easeOutQuart * target);
      setCount(countRef.current);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(target);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 relative" style={{ background: '#0F2D4D' }}>
      <div className="absolute inset-0 gradient-radial-dark" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3 p-6 rounded-2xl bg-[#0F2D4D]/50 border border-[#174871]/30">
              <div
                className="text-4xl md:text-5xl font-extrabold tracking-[2px]"
                style={{
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}50`,
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#DED1C6]/50 text-sm tracking-[1px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
