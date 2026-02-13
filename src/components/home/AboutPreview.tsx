"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Paintbrush, Building2, Landmark, Users, MessageCircle, ArrowRight } from "lucide-react";

const audienceIcons = [Paintbrush, Landmark, Building2, Users];

export function AboutPreview({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  const audiences = [
    { title: t("audience1Title"), desc: t("audience1Desc") },
    { title: t("audience2Title"), desc: t("audience2Desc") },
    { title: t("audience3Title"), desc: t("audience3Desc") },
    { title: t("audience4Title"), desc: t("audience4Desc") },
  ];

  return (
    <>
      {/* What is Madar Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left - About Text (3 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-madar-50 border border-madar-200 rounded-full text-madar-600 text-xs font-semibold uppercase tracking-wider mb-6">
                {isAr ? "من نحن" : "About"}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-madar-900 tracking-[-0.03em] leading-[1.05]">
                {t("aboutTitle")}
              </h2>
              <p className="mt-6 text-lg text-gray-500 leading-[1.7] max-w-2xl">
                {t("aboutDescription")}
              </p>
              <div className="mt-8">
                <Button
                  href={`/${locale}/about`}
                  variant="ghost"
                  className="text-madar-600 font-semibold text-[15px] px-0 hover:bg-transparent hover:text-madar-700 gap-2"
                >
                  {t("aboutCta")}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>

            {/* Right - Conversation Partner Featured Card (2 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div className="h-full bg-madar-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-madar-500/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-madar-400/20 rounded-full blur-xl" />

                <div className="relative">
                  <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                    {t("conversationTitle")}
                  </h3>
                  <p className="text-white/75 text-[15px] leading-[1.7]">
                    {t("conversationDescription")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is Madar For - Bento Audience Cards */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-madar-900 tracking-[-0.03em]">
              {t("audienceTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a, i) => {
              const Icon = audienceIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-madar-600/5 hover:border-madar-200 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 bg-madar-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-madar-200 transition-colors duration-300">
                    <Icon className="text-madar-600" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-madar-900 mb-2 tracking-tight">
                    {a.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-[1.65]">
                    {a.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
