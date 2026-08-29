import Link from "next/link";
import Logo from "./Logo";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/trips", label: "رحلاتنا المميزة" },
  { href: "/gallery", label: "معرض الصور" },
  { href: "/contact", label: "حجز رحلة" },
];

export default function Footer() {
  return (
    <footer className="bg-panel-dark text-white/80">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h4 className="mb-3 text-sm font-bold text-white">النشرة البريدية</h4>
          <p className="mb-4 text-sm leading-6">
            اشترك معنا للحصول على أقوى العروض وآخر تفاصيل الرحلات الجديدة في الفيوم.
          </p>
          <form className="flex overflow-hidden rounded-full border border-white/15 bg-white/5">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              aria-label="اشتراك"
              className="flex shrink-0 items-center justify-center bg-accent px-4 text-white"
            >
              <ArrowLeft size={16} />
            </button>
          </form>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">تواصل معنا</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-accent" /> ٠١٠١٤٩٨٨٨٢٦
            </li>
            <li>الفيوم، مصر</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">روابط سريعة</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Logo dark />
          <p className="mt-3 text-sm leading-6">
            مغامرات وسفاري وتخييم بدوي فاخر في واحة الفيوم بجودة وخدمة ترقى لتطلعات مستكشفي الجمال الطبيعي.
          </p>
          <div className="mt-4 flex gap-3">
            {[FacebookIcon, InstagramIcon, Phone, MessageCircle].map((Icon, i) => (
              <span
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80"
              >
                <Icon size={15} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/50 md:flex-row">
          <span>© ٢٠٢٥ وليد تعيلب - جميع الحقوق محفوظة</span>
          <div className="flex gap-4">
            <span>الشروط والأحكام</span>
            <span>سياسة الخصوصية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
