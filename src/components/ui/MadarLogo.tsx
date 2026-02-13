export function MadarLogo({
  className = "h-10 w-10",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const color = variant === "light" ? "#A3DCBE" : "#2A7D5B";
  const innerColor = variant === "light" ? "#071C13" : "#ffffff";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Orbital ring — Madar's signature mark */}
      <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="10" />
      {/* Inner crescent cutout effect */}
      <circle cx="50" cy="50" r="22" fill={innerColor} />
      <circle cx="42" cy="44" r="18" fill={variant === "light" ? "#071C13" : "#ffffff"} opacity="0" />
      {/* Accent dot */}
      <circle cx="76" cy="26" r="6" fill={color} />
    </svg>
  );
}
