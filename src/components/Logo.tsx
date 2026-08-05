export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${
          dark ? "border-accent text-accent" : "border-ink text-ink"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M15.5 8.5L13 13l-4.5 2.5L11 11l4.5-2.5Z" fill="currentColor" />
        </svg>
      </span>
      <span className={`font-display text-xl font-bold ${dark ? "text-white" : "text-ink"}`}>
        وليد تعيلب
      </span>
    </div>
  );
}
