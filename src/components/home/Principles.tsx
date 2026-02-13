"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Eye, Heart, Languages } from "lucide-react";

const icons = [Shield, Eye, Heart, Languages];

export function Principles() {
  const t = useTranslations("home");

  const principles = [
    { title: t("principle1Title"), desc: t("principle1Desc") },
    { title: t("principle2Title"), desc: t("principle2Desc") },
    { title: t("principle3Title"), desc: t("principle3Desc") },
    { title: t("principle4Title"), desc: t("principle4Desc") },
  ];

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Subtle orbital background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="absolute w-[700px] h-[700px] animate-orbit-slow" style={{ animationDuration: "80s" }}>
          <svg viewBox="0 0 700 700" fill="none" className="w-full h-full">
            <circle cx="350" cy="350" r="340" stroke="rgba(42,125,91,0.08)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.02em]">
            {t("principlesTitle")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((principle, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/[0.03] border border-white/[0.06] rounded-[20px] p-8 text-center hover:bg-white/[0.05] hover:border-white/[0.10] transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-madar-500/10 rounded-[14px] flex items-center justify-center mx-auto mb-6 group-hover:bg-madar-500/15 transition-colors">
                  <Icon className="text-madar-400" size={22} />
                </div>
                <h3 className="text-white font-medium text-[17px] mb-3 tracking-tight">{principle.title}</h3>
                <p className="text-white/40 text-[14px] leading-[1.65]">{principle.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
