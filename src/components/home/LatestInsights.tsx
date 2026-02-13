"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    titleEn: "Why Design is a Statecraft Problem",
    titleAr: "لماذا التصميم مسألة حوكمة",
    excerptEn: "Design is no longer downstream of policy. It is where policy becomes real. The interface is not an implementation detail; it is the place where governance is interpreted.",
    excerptAr: "لم يعد التصميم تابعاً للسياسة. إنه حيث تصبح السياسة واقعاً. الواجهة ليست تفصيلاً تنفيذياً؛ بل هي المكان الذي تُفسَّر فيه الحوكمة.",
    dateEn: "February 2026",
    dateAr: "فبراير ٢٠٢٦",
    categoryEn: "Governance",
    categoryAr: "الحوكمة",
  },
  {
    titleEn: "Designing at Civilizational Scale",
    titleAr: "التصميم على المستوى الحضاري",
    excerptEn: "When transformation is intentional, design becomes a tool of direction, not correction. How do we design for billions at civilizational scale?",
    excerptAr: "عندما يكون التحول مقصوداً، يصبح التصميم أداة توجيه لا تصحيح. كيف نصمم للمليارات على مستوى حضاري؟",
    dateEn: "February 2026",
    dateAr: "فبراير ٢٠٢٦",
    categoryEn: "Design",
    categoryAr: "التصميم",
  },
  {
    titleEn: "The Role of Hospitality in Digital Services",
    titleAr: "دور الضيافة في الخدمات الرقمية",
    excerptEn: "Digital services should welcome, guide, and reassure — as a host would treat a guest. This is not merely good UX; it is institutional behavior made legible.",
    excerptAr: "يجب أن ترحب الخدمات الرقمية وتوجّه وتطمئن — كما يعامل المضيف ضيفه. هذا ليس مجرد تجربة مستخدم جيدة؛ بل سلوك مؤسسي مقروء.",
    dateEn: "January 2026",
    dateAr: "يناير ٢٠٢٦",
    categoryEn: "Culture",
    categoryAr: "الثقافة",
  },
];

export function LatestInsights({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeading title={t("insightsTitle")} subtitle={t("insightsDescription")} />
          <Button href={`/madar/${locale}/insights`} variant="ghost" className="shrink-0">
            {t("insightsCta")}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-full flex flex-col bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-madar-100 transition-all duration-300 group cursor-pointer">
                <span className="text-xs text-madar-500 font-semibold uppercase tracking-wider">
                  {isAr ? a.categoryAr : a.categoryEn}
                </span>
                <h3 className="text-lg font-semibold text-madar-900 mt-3 mb-3 group-hover:text-madar-600 transition-colors">
                  {isAr ? a.titleAr : a.titleEn}
                  <ArrowUpRight size={16} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {isAr ? a.excerptAr : a.excerptEn}
                </p>
                <p className="mt-4 text-xs text-gray-400">{isAr ? a.dateAr : a.dateEn}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
