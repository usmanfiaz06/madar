"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center bg-madar-900 overflow-hidden">
      {/* Background orbital pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <svg viewBox="0 0 800 800" fill="none" className="w-full h-full">
            <circle cx="400" cy="400" r="350" stroke="#2A7D5B" strokeWidth="1" />
            <circle cx="400" cy="400" r="280" stroke="#2A7D5B" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="200" stroke="#2A7D5B" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="120" stroke="#2A7D5B" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Green gradient glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-madar-600/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-madar-700/50 border border-madar-600/30 rounded-full text-madar-200 text-sm mb-8"
          >
            <span className="w-2 h-2 bg-madar-400 rounded-full animate-pulse" />
            {locale === "ar" ? "مرجع ٢٠٢٦" : "2026 Refarah"}
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {t("title")}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-madar-200 leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={`/${locale}/resources`} variant="primary" size="lg">
              {t("cta")}
            </Button>
            <Button href={`/${locale}/about`} variant="outline" size="lg" className="border-madar-400 text-madar-200 hover:bg-madar-800 hover:text-white">
              {t("ctaSecondary")}
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-madar-400 animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
}
