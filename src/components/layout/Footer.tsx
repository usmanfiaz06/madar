"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { MadarLogo } from "../ui/MadarLogo";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const links = [
    { label: nav("about"), href: `/${locale}/about` },
    { label: nav("events"), href: `/${locale}/events` },
    { label: nav("resources"), href: `/${locale}/resources` },
    { label: nav("insights"), href: `/${locale}/insights` },
    { label: nav("contact"), href: `/${locale}/contact` },
  ];

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("_subject", "New Community Email Signup");
      formData.append("_captcha", "false");
      await fetch("https://formsubmit.co/ajax/hello@madar.sa", {
        method: "POST",
        body: formData,
      });
    } catch {
      // silent fail for footer quick join
    }
    setJoined(true);
  };

  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <MadarLogo className="h-7 w-7" variant="light" />
              <span className="text-lg font-semibold tracking-tight">
                {locale === "ar" ? "مدار" : "madar"}
              </span>
            </div>
            <p className="text-white/40 text-[14px] leading-[1.65] max-w-xs">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">
              {t("connect")}
            </h3>
            <ul className="space-y-3 text-[14px] text-white/50">
              <li>hello@madar.sa</li>
              <li>{locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-5">
              {t("joinTitle")}
            </h3>
            {joined ? (
              <p className="text-[14px] text-white/50">
                {locale === "ar" ? "شكراً لانضمامك!" : "Thanks for joining!"}
              </p>
            ) : (
              <form onSubmit={handleJoin} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("joinPlaceholder")}
                  required
                  className="flex-1 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-[13px] text-white placeholder-white/25 focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white/10 text-white rounded-full hover:bg-white/15 transition-colors"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/25">&copy; {t("copyright")}</p>
          <p className="text-[12px] text-white/20 italic">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
