import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import { reviews } from "@/data/site";

const ratingBreakdown = [
  { stars: "٥ نجوم", pct: 92 },
  { stars: "٤ نجوم", pct: 6 },
  { stars: "٣ نجوم", pct: 2 },
  { stars: "٢ نجوم", pct: 0 },
  { stars: "١ نجوم", pct: 0 },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero title="آراء عملائنا" subtitle="تجارب حقيقية وذكريات لا تُنسى شاركها معنا مغامرو الصحراء" theme="oasis" />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-12 grid grid-cols-1 gap-8 rounded-2xl border border-black/5 bg-white p-8 shadow-sm md:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-2.5">
            {ratingBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-3 text-sm">
                <span className="w-10 text-ink-soft">{r.pct}%</span>
                <div className="h-2 flex-1 rounded-full bg-sand-dark">
                  <div className="h-2 rounded-full bg-accent" style={{ width: `${r.pct}%` }} />
                </div>
                <span className="w-14 text-ink-soft">{r.stars}</span>
              </div>
            ))}
          </div>
          <div className="hidden w-px bg-black/10 md:block" />
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-display text-5xl font-bold text-accent-dark">٤.٩</span>
            <div className="mt-2 flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-sm text-ink-soft">بناء على أكثر من ١٥٠ تقييم حقيقي</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 text-right md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < r.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-ink-soft">&quot;{r.text}&quot;</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-sand-dark" />
                <div>
                  <p className="text-sm font-bold text-ink">{r.name}</p>
                  <p className="text-xs text-accent-dark">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {["<", "١", "٢", "٣", ">"].map((p, i) => (
            <button
              key={i}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                p === "١" ? "bg-accent text-white" : "bg-white text-ink-soft border border-black/10"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
