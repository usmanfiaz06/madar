"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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

      {/* Articles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 sm:p-12 bg-madar-50/30 border-madar-100 group cursor-pointer">
              <span className="text-xs font-semibold uppercase tracking-wider text-madar-500">
                {t("latestTitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-madar-900 mt-3 mb-4 group-hover:text-madar-600 transition-colors">
                {isAr ? articles[0].titleAr : articles[0].titleEn}
                <ArrowUpRight size={24} className="inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                {isAr ? articles[0].excerptAr : articles[0].excerptEn}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                <span>{isAr ? articles[0].dateAr : articles[0].dateEn}</span>
                <span>{isAr ? articles[0].categoryAr : articles[0].categoryEn}</span>
                <span>{isAr ? articles[0].readTimeAr : articles[0].readTimeEn}</span>
              </div>
            </Card>
          </motion.div>

          {/* Article Grid */}
          <SectionHeading title={t("allInsights")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(1).map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full group cursor-pointer">
                  <span className="text-xs text-madar-500 font-medium uppercase tracking-wider">
                    {isAr ? a.categoryAr : a.categoryEn}
                  </span>
                  <h3 className="text-lg font-semibold text-madar-900 mt-2 mb-3 group-hover:text-madar-600 transition-colors">
                    {isAr ? a.titleAr : a.titleEn}
                    <ArrowUpRight size={16} className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {isAr ? a.excerptAr : a.excerptEn}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
                    <span>{isAr ? a.dateAr : a.dateEn}</span>
                    <span>{isAr ? a.readTimeAr : a.readTimeEn}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
