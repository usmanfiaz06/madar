"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

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
    <section className="relative min-h-[100vh] flex items-center bg-madar-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-madar-900 via-madar-800 to-madar-900" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-madar-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-madar-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-madar-700/50 border border-madar-600/30 rounded-full text-madar-300 text-sm mb-8"
          >
            <span className="w-2 h-2 bg-madar-400 rounded-full animate-pulse" />
            {t("badge")}
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            {t("title")}
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-madar-200/90 leading-relaxed max-w-2xl">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#join-community" variant="primary" size="lg" className="bg-white text-madar-900 hover:bg-madar-50 shadow-lg text-base px-10 py-4">
              {t("cta")}
            </Button>
            <Button href={`/madar/${locale}/resources`} variant="outline" size="lg" className="border-madar-400/50 text-madar-200 hover:bg-madar-800 hover:text-white text-base px-10 py-4">
              {t("ctaSecondary")}
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-madar-700/50 pt-10"
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-madar-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
