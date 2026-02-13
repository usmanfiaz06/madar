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
    <footer className="bg-madar-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <MadarLogo className="h-8 w-8" variant="light" />
              <span className="text-lg font-bold tracking-tight">
                {locale === "ar" ? "مدار" : "madar"}
              </span>
            </div>
            <p className="text-madar-300 text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-madar-400 mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-madar-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-madar-400 mb-4">
              {t("connect")}
            </h3>
            <ul className="space-y-2.5 text-sm text-madar-300">
              <li>hello@madar.sa</li>
              <li>{locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-madar-400 mb-4">
              {t("joinTitle")}
            </h3>
            {joined ? (
              <p className="text-sm text-madar-300">
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
                  className="flex-1 px-4 py-2.5 bg-madar-800/60 border border-madar-700/50 rounded-full text-sm text-white placeholder-madar-400 focus:ring-2 focus:ring-madar-400 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-madar-600 text-white rounded-full hover:bg-madar-500 transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-madar-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-madar-400">&copy; {t("copyright")}</p>
          <p className="text-xs text-madar-500 italic">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
