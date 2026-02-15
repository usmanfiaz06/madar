"use client";

import { useState, useEffect, useCallback } from "react";
import { X, CheckCircle, ArrowRight, Linkedin } from "lucide-react";

export function openJoinModal() {
  document.dispatchEvent(new CustomEvent("open-join-modal"));
}

export function JoinCommunityModal({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const isAr = locale === "ar";

  const close = useCallback(() => {
    setOpen(false);
    // Reset form state after close animation
    setTimeout(() => setSubmitted(false), 300);
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    document.addEventListener("open-join-modal", handler);
    return () => document.removeEventListener("open-join-modal", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  // Prevent body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch("https://formsubmit.co/ajax/hello@madar.cx", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const role = formData.get("role") as string;
      const linkedin = formData.get("linkedin") as string;
      const message = formData.get("message") as string;
      const subject = encodeURIComponent("Join Madar Community");
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nLinkedIn: ${linkedin}\nRole: ${role}\nMessage: ${message}`
      );
      window.location.href = `mailto:hello@madar.cx?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  const roles = [
    { value: "designer", label: isAr ? "مصمم / مبدع" : "Designer / Creative" },
    { value: "government", label: isAr ? "حكومة / قطاع عام" : "Government / Public Sector" },
    { value: "institution", label: isAr ? "مؤسسة / منظمة" : "Institution / Organization" },
    { value: "academic", label: isAr ? "أكاديمي / باحث" : "Academic / Researcher" },
    { value: "other", label: isAr ? "أخرى" : "Other" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-madar-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white transition-colors rounded-full hover:bg-white/10"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-madar-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-madar-300" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {isAr ? "مرحباً بك في مدار!" : "Welcome to Madar!"}
            </h3>
            <p className="text-madar-200/70 leading-relaxed mb-6">
              {isAr
                ? "شكراً لانضمامك لمجتمعنا. سنتواصل معك قريباً."
                : "Thank you for joining our community. We'll be in touch soon."}
            </p>
            <button
              onClick={close}
              className="px-6 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              {isAr ? "إغلاق" : "Close"}
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2 pr-8">
              {isAr ? "انضم لمجتمع مدار" : "Join the Madar Community"}
            </h2>
            <p className="text-sm text-madar-200/60 leading-relaxed mb-6">
              {isAr
                ? "كن جزءاً من الحوار الذي يشكل مستقبل لغة التصميم."
                : "Be part of the conversation shaping the future of design language."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="New Madar Community Member" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="block text-sm font-semibold text-madar-200 mb-2">
                  {isAr ? "الاسم الكامل" : "Full Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] placeholder-white/30 focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all"
                  placeholder={isAr ? "اسمك الكامل" : "Your full name"}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-madar-200 mb-2">
                  {isAr ? "البريد الإلكتروني" : "Email Address"}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] placeholder-white/30 focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all"
                  placeholder={isAr ? "بريدك الإلكتروني" : "your@email.com"}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-madar-200 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Linkedin size={14} className="text-madar-300" />
                    {isAr ? "رابط لينكدإن" : "LinkedIn Profile"}
                  </span>
                </label>
                <input
                  type="url"
                  name="linkedin"
                  className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] placeholder-white/30 focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-madar-200 mb-2">
                  {isAr ? "أنا..." : "I am a..."}
                </label>
                <select
                  name="role"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all"
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
                <label className="block text-sm font-semibold text-madar-200 mb-2">
                  {isAr ? "ما الذي يهمك في مدار؟ (اختياري)" : "What interests you about Madar? (Optional)"}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white text-[15px] placeholder-white/30 focus:ring-2 focus:ring-madar-300/50 focus:border-transparent focus:bg-white/15 transition-all resize-none"
                  placeholder={isAr ? "أخبرنا عن اهتمامك..." : "Tell us about your interest..."}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-madar-800 font-bold rounded-full hover:bg-madar-50 transition-all shadow-lg shadow-black/10 disabled:opacity-60 disabled:cursor-not-allowed text-[15px] mt-1"
              >
                {submitting
                  ? isAr ? "جاري الإرسال..." : "Submitting..."
                  : isAr ? "انضم للمجتمع" : "Join the Community"}
                {!submitting && <ArrowRight size={16} />}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
