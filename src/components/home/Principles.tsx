"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
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
    <section className="py-24 bg-madar-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("principlesTitle")}
          centered
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-madar-800/50 border border-madar-700/30 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-madar-600/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-madar-300" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">{principle.title}</h3>
                <p className="text-madar-300 text-sm leading-relaxed">{principle.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
