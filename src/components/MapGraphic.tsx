import { MapPin, Navigation } from "lucide-react";

export default function MapGraphic({ label, buttonLabel = "افتح عبر خرائط جوجل" }: { label: string; buttonLabel?: string }) {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#e9d9b2] via-[#d9c08a] to-[#8a6a3f] md:h-80">
      <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 10 }).map((_, i) => (
          <circle key={i} cx={40 + i * 38} cy={100 + Math.sin(i) * 40} r={30 + (i % 3) * 10} fill="none" stroke="#5c4326" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-3 rounded-xl bg-black/70 px-6 py-4 text-center text-white backdrop-blur-sm">
        <span className="flex items-center gap-2 text-sm font-bold">
          <MapPin size={16} className="text-accent" /> {label}
        </span>
        <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink">
          <Navigation size={13} /> {buttonLabel}
        </button>
      </div>
    </div>
  );
}
