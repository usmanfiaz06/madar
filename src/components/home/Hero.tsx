"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { openJoinModal } from "../ui/JoinCommunityModal";
import { ArrowRight, Shield, Layers, Globe, MessageCircle } from "lucide-react";

const pillarIcons = [Shield, Layers, Globe, MessageCircle];

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const p = useTranslations("pillars");

  const pillars = [
    { title: p("pillar1Title"), desc: p("pillar1Desc"), icon: pillarIcons[0] },
    { title: p("pillar2Title"), desc: p("pillar2Desc"), icon: pillarIcons[1] },
    { title: p("pillar3Title"), desc: p("pillar3Desc"), icon: pillarIcons[2] },
    { title: p("pillar4Title"), desc: p("pillar4Desc"), icon: pillarIcons[3] },
  ];

  return (
    <section className="relative bg-white overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-madar-50 rounded-full blur-[150px] opacity-60 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-madar-100 rounded-full blur-[120px] opacity-40 translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-madar-50 border border-madar-200 rounded-full text-madar-700 text-sm font-medium">
            <span className="w-2 h-2 bg-madar-400 rounded-full animate-pulse-glow" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Massive Bold Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 text-[clamp(3rem,8vw,7rem)] font-extrabold text-madar-900 leading-[0.95] tracking-[-0.04em] max-w-6xl"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={openJoinModal}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-madar-600 text-white font-semibold rounded-full hover:bg-madar-700 transition-all text-[15px] shadow-lg shadow-madar-600/25 hover:shadow-xl hover:shadow-madar-600/30"
          >
            {t("cta")}
            <ArrowRight size={16} />
          </button>
          <Button
            href={`/${locale}/resources`}
            variant="outline"
            size="lg"
            className="border-madar-300 text-madar-700 hover:bg-madar-50 hover:border-madar-400 text-[15px] px-8 py-4"
          >
            {t("ctaSecondary")}
          </Button>
        </motion.div>

        {/* Pillar Cards - What Madar Explores */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isAccent = i === 0 || i === 3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className={`relative rounded-2xl p-6 lg:p-7 overflow-hidden group transition-all duration-300 hover:scale-[1.02] ${
                  isAccent
                    ? "bg-madar-600 text-white shadow-lg shadow-madar-600/20"
                    : "bg-madar-50 text-madar-900 border border-madar-100"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  isAccent ? "bg-white/15" : "bg-madar-200/60"
                }`}>
                  <Icon size={20} className={isAccent ? "text-white" : "text-madar-600"} />
                </div>
                <h3 className={`text-lg font-bold tracking-tight mb-1.5 ${
                  isAccent ? "text-white" : "text-madar-900"
                }`}>
                  {pillar.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isAccent ? "text-white/70" : "text-gray-500"
                }`}>
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
