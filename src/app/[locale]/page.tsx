import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Principles } from "@/components/home/Principles";
import { FeaturedResources } from "@/components/home/FeaturedResources";
import { EventsCTA } from "@/components/home/EventsCTA";
import { LatestInsights } from "@/components/home/LatestInsights";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

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
