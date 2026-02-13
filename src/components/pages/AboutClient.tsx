"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Layers, Lock, Palette, Users } from "lucide-react";

const focusIcons = [Layers, Lock, Palette, Users];

export function AboutClient() {
  const t = useTranslations("about");
  const { locale } = useParams();

  const focusAreas = [
    { title: t("focus1Title"), desc: t("focus1Desc") },
    { title: t("focus2Title"), desc: t("focus2Desc") },
    { title: t("focus3Title"), desc: t("focus3Desc") },
    { title: t("focus4Title"), desc: t("focus4Desc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-28 lg:py-36 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-madar-500 mb-5">
              {locale === "ar" ? "من نحن" : "About"}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.02em] leading-[1.08]">
              {t("title")}
            </h1>
            <p className="mt-7 text-[17px] sm:text-xl text-[#6e6e73] leading-[1.65]">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-6">
                {t("missionTitle")}
              </h2>
              <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                {t("missionText")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-6">
                {t("approachTitle")}
              </h2>
              <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                {t("approachText")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em]">
              {t("focusTitle")}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-[20px] p-7 hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
                >
                  <div className="w-11 h-11 bg-madar-50 rounded-[12px] flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-madar-600" size={20} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{area.title}</h3>
                  <p className="text-[14px] text-[#6e6e73] leading-[1.65]">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Starting from Riyadh */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-6">
                {t("kingdomTitle")}
              </h2>
              <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                {t("kingdomText")}
              </p>
              <div className="mt-14 py-10 px-8 bg-[#f5f5f7] rounded-[28px]">
                <blockquote className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] italic leading-relaxed tracking-tight">
                  {locale === "ar"
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
