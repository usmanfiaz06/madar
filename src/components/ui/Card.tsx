interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 p-6 ${
        hover ? "hover:shadow-lg hover:border-madar-100 transition-all duration-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
