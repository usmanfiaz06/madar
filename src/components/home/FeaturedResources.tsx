"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, BookOpen } from "lucide-react";

export function FeaturedResources({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  const basePath = "/madar";
  const pdfPath = `${basePath}/madar-whitepaper-2026.pdf`;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-madar-50 border border-madar-200 rounded-full text-madar-600 text-xs font-semibold uppercase tracking-wider mb-6">
            <BookOpen size={14} />
            {isAr ? "الأبحاث" : "Research"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-madar-900 tracking-[-0.03em]">
            {t("resourcesTitle")}
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-[1.65] max-w-2xl">
            {t("resourcesDescription")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Large Featured Green Card */}
          <div className="bg-madar-800 rounded-3xl p-8 sm:p-10 lg:p-14 relative overflow-hidden group hover:shadow-2xl hover:shadow-madar-900/20 transition-all duration-500">
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
                    {isAr ? "ورقة بيضاء" : "White Paper"}
                  </span>
                  <span className="text-sm text-madar-300/60">
                    {isAr ? "فبراير ٢٠٢٦" : "February 2026"}
                  </span>
                  <span className="text-sm text-madar-300/60">
                    23 {isAr ? "صفحة" : "pages"}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                  {isAr
                    ? "لغة التصميم الرقمي للرياض"
                    : "The Digital Design Language of Riyadh"}
                </h3>

                <p className="text-madar-200/70 text-base leading-[1.7] max-w-2xl">
                  {isAr
                    ? "رؤية مملكة حول كيفية تواصل الدول مع الثقة والقوة والشرعية من خلال البرمجيات."
                    : "A Kingdom Lens on How States Communicate Trust, Power, and Legitimacy Through Software."}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={pdfPath}
                    download
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-bold text-madar-900 bg-white rounded-full hover:bg-madar-50 transition-all shadow-lg shadow-black/10 hover:shadow-xl"
                  >
                    <Download size={16} />
                    {isAr ? "تحميل PDF" : "Download PDF"}
                  </a>
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-bold text-white bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
                  >
                    <ExternalLink size={16} />
                    {isAr ? "اقرأ عبر الإنترنت" : "Read Online"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
