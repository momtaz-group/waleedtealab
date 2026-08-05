import Link from "next/link";
import { notFound } from "next/navigation";
import { X, Check } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import MapGraphic from "@/components/MapGraphic";
import FaqAccordion from "@/components/FaqAccordion";
import { trips, itinerary, faqs } from "@/data/site";

const notIncluded = [
  "المشروبات الشخصية والهدايا التذكارية من قرية تونس",
  "أنشطة الجدول الإضافية للمغامرات الأكثر إثارة",
  "أي وجبات إضافية خارج البرنامج المحدد سلفاً",
];

export function generateStaticParams() {
  return trips.map((t) => ({ slug: t.slug }));
}

export default async function TripDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = trips.find((t) => t.slug === slug);
  if (!trip) notFound();

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 font-display text-3xl font-bold text-ink md:text-4xl">خط سير الرحلة والمغامرات</h1>
        <p className="mb-10 text-ink-soft">جدول زمني متكامل ليوم مليء بالتجربة والمغامرات المنسقة بعناية فائقة</p>

        <ol className="space-y-8 border-r-2 border-accent/30 pr-8">
          {itinerary.map((step) => (
            <li key={step.time} className="relative flex items-start gap-4">
              <span className="absolute -right-[41px] top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-white" />
              <PlaceholderImage theme={trip.image} className="h-16 w-20 shrink-0 rounded-lg" />
              <div className="flex-1">
                <h3 className="font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{step.desc}</p>
              </div>
              <span className="shrink-0 text-sm font-bold text-accent-dark">{step.time}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative flex min-h-72 items-center justify-center overflow-hidden">
        <PlaceholderImage theme={trip.image} fill className="h-full w-full" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-xl px-6 py-16 text-center text-white">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold">
            الأماكن محدودة والحجز متاح
          </span>
          <h2 className="font-display text-3xl font-bold md:text-4xl">{trip.title}</h2>
          <p className="mt-3 text-white/85">{trip.description}</p>
          <p className="mt-4 text-sm text-white/80">
            المدة: {trip.duration} • السعر: {trip.price} ج.م / للشخص
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-white">احجز الآن</button>
            <Link href="/contact" className="rounded-full border border-white/50 px-6 py-2.5 text-sm font-bold">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h3 className="mb-5 font-display text-xl font-bold text-ink">غير مشمول في السعر</h3>
          <ul className="space-y-3">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-ink-soft">
                <X size={16} className="mt-0.5 shrink-0 text-red-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-display text-xl font-bold text-ink">ما يشمله السعر (الخدمات والضيافة)</h3>
          <ul className="space-y-3">
            {trip.features.concat([
              "مشروبات ساخنة وبيات متنوعة ومتوفرة طوال اليوم",
              "مرشد محلي محترف وموثق لتحديد أفضل اللقطات",
            ]).map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-ink-soft">
                <Check size={16} className="mt-0.5 shrink-0 text-accent-dark" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h3 className="mb-5 font-display text-xl font-bold text-ink">معرض الصور من الرحلة</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <PlaceholderImage key={i} theme={trip.image} className="h-28 w-full rounded-xl" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h3 className="mb-5 font-display text-xl font-bold text-ink">موقع المحمية والمسار</h3>
        <MapGraphic label="موقع نقطة الانطلاق - الفيوم، مصر" />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h3 className="mb-5 font-display text-xl font-bold text-ink">الأسئلة الشائعة حول الرحلات</h3>
        <FaqAccordion items={faqs} />
      </section>

      <section className="bg-sand-dark/60 py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">جاهز لبدء مغامرتك القادمة؟</h2>
        <p className="mt-3 text-ink-soft">سواء كنت تفضل الحجز عبر الموقع أو التحدث بشكل مباشر، نحن هنا لخدمتك دائماً</p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-emerald-600 px-7 py-3 text-sm font-bold text-white hover:bg-emerald-700">
            احجز الآن والدفع
          </button>
          <Link
            href="/contact"
            className="rounded-full border border-ink/20 bg-white px-7 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white"
          >
            احجز رحلتك الآن
          </Link>
        </div>
      </section>
    </>
  );
}
