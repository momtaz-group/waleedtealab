"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.q} className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-5 py-4 text-right font-bold text-ink"
          >
            {item.q}
            <ChevronDown
              size={18}
              className={`shrink-0 text-accent-dark transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i ? <p className="px-5 pb-4 text-sm leading-7 text-ink-soft">{item.a}</p> : null}
        </div>
      ))}
    </div>
  );
}
