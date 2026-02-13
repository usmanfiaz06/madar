"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-madar-500 mb-5">
              {isAr ? "رؤى وأفكار" : "Perspectives"}
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em]">
              {t("insightsTitle")}
            </h2>
          </div>
          <a
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 text-[15px] text-madar-600 font-medium hover:text-madar-700 transition-colors shrink-0"
          >
            {t("insightsCta")}
            <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="h-full flex flex-col bg-[#f5f5f7] rounded-[20px] p-7 hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-all duration-500 group cursor-pointer">
                <span className="text-xs text-madar-500 font-semibold uppercase tracking-wider">
                  {isAr ? a.categoryAr : a.categoryEn}
                </span>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mt-4 mb-3 group-hover:text-madar-600 transition-colors tracking-tight">
                  {isAr ? a.titleAr : a.titleEn}
                  <ArrowUpRight size={15} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[#6e6e73] text-[14px] leading-[1.65] flex-1">
                  {isAr ? a.excerptAr : a.excerptEn}
                </p>
                <p className="mt-5 text-xs text-[#86868b]">{isAr ? a.dateAr : a.dateEn}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
