import PlaceholderImage from "./PlaceholderImage";
import type { PlaceholderTheme } from "./PlaceholderImage";

export default function PageHero({
  title,
  subtitle,
  theme = "dunes",
}: {
  title: string;
  subtitle?: string;
  theme?: PlaceholderTheme;
}) {
  return (
    <section className="relative flex h-64 items-center justify-center overflow-hidden md:h-80">
      <PlaceholderImage theme={theme} fill className="h-full w-full" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 px-6 text-center">
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-3 text-white/85">{subtitle}</p> : null}
      </div>
    </section>
  );
}
