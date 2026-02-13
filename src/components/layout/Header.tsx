"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MadarLogo } from "../ui/MadarLogo";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "events", href: "/events" },
  { key: "resources", href: "/resources" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
] as const;

export function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    const localizedHref = `/${locale}${href === "/" ? "" : href}`;
    if (href === "/") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(localizedHref);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link href={`/${locale}`} className="flex items-center gap-2.5">
            <MadarLogo className="h-8 w-8" />
            <span className="text-lg font-semibold text-[#1d1d1f] tracking-tight">
              {locale === "ar" ? "مدار" : "madar"}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href === "/" ? "" : link.href}`}
                className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-madar-700 bg-madar-50"
                    : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-gray-50"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <a
              href="#join-community"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2 text-[13px] font-semibold text-white bg-[#1d1d1f] rounded-full hover:bg-[#333] transition-colors"
            >
              {t("joinCta")}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-[#1d1d1f]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href === "/" ? "" : link.href}`}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-madar-700 bg-madar-50"
                    : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-gray-50"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <a
              href="#join-community"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#1d1d1f] rounded-full hover:bg-[#333] transition-colors"
            >
              {t("joinCta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
