"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle } from "lucide-react";

export function ContactClient() {
  const t = useTranslations("contact");
  const { locale } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      const message = formData.get("message") as string;
      const subject = encodeURIComponent("Contact from Madar Website");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      window.location.href = `mailto:hello@madar.sa?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="py-28 lg:py-36 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-madar-500 mb-5">
              {locale === "ar" ? "تواصل" : "Contact"}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-[-0.02em] leading-[1.08]">
              {t("title")}
            </h1>
            <p className="mt-7 text-[17px] sm:text-xl text-[#6e6e73] leading-[1.65]">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-[#f5f5f7] rounded-[28px] p-14 text-center">
                  <CheckCircle className="mx-auto text-madar-500 mb-5" size={40} />
                  <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">
                    {locale === "ar" ? "شكراً لك!" : "Thank you!"}
                  </h3>
                  <p className="text-[16px] text-[#6e6e73]">
                    {locale === "ar" ? "سنتواصل معك قريباً." : "We'll be in touch soon."}
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New Contact from Madar Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[13px] font-medium text-[#6e6e73] mb-2.5">
                        {t("nameLabel")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-[14px] text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#6e6e73] mb-2.5">
                        {t("emailLabel")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-[14px] text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all bg-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#6e6e73] mb-2.5">
                      {t("organizationLabel")}
                    </label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-[14px] text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#6e6e73] mb-2.5">
                      {t("messageLabel")}
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-[14px] text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all resize-none bg-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-[14px] font-semibold text-white bg-[#1d1d1f] rounded-full hover:bg-[#333] transition-colors disabled:opacity-60"
                  >
                    {submitting
                      ? (locale === "ar" ? "جاري الإرسال..." : "Sending...")
                      : t("submitCta")}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-8">
                {t("infoTitle")}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f7] rounded-[12px] flex items-center justify-center shrink-0">
                    <Mail className="text-madar-600" size={18} />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#86868b] mb-1">
                      {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                    </p>
                    <p className="text-[#1d1d1f] font-medium text-[15px]">{t("emailInfo")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f5f5f7] rounded-[12px] flex items-center justify-center shrink-0">
                    <MapPin className="text-madar-600" size={18} />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#86868b] mb-1">
                      {locale === "ar" ? "الموقع" : "Location"}
                    </p>
                    <p className="text-[#1d1d1f] font-medium text-[15px]">{t("locationInfo")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-14 p-8 bg-[#f5f5f7] rounded-[20px]">
                <p className="text-[#1d1d1f] font-semibold text-xl leading-relaxed italic tracking-tight">
                  {locale === "ar"
                    ? "\"التصميم هو لغة الثقة الجديدة.\""
                    : "\"Design is the new language of trust.\""}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
