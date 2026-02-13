"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-madar-50 rounded-2xl p-12 text-center">
                  <CheckCircle className="mx-auto text-madar-500 mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-madar-900 mb-2">
                    {locale === "ar" ? "شكراً لك!" : "Thank you!"}
                  </h3>
                  <p className="text-gray-600">
                    {locale === "ar" ? "سنتواصل معك قريباً." : "We'll be in touch soon."}
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New Contact from Madar Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("nameLabel")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-madar-500 focus:border-transparent transition-all bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t("emailLabel")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-madar-500 focus:border-transparent transition-all bg-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("organizationLabel")}
                    </label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-madar-500 focus:border-transparent transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("messageLabel")}
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-madar-500 focus:border-transparent transition-all resize-none bg-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-madar-600 rounded-full hover:bg-madar-700 transition-colors shadow-sm disabled:opacity-70"
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <SectionHeading title={t("infoTitle")} />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-madar-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-madar-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                    </p>
                    <p className="text-madar-800 font-medium">{t("emailInfo")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-madar-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-madar-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {locale === "ar" ? "الموقع" : "Location"}
                    </p>
                    <p className="text-madar-800 font-medium">{t("locationInfo")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-madar-50 rounded-2xl">
                <p className="text-madar-800 font-medium text-lg leading-relaxed italic">
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
