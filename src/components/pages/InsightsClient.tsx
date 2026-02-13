"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    titleEn: "Why Design is a Statecraft Problem",
    titleAr: "لماذا التصميم مسألة حوكمة",
    excerptEn: "Design is no longer downstream of policy. It is where policy becomes real. The interface is not an implementation detail; it is the place where governance is interpreted. This is not a design team problem. It is a statecraft problem.",
    excerptAr: "لم يعد التصميم تابعاً للسياسة. إنه حيث تصبح السياسة واقعاً. الواجهة ليست تفصيلاً تنفيذياً؛ بل هي المكان الذي تُفسَّر فيه الحوكمة. هذه ليست مشكلة فريق تصميم. إنها مسألة حوكمة.",
    dateEn: "February 3, 2026",
    dateAr: "٣ فبراير ٢٠٢٦",
    categoryEn: "Governance",
    categoryAr: "الحوكمة",
    readTimeEn: "8 min read",
    readTimeAr: "٨ دقائق للقراءة",
  },
  {
    titleEn: "Designing at Civilizational Scale",
    titleAr: "التصميم على المستوى الحضاري",
    excerptEn: "Saudi Arabia is not modernizing from a position of institutional collapse. It is undergoing deliberate, centrally articulated transformation while retaining deep sources of cultural and historical legitimacy. When transformation is intentional, design becomes a tool of direction, not correction.",
    excerptAr: "المملكة العربية السعودية لا تتحدث من موقع انهيار مؤسسي. إنها تخوض تحولاً متعمداً ومُحكم الصياغة مع الحفاظ على مصادر عميقة من الشرعية الثقافية والتاريخية.",
    dateEn: "February 1, 2026",
    dateAr: "١ فبراير ٢٠٢٦",
    categoryEn: "Design",
    categoryAr: "التصميم",
    readTimeEn: "6 min read",
    readTimeAr: "٦ دقائق للقراءة",
  },
  {
    titleEn: "The Role of Hospitality in Digital Services",
    titleAr: "دور الضيافة في الخدمات الرقمية",
    excerptEn: "Hospitality as institutional behavior means digital services should welcome, guide, and reassure — as a host would treat a guest. This is not merely good UX; it is institutional behavior made legible through interaction.",
    excerptAr: "الضيافة كسلوك مؤسسي تعني أن الخدمات الرقمية يجب أن ترحب وتوجّه وتطمئن — كما يعامل المضيف ضيفه. هذا ليس مجرد تجربة مستخدم جيدة؛ بل سلوك مؤسسي مقروء من خلال التفاعل.",
    dateEn: "January 20, 2026",
    dateAr: "٢٠ يناير ٢٠٢٦",
    categoryEn: "Culture",
    categoryAr: "الثقافة",
    readTimeEn: "5 min read",
    readTimeAr: "٥ دقائق للقراءة",
  },
  {
    titleEn: "Trust Erodes Gradually: Lessons from Digital Friction",
    titleAr: "الثقة تتآكل تدريجياً: دروس من الاحتكاك الرقمي",
    excerptEn: "Trust in digital government does not collapse suddenly. It erodes gradually, through small frictions that accumulate. Re-entering the same information. Downloading a new application for every step. Unclear status updates.",
    excerptAr: "الثقة في الحكومة الرقمية لا تنهار فجأة. تتآكل تدريجياً، من خلال احتكاكات صغيرة تتراكم. إعادة إدخال نفس المعلومات. تنزيل تطبيق جديد لكل خطوة. تحديثات حالة غير واضحة.",
    dateEn: "January 15, 2026",
    dateAr: "١٥ يناير ٢٠٢٦",
    categoryEn: "Trust",
    categoryAr: "الثقة",
    readTimeEn: "7 min read",
    readTimeAr: "٧ دقائق للقراءة",
  },
  {
    titleEn: "Beyond UX: What Institutional Design Language Means",
    titleAr: "ما وراء تجربة المستخدم: ماذا تعني لغة التصميم المؤسسي",
    excerptEn: "Improving 'UX' is insufficient. Optimizing flows without questioning intent simply accelerates the wrong behavior. What is required instead is a shared design language that reflects institutional values consistently.",
    excerptAr: "تحسين 'تجربة المستخدم' غير كافٍ. تحسين المسارات دون مساءلة النية يُسرّع ببساطة السلوك الخاطئ. المطلوب بدلاً من ذلك هو لغة تصميم مشتركة تعكس القيم المؤسسية باتساق.",
    dateEn: "January 10, 2026",
    dateAr: "١٠ يناير ٢٠٢٦",
    categoryEn: "Design",
    categoryAr: "التصميم",
    readTimeEn: "6 min read",
    readTimeAr: "٦ دقائق للقراءة",
  },
];

export function InsightsClient() {
  const t = useTranslations("insights");
  const { locale } = useParams();
  const isAr = locale === "ar";

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
              {isAr ? "رؤى وأفكار" : "Perspectives"}
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

      {/* Articles */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-[#f5f5f7] rounded-[28px] p-8 sm:p-12 lg:p-14 group cursor-pointer hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
              <span className="text-xs font-semibold uppercase tracking-wider text-madar-500">
                {t("latestTitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1d1d1f] mt-4 mb-5 group-hover:text-madar-600 transition-colors tracking-tight">
                {isAr ? articles[0].titleAr : articles[0].titleEn}
                <ArrowUpRight size={24} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-[16px] text-[#6e6e73] leading-[1.7] max-w-3xl">
                {isAr ? articles[0].excerptAr : articles[0].excerptEn}
              </p>
              <div className="mt-7 flex items-center gap-4 text-[13px] text-[#86868b]">
                <span>{isAr ? articles[0].dateAr : articles[0].dateEn}</span>
                <span>{isAr ? articles[0].categoryAr : articles[0].categoryEn}</span>
                <span>{isAr ? articles[0].readTimeAr : articles[0].readTimeEn}</span>
              </div>
            </div>
          </motion.div>

          {/* Article Grid */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-[-0.02em] mb-10">
            {t("allInsights")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {articles.slice(1).map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="h-full bg-[#f5f5f7] rounded-[20px] p-7 group cursor-pointer hover:shadow-[0_4px_30px_rgba(0,0,0,0.06)] transition-all duration-500">
                  <span className="text-xs text-madar-500 font-semibold uppercase tracking-wider">
                    {isAr ? a.categoryAr : a.categoryEn}
                  </span>
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] mt-3 mb-3 group-hover:text-madar-600 transition-colors tracking-tight">
                    {isAr ? a.titleAr : a.titleEn}
                    <ArrowUpRight size={15} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[14px] text-[#6e6e73] leading-[1.65]">
                    {isAr ? a.excerptAr : a.excerptEn}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-[#86868b]">
                    <span>{isAr ? a.dateAr : a.dateEn}</span>
                    <span>{isAr ? a.readTimeAr : a.readTimeEn}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
