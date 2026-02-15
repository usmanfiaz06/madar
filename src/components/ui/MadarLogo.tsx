import Image from "next/image";

export function MadarLogo({
  className = "h-10 w-10",
  variant = "dark",
  full = false,
}: {
  className?: string;
  variant?: "dark" | "light";
  full?: boolean;
}) {
  const greenColor = "#269b55";

  if (full) {
    return (
      <Image
        src="/madar-logo.svg"
        alt="Madar"
        width={150}
        height={60}
        className={`${className} ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    );
  }

  // Icon-only: the orbital ring mark from the official SVG
  return (
    <svg
      viewBox="0 0 60.44 60.44"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.22,60.44C13.56,60.44,0,46.88,0,30.22S13.56,0,30.22,0s30.22,13.56,30.22,30.22-13.56,30.22-30.22,30.22ZM30.22,17.46c-7.03,0-12.76,5.72-12.76,12.76s5.72,12.76,12.76,12.76,12.76-5.72,12.76-12.76-5.72-12.76-12.76-12.76Z"
        fill={`url(#madar-grad-${variant})`}
      />
      <path
        d="M50.66,22c-4.53-11.27-17.39-16.76-28.66-12.23-.57.23-1.13.48-1.68.76-.12-.14-.24-.28-.38-.41-1.96-1.89-5.08-1.83-6.96.13-1.89,1.96-1.83,5.08.13,6.96,0,0,0,0,0,0l-.44-.33c-4.66,6.14-5.77,14.4-2.9,21.55,3.45,8.59,11.74,13.82,20.47,13.82,2.73,0,5.5-.51,8.19-1.59,5.46-2.19,9.74-6.38,12.05-11.8,2.31-5.41,2.37-11.4.18-16.86ZM49.48,38.44c-2.2,5.15-6.26,9.13-11.45,11.21-10.71,4.31-22.93-.91-27.24-11.62-2.73-6.78-1.68-14.62,2.74-20.46,1.96,1.51,4.79,1.34,6.55-.49,1.49-1.55,1.76-3.81.85-5.63.49-.24.98-.46,1.49-.67,10.71-4.31,22.93.91,27.24,11.62,2.09,5.19,2.03,10.88-.17,16.03Z"
        fill={greenColor}
      />
      <defs>
        <linearGradient id={`madar-grad-${variant}`} x1="8.86" y1="8.86" x2="51.57" y2="51.57" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={greenColor} stopOpacity={0} />
          <stop offset="1" stopColor={greenColor} />
        </linearGradient>
      </defs>
    </svg>
  );
}
