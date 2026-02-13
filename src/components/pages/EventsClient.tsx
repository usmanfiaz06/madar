"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Bell } from "lucide-react";

export function EventsClient() {
  const t = useTranslations("events");
  const { locale } = useParams();
  const isAr = locale === "ar";

  return (
    <>
      {/* Hero */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-madar-50 border border-madar-200 rounded-full text-madar-600 text-xs font-semibold uppercase tracking-wider mb-8">
              <Calendar size={14} />
              {isAr ? "الفعاليات" : "Events"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-madar-900 tracking-[-0.03em] leading-[1.08]">
              {t("title")}
            </h1>
            <p className="mt-7 text-lg text-gray-500 leading-[1.7]">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-madar-900 tracking-[-0.03em] mb-10">
            {t("upcomingTitle")}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-gray-100"
          >
            <div className="w-14 h-14 bg-madar-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bell className="text-madar-500" size={24} />
            </div>
            <p className="text-[15px] text-gray-500 mb-8">{t("noUpcoming")}</p>
            <a
              href="#join-community"
              className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-bold text-white bg-madar-600 rounded-full hover:bg-madar-700 transition-colors shadow-lg shadow-madar-600/20"
            >
              {t("subscribeCta")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-madar-900 tracking-[-0.03em] mb-10">
            {t("pastTitle")}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-100 hover:shadow-xl hover:shadow-madar-600/5 transition-all duration-500">
              {/* Event badges */}
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
              <p className="text-base text-gray-500 leading-[1.7] mb-8 max-w-3xl">
                {isAr
                  ? "جمع أكثر من ٣٠ قائداً من المصممين والمبدعين وفرق الحكومة الرقمية والمؤسسات لمناقشة مستقبل لغة التصميم الرقمي في الرياض والدور الذي يلعبه التصميم في بناء الثقة المؤسسية."
                  : "Bringing together 30+ leaders from designers, creatives, government digital teams, and institutions to discuss the future of digital design language in Riyadh and the role design plays in building institutional trust."}
              </p>

              {/* Event meta */}
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-madar-50 rounded-full text-sm text-madar-700 font-medium border border-madar-100">
                  <Calendar size={15} className="text-madar-500" />
                  {isAr ? "يناير ٢٠٢٦" : "January 2026"}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-madar-50 rounded-full text-sm text-madar-700 font-medium border border-madar-100">
                  <MapPin size={15} className="text-madar-500" />
                  {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-madar-50 rounded-full text-sm text-madar-700 font-medium border border-madar-100">
                  <Users size={15} className="text-madar-500" />
                  {isAr ? "+٣٠ مشاركاً" : "30+ Participants"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
