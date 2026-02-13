"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Lightbulb } from "lucide-react";

const articles = [
  {
    titleEn: "Why Design is a Statecraft Problem",
    titleAr: "لماذا التصميم مسألة حوكمة",
    excerptEn:
      "Design is no longer downstream of policy. It is where policy becomes real. The interface is not an implementation detail; it is the place where governance is interpreted.",
    excerptAr:
      "لم يعد التصميم تابعاً للسياسة. إنه حيث تصبح السياسة واقعاً. الواجهة ليست تفصيلاً تنفيذياً؛ بل هي المكان الذي تُفسَّر فيه الحوكمة.",
    dateEn: "February 2026",
    dateAr: "فبراير ٢٠٢٦",
    categoryEn: "Governance",
    categoryAr: "الحوكمة",
  },
  {
    titleEn: "Designing at Civilizational Scale",
    titleAr: "التصميم على المستوى الحضاري",
    excerptEn:
      "When transformation is intentional, design becomes a tool of direction, not correction. How do we design for billions at civilizational scale?",
    excerptAr:
      "عندما يكون التحول مقصوداً، يصبح التصميم أداة توجيه لا تصحيح. كيف نصمم للمليارات على مستوى حضاري؟",
    dateEn: "February 2026",
    dateAr: "فبراير ٢٠٢٦",
    categoryEn: "Design",
    categoryAr: "التصميم",
  },
  {
    titleEn: "The Role of Hospitality in Digital Services",
    titleAr: "دور الضيافة في الخدمات الرقمية",
    excerptEn:
      "Digital services should welcome, guide, and reassure — as a host would treat a guest. This is not merely good UX; it is institutional behavior made legible.",
    excerptAr:
      "يجب أن ترحب الخدمات الرقمية وتوجّه وتطمئن — كما يعامل المضيف ضيفه. هذا ليس مجرد تجربة مستخدم جيدة؛ بل سلوك مؤسسي مقروء.",
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
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-madar-50 border border-madar-200 rounded-full text-madar-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <Lightbulb size={14} />
              {isAr ? "رؤى وأفكار" : "Perspectives"}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-madar-900 tracking-[-0.03em]">
              {t("insightsTitle")}
            </h2>
          </div>
          <a
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[15px] text-madar-700 font-bold bg-madar-50 rounded-full hover:bg-madar-100 transition-colors shrink-0 border border-madar-200"
          >
            {t("insightsCta")}
            <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="h-full flex flex-col bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-madar-600/5 hover:border-madar-200 transition-all duration-500 group cursor-pointer">
                {/* Category pill */}
                <span className="inline-flex self-start items-center px-3 py-1 bg-madar-50 text-madar-600 text-xs font-bold rounded-full uppercase tracking-wider border border-madar-100">
                  {isAr ? a.categoryAr : a.categoryEn}
                </span>

                <h3 className="text-xl font-bold text-madar-900 mt-5 mb-3 group-hover:text-madar-600 transition-colors tracking-tight leading-snug">
                  {isAr ? a.titleAr : a.titleEn}
                  <ArrowUpRight
                    size={18}
                    className="inline ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-0.5 group-hover:translate-y-0"
                  />
                </h3>

                <p className="text-gray-500 text-[15px] leading-[1.7] flex-1">
                  {isAr ? a.excerptAr : a.excerptEn}
                </p>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-medium">
                    {isAr ? a.dateAr : a.dateEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
