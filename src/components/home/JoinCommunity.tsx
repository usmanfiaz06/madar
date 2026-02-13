"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, ArrowRight, Users, Sparkles } from "lucide-react";

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
    <section
      id="join-community"
      className="relative py-24 lg:py-32 bg-madar-700 scroll-mt-20 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-madar-600/40 rounded-full blur-[150px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-madar-800/50 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-madar-500/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-madar-200 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
              <Users size={14} />
              {isAr ? "انضم إلينا" : "Get Involved"}
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-[-0.03em] leading-[1.05]">
              {t("joinTitle")}
            </h2>
            <p className="mt-6 text-lg text-madar-200/70 leading-[1.7]">
              {t("joinDescription")}
            </p>

            <div className="mt-10 space-y-4">
              {[
                isAr ? "مصممون ومبدعون" : "Designers & Creatives",
                isAr ? "حكومات ومؤسسات" : "Governments & Institutions",
                isAr ? "أكاديميون وباحثون" : "Academics & Researchers",
                isAr ? "مؤتمرات ومجتمعات" : "Conferences & Communities",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-madar-400/20 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles size={12} className="text-madar-300" />
                  </div>
                  <span className="text-[15px] text-madar-200/80 font-medium">{item}</span>
                </motion.div>
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
              <div className="bg-white/10 border border-white/15 rounded-3xl p-10 text-center backdrop-blur-sm">
                <div className="w-16 h-16 bg-madar-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-madar-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t("joinSuccessTitle")}
                </h3>
                <p className="text-madar-200/70 leading-relaxed">
                  {t("joinSuccessMessage")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 border border-white/15 rounded-3xl p-8 sm:p-10 space-y-5 backdrop-blur-sm"
              >
                <input type="hidden" name="_subject" value="New Madar Community Member" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="block text-sm font-semibold text-madar-200 mb-2.5">
                    {t("joinNameLabel")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] placeholder-white/30 focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all backdrop-blur-sm"
                    placeholder={isAr ? "اسمك الكامل" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-madar-200 mb-2.5">
                    {t("joinEmailLabel")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] placeholder-white/30 focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all backdrop-blur-sm"
                    placeholder={isAr ? "بريدك الإلكتروني" : "your@email.com"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-madar-200 mb-2.5">
                    {t("joinRoleLabel")}
                  </label>
                  <select
                    name="role"
                    required
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all backdrop-blur-sm"
                  >
                    <option value="" className="bg-madar-800 text-white">
                      {isAr ? "اختر..." : "Select..."}
                    </option>
                    {roles.map((role) => (
                      <option key={role.value} value={role.value} className="bg-madar-800 text-white">
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-madar-200 mb-2.5">
                    {t("joinMessageLabel")}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-5 py-3.5 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] placeholder-white/30 focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all resize-none backdrop-blur-sm"
                    placeholder={isAr ? "أخبرنا عن اهتمامك..." : "Tell us about your interest..."}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-madar-800 font-bold rounded-full hover:bg-madar-50 transition-all shadow-lg shadow-black/10 disabled:opacity-60 disabled:cursor-not-allowed text-[15px] mt-2"
                >
                  {submitting
                    ? isAr
                      ? "جاري الإرسال..."
                      : "Submitting..."
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
