"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Paintbrush, Building2, Landmark, Users } from "lucide-react";

const audienceIcons = [Paintbrush, Landmark, Building2, Users];

export function AboutPreview({ locale }: { locale: string }) {
  const t = useTranslations("home");

  const audiences = [
    { title: t("audience1Title"), desc: t("audience1Desc") },
    { title: t("audience2Title"), desc: t("audience2Desc") },
    { title: t("audience3Title"), desc: t("audience3Desc") },
    { title: t("audience4Title"), desc: t("audience4Desc") },
  ];

  return (
    <>
      {/* What is Madar */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-madar-500 mb-4">
                {locale === "ar" ? "من نحن" : "About"}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-madar-900 tracking-tight leading-tight">
                {t("aboutTitle")}
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                {t("aboutDescription")}
              </p>
              <div className="mt-8">
                <Button href={`/madar/${locale}/about`} variant="secondary" size="lg">
                  {t("aboutCta")}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-madar-50 rounded-3xl p-8 lg:p-10"
            >
              <h3 className="text-2xl font-bold text-madar-900 mb-4">
                {t("conversationTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("conversationDescription")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is Madar For */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-madar-900 tracking-tight">
              {t("audienceTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a, i) => {
              const Icon = audienceIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-madar-100 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-madar-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-madar-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-madar-900 mb-2">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
