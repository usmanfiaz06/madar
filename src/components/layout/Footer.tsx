import { useTranslations } from "next-intl";
import Link from "next/link";
import { MadarLogo } from "../ui/MadarLogo";

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const links = [
    { label: nav("about"), href: `/${locale}/about` },
    { label: nav("events"), href: `/${locale}/events` },
    { label: nav("resources"), href: `/${locale}/resources` },
    { label: nav("insights"), href: `/${locale}/insights` },
    { label: nav("contact"), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-madar-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MadarLogo className="h-8 w-8" variant="light" />
              <span className="text-lg font-semibold tracking-tight">
                {locale === "ar" ? "مدار" : "madar"}
              </span>
            </div>
            <p className="text-madar-200 text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-madar-300 mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-madar-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-madar-300 mb-4">
              {t("connect")}
            </h3>
            <ul className="space-y-2 text-sm text-madar-200">
              <li>hello@madar.sa</li>
              <li>{locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-madar-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-madar-400">&copy; {t("copyright")}</p>
          <p className="text-xs text-madar-500 italic">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
