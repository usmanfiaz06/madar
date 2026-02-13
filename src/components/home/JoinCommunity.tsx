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
      // Fallback: open mailto
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
    <section id="join-community" className="py-24 bg-madar-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {t("joinTitle")}
            </h2>
            <p className="mt-6 text-lg text-madar-200 leading-relaxed">
              {t("joinDescription")}
            </p>

            <div className="mt-10 space-y-4">
              {[
                isAr ? "مصممون ومبدعون" : "Designers & Creatives",
                isAr ? "حكومات ومؤسسات" : "Governments & Institutions",
                isAr ? "أكاديميون وباحثون" : "Academics & Researchers",
                isAr ? "مؤتمرات ومجتمعات" : "Conferences & Communities",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-madar-200">
                  <CheckCircle size={18} className="text-madar-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-madar-800/60 border border-madar-700/30 rounded-3xl p-10 text-center">
                <div className="w-16 h-16 bg-madar-600/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-madar-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t("joinSuccessTitle")}
                </h3>
                <p className="text-madar-200 leading-relaxed">
                  {t("joinSuccessMessage")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-madar-800/60 border border-madar-700/30 rounded-3xl p-8 sm:p-10 space-y-5"
              >
                <input type="hidden" name="_subject" value="New Madar Community Member" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="block text-sm font-medium text-madar-200 mb-2">
                    {t("joinNameLabel")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-madar-900/50 border border-madar-700/50 rounded-xl text-white text-sm placeholder-madar-400 focus:ring-2 focus:ring-madar-400 focus:border-transparent transition-all"
                    placeholder={isAr ? "اسمك الكامل" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-madar-200 mb-2">
                    {t("joinEmailLabel")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-madar-900/50 border border-madar-700/50 rounded-xl text-white text-sm placeholder-madar-400 focus:ring-2 focus:ring-madar-400 focus:border-transparent transition-all"
                    placeholder={isAr ? "بريدك الإلكتروني" : "your@email.com"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-madar-200 mb-2">
                    {t("joinRoleLabel")}
                  </label>
                  <select
                    name="role"
                    required
                    className="w-full px-4 py-3 bg-madar-900/50 border border-madar-700/50 rounded-xl text-white text-sm focus:ring-2 focus:ring-madar-400 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-madar-900">{isAr ? "اختر..." : "Select..."}</option>
                    {roles.map((role) => (
                      <option key={role.value} value={role.value} className="bg-madar-900">
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-madar-200 mb-2">
                    {t("joinMessageLabel")}
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 bg-madar-900/50 border border-madar-700/50 rounded-xl text-white text-sm placeholder-madar-400 focus:ring-2 focus:ring-madar-400 focus:border-transparent transition-all resize-none"
                    placeholder={isAr ? "أخبرنا عن اهتمامك..." : "Tell us about your interest..."}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-madar-900 font-semibold rounded-full hover:bg-madar-50 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting
                    ? (isAr ? "جاري الإرسال..." : "Submitting...")
                    : t("joinSubmitCta")}
                  {!submitting && <ArrowRight size={18} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
