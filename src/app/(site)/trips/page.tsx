"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import TripCard from "@/components/TripCard";
import { trips } from "@/data/site";

const categories = ["كل الرحلات", "يوم واحد", "تخييم", "عائلية", "مغامرات", "خاصة VIP"] as const;

export default function TripsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("كل الرحلات");

  const filtered = active === "كل الرحلات" ? trips : trips.filter((t) => t.category === active);

  return (
    <>
      <PageHero
        title="رحلاتنا الاستكشافية"
        subtitle="اكتشف جمال واحة الفيوم وصحرائها الخلابة من خلال باقاتنا الفاخرة المنسقة خصيصاً لك"
        theme="camp"
      />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                active === cat ? "bg-accent text-white" : "bg-white text-ink-soft hover:bg-sand-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((trip) => (
            <TripCard key={trip.slug} trip={trip} detailed />
          ))}
        </div>
      </section>
    </>
  );
}
