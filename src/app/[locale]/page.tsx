import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Principles } from "@/components/home/Principles";
import { FeaturedResources } from "@/components/home/FeaturedResources";
import { EventsCTA } from "@/components/home/EventsCTA";
import { LatestInsights } from "@/components/home/LatestInsights";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <AboutPreview locale={locale} />
      <Principles />
      <FeaturedResources locale={locale} />
      <EventsCTA locale={locale} />
      <LatestInsights locale={locale} />
    </>
  );
}
