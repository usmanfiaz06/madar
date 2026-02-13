import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { EventsClient } from "@/components/pages/EventsClient";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <EventsClient />;
}
