import Link from "next/link";
import { UserCheck, HeartHandshake, Zap, Mountain, Tag, Camera, Star } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";
import TripCard from "@/components/TripCard";
import { trips, reviews, galleryItems } from "@/data/site";

const whyUs = [
  { icon: UserCheck, title: "مرشد على خبير", desc: "فريق مرشدين محليين خبراء بكل دروب وخبايا صحراء الفيوم." },
  { icon: HeartHandshake, title: "رحلات آمنة", desc: "معدات أمان حديثة وسائقين محترفين لضمان راحتك التامة." },
  { icon: Zap, title: "تنظيم سريع", desc: "حجز مرن وتنظيم سريع لرحلتك في نفس اليوم عند الطلب." },
  { icon: Mountain, title: "مناظر صحراوية خلابة", desc: "مسارات مختارة بعناية لأجمل مناظر الكثبان والبحيرات." },
  { icon: Tag, title: "أسعار مناسبة", desc: "باقات متنوعة تناسب كل الميزانيات والفئات بشفافية كاملة." },
  { icon: Camera, title: "فرص تصوير احترافية", desc: "توقفات مخصصة عند أجمل الزوايا الذهبية لالتقاط الصور." },
];

export default function Home() {
  return (
    <>
      <section className="relative flex h-[560px] items-center justify-center overflow-hidden">
        <PlaceholderImage theme="dunes" fill className="h-full w-full" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-2xl px-6 text-center text-white">
          <h1 className="font-script text-6xl text-white md:text-7xl">Waleed Tealab</h1>
          <p className="mt-4 text-lg leading-8 text-white/90">
            رحلات سفاري وتخييم داخل صحراء الفيوم وتجارب لا تُنسى وسط الطبيعة المصرية
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-ink px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-black"
            >
              تواصل معنا
            </Link>
            <Link
              href="/trips"
              className="rounded-full border border-white/50 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              احجز رحلتك الآن ←
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <PlaceholderImage theme="safari" className="h-80 w-full rounded-2xl md:order-1" />
          <div className="md:order-2">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">من نحن</h2>
            <span className="mt-3 block h-1 w-16 rounded-full bg-accent" />
            <p className="mt-5 leading-8 text-ink-soft">
              مرحباً بكم مع وليد تعيلب، مرشدكم المحلي وخبير المغامرات في واحة الفيوم منذ أكثر من عشر سنوات.
              حرصنا أن نقدم لكم أفضل تجارب المغامرات في واحة الفيوم وسيناء، فانضمو إلى رحلة تجمع بين
              المغامرة الأصيلة وأعلى معايير الأمان والراحة والضيافة المصرية الأصيلة.
            </p>
            <div className="mt-8 flex gap-10">
              <div>
                <span className="font-display text-3xl font-bold text-accent-dark">+١٬٥٠٠</span>
                <p className="mt-1 text-sm text-ink-soft">عميل سعيد</p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-accent-dark">+١٠</span>
                <p className="mt-1 text-sm text-ink-soft">سنوات خبرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-dark/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="لماذا تخترنا" subtitle="نمنح رحلة سفاري حقيقية من الفخر والدهشة والمصداقية والجمال" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-dark">
                  <item.icon size={20} />
                </span>
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading title="رحلاتنا المميزة" subtitle="اكتشف مغامرات مصممة من أفضل باقات السفاري والرحلات والمعسكرات المنسقة بعناية" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trips.slice(0, 3).map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      </section>

      <section className="bg-sand-dark/60 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionHeading title="من أجمل لحظاتنا" subtitle="لقطات حية وذكريات من مغامراتنا في قلب الطبيعة الساحرة" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {galleryItems.slice(0, 4).map((item, i) => (
              <PlaceholderImage key={i} theme={item.theme} className="h-40 w-full rounded-xl md:h-48" />
            ))}
          </div>
          <Link
            href="/gallery"
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
          >
            عرض كل الصور
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <SectionHeading title="آراء عملائنا" subtitle="تجارب حقيقية وذكريات لا تُنسى شاركها معنا مغامرو الصحراء" />
        <div className="grid grid-cols-1 gap-6 text-right md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
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
        <Link
          href="/reviews"
          className="mt-10 inline-block rounded-full border border-ink/20 px-7 py-3 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          كل التقييمات
        </Link>
      </section>
    </>
  );
}
