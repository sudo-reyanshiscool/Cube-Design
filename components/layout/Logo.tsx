export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const fill = variant === "dark" ? "#0E0E0C" : "#F5F1EA";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="V-CUBE Designs">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 1.5 L29.5 9 V23 L16 30.5 L2.5 23 V9 Z"
          fill="none"
          stroke={fill}
          strokeWidth="1.4"
        />
        <path
          d="M9 11 L16 22 L23 11"
          fill="none"
          stroke={fill}
          strokeWidth="1.6"
          strokeLinecap="square"
        />
      </svg>
      <span
        className="font-display text-[1.05rem] tracking-[0.18em] uppercase"
        style={{ color: fill }}
      >
        V-Cube
      </span>
    </span>
  );
}
