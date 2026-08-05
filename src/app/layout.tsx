import type { Metadata } from "next";
import { Tajawal, Aref_Ruqaa, Yellowtail } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

const arefRuqaa = Aref_Ruqaa({
  variable: "--font-aref",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const logoScript = Yellowtail({
  variable: "--font-logo-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "وليد تعيلب | رحلات سفاري وتخييم في صحراء الفيوم",
  description:
    "رحلات سفاري وتخييم داخل صحراء الفيوم وتجارب لا تُنسى وسط الطبيعة المصرية مع وليد تعيلب.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${arefRuqaa.variable} ${logoScript.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand text-ink">{children}</body>
    </html>
  );
}
