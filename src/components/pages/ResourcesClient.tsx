"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export function ResourcesClient() {
  const t = useTranslations("resources");
  const { locale } = useParams();
  const isAr = locale === "ar";

  const basePath = "/madar";
  const pdfPath = `${basePath}/madar-whitepaper-2026.pdf`;

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

      {/* Single Resource */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gradient-to-br from-madar-50 to-white rounded-3xl border border-madar-200 p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="w-24 h-24 bg-madar-100 rounded-2xl flex items-center justify-center shrink-0">
                  <FileText className="text-madar-600" size={40} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sand-700 bg-sand-100 px-3 py-1 rounded-full">
                      {t("featuredTitle")}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-madar-600 bg-madar-50 px-3 py-1 rounded-full font-medium">
                      <FileText size={10} />
                      {isAr ? "ورقة بيضاء" : "White Paper"}
                    </span>
                    <span className="text-sm text-gray-400">{isAr ? "فبراير ٢٠٢٦" : "February 2026"}</span>
                    <span className="text-sm text-gray-400">23 {isAr ? "صفحة" : "pages"}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-madar-900 mb-4">
                    {isAr ? "٢٠٢٦: لغة التصميم الرقمي للرياض" : "2026: The Digital Design Language of Riyadh"}
                  </h2>

                  <p className="text-gray-600 leading-relaxed text-lg mb-8 max-w-3xl">
                    {isAr
                      ? "ورقة بيضاء شاملة تبحث في كيفية تواصل الدول مع الثقة والقوة والشرعية من خلال البرمجيات. رؤية مملكة للتخصص الناشئ للغة التصميم المؤسسي."
                      : "A comprehensive white paper examining how states communicate trust, power, and legitimacy through software. A Kingdom lens on the emerging discipline of institutional design language."}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={pdfPath}
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-madar-600 rounded-full hover:bg-madar-700 transition-colors shadow-sm"
                    >
                      <Download size={16} />
                      {t("downloadCta")}
                    </a>
                    <a
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-madar-700 bg-madar-50 rounded-full hover:bg-madar-100 transition-colors"
                    >
                      <ExternalLink size={16} />
                      {t("readCta")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 text-lg">
              {isAr ? "المزيد من الأبحاث والموارد قريباً." : "More research and resources coming soon."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
