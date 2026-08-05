const themes = {
  dunes: { from: "#e8b877", via: "#d4966a", to: "#8a5a3f" },
  oasis: { from: "#8fc7c9", via: "#4c8f8a", to: "#1f4a4d" },
  night: { from: "#2b3252", via: "#181c30", to: "#05060d" },
  camp: { from: "#e6a45a", via: "#a5522f", to: "#3a1f1a" },
  safari: { from: "#f0c987", via: "#c17a45", to: "#5c3420" },
  canyon: { from: "#d9c39a", via: "#b98a5c", to: "#5b3b28" },
} as const;

export type PlaceholderTheme = keyof typeof themes;

function Scene({ theme }: { theme: PlaceholderTheme }) {
  const isNight = theme === "night";
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={`sky-${theme}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={themes[theme].from} />
          <stop offset="55%" stopColor={themes[theme].via} />
          <stop offset="100%" stopColor={themes[theme].to} />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#sky-${theme})`} />
      {isNight ? (
        <>
          {Array.from({ length: 40 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 9.3 + 3) % 100}
              cy={(i * 13.2 + 2) % 55}
              r={i % 5 === 0 ? 0.5 : 0.28}
              fill="#fff"
              opacity={0.5 + (i % 5) * 0.1}
            />
          ))}
          <circle cx="78" cy="20" r="7" fill="#f3ead0" opacity="0.9" />
        </>
      ) : (
        <circle cx="78" cy="22" r="10" fill="#fff7e0" opacity="0.85" />
      )}
      <path d="M0 66 Q20 55 40 65 T100 60 V100 H0 Z" fill="rgba(0,0,0,0.18)" />
      <path d="M0 78 Q25 68 55 76 T100 72 V100 H0 Z" fill="rgba(0,0,0,0.28)" />
    </svg>
  );
}

export default function PlaceholderImage({
  theme,
  className = "",
  caption,
  fill = false,
}: {
  theme: PlaceholderTheme;
  className?: string;
  caption?: string;
  fill?: boolean;
}) {
  return (
    <div className={`${fill ? "absolute inset-0" : "relative"} overflow-hidden bg-ink ${className}`}>
      <Scene theme={theme} />
      {caption ? (
        <span className="absolute bottom-3 right-3 z-10 rounded-md bg-black/40 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
          {caption}
        </span>
      ) : null}
    </div>
  );
}
