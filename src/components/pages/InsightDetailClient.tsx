"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, CalendarDays, ArrowRight, Users } from "lucide-react";
import { openJoinModal } from "@/components/ui/JoinCommunityModal";
import { articles } from "@/data/articles";
import {
  VennTrustDiagram,
  PyramidDesignDiagram,
  FlowHospitalityDiagram,
  ErosionGraphDiagram,
  LayersDiagram,
} from "@/components/insights/ArticleDiagrams";

const diagramComponents: Record<string, React.ComponentType<{ isAr: boolean }>> = {
  "venn-trust": VennTrustDiagram,
  "pyramid-design": PyramidDesignDiagram,
  "flow-hospitality": FlowHospitalityDiagram,
  "erosion-graph": ErosionGraphDiagram,
  "layers-diagram": LayersDiagram,
};

export function InsightDetailClient({ slug }: { slug: string }) {
  const { locale } = useParams();
  const isAr = locale === "ar";

  const article = articles.find((a) => a.slug === slug);
  if (!article) return null;

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const nextArticle = articles[currentIndex + 1] || null;
  const prevArticle = articles[currentIndex - 1] || null;

  return (
    <>
      {/* Immersive Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-madar-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-madar-900 via-madar-800 to-madar-700" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-madar-600/20 rounded-full blur-[180px] -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-madar-500/15 rounded-full blur-[150px] translate-y-1/4 -translate-x-1/4" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-madar-900/80 to-transparent" />
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-20 pt-40">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/${locale}/insights`}
              className="inline-flex items-center gap-2 text-madar-300/60 hover:text-madar-200 text-sm font-medium transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              {isAr ? "جميع الرؤى" : "All Insights"}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-madar-400/20 text-madar-200 text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-sm">
                <Tag size={12} />
                {isAr ? article.categoryAr : article.categoryEn}
              </span>
              <span className="inline-flex items-center gap-1.5 text-madar-300/50 text-sm">
                <CalendarDays size={13} />
                {isAr ? article.dateAr : article.dateEn}
              </span>
              <span className="inline-flex items-center gap-1.5 text-madar-300/50 text-sm">
                <Clock size={13} />
                {isAr ? article.readTimeAr : article.readTimeEn}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-extrabold text-white tracking-[-0.04em] leading-[1] mb-6">
              {isAr ? article.titleAr : article.titleEn}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-madar-200/60 leading-relaxed max-w-2xl">
              {isAr ? article.excerptAr : article.excerptEn}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {article.sections.map((section, i) => {
            const midpoint = Math.floor(article.sections.length / 2);
            return (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-madar-900 tracking-tight mb-5 leading-tight">
                    {isAr ? section.headingAr : section.heading}
                  </h2>
                  <div className="text-[16px] text-gray-600 leading-[1.85] space-y-4">
                    {(isAr ? section.bodyAr : section.body).split("\n\n").map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>

                {/* Render diagram if this section has a visual */}
                {section.visual && diagramComponents[section.visual] && (() => {
                  const DiagramComponent = diagramComponents[section.visual!];
                  return <DiagramComponent isAr={isAr} />;
                })()}

                {/* Mid-article Community CTA — shown after midpoint section */}
                {i === midpoint && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="my-14 bg-madar-900 rounded-2xl p-8 sm:p-10 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-madar-700/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
                      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-madar-600/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
                    </div>
                    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <div className="w-14 h-14 bg-madar-400/20 rounded-2xl flex items-center justify-center shrink-0">
                        <Users className="text-madar-300" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                          {isAr
                            ? "انضم إلى مجتمع مدار"
                            : "Join the Madar Community"}
                        </h3>
                        <p className="text-sm text-madar-300/60 leading-relaxed">
                          {isAr
                            ? "كن جزءاً من مجتمع المصممين والباحثين الذين يعيدون تعريف التصميم المؤسسي. شارك في النقاشات، واحصل على محتوى حصري، وساهم في تشكيل مستقبل لغة التصميم."
                            : "Be part of a growing community of designers and researchers redefining institutional design. Join the conversation, access exclusive content, and help shape the future of design language."}
                        </p>
                      </div>
                      <button
                        onClick={openJoinModal}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-madar-400 hover:bg-madar-300 text-madar-950 text-sm font-bold rounded-full transition-colors duration-300 shrink-0"
                      >
                        {isAr ? "انضم الآن" : "Join Now"}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}

          {/* Divider */}
          <div className="my-16 border-t border-gray-100" />

          {/* Author / Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-madar-50 rounded-3xl p-8 border border-madar-100"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-madar-600 mb-3">
              {isAr ? "عن هذا المقال" : "ABOUT THIS ARTICLE"}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {isAr
                ? "هذا المقال جزء من سلسلة أبحاث مدار حول لغة التصميم المؤسسي. الآراء الواردة تعكس رؤية منصة مدار لمستقبل التصميم الرقمي — انطلاقاً من الرياض وصولاً للعالم."
                : "This article is part of Madar's research series on institutional design language. The views expressed reflect Madar's vision for the future of digital design — starting from Riyadh and reaching globally."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation between articles */}
      <section className="py-16 bg-madar-50 border-t border-madar-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevArticle && (
              <Link
                href={`/${locale}/insights/${prevArticle.slug}`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-madar-600/5 transition-all duration-500"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 mb-3">
                  <ArrowLeft size={12} />
                  {isAr ? "المقال السابق" : "Previous"}
                </span>
                <p className="text-base font-bold text-madar-900 group-hover:text-madar-600 transition-colors tracking-tight leading-snug">
                  {isAr ? prevArticle.titleAr : prevArticle.titleEn}
                </p>
              </Link>
            )}
            {nextArticle && (
              <Link
                href={`/${locale}/insights/${nextArticle.slug}`}
                className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-madar-600/5 transition-all duration-500 ${!prevArticle ? "sm:col-start-2" : ""}`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center justify-end gap-1.5 mb-3">
                  {isAr ? "المقال التالي" : "Next"}
                  <ArrowRight size={12} />
                </span>
                <p className="text-base font-bold text-madar-900 group-hover:text-madar-600 transition-colors tracking-tight leading-snug text-right">
                  {isAr ? nextArticle.titleAr : nextArticle.titleEn}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
