"use client";

import Link from "next/link";

const footerColumns = [
  {
    title: "Ð¥Ð£Ð£Ð”ÐÐ¡",
    links: [
      { label: "ÐÒ¯Ò¯Ñ€", href: "/" },
      { label: "Ð¥Ð°Ð¹Ð»Ñ‚", href: "/search" },
      { label: "Ð¡ÑÑ‚Ð³ÑÐ³Ð´ÑÐ» Ð±Ð¸Ñ‡Ð¸Ñ…", href: "/testimonials" },
      { label: "Ð‘Ð¸Ð´Ð½Ð¸Ð¹ Ñ‚ÑƒÑ…Ð°Ð¹", href: "/about" },
    ],
  },
  {
    title: "Ð¥Ð£Ð£Ð›Ð¬ Ð­Ð Ð¥ Ð—Ò®Ð™",
    links: [
      { label: "ÐÑƒÑƒÑ†Ð»Ð°Ð»", href: "/privacy" },
      { label: "Ò®Ð¹Ð»Ñ‡Ð¸Ð»Ð³ÑÑÐ½Ð¸Ð¹ Ð½Ó©Ñ…Ñ†Ó©Ð»", href: "/terms" },
      { label: "Ð¥ÑƒÑƒÐ»ÑŒ Ñ‚Ð¾Ð³Ñ‚Ð¾Ð¾Ð¼Ð¶", href: "/laws" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#00f0ff]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left side */}
          <div className="space-y-4">
            <div className="text-white text-lg font-bold tracking-[4px]">
              BLACKLISTED.MN
            </div>
            <p className="text-[#00f0ff] text-sm max-w-[300px]">
              ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»Ð´ ÑˆÑƒÐ´Ð°Ñ€Ð³Ð° Ð±Ð°Ð¹Ð´Ð»Ñ‹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ñ…
            </p>
          </div>

          {/* Right side - columns */}
          <div className="flex gap-16">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-white text-[13px] font-semibold tracking-[2px]">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#00f0ff] text-sm hover:text-[#ff00ff] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#00f0ff]/10 text-center">
          <p className="text-[#a0a0a0] text-sm">
            Â© 2026 BLACKLISTED.MN. Ð‘Ò¯Ñ… ÑÑ€Ñ… Ñ…ÑƒÑƒÐ»Ð¸Ð°Ñ€ Ñ…Ð°Ð¼Ð³Ð°Ð°Ð»Ð°Ð³Ð´ÑÐ°Ð½.
          </p>
        </div>
      </div>
    </footer>
  );
}
