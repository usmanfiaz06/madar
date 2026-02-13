"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FileText, Download, ExternalLink } from "lucide-react";

type ResourceType = "all" | "whitepaper" | "report" | "framework";

const resources = [
  {
    titleEn: "2026: The Digital Design Language of Riyadh",
    titleAr: "٢٠٢٦: لغة التصميم الرقمي للرياض",
    typeEn: "White Paper",
    typeAr: "ورقة بيضاء",
    type: "whitepaper" as ResourceType,
    dateEn: "February 2026",
    dateAr: "فبراير ٢٠٢٦",
    descEn: "A comprehensive white paper examining how states communicate trust, power, and legitimacy through software. A Kingdom lens on the emerging discipline of institutional design language.",
    descAr: "ورقة بيضاء شاملة تبحث في كيفية تواصل الدول مع الثقة والقوة والشرعية من خلال البرمجيات. رؤية مملكة للتخصص الناشئ للغة التصميم المؤسسي.",
    featured: true,
    pages: "23",
  },
  {
    titleEn: "Design as Infrastructure: A Policy Framework",
    titleAr: "التصميم كبنية تحتية: إطار سياسات",
    typeEn: "Framework",
    typeAr: "إطار عمل",
    type: "framework" as ResourceType,
    dateEn: "Coming Soon",
    dateAr: "قريباً",
    descEn: "A framework for governments seeking to treat design systems as critical public infrastructure rather than aesthetic choices.",
    descAr: "إطار عمل للحكومات الساعية لمعاملة أنظمة التصميم كبنية تحتية عامة حيوية بدلاً من خيارات جمالية.",
    featured: false,
    pages: null,
  },
  {
    titleEn: "Trust Architecture in Digital States",
    titleAr: "هندسة الثقة في الدول الرقمية",
    typeEn: "Report",
    typeAr: "تقرير",
    type: "report" as ResourceType,
    dateEn: "Coming Soon",
    dateAr: "قريباً",
    descEn: "An analysis of how digital governance patterns build or erode institutional trust over time, with case studies from leading digital governments.",
    descAr: "تحليل لكيفية بناء أنماط الحوكمة الرقمية للثقة المؤسسية أو إضعافها بمرور الوقت، مع دراسات حالة من الحكومات الرقمية الرائدة.",
    featured: false,
    pages: null,
  },
  {
    titleEn: "Arabic-First Design Principles",
    titleAr: "مبادئ التصميم العربي أولاً",
    typeEn: "Framework",
    typeAr: "إطار عمل",
    type: "framework" as ResourceType,
    dateEn: "Coming Soon",
    dateAr: "قريباً",
    descEn: "Guiding principles for creating digital experiences that start in Arabic and feel native, while remaining accessible to a global audience.",
    descAr: "مبادئ إرشادية لإنشاء تجارب رقمية تبدأ بالعربية وتبدو أصيلة، مع البقاء متاحة لجمهور عالمي.",
    featured: false,
    pages: null,
  },
  {
    titleEn: "Citizen Experience Benchmarking Report",
    titleAr: "تقرير قياس تجربة المواطن",
    typeEn: "Report",
    typeAr: "تقرير",
    type: "report" as ResourceType,
    dateEn: "Coming Soon",
    dateAr: "قريباً",
    descEn: "A comparative study of citizen digital experiences across leading governments, with actionable insights for improvement.",
    descAr: "دراسة مقارنة لتجارب المواطنين الرقمية عبر الحكومات الرائدة، مع رؤى عملية للتحسين.",
    featured: false,
    pages: null,
  },
];

const filters: { key: ResourceType; labelEn: string; labelAr: string }[] = [
  { key: "all", labelEn: "All", labelAr: "الكل" },
  { key: "whitepaper", labelEn: "White Papers", labelAr: "أوراق بيضاء" },
  { key: "report", labelEn: "Reports", labelAr: "تقارير" },
  { key: "framework", labelEn: "Frameworks", labelAr: "أطر عمل" },
];

export function ResourcesClient() {
  const t = useTranslations("resources");
  const { locale } = useParams();
  const isAr = locale === "ar";
  const [activeFilter, setActiveFilter] = useState<ResourceType>("all");

  const filtered = activeFilter === "all"
    ? resources
    : resources.filter((r) => r.type === activeFilter);

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

      {/* Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeFilter === f.key
                    ? "bg-madar-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-madar-50 hover:text-madar-600"
                }`}
              >
                {isAr ? f.labelAr : f.labelEn}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filtered.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className={`p-8 ${r.featured ? "border-madar-200 bg-madar-50/30" : ""}`}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {r.featured && (
                          <span className="text-xs font-semibold uppercase tracking-wider text-sand-700 bg-sand-100 px-2 py-0.5 rounded-full">
                            {t("featuredTitle")}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs text-madar-600 bg-madar-50 px-2 py-0.5 rounded-full">
                          <FileText size={10} />
                          {isAr ? r.typeAr : r.typeEn}
                        </span>
                        <span className="text-xs text-gray-400">{isAr ? r.dateAr : r.dateEn}</span>
                        {r.pages && (
                          <span className="text-xs text-gray-400">{r.pages} pages</span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-madar-900 mb-2">
                        {isAr ? r.titleAr : r.titleEn}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isAr ? r.descAr : r.descEn}
                      </p>
                    </div>
                    <div className="flex lg:flex-col gap-3 shrink-0">
                      <button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-madar-600 bg-madar-50 rounded-full hover:bg-madar-100 transition-colors">
                        <Download size={14} />
                        {t("downloadCta")}
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                        <ExternalLink size={14} />
                        {t("readCta")}
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
