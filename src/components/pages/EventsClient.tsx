"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, MapPin, Users, Bell } from "lucide-react";

export function EventsClient() {
  const t = useTranslations("events");
  const { locale } = useParams();
  const isAr = locale === "ar";

  return (
    <>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-madar-900 tracking-tight">
              {t("title")}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("upcomingTitle")} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-madar-50 border border-madar-100 rounded-2xl p-8 sm:p-12 text-center"
          >
            <Bell className="mx-auto text-madar-400 mb-4" size={32} />
            <p className="text-gray-600 text-lg mb-6">{t("noUpcoming")}</p>
            <Button href="#join-community" variant="primary">{t("subscribeCta")}</Button>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t("pastTitle")} />
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-madar-900 mb-3">
                      {isAr
                        ? "طاولة مستديرة حول لغة التصميم الرقمي للرياض"
                        : "Roundtable around Digital Design Language of Riyadh"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isAr
                        ? "جمع أكثر من ٣٠ قائداً من المصممين والمبدعين وفرق الحكومة الرقمية والمؤسسات لمناقشة مستقبل لغة التصميم الرقمي في الرياض والدور الذي يلعبه التصميم في بناء الثقة المؤسسية."
                        : "Bringing together 30+ leaders from designers, creatives, government digital teams, and institutions to discuss the future of digital design language in Riyadh and the role design plays in building institutional trust."}
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
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
