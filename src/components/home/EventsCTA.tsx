"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar, MapPin, Users } from "lucide-react";

export function EventsCTA({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  return (
    <section className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-madar-500 mb-5">
            {isAr ? "الفعاليات" : "Events"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em]">
            {t("eventsTitle")}
          </h2>
          <p className="mt-5 text-[17px] text-[#6e6e73] leading-[1.65] max-w-2xl">
            {t("eventsDescription")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[28px] p-8 sm:p-10 lg:p-12 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f5f5f7] text-[#86868b] text-xs font-semibold rounded-full uppercase tracking-wider mb-5">
                {isAr ? "فعالية سابقة" : "Past Event"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
                {isAr
                  ? "طاولة مستديرة حول لغة التصميم الرقمي للرياض"
                  : "Roundtable around Digital Design Language of Riyadh"}
              </h3>
              <p className="text-[16px] text-[#6e6e73] leading-[1.7] mb-6">
                {isAr
                  ? "جمع أكثر من ٣٠ قائداً من المصممين والمبدعين وفرق الحكومة الرقمية والمؤسسات لمناقشة مستقبل لغة التصميم الرقمي في الرياض."
                  : "Bringing together 30+ leaders from designers, creatives, government digital teams, and institutions to discuss the future of digital design language in Riyadh."}
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
            <Button href={`/${locale}/events`} variant="outline" className="shrink-0 border-gray-200 text-[#1d1d1f] hover:bg-[#f5f5f7] text-[14px]">
              {t("eventsCta")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
