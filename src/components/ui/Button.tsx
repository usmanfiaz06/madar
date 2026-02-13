import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";

  const variants = {
    primary: "bg-madar-600 text-white hover:bg-madar-700 shadow-sm hover:shadow-md",
    secondary: "bg-madar-50 text-madar-700 hover:bg-madar-100",
    outline: "border-2 border-madar-500 text-madar-600 hover:bg-madar-50",
    ghost: "text-madar-600 hover:bg-madar-50",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-2.5",
    lg: "text-base px-8 py-3",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
