"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const s = useTranslations("stats");

  const stats = [
    { value: s("stat1Value"), label: s("stat1Label") },
    { value: s("stat2Value"), label: s("stat2Label") },
    { value: s("stat3Value"), label: s("stat3Label") },
    { value: s("stat4Value"), label: s("stat4Label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden">
      {/* Orbital rings background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer orbit */}
        <div className="absolute w-[900px] h-[900px] animate-orbit-slow">
          <svg viewBox="0 0 900 900" fill="none" className="w-full h-full">
            <circle cx="450" cy="450" r="440" stroke="rgba(42,125,91,0.06)" strokeWidth="1" />
            <circle cx="890" cy="450" r="3" fill="rgba(42,125,91,0.25)" />
            <circle cx="450" cy="10" r="2" fill="rgba(42,125,91,0.15)" />
          </svg>
        </div>
        {/* Middle orbit */}
        <div className="absolute w-[600px] h-[600px] animate-orbit-reverse">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full">
            <circle cx="300" cy="300" r="290" stroke="rgba(42,125,91,0.08)" strokeWidth="1" />
            <circle cx="590" cy="300" r="4" fill="rgba(91,191,138,0.3)" />
            <circle cx="10" cy="300" r="2.5" fill="rgba(91,191,138,0.2)" />
          </svg>
        </div>
        {/* Inner orbit */}
        <div className="absolute w-[340px] h-[340px] animate-orbit-slow" style={{ animationDuration: "40s" }}>
          <svg viewBox="0 0 340 340" fill="none" className="w-full h-full">
            <circle cx="170" cy="170" r="165" stroke="rgba(42,125,91,0.10)" strokeWidth="1" />
            <circle cx="335" cy="170" r="5" fill="rgba(42,125,91,0.4)" />
          </svg>
        </div>
        {/* Center glow */}
        <div className="absolute w-2 h-2 bg-madar-400 rounded-full animate-pulse-glow" />
      </div>

      {/* Ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-madar-600/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-madar-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-sm mb-10 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-madar-400 rounded-full animate-pulse-glow" />
            {t("badge")}
          </motion.div>

          <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold text-white leading-[1.08] tracking-[-0.03em]">
            {t("title")}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg sm:text-xl text-white/45 leading-relaxed max-w-xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <a
              href="#join-community"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#0a0a0a] font-medium rounded-full hover:bg-white/90 transition-all text-[15px] shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              {t("cta")}
              <ArrowRight size={16} />
            </a>
            <Button
              href={`/${locale}/resources`}
              variant="outline"
              size="lg"
              className="border-white/15 text-white/60 hover:bg-white/[0.04] hover:text-white/80 hover:border-white/25 text-[15px] px-8 py-4"
            >
              {t("ctaSecondary")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 border-t border-white/[0.06] pt-12"
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-white/35">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
