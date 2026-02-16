"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export function ResourcesClient() {
  const t = useTranslations("resources");
  const { locale } = useParams();
  const isAr = locale === "ar";

  const pdfPath = "/madar-whitepaper-2026.pdf";

  return (
    <>
      {/* Immersive Hero */}
      <section className="relative min-h-[75vh] flex items-end bg-madar-900 overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-madar-900 via-madar-800 to-madar-700" />
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-madar-600/20 rounded-full blur-[180px] -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-madar-500/15 rounded-full blur-[150px] translate-y-1/4 translate-x-1/4" />
          <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-madar-400/10 rounded-full blur-[120px] -translate-x-1/4" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-madar-900/80 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-madar-300/70 mb-6 block">
              {isAr ? "الموارد والأبحاث" : "RESOURCES & RESEARCH"}
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
