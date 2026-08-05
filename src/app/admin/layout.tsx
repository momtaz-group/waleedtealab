import Link from "next/link";
import { LayoutGrid, Compass, Image as ImageIcon, Calendar, Star, MessageSquare, Users, Settings } from "lucide-react";
import Logo from "@/components/Logo";

const navItems = [
  { icon: LayoutGrid, label: "لوحة التحكم", href: "/admin", active: true },
  { icon: Compass, label: "الرحلات", href: "/admin" },
  { icon: ImageIcon, label: "معرض الصور", href: "/admin" },
  { icon: Calendar, label: "الحجوزات", href: "/admin" },
  { icon: Star, label: "التقييمات", href: "/admin" },
  { icon: MessageSquare, label: "الرسائل", href: "/admin" },
  { icon: Users, label: "المستخدمين", href: "/admin" },
  { icon: Settings, label: "الإعدادات", href: "/admin" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-sand">
      <aside className="flex w-64 shrink-0 flex-col bg-panel-dark p-5 text-white/80">
        <div className="mb-8 px-1">
          <Logo dark />
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                item.active ? "bg-accent text-white" : "hover:bg-white/5"
              }`}
            >
              <item.icon size={17} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-2 pt-4">
          <button className="w-full rounded-xl bg-accent py-2.5 text-sm font-bold text-white">
            + إضافة رحلة جديدة
          </button>
          <button className="w-full rounded-xl border border-white/15 py-2.5 text-sm font-bold text-white/80">
            رفع صور جديدة
          </button>
        </div>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
