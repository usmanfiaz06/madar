"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export function JoinCommunity({ locale }: { locale: string }) {
  const t = useTranslations("home");
  const isAr = locale === "ar";
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const roles = [
    { value: "designer", label: t("joinRoleDesigner") },
    { value: "government", label: t("joinRoleGovernment") },
    { value: "institution", label: t("joinRoleInstitution") },
    { value: "academic", label: t("joinRoleAcademic") },
    { value: "other", label: t("joinRoleOther") },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/hello@madar.sa", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const role = formData.get("role") as string;
      const message = formData.get("message") as string;
      const subject = encodeURIComponent("Join Madar Community");
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nRole: ${role}\nMessage: ${message}`
      );
      window.location.href = `mailto:hello@madar.sa?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="join-community" className="relative py-32 bg-[#050505] scroll-mt-20 overflow-hidden">
      {/* Orbital background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="absolute w-[500px] h-[500px] animate-orbit-slow" style={{ animationDuration: "70s" }}>
          <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
            <circle cx="250" cy="250" r="240" stroke="rgba(42,125,91,0.1)" strokeWidth="0.5" />
            <circle cx="490" cy="250" r="3" fill="rgba(42,125,91,0.3)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-white tracking-[-0.02em] leading-[1.1]">
              {t("joinTitle")}
            </h2>
            <p className="mt-7 text-[17px] text-white/45 leading-[1.7]">
              {t("joinDescription")}
            </p>

            <div className="mt-12 space-y-4">
              {[
                isAr ? "مصممون ومبدعون" : "Designers & Creatives",
                isAr ? "حكومات ومؤسسات" : "Governments & Institutions",
                isAr ? "أكاديميون وباحثون" : "Academics & Researchers",
                isAr ? "مؤتمرات ومجتمعات" : "Conferences & Communities",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50">
                  <CheckCircle size={16} className="text-madar-400 shrink-0" />
                  <span className="text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-[28px] p-10 text-center">
                <div className="w-14 h-14 bg-madar-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-madar-400" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {t("joinSuccessTitle")}
                </h3>
                <p className="text-white/45 leading-relaxed">
                  {t("joinSuccessMessage")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.03] border border-white/[0.06] rounded-[28px] p-8 sm:p-10 space-y-5"
              >
                <input type="hidden" name="_subject" value="New Madar Community Member" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="block text-[13px] font-medium text-white/50 mb-2">
                    {t("joinNameLabel")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-[14px] text-white text-[15px] placeholder-white/25 focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all"
                    placeholder={isAr ? "اسمك الكامل" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-white/50 mb-2">
                    {t("joinEmailLabel")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-[14px] text-white text-[15px] placeholder-white/25 focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all"
                    placeholder={isAr ? "بريدك الإلكتروني" : "your@email.com"}
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-white/50 mb-2">
                    {t("joinRoleLabel")}
                  </label>
                  <select
                    name="role"
                    required
                    className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-[14px] text-white text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-[#1a1a1a]">{isAr ? "اختر..." : "Select..."}</option>
                    {roles.map((role) => (
                      <option key={role.value} value={role.value} className="bg-[#1a1a1a]">
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-white/50 mb-2">
                    {t("joinMessageLabel")}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-[14px] text-white text-[15px] placeholder-white/25 focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all resize-none"
                    placeholder={isAr ? "أخبرنا عن اهتمامك..." : "Tell us about your interest..."}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-full hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.06)] disabled:opacity-60 disabled:cursor-not-allowed text-[15px]"
                >
                  {submitting
                    ? (isAr ? "جاري الإرسال..." : "Submitting...")
                    : t("joinSubmitCta")}
                  {!submitting && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
