"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { FileText, Download } from "lucide-react";

const resources = [
  {
    titleEn: "The Digital Design Language of Riyadh",
    titleAr: "لغة التصميم الرقمي للرياض",
    typeEn: "White Paper",
    typeAr: "ورقة بيضاء",
    dateEn: "February 2026",
    dateAr: "فبراير ٢٠٢٦",
    descEn: "A Kingdom Lens on How States Communicate Trust, Power, and Legitimacy Through Software.",
    descAr: "رؤية مملكة حول كيفية تواصل الدول مع الثقة والقوة والشرعية من خلال البرمجيات.",
  },
  {
    titleEn: "Design as Infrastructure",
    titleAr: "التصميم كبنية تحتية",
    typeEn: "Framework",
    typeAr: "إطار عمل",
    dateEn: "Coming Soon",
    dateAr: "قريباً",
    descEn: "A framework for treating government design systems as critical public infrastructure.",
    descAr: "إطار عمل لمعاملة أنظمة التصميم الحكومية كبنية تحتية عامة حيوية.",
  },
  {
    titleEn: "Trust Architecture in Digital States",
    titleAr: "هندسة الثقة في الدول الرقمية",
    typeEn: "Report",
    typeAr: "تقرير",
    dateEn: "Coming Soon",
    dateAr: "قريباً",
    descEn: "How digital governance patterns build or erode institutional trust over time.",
    descAr: "كيف تبني أنماط الحوكمة الرقمية الثقة المؤسسية أو تُضعفها بمرور الوقت.",
  },
];

export function FeaturedResources({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeading title={t("resourcesTitle")} subtitle={t("resourcesDescription")} />
          <Button href={`/${locale}/resources`} variant="ghost" className="shrink-0">
            {t("resourcesCta")}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-madar-50 text-madar-600 text-xs font-medium rounded-full">
                    <FileText size={12} />
                    {isAr ? r.typeAr : r.typeEn}
                  </span>
                  <span className="text-xs text-gray-400">{isAr ? r.dateAr : r.dateEn}</span>
                </div>
                <h3 className="text-lg font-semibold text-madar-900 mb-2">
                  {isAr ? r.titleAr : r.titleEn}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {isAr ? r.descAr : r.descEn}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center gap-1.5 text-sm text-madar-600 font-medium hover:text-madar-700 transition-colors">
                    <Download size={14} />
                    {isAr ? "تحميل" : "Download"}
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
