import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Madar — The Digital Design Language of Riyadh";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          background: "linear-gradient(135deg, #0a2922 0%, #133d33 40%, #1a5244 70%, #0f3a30 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orbit rings */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-20px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            border: "1px dashed rgba(255,255,255,0.06)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "40px",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
          }}
        />
        {/* Glowing orb */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "140px",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,188,156,0.35) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Bottom-left glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,188,156,0.12) 0%, transparent 60%)",
            display: "flex",
          }}
        />
        {/* Dot accent */}
        <div
          style={{
            position: "absolute",
            top: "160px",
            right: "320px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "rgba(74,188,156,0.6)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "450px",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "rgba(74,188,156,0.3)",
            display: "flex",
          }}
        />

        {/* Top — Label + Logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            {/* Madar mark */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              M
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.05em",
              }}
            >
              MADAR
            </span>
          </div>
          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            {isAr ? "الرياض ٢٠٢٦" : "RIYADH 2026"}
          </div>
        </div>

        {/* Middle — Main heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "850px" }}>
          <h1
            style={{
              fontSize: "62px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            {isAr
              ? "لغة التصميم الرقمي للرياض"
              : "The Digital Design Language of Riyadh"}
          </h1>
          <p
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "680px",
            }}
          >
            {isAr
              ? "كيف تُبلغ الدول الثقة والقوة والشرعية عبر البرمجيات"
              : "How States Communicate Trust, Power, and Legitimacy Through Software"}
          </p>
        </div>

        {/* Bottom — Tags / Pillars */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {(isAr
            ? ["الحوكمة", "الثقة", "الهوية", "لغة التصميم"]
            : ["Governance", "Trust", "Identity", "Design Language"]
          ).map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 20px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {tag}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            madar.sa
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
