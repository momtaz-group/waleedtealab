import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/trips", label: "الرحلات" },
  { href: "/gallery", label: "المعرض" },
  { href: "/reviews", label: "التقييمات" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-sand/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-accent-dark">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-dark"
        >
          احجز رحلتك الآن
        </Link>
      </div>
    </header>
  );
}
