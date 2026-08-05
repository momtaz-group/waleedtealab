"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { galleryItems } from "@/data/site";

const tabs = ["الكل", "ليالي المخيم", "كثبان رملية", "غروب الشمس", "بحيرات", "شلالات", "سفاري", "تخييم"] as const;

export default function GalleryPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("الكل");
  const filtered = active === "الكل" ? galleryItems : galleryItems.filter((g) => g.caption === active);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:[&>*:nth-child(3)]:col-span-2">
          {galleryItems.slice(0, 8).map((item, i) => (
            <PlaceholderImage
              key={i}
              theme={item.theme}
              caption={item.caption}
              className={`w-full rounded-2xl ${i === 2 ? "h-64 md:col-span-2" : "h-40"}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-panel-dark py-20 text-center text-white">
        <h2 className="font-display text-3xl font-bold md:text-4xl">معرض الصور</h2>
        <p className="mt-3 text-white/70">لقطات حية تنبض بالجمال من رحلاتنا ومغامراتنا في قلب الفيوم</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                active === tab ? "bg-accent text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {filtered.map((item, i) => (
            <PlaceholderImage key={i} theme={item.theme} caption={item.caption} className="h-48 w-full rounded-2xl" />
          ))}
        </div>
      </section>
    </>
  );
}
