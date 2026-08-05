export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "right";
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-right"}`}>
      <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      <span
        className={`mt-3 block h-1 w-16 rounded-full bg-accent ${
          align === "center" ? "mx-auto" : "mr-0"
        }`}
      />
      {subtitle ? <p className="mt-4 text-ink-soft">{subtitle}</p> : null}
    </div>
  );
}
