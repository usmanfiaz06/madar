import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { InsightsClient } from "@/components/pages/InsightsClient";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <InsightsClient />;
}
