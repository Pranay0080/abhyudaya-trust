type ThreadEyebrowProps = {
  label: string;
  align?: "left" | "center";
  light?: boolean;
};

/**
 * Signature element: a hand-stitched "thread" mark before section eyebrows.
 * Evokes the trust's handicraft / community-weaving programs without
 * resorting to numbered markers or generic gradient badges.
 */
export default function ThreadEyebrow({
  label,
  align = "left",
  light = false,
}: ThreadEyebrowProps) {
  const colorClass = light ? "text-gold" : "text-terracotta";
  const textColor = light ? "text-ivory/80" : "text-pine/60";

  return (
    <div
      className={`flex items-center gap-3 mb-4 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <svg
        width="48"
        height="14"
        viewBox="0 0 48 14"
        fill="none"
        aria-hidden="true"
        className={colorClass}
      >
        <path
          d="M1 7 C 6 1, 11 13, 16 7 C 21 1, 26 13, 31 7 C 36 1, 41 13, 46 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="1" cy="7" r="2" fill="currentColor" />
      </svg>
      <span
        className={`font-data text-xs font-semibold tracking-[0.25em] uppercase ${textColor}`}
      >
        {label}
      </span>
    </div>
  );
}
