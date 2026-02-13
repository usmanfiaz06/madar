"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, BookOpen } from "lucide-react";

export function ResourcesClient() {
  const t = useTranslations("resources");
  const { locale } = useParams();
  const isAr = locale === "ar";

  const basePath = "/madar";
  const pdfPath = `${basePath}/madar-whitepaper-2026.pdf`;

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
              <BookOpen size={14} />
              {isAr ? "الموارد" : "Resources"}
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

      {/* Featured Resource */}
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-madar-800 rounded-3xl p-8 sm:p-10 lg:p-14 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-madar-700/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-madar-600/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />

              <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm">
                  <FileText className="text-madar-200" size={30} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-madar-400/20 text-madar-200 text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-sm">
                      {t("featuredTitle")}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 text-madar-200 text-xs font-bold rounded-full backdrop-blur-sm">
                      {isAr ? "ورقة بيضاء" : "White Paper"}
                    </span>
                    <span className="text-sm text-madar-300/60">
                      {isAr ? "فبراير ٢٠٢٦" : "February 2026"}
                    </span>
                    <span className="text-sm text-madar-300/60">
                      23 {isAr ? "صفحة" : "pages"}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                    {isAr ? "٢٠٢٦: لغة التصميم الرقمي للرياض" : "2026: The Digital Design Language of Riyadh"}
                  </h2>

                  <p className="text-madar-200/70 text-base leading-[1.7] mb-10 max-w-3xl">
                    {isAr
                      ? "ورقة بيضاء شاملة تبحث في كيفية تواصل الدول مع الثقة والقوة والشرعية من خلال البرمجيات. رؤية مملكة للتخصص الناشئ للغة التصميم المؤسسي."
                      : "A comprehensive white paper examining how states communicate trust, power, and legitimacy through software. A Kingdom lens on the emerging discipline of institutional design language."}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={pdfPath}
                      download
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-bold text-madar-900 bg-white rounded-full hover:bg-madar-50 transition-all shadow-lg shadow-black/10"
                    >
                      <Download size={16} />
                      {t("downloadCta")}
                    </a>
                    <a
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-bold text-white bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
                    >
                      <ExternalLink size={16} />
                      {t("readCta")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-20 text-center">
            <p className="text-[15px] text-gray-500">
              {isAr ? "المزيد من الأبحاث والموارد قريباً." : "More research and resources coming soon."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
