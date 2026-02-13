"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export function EventsCTA({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  return (
    <section className="py-24 lg:py-32 bg-madar-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-madar-200 rounded-full text-madar-600 text-xs font-semibold uppercase tracking-wider mb-6">
            <Calendar size={14} />
            {isAr ? "الفعاليات" : "Events"}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-madar-900 tracking-[-0.03em]">
            {t("eventsTitle")}
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-[1.65] max-w-2xl">
            {t("eventsDescription")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-100 hover:shadow-xl hover:shadow-madar-600/5 transition-all duration-500"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              {/* Event badge */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-madar-50 text-madar-700 text-xs font-bold rounded-full uppercase tracking-wider border border-madar-100">
                  {isAr ? "فعالية سابقة" : "Past Event"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-madar-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {isAr ? "مميّز" : "Featured"}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-madar-900 mb-4 tracking-tight leading-tight">
                {isAr
                  ? "طاولة مستديرة حول لغة التصميم الرقمي للرياض"
                  : "Roundtable around Digital Design Language of Riyadh"}
              </h3>
              <p className="text-base text-gray-500 leading-[1.7] mb-8">
                {isAr
                  ? "جمع أكثر من ٣٠ قائداً من المصممين والمبدعين وفرق الحكومة الرقمية والمؤسسات لمناقشة مستقبل لغة التصميم الرقمي في الرياض."
                  : "Bringing together 30+ leaders from designers, creatives, government digital teams, and institutions to discuss the future of digital design language in Riyadh."}
              </p>

              {/* Event meta with green accents */}
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-madar-50 rounded-full text-sm text-madar-700 font-medium border border-madar-100">
                  <Calendar size={15} className="text-madar-500" />
                  {isAr ? "يناير ٢٠٢٦" : "January 2026"}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-madar-50 rounded-full text-sm text-madar-700 font-medium border border-madar-100">
                  <MapPin size={15} className="text-madar-500" />
                  {isAr ? "الرياض" : "Riyadh, Saudi Arabia"}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-madar-50 rounded-full text-sm text-madar-700 font-medium border border-madar-100">
                  <Users size={15} className="text-madar-500" />
                  {isAr ? "+٣٠ مشاركاً" : "30+ Participants"}
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <Button
                href={`/${locale}/events`}
                variant="primary"
                className="bg-madar-600 hover:bg-madar-700 text-white font-bold text-[15px] px-7 py-3.5 shadow-lg shadow-madar-600/20 gap-2"
              >
                {t("eventsCta")}
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
