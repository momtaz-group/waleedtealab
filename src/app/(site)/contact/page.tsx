"use client";

import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import MapGraphic from "@/components/MapGraphic";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero title="تواصل معنا" subtitle="فريقنا متواجد دائماً للتخطيط لرحلتك القادمة والإجابة على أسئلتك" theme="night" />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h3 className="mb-5 font-display text-xl font-bold text-ink">قنوات الاتصال المباشر</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <div>
                <p className="text-sm text-ink-soft">الاتصال الهاتفي السريع</p>
                <p className="font-bold text-ink">٠١٠١٤٩٨٨٨٢٦</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent-dark">
                <Phone size={17} />
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-ink">محادثة واتساب فورية</p>
              <button className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white">
                <MessageCircle size={14} /> تحدث معنا الآن
              </button>
            </div>

            <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="mb-3 text-sm font-bold text-ink">تابع مغامراتنا اليومية</p>
              <div className="flex gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-sand-dark px-3 py-1.5 text-xs">
                  <FacebookIcon size={13} /> فيسبوك
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-sand-dark px-3 py-1.5 text-xs">
                  <InstagramIcon size={13} /> انستجرام
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-sand-dark px-3 py-1.5 text-xs">
                  تيك توك
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
          <h3 className="font-display text-xl font-bold text-ink">أرسل استفسارك</h3>
          <p className="mt-1 mb-6 text-sm text-ink-soft">
            املأ البيانات التالية وسيتواصل معك الكابتن وليد لترتيب رحلتك المثالية
          </p>

          {sent ? (
            <p className="rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
              تم إرسال طلبك بنجاح، سيتواصل معك فريقنا خلال ٢٤ ساعة.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">الاسم بالكامل</label>
                <input
                  required
                  placeholder="أدخل اسمك الكريم"
                  className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">رقم الهاتف (الواتساب)</label>
                <input
                  required
                  placeholder="01xxxxxxxxx"
                  className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-accent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">التاريخ المفضل</label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">عدد الأفراد</label>
                  <input
                    type="number"
                    min={1}
                    placeholder="كم عدد المغامرين؟"
                    className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">تفاصيل رحلتك المطلوبة</label>
                <textarea
                  rows={4}
                  placeholder="اكتب رغباتك، المعالم المفضلة، أو أي استفسار خاص"
                  className="w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-accent py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
              >
                إرسال الطلب الآن
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h3 className="mb-5 font-display text-xl font-bold text-ink">موقع مكتبنا وتجمع الرحلات</h3>
        <MapGraphic label="مكتب وليد تعيلب - الفيوم، مصر" />
      </section>
    </>
  );
}
