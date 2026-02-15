"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { articles } from "@/data/articles";

export function InsightsClient() {
  const t = useTranslations("insights");
  const { locale } = useParams();
  const isAr = locale === "ar";

  return (
    <>
      {/* Immersive Hero */}
      <section className="relative min-h-[75vh] flex items-end bg-madar-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-madar-900 via-madar-800 to-madar-700" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-madar-600/20 rounded-full blur-[180px] -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-madar-500/15 rounded-full blur-[150px] translate-y-1/4 -translate-x-1/4" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-madar-400/10 rounded-full blur-[120px] translate-x-1/3" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-madar-900/80 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-madar-300/70 mb-6 block">
              {isAr ? "رؤى وأفكار" : "PERSPECTIVES & INSIGHTS"}
            </span>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold text-white tracking-[-0.04em] leading-[0.95] max-w-4xl mb-6">
              {t("title")}
            </h1>
            <p className="text-lg sm:text-xl text-madar-200/60 leading-relaxed max-w-2xl">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Link href={`/${locale}/insights/${articles[0].slug}`}>
              <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 group cursor-pointer hover:shadow-xl hover:shadow-madar-600/5 border border-gray-100 transition-all duration-500">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-madar-50 text-madar-600 text-xs font-bold rounded-full uppercase tracking-wider border border-madar-100">
                  {t("latestTitle")}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-madar-900 mt-5 mb-5 group-hover:text-madar-600 transition-colors tracking-tight leading-tight">
                  {isAr ? articles[0].titleAr : articles[0].titleEn}
                  <ArrowUpRight size={24} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="text-[15px] text-gray-500 leading-[1.7] max-w-3xl">
                  {isAr ? articles[0].excerptAr : articles[0].excerptEn}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 bg-madar-50 text-madar-600 text-xs font-bold rounded-full border border-madar-100">
                    {isAr ? articles[0].categoryAr : articles[0].categoryEn}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {isAr ? articles[0].dateAr : articles[0].dateEn}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {isAr ? articles[0].readTimeAr : articles[0].readTimeEn}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Article Grid */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-madar-900 tracking-[-0.03em] mb-10">
            {t("allInsights")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(1).map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/${locale}/insights/${a.slug}`}>
                  <div className="h-full bg-white rounded-2xl p-7 group cursor-pointer hover:shadow-xl hover:shadow-madar-600/5 border border-gray-100 transition-all duration-500">
                    <span className="inline-flex items-center px-3 py-1 bg-madar-50 text-madar-600 text-xs font-bold rounded-full uppercase tracking-wider border border-madar-100">
                      {isAr ? a.categoryAr : a.categoryEn}
                    </span>
                    <h3 className="text-lg font-bold text-madar-900 mt-4 mb-3 group-hover:text-madar-600 transition-colors tracking-tight leading-snug">
                      {isAr ? a.titleAr : a.titleEn}
                      <ArrowUpRight size={15} className="inline ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-[14px] text-gray-500 leading-[1.7]">
                      {isAr ? a.excerptAr : a.excerptEn}
                    </p>
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-400 font-medium">
                      <span>{isAr ? a.dateAr : a.dateEn}</span>
                      <span>{isAr ? a.readTimeAr : a.readTimeEn}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
