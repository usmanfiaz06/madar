"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function AboutPreview({ locale }: { locale: string }) {
  const t = useTranslations("home");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title={t("aboutTitle")} />
            <p className="text-gray-600 leading-relaxed text-lg">
              {t("aboutDescription")}
            </p>
            <div className="mt-8">
              <Button href={`/${locale}/about`} variant="secondary">
                {t("aboutCta")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative orbital graphic */}
            <div className="aspect-square max-w-md mx-auto relative">
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                <circle cx="200" cy="200" r="160" stroke="#2A7D5B" strokeWidth="3" opacity="0.2" />
                <circle cx="200" cy="200" r="120" stroke="#2A7D5B" strokeWidth="6" opacity="0.4" />
                <circle cx="200" cy="200" r="80" fill="#EEFAF3" />
                <circle cx="200" cy="200" r="60" fill="#D5F0E2" />
                <circle cx="200" cy="200" r="30" fill="#2A7D5B" />
                <circle cx="310" cy="90" r="10" fill="#C4A35A" />
                <circle cx="320" cy="200" r="6" fill="#2A7D5B" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
