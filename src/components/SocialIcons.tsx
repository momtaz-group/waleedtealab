export function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M15 8.5h2V5.2c-.35-.05-1.54-.15-2.94-.15C11.05 5.05 9.5 6.7 9.5 9.4v2.35H7v3.7h2.5V21h3.6v-5.55h2.5l.4-3.7h-2.9V9.7c0-.86.23-1.2 1.9-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </svg>
  );
}
