import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JoinCommunityModal } from "@/components/ui/JoinCommunityModal";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://usmanfiaz06.github.io/madar"),
  title: {
    default: "Madar — The Digital Design Language of Riyadh",
    template: "%s | Madar",
  },
  description:
    "A Kingdom Lens on How States Communicate Trust, Power, and Legitimacy Through Software. Research and advisory initiative based in Riyadh.",
  keywords: [
    "Madar",
    "digital design",
    "Riyadh",
    "Saudi Arabia",
    "governance",
    "institutional design",
    "design language",
  ],
  openGraph: {
    type: "website",
    siteName: "Madar",
    title: "Madar — The Digital Design Language of Riyadh",
    description:
      "How States Communicate Trust, Power, and Legitimacy Through Software. A research and community initiative starting from Riyadh.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madar — The Digital Design Language of Riyadh",
    description:
      "How States Communicate Trust, Power, and Legitimacy Through Software.",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Arabic:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', 'Noto Sans Arabic', system-ui, sans-serif" }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main className="pt-16 lg:pt-20">{children}</main>
          <Footer locale={locale} />
          <JoinCommunityModal locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
