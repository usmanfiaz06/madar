"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { FileText, Download, ExternalLink } from "lucide-react";

export function FeaturedResources({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  const basePath = "/madar";
  const pdfPath = `${basePath}/madar-whitepaper-2026.pdf`;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading title={t("resourcesTitle")} subtitle={t("resourcesDescription")} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-madar-50 to-white rounded-3xl border border-madar-100 p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-20 h-20 bg-madar-100 rounded-2xl flex items-center justify-center shrink-0">
                <FileText className="text-madar-600" size={36} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-madar-100 text-madar-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {isAr ? "ورقة بيضاء" : "White Paper"}
                  </span>
                  <span className="text-sm text-gray-400">{isAr ? "فبراير ٢٠٢٦" : "February 2026"}</span>
                  <span className="text-sm text-gray-400">23 {isAr ? "صفحة" : "pages"}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-madar-900 mb-3">
                  {isAr ? "لغة التصميم الرقمي للرياض" : "The Digital Design Language of Riyadh"}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
                  {isAr
                    ? "رؤية مملكة حول كيفية تواصل الدول مع الثقة والقوة والشرعية من خلال البرمجيات."
                    : "A Kingdom Lens on How States Communicate Trust, Power, and Legitimacy Through Software."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={pdfPath}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-madar-600 rounded-full hover:bg-madar-700 transition-colors shadow-sm"
                  >
                    <Download size={16} />
                    {isAr ? "تحميل PDF" : "Download PDF"}
                  </a>
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-madar-700 bg-madar-50 rounded-full hover:bg-madar-100 transition-colors"
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
