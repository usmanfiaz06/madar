"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Layers, Lock, Palette, Users, Sparkles } from "lucide-react";
import { openJoinModal } from "@/components/ui/JoinCommunityModal";

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
      {/* Immersive Hero */}
      <section className="relative min-h-[75vh] flex items-end bg-madar-900 overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-madar-900 via-madar-800 to-madar-700" />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-madar-600/20 rounded-full blur-[180px] -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-madar-500/15 rounded-full blur-[150px] translate-y-1/4" />
          <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-madar-400/10 rounded-full blur-[120px] -translate-x-1/3" />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          {/* Bottom fade for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-madar-900/80 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-madar-300/70 mb-6 block">
              {isAr ? "من نحن" : "ABOUT MADAR"}
            </span>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold text-white tracking-[-0.04em] leading-[0.95] max-w-4xl mb-6">
              {t("title")}
            </h1>
            <p className="text-lg sm:text-xl text-madar-200/60 leading-relaxed max-w-2xl">
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

      {/* Starting from Riyadh — Dark Feature Card */}
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-madar-900 rounded-[2rem] overflow-hidden relative"
          >
            {/* Subtle background accents */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-madar-700/40 rounded-full blur-[160px] -translate-y-1/3 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-madar-600/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
            </div>

            {/* Main content — two-column layout */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-8 sm:p-10 lg:p-14">
              {/* Left: Heading + Description */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-madar-400/80 mb-4 block">
                  {isAr ? "انطلاقاً من الرياض" : "STARTING FROM RIYADH"}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-6">
                  {t("kingdomTitle")}
                </h2>
                <p className="text-[15px] text-madar-200/60 leading-[1.8] max-w-md">
                  {t("kingdomText")}
                </p>
              </div>

              {/* Right: Theme pillars list */}
              <div className="flex flex-col justify-center space-y-5">
                {[
                  {
                    en: "Design Language",
                    ar: "لغة التصميم",
                    descEn: "A shared visual grammar for institutional identity",
                    descAr: "قواعد بصرية مشتركة للهوية المؤسسية",
                  },
                  {
                    en: "Cultural Trust",
                    ar: "الثقة الثقافية",
                    descEn: "Building confidence through culturally-rooted interfaces",
                    descAr: "بناء الثقة عبر واجهات متجذرة ثقافياً",
                  },
                  {
                    en: "Digital Governance",
                    ar: "الحوكمة الرقمية",
                    descEn: "Where design meets policy at the citizen level",
                    descAr: "حيث يلتقي التصميم بالسياسة على مستوى المواطن",
                  },
                  {
                    en: "Global Dialogue",
                    ar: "الحوار العالمي",
                    descEn: "Contributing to the world conversation on design",
                    descAr: "المساهمة في الحوار العالمي حول التصميم",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-madar-400 mt-2 shrink-0 group-hover:bg-madar-300 transition-colors" />
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {isAr ? item.ar : item.en}
                      </h3>
                      <p className="text-sm text-madar-300/50 mt-0.5">
                        {isAr ? item.descAr : item.descEn}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="relative border-t border-white/10 bg-madar-800/50 backdrop-blur-sm px-8 sm:px-10 lg:px-14 py-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-lg tracking-tight">
                    {isAr
                      ? "انضم إلى محادثة لغة التصميم"
                      : "Join the design language conversation"}
                  </p>
                  <p className="text-madar-300/50 text-sm mt-0.5">
                    {isAr
                      ? "كن جزءاً من مجتمع يُعيد تعريف التصميم المؤسسي"
                      : "Be part of a community redefining institutional design"}
                  </p>
                </div>
                <button
                  onClick={openJoinModal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-madar-400 hover:bg-madar-300 text-madar-950 text-sm font-bold rounded-full transition-colors duration-300 shrink-0"
                >
                  {isAr ? "انضم للمجتمع" : "Join Community"}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
