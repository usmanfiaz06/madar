"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Paintbrush, Building2, Landmark, Users, MessageCircle, ArrowRight } from "lucide-react";

export function AboutPreview({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  return (
    <>
      {/* Top: Label + Massive Heading + Description + CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-madar-600 mb-6 block">
              {isAr ? "عن مدار" : "ABOUT MADAR"}
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold text-madar-900 tracking-[-0.04em] leading-[1] mb-8">
              {t("aboutTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 leading-[1.7] max-w-3xl">
              {t("aboutDescription")}
            </p>
            <div className="mt-10">
              <Button
                href={`/${locale}/about`}
                className="bg-madar-600 text-white font-bold text-[15px] px-8 py-4 rounded-full hover:bg-madar-700 shadow-lg shadow-madar-600/20 gap-2.5"
              >
                {t("aboutCta")}
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom: Visual Left + Two Text Columns Right */}
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Visual / Featured Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="h-full bg-madar-700 rounded-3xl p-10 lg:p-12 text-white relative overflow-hidden min-h-[480px] flex flex-col justify-between">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-madar-600/40 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-madar-500/25 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-madar-400/15 rounded-full blur-[60px]" />

                <div className="relative">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                    <MessageCircle size={26} className="text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                    {t("conversationTitle")}
                  </h3>
                  <p className="text-white/65 text-base leading-[1.75]">
                    {t("conversationDescription")}
                  </p>
                </div>

                {/* Bottom decorative line */}
                <div className="relative mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/40 text-sm font-medium italic tracking-tight">
                    {isAr
                      ? "\"التصميم هو لغة الثقة الجديدة.\""
                      : "\"Design is the new language of trust.\""}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Two Text Columns Stacked */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-8"
            >
              {/* Column 1 - Who We Serve */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 flex-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-madar-600 mb-5 block">
                  {isAr ? "من نخدم" : "WHO WE SERVE"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-madar-100 rounded-xl flex items-center justify-center shrink-0">
                      <Paintbrush className="text-madar-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-madar-900 text-[15px] mb-1">{t("audience1Title")}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{t("audience1Desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-madar-100 rounded-xl flex items-center justify-center shrink-0">
                      <Landmark className="text-madar-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-madar-900 text-[15px] mb-1">{t("audience2Title")}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{t("audience2Desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-madar-100 rounded-xl flex items-center justify-center shrink-0">
                      <Building2 className="text-madar-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-madar-900 text-[15px] mb-1">{t("audience3Title")}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{t("audience3Desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-madar-100 rounded-xl flex items-center justify-center shrink-0">
                      <Users className="text-madar-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-madar-900 text-[15px] mb-1">{t("audience4Title")}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{t("audience4Desc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 - Our Approach */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 flex-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-madar-600 mb-5 block">
                  {isAr ? "نهجنا" : "OUR APPROACH"}
                </span>
                <p className="text-base text-gray-500 leading-[1.75] mb-6">
                  {isAr
                    ? "من خلال البحث والطاولات المستديرة والحوار المجتمعي، نبني جسوراً بين من يصنعون التجارب الرقمية ومن يعيشونها. نؤمن أن التصميم ليس تفصيلاً تنفيذياً — بل هو المكان الذي تُشكَّل فيه الثقة والهوية."
                    : "Through research, roundtables, and community dialogue, we bridge the gap between those who shape digital experiences and those who live them. We believe design is not an implementation detail — it is the place where trust and identity are shaped."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    isAr ? "البحث" : "Research",
                    isAr ? "الطاولات المستديرة" : "Roundtables",
                    isAr ? "حوار مجتمعي" : "Community Dialogue",
                    isAr ? "الأوراق البيضاء" : "White Papers",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-madar-50 border border-madar-100 rounded-full text-xs font-semibold text-madar-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
