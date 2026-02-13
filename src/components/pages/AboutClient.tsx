"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Layers, Lock, Palette, Users, Sparkles } from "lucide-react";

const focusIcons = [Layers, Lock, Palette, Users];

export function AboutClient() {
  const t = useTranslations("about");
  const { locale } = useParams();
  const isAr = locale === "ar";

  const focusAreas = [
    { title: t("focus1Title"), desc: t("focus1Desc") },
    { title: t("focus2Title"), desc: t("focus2Desc") },
    { title: t("focus3Title"), desc: t("focus3Desc") },
    { title: t("focus4Title"), desc: t("focus4Desc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-madar-50 border border-madar-200 rounded-full text-madar-600 text-xs font-semibold uppercase tracking-wider mb-8">
              <Users size={14} />
              {isAr ? "من نحن" : "About"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-madar-900 tracking-[-0.03em] leading-[1.08]">
              {t("title")}
            </h1>
            <p className="mt-7 text-lg text-gray-500 leading-[1.7]">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 hover:shadow-xl hover:shadow-madar-600/5 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-madar-100 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="text-madar-600" size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-madar-900 tracking-tight mb-5">
                {t("missionTitle")}
              </h2>
              <p className="text-[15px] text-gray-500 leading-[1.7]">
                {t("missionText")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 hover:shadow-xl hover:shadow-madar-600/5 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-madar-100 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="text-madar-600" size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-madar-900 tracking-tight mb-5">
                {t("approachTitle")}
              </h2>
              <p className="text-[15px] text-gray-500 leading-[1.7]">
                {t("approachText")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-madar-900 tracking-[-0.03em]">
              {t("focusTitle")}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-madar-50 rounded-2xl p-7 hover:shadow-xl hover:shadow-madar-600/5 hover:border-madar-200 border border-transparent transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-madar-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="text-madar-600" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-madar-900 mb-2">{area.title}</h3>
                  <p className="text-[14px] text-gray-500 leading-[1.7]">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Starting from Riyadh */}
      <section className="py-24 lg:py-32 bg-madar-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-madar-700/50 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-madar-600/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-[-0.03em] mb-6">
                {t("kingdomTitle")}
              </h2>
              <p className="text-lg text-madar-200/70 leading-[1.7]">
                {t("kingdomText")}
              </p>
              <div className="mt-14 py-10 px-8 bg-white/10 border border-white/15 rounded-3xl backdrop-blur-sm">
                <blockquote className="text-2xl sm:text-3xl font-extrabold text-white italic leading-relaxed tracking-tight">
                  {isAr
                    ? "\"التصميم هو لغة الثقة الجديدة.\""
                    : "\"Design is the new language of trust.\""}
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
