"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { MadarLogo } from "../ui/MadarLogo";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

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
      await fetch("https://formsubmit.co/ajax/hello@madar.cx", {
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center">
              <MadarLogo className="h-8" full variant="light" />
            </div>
            <p className="text-madar-200/50 text-[14px] leading-[1.7] max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-madar-300/50 mb-6">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-madar-200/60 hover:text-madar-200 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-madar-300/50 mb-6">
              {t("connect")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[14px] text-madar-200/60">
                <div className="w-8 h-8 bg-madar-800 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-madar-400" />
                </div>
                <span>hello@madar.cx</span>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-madar-200/60">
                <div className="w-8 h-8 bg-madar-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-madar-400" />
                </div>
                <span>
                  {locale === "ar"
                    ? "الرياض، المملكة العربية السعودية"
                    : "Riyadh, Saudi Arabia"}
                </span>
              </li>
            </ul>
          </div>

          {/* Email Signup */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-madar-300/50 mb-6">
              {t("joinTitle")}
            </h3>
            {joined ? (
              <div className="bg-madar-800 rounded-xl px-4 py-3">
                <p className="text-[14px] text-madar-300 font-medium">
                  {locale === "ar" ? "شكرا لانضمامك!" : "Thanks for joining!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("joinPlaceholder")}
                    required
                    className="flex-1 px-4 py-3 bg-madar-800 border border-madar-700 rounded-xl text-[13px] text-white placeholder-madar-200/30 focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-madar-600 text-white rounded-xl hover:bg-madar-500 transition-colors shadow-sm"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-madar-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-madar-200/30 font-medium">
            &copy; {t("copyright")}
          </p>
          <p className="text-[12px] text-madar-200/20 italic">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
