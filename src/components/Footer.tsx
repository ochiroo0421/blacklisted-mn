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
    <footer className="border-t border-[#174871]/30" style={{ background: '#0F2D4D' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px] py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4">
            <div className="text-white text-lg font-bold tracking-[4px]">
              BLACKLISTED.MN
            </div>
            <p className="text-[#DED1C6]/50 text-sm max-w-[300px]">
              ÐœÐ¾Ð½Ð³Ð¾Ð»Ñ‹Ð½ Ñ‚Ò¯Ñ€ÑÑÑÐ¸Ð¹Ð½ Ð·Ð°Ñ… Ð·ÑÑÐ»Ð´ ÑˆÑƒÐ´Ð°Ñ€Ð³Ð° Ð±Ð°Ð¹Ð´Ð»Ñ‹Ð³ Ð±Ð¸Ð¹ Ð±Ð¾Ð»Ð³Ð¾Ñ…
            </p>
            <div className="flex gap-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#174871]/30 flex items-center justify-center hover:bg-[#A77693]/30 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-[#DED1C6]/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#174871]/30 flex items-center justify-center hover:bg-[#A77693]/30 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-[#DED1C6]/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </div>

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
                        className="text-[#DED1C6]/50 text-sm hover:text-[#A77693] transition-colors"
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

        <div className="mt-12 pt-8 border-t border-[#174871]/20 text-center">
          <p className="text-[#DED1C6]/30 text-sm">
            Â© 2026 BLACKLISTED.MN. Ð‘Ò¯Ñ… ÑÑ€Ñ… Ñ…ÑƒÑƒÐ»Ð¸Ð°Ñ€ Ñ…Ð°Ð¼Ð³Ð°Ð°Ð»Ð°Ð³Ð´ÑÐ°Ð½.
          </p>
        </div>
      </div>
    </footer>
  );
}
