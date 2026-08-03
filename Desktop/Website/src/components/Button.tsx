import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full text-[14px] font-medium transition-all duration-300 px-7 py-3";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 hover:scale-[1.02]",
    secondary:
      "bg-transparent text-white border border-white/20 hover:border-white/40 hover:scale-[1.02]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {variant === "primary" && (
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </Link>
  );
}
