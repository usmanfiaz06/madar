"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { articles } from "@/data/articles";

export function LatestInsights({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  const featured = articles.slice(0, 3);

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
          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[15px] text-madar-700 font-bold bg-madar-50 rounded-full hover:bg-madar-100 transition-colors shrink-0 border border-madar-200"
          >
            {t("insightsCta")}
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/${locale}/insights/${a.slug}`}>
                <div className="h-full flex flex-col bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-madar-600/5 hover:border-madar-200 transition-all duration-500 group cursor-pointer">
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
