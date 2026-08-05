import Link from "next/link";
import { Check, Clock } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import type { Trip } from "@/data/site";

export default function TripCard({ trip, detailed = false }: { trip: Trip; detailed?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
      <PlaceholderImage theme={trip.image} className="h-48 w-full" />
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between text-sm text-ink-soft">
          <span>من {trip.price} ج.م / للشخص</span>
          <span className="flex items-center gap-1 rounded-full bg-sand-dark px-2.5 py-1 text-xs font-medium text-accent-dark">
            <Clock size={12} /> {trip.duration}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-ink">{trip.title}</h3>
        <p className="mt-2 text-sm leading-6 text-ink-soft">{trip.description}</p>

        {detailed ? (
          <ul className="mt-4 space-y-1.5 text-sm text-ink-soft">
            {trip.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check size={15} className="shrink-0 text-accent-dark" />
                {f}
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          href={`/trips/${trip.slug}`}
          className="mt-5 block rounded-full bg-accent py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-accent-dark"
        >
          {detailed ? "احجز الآن" : "عرض التفاصيل"}
        </Link>
      </div>
    </div>
  );
}
