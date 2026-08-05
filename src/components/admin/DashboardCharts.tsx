"use client";

import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const visitorData = [
  { day: "السبت", value: 320 },
  { day: "الأحد", value: 480 },
  { day: "الاثنين", value: 610 },
  { day: "الثلاثاء", value: 520 },
  { day: "الأربعاء", value: 890 },
  { day: "الخميس", value: 740 },
];

const bookingData = [
  { month: "يناير", value: 40 },
  { month: "فبراير", value: 52 },
  { month: "مارس", value: 78 },
  { month: "أبريل", value: 61 },
  { month: "مايو", value: 95 },
  { month: "يونيو", value: 87 },
];

export function VisitorLineChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={visitorData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
        <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#4d4f42" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#4d4f42" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ direction: "rtl", fontFamily: "inherit", borderRadius: 8 }} />
        <Line type="monotone" dataKey="value" stroke="#b9803f" strokeWidth={3} dot={{ r: 4, fill: "#b9803f" }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BookingBarChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={bookingData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#4d4f42" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "#4d4f42" }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={{ direction: "rtl", fontFamily: "inherit", borderRadius: 8 }} />
        <Bar dataKey="value" fill="#cf9a5f" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
