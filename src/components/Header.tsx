"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "next-intl";

const navItems = [
  { label: "ÐÒ®Ò®Ð ", href: "/" },
  { label: "Ð¥ÐÐ™Ð›Ð¢", href: "/search" },
  { label: "Ð¡Ð­Ð¢Ð“Ð­Ð“Ð”Ð­Ð›", href: "/testimonials" },
  { label: "Ð¥ÐžÐ›Ð‘ÐžÐž Ð‘ÐÐ Ð˜Ð¥", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedHref = (href: string) => {
    if (href === "/") return `/${locale}`;
    return `/${locale}${href}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2B103D]/95 backdrop-blur-md border-b border-[#6574FF]/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[60px]">
        <div className="flex items-center justify-between h-20">
          <Link href={getLocalizedHref("/")} className="text-white text-lg font-bold tracking-[4px] hover:text-[#B8F60D] transition-colors">
            BLACKLISTED.MN
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                className="text-white/50 text-[13px] font-medium tracking-[2px] hover:text-[#B8F60D] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link 
              href={`/mn${pathname.replace(/^\/(mn|en)/, "")}`} 
              className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${
                locale === "mn" 
                  ? "bg-[#B8F60D] text-[#2B103D]" 
                  : "text-white/50 hover:text-white"
              }`}
            >
              MN
            </Link>
            <Link 
              href={`/en${pathname.replace(/^\/(mn|en)/, "")}`} 
              className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${
                locale === "en" 
                  ? "bg-[#B8F60D] text-[#2B103D]" 
                  : "text-white/50 hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-[#6574FF]/20 pt-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={getLocalizedHref(item.href)} 
                className="block text-white/50 text-[13px] font-medium tracking-[2px] hover:text-[#B8F60D] transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 text-sm pt-4">
              <Link href={`/mn${pathname.replace(/^\/(mn|en)/, "")}`} className={locale === "mn" ? "font-bold text-[#B8F60D]" : "text-white/50"}>MN</Link>
              <span className="text-white/30">|</span>
              <Link href={`/en${pathname.replace(/^\/(mn|en)/, "")}`} className={locale === "en" ? "font-bold text-[#B8F60D]" : "text-white/50"}>EN</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
