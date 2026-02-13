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
      <section className="py-28 lg:py-36 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-madar-500 mb-5">
              {isAr ? "الفعاليات" : "Events"}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.02em] leading-[1.08]">
              {t("title")}
            </h1>
            <p className="mt-7 text-[17px] sm:text-xl text-[#6e6e73] leading-[1.65]">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-10">
            {t("upcomingTitle")}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f7] rounded-[28px] p-10 sm:p-14 text-center"
          >
            <Bell className="mx-auto text-[#86868b] mb-5" size={28} />
            <p className="text-[16px] text-[#6e6e73] mb-8">{t("noUpcoming")}</p>
            <a
              href="#join-community"
              className="inline-flex items-center justify-center px-7 py-3 text-[14px] font-semibold text-white bg-[#1d1d1f] rounded-full hover:bg-[#333] transition-colors"
            >
              {t("subscribeCta")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-10">
            {t("pastTitle")}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-[28px] p-8 sm:p-10 lg:p-12 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
                {isAr
                  ? "طاولة مستديرة حول لغة التصميم الرقمي للرياض"
                  : "Roundtable around Digital Design Language of Riyadh"}
              </h3>
              <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-6 max-w-3xl">
                {isAr
                  ? "جمع أكثر من ٣٠ قائداً من المصممين والمبدعين وفرق الحكومة الرقمية والمؤسسات لمناقشة مستقبل لغة التصميم الرقمي في الرياض والدور الذي يلعبه التصميم في بناء الثقة المؤسسية."
                  : "Bringing together 30+ leaders from designers, creatives, government digital teams, and institutions to discuss the future of digital design language in Riyadh and the role design plays in building institutional trust."}
              </p>
              <div className="flex flex-wrap gap-5 text-[13px] text-[#86868b]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-madar-500" />
                  {isAr ? "يناير ٢٠٢٦" : "January 2026"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-madar-500" />
                  {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} className="text-madar-500" />
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
