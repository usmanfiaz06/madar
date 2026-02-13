"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar, MapPin, Users } from "lucide-react";

export function EventsCTA({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-madar-900 tracking-tight">
            {t("eventsTitle")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            {t("eventsDescription")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-madar-50 text-madar-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                {isAr ? "فعالية سابقة" : "Past Event"}
              </span>
              <h3 className="text-2xl font-bold text-madar-900 mb-3">
                {isAr
                  ? "طاولة مستديرة حول لغة التصميم الرقمي للرياض"
                  : "Roundtable around Digital Design Language of Riyadh"}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isAr
                  ? "جمع أكثر من ٣٠ قائداً من المصممين والمبدعين وفرق الحكومة الرقمية والمؤسسات لمناقشة مستقبل لغة التصميم الرقمي في الرياض."
                  : "Bringing together 30+ leaders from designers, creatives, government digital teams, and institutions to discuss the future of digital design language in Riyadh."}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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
            <Button href={`/madar/${locale}/events`} variant="outline" className="shrink-0">
              {t("eventsCta")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
