"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export function FeaturedResources({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  const basePath = "/madar";
  const pdfPath = `${basePath}/madar-whitepaper-2026.pdf`;

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-madar-500 mb-5">
            {isAr ? "الأبحاث" : "Research"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em]">
            {t("resourcesTitle")}
          </h2>
          <p className="mt-5 text-[17px] text-[#6e6e73] leading-[1.65] max-w-2xl">
            {t("resourcesDescription")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#f5f5f7] rounded-[28px] p-8 sm:p-10 lg:p-12 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="text-madar-600" size={28} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-madar-100/80 text-madar-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {isAr ? "ورقة بيضاء" : "White Paper"}
                  </span>
                  <span className="text-[13px] text-[#86868b]">{isAr ? "فبراير ٢٠٢٦" : "February 2026"}</span>
                  <span className="text-[13px] text-[#86868b]">23 {isAr ? "صفحة" : "pages"}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                  {isAr ? "لغة التصميم الرقمي للرياض" : "The Digital Design Language of Riyadh"}
                </h3>

                <p className="text-[16px] text-[#6e6e73] leading-[1.7] max-w-2xl">
                  {isAr
                    ? "رؤية مملكة حول كيفية تواصل الدول مع الثقة والقوة والشرعية من خلال البرمجيات."
                    : "A Kingdom Lens on How States Communicate Trust, Power, and Legitimacy Through Software."}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={pdfPath}
                    download
                    className="inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-semibold text-white bg-[#1d1d1f] rounded-full hover:bg-[#333] transition-colors"
                  >
                    <Download size={15} />
                    {isAr ? "تحميل PDF" : "Download PDF"}
                  </a>
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-semibold text-[#1d1d1f] bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <ExternalLink size={15} />
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
