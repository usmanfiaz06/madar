"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Eye, Heart, Languages } from "lucide-react";

const icons = [Shield, Eye, Heart, Languages];

export function Principles() {
  const t = useTranslations("home");

  const principles = [
    { title: t("principle1Title"), desc: t("principle1Desc") },
    { title: t("principle2Title"), desc: t("principle2Desc") },
    { title: t("principle3Title"), desc: t("principle3Desc") },
    { title: t("principle4Title"), desc: t("principle4Desc") },
  ];

  return (
    <section className="py-24 lg:py-32 bg-madar-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-madar-200 rounded-full text-madar-600 text-xs font-semibold uppercase tracking-wider mb-6">
            Guiding Values
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-madar-900 tracking-[-0.03em]">
            {t("principlesTitle")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((principle, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-madar-600/5 transition-all duration-500 group border border-white hover:border-madar-100"
              >
                <div className="w-14 h-14 bg-madar-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-madar-200 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-madar-600" size={24} />
                </div>
                <h3 className="text-madar-900 font-bold text-lg mb-3 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-[1.7]">
                  {principle.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
