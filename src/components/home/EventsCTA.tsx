"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar } from "lucide-react";

export function EventsCTA({ locale }: { locale: string }) {
  const t = useTranslations("home");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-madar-800 to-madar-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-madar-600/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-madar-600/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="w-16 h-16 bg-madar-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-madar-300" size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("eventsTitle")}
            </h2>
            <p className="text-madar-200 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              {t("eventsDescription")}
            </p>
            <Button
              href={`/${locale}/events`}
              variant="primary"
              size="lg"
              className="bg-white text-madar-800 hover:bg-madar-50"
            >
              {t("eventsCta")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
