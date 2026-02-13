"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-madar-900 tracking-tight">
              {t("title")}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title={t("missionTitle")} />
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("missionText")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionHeading title={t("approachTitle")} />
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("approachText")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("focusTitle")} centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <div className="w-12 h-12 bg-madar-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-madar-600" size={24} />
                    </div>
                    <h3 className="font-semibold text-madar-900 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Starting from Riyadh */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading title={t("kingdomTitle")} centered />
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("kingdomText")}
              </p>
              <div className="mt-12 py-8 px-6 bg-white rounded-2xl border border-sand-300/30">
                <blockquote className="text-2xl font-semibold text-madar-800 italic leading-relaxed">
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
