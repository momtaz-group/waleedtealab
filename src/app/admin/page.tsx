import { MessageSquare, DollarSign, Eye, Calendar, Compass, Bell, Search, Star } from "lucide-react";
import { VisitorLineChart, BookingBarChart } from "@/components/admin/DashboardCharts";

const stats = [
  { icon: MessageSquare, label: "رسائل معلقة", value: "٠" },
  { icon: DollarSign, label: "الإيرادات", value: "١٥٠٬٠٠٠ ج.م" },
  { icon: Eye, label: "الزوار", value: "٢٬٤٥٠" },
  { icon: Calendar, label: "الحجوزات", value: "٨٧" },
  { icon: Compass, label: "إجمالي الرحلات", value: "١٢" },
];

const latestReviews = [
  { name: "أحمد حسن", time: "منذ ساعتين", rating: 5, text: "تجربة لا تُنسى بكل تفاصيلها! مرشد محترف والخدمة فاخرة." },
  { name: "سارة محمود", time: "منذ يوم", rating: 5, text: "محمية وادي الحيتان والبحيرة السحرية كانت مذهلة والتنسيق كان رائعاً." },
  { name: "كريم عبد العزيز", time: "منذ يومين", rating: 4, text: "رصد النجوم والعشاء البدوي كان قصة تجربة رائعة. أنصح بالرحلة." },
];

const bookings = [
  { id: "BK-1084", name: "جمال عبد الناصر", date: "٢٣ أكتوبر ٢٠٢٣", people: "٤ أفراد", status: "مؤكد" },
  { id: "BK-1083", name: "رنا الشافعي", date: "٢٢ أكتوبر ٢٠٢٣", people: "شخصين", status: "قيد الانتظار" },
  { id: "BK-1082", name: "هاني رمزي", date: "٢٢ أكتوبر ٢٠٢٣", people: "٥ أفراد", status: "مؤكد" },
  { id: "BK-1081", name: "منى زكي", date: "٢١ أكتوبر ٢٠٢٣", people: "٣ أفراد", status: "ملغي" },
  { id: "BK-1080", name: "يوسف شريف", date: "٢١ أكتوبر ٢٠٢٣", people: "٨ أفراد", status: "مؤكد" },
];

const statusStyle: Record<string, string> = {
  مؤكد: "bg-emerald-100 text-emerald-700",
  "قيد الانتظار": "bg-amber-100 text-amber-700",
  ملغي: "bg-red-100 text-red-700",
};

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <Bell size={17} className="text-ink-soft" />
          </span>
          <div className="text-right">
            <p className="font-bold text-ink">وليد تعيلب</p>
            <p className="text-xs text-ink-soft">المدير العام</p>
          </div>
          <span className="h-10 w-10 rounded-full bg-sand-dark" />
        </div>
        <div className="flex items-center gap-3">
          <p className="font-bold text-ink">مرحباً، وليد تعيلب 👋</p>
          <div className="relative">
            <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft" />
            <input
              placeholder="ابحث عن حجوزات، رحلات..."
              className="w-64 rounded-full border border-black/10 bg-white py-2 pr-9 pl-4 text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent-dark">
                <s.icon size={16} />
              </span>
            </div>
            <p className="font-display text-2xl font-bold text-ink">{s.value}</p>
            <p className="mt-1 text-xs text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <h3 className="mb-3 font-bold text-ink">تحليل الزوار (معدل النشاط)</h3>
          <VisitorLineChart />
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-bold text-ink">الحجوزات الشهرية</h3>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
              +١٨٪ مقارنة بالشهر السابق
            </span>
          </div>
          <BookingBarChart />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <h3 className="mb-4 font-bold text-ink">أحدث التقييمات</h3>
          <div className="space-y-4">
            {latestReviews.map((r) => (
              <div key={r.name} className="rounded-xl border border-black/5 p-4">
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-sm font-bold text-ink">{r.name}</p>
                  <p className="text-xs text-ink-soft">{r.time}</p>
                </div>
                <div className="mb-2 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill={i < r.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-sm leading-6 text-ink-soft">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-ink">أحدث الحجوزات</h3>
            <button className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-bold text-ink-soft">
              عرض الكل
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead>
                <tr className="text-xs text-ink-soft">
                  <th className="pb-3 font-medium">رقم الحجز</th>
                  <th className="pb-3 font-medium">اسم العميل</th>
                  <th className="pb-3 font-medium">التاريخ</th>
                  <th className="pb-3 font-medium">الأفراد</th>
                  <th className="pb-3 font-medium">الحالة</th>
                  <th className="pb-3 font-medium">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-t border-black/5">
                    <td className="py-3 text-xs text-ink-soft">#{b.id}</td>
                    <td className="py-3 font-medium text-ink">{b.name}</td>
                    <td className="py-3 text-xs text-ink-soft">{b.date}</td>
                    <td className="py-3 text-xs text-ink-soft">{b.people}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${statusStyle[b.status]}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="rounded-full border border-black/10 px-3 py-1 text-xs text-ink-soft">
                        تفاصيل
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
