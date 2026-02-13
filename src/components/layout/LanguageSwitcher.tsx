"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-madar-700 bg-madar-50 rounded-full hover:bg-madar-100 transition-colors"
      aria-label="Switch language"
    >
      <Globe size={14} />
      <span>{locale === "en" ? "العربية" : "English"}</span>
    </button>
  );
}
