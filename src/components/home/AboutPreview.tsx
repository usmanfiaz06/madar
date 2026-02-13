"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Paintbrush, Building2, Landmark, Users } from "lucide-react";

const audienceIcons = [Paintbrush, Landmark, Building2, Users];

export function AboutPreview({ locale }: { locale: string }) {
  const t = useTranslations("home");

  const audiences = [
    { title: t("audience1Title"), desc: t("audience1Desc") },
    { title: t("audience2Title"), desc: t("audience2Desc") },
    { title: t("audience3Title"), desc: t("audience3Desc") },
    { title: t("audience4Title"), desc: t("audience4Desc") },
  ];

  return (
    <>
      {/* What is Madar + Conversation Partner */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-madar-500 mb-5">
                {locale === "ar" ? "من نحن" : "About"}
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em] leading-[1.1]">
                {t("aboutTitle")}
              </h2>
              <p className="mt-7 text-[17px] text-[#6e6e73] leading-[1.65]">
                {t("aboutDescription")}
              </p>
              <div className="mt-10">
                <Button href={`/${locale}/about`} variant="ghost" className="text-madar-600 font-medium text-[15px] px-0 hover:bg-transparent hover:text-madar-700">
                  {t("aboutCta")} &rarr;
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-[#f5f5f7] rounded-[28px] p-10 lg:p-12"
            >
              <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-5">
                {t("conversationTitle")}
              </h3>
              <p className="text-[16px] text-[#6e6e73] leading-[1.7]">
                {t("conversationDescription")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is Madar For */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-[-0.02em]">
              {t("audienceTitle")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a, i) => {
              const Icon = audienceIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-[20px] p-7 hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-all duration-500"
                >
                  <div className="w-11 h-11 bg-madar-50 rounded-[12px] flex items-center justify-center mb-5">
                    <Icon className="text-madar-600" size={20} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{a.title}</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6]">{a.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
