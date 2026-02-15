import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { articles } from "@/data/articles";
import { InsightDetailClient } from "@/components/pages/InsightDetailClient";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const article of articles) {
      params.push({ locale, slug: article.slug });
    }
  }
  return params;
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <InsightDetailClient slug={slug} />;
}
