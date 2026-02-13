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
      <section className="py-28 lg:py-36 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-madar-500 mb-5">
              {isAr ? "الموارد" : "Resources"}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.02em] leading-[1.08]">
              {t("title")}
            </h1>
            <p className="mt-7 text-[17px] sm:text-xl text-[#6e6e73] leading-[1.65]">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Single Resource */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#f5f5f7] rounded-[28px] p-8 sm:p-10 lg:p-14">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
                <div className="w-20 h-20 bg-white rounded-[18px] flex items-center justify-center shrink-0 shadow-sm">
                  <FileText className="text-madar-600" size={36} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-madar-600 bg-madar-50 px-3 py-1 rounded-full">
                      {t("featuredTitle")}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#86868b] bg-white px-3 py-1 rounded-full font-medium">
                      {isAr ? "ورقة بيضاء" : "White Paper"}
                    </span>
                    <span className="text-[13px] text-[#86868b]">{isAr ? "فبراير ٢٠٢٦" : "February 2026"}</span>
                    <span className="text-[13px] text-[#86868b]">23 {isAr ? "صفحة" : "pages"}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1d1d1f] mb-5 tracking-tight">
                    {isAr ? "٢٠٢٦: لغة التصميم الرقمي للرياض" : "2026: The Digital Design Language of Riyadh"}
                  </h2>

                  <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-10 max-w-3xl">
                    {isAr
                      ? "ورقة بيضاء شاملة تبحث في كيفية تواصل الدول مع الثقة والقوة والشرعية من خلال البرمجيات. رؤية مملكة للتخصص الناشئ للغة التصميم المؤسسي."
                      : "A comprehensive white paper examining how states communicate trust, power, and legitimacy through software. A Kingdom lens on the emerging discipline of institutional design language."}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={pdfPath}
                      download
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-semibold text-white bg-[#1d1d1f] rounded-full hover:bg-[#333] transition-colors"
                    >
                      <Download size={15} />
                      {t("downloadCta")}
                    </a>
                    <a
                      href={pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-semibold text-[#1d1d1f] bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <ExternalLink size={15} />
                      {t("readCta")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-20 text-center">
            <p className="text-[16px] text-[#86868b]">
              {isAr ? "المزيد من الأبحاث والموارد قريباً." : "More research and resources coming soon."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
