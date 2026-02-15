"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle, MessageSquare, Linkedin } from "lucide-react";

export function ContactClient() {
  const t = useTranslations("contact");
  const { locale } = useParams();
  const isAr = locale === "ar";
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
      const linkedin = formData.get("linkedin") as string;
      const message = formData.get("message") as string;
      const subject = encodeURIComponent("Contact from Madar Website");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nLinkedIn: ${linkedin}\nMessage: ${message}`);
      window.location.href = `mailto:hello@madar.sa?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-madar-50 border border-madar-200 rounded-full text-madar-600 text-xs font-semibold uppercase tracking-wider mb-8">
              <MessageSquare size={14} />
              {isAr ? "تواصل" : "Contact"}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-madar-900 tracking-[-0.03em] leading-[1.08]">
              {t("title")}
            </h1>
            <p className="mt-7 text-lg text-gray-500 leading-[1.7]">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-madar-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-3xl p-14 text-center border border-gray-100">
                  <div className="w-16 h-16 bg-madar-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-madar-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-madar-900 mb-3">
                    {isAr ? "شكراً لك!" : "Thank you!"}
                  </h3>
                  <p className="text-gray-500">
                    {isAr ? "سنتواصل معك قريباً." : "We'll be in touch soon."}
                  </p>
                </div>
              ) : (
                <form className="bg-white rounded-3xl p-8 sm:p-10 space-y-6 border border-gray-100" onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New Contact from Madar Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-madar-900 mb-2.5">
                        {t("nameLabel")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full px-5 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-madar-900 mb-2.5">
                        {t("emailLabel")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-5 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all bg-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-madar-900 mb-2.5">
                        {t("organizationLabel")}
                      </label>
                      <input
                        type="text"
                        name="organization"
                        className="w-full px-5 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-madar-900 mb-2.5">
                        <span className="flex items-center gap-1.5">
                          <Linkedin size={14} className="text-madar-500" />
                          {isAr ? "رابط لينكدإن" : "LinkedIn Profile"}
                        </span>
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        placeholder={isAr ? "https://linkedin.com/in/..." : "https://linkedin.com/in/..."}
                        className="w-full px-5 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all bg-white placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-madar-900 mb-2.5">
                      {t("messageLabel")}
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      className="w-full px-5 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:ring-2 focus:ring-madar-400/50 focus:border-transparent transition-all resize-none bg-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-bold text-white bg-madar-600 rounded-full hover:bg-madar-700 transition-colors disabled:opacity-60 shadow-lg shadow-madar-600/20"
                  >
                    {submitting
                      ? (isAr ? "جاري الإرسال..." : "Sending...")
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
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100">
                <h2 className="text-2xl font-extrabold text-madar-900 tracking-tight mb-8">
                  {t("infoTitle")}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-madar-100 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-madar-600" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {isAr ? "البريد الإلكتروني" : "Email"}
                      </p>
                      <p className="text-madar-900 font-medium text-[15px]">{t("emailInfo")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-madar-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-madar-600" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {isAr ? "الموقع" : "Location"}
                      </p>
                      <p className="text-madar-900 font-medium text-[15px]">{t("locationInfo")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-madar-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-madar-700/50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/4" />
                <p className="relative text-white font-extrabold text-xl leading-relaxed italic tracking-tight">
                  {isAr
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
