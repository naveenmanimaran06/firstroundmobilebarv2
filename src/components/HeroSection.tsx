import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-ink flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 40%, var(--color-terracotta) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-28 md:pt-40 md:pb-36">
        <p
          className="text-gold text-[15px] font-semibold uppercase mb-6"
          style={{ letterSpacing: "var(--tracking-eyebrow)" }}
        >
          Mobile bar for private events
        </p>

        <h1
          className="font-display text-[clamp(3rem,8vw,6.5rem)] font-bold text-cream leading-[0.95] mb-8 max-w-[14ch]"
          style={{ letterSpacing: "var(--tracking-display)" }}
        >
          Be a guest at your own party.
        </h1>

        <p className="text-cream/80 text-lg md:text-xl max-w-[42ch] leading-relaxed mb-12">
          Craft cocktails and mocktails for weddings, birthdays, and private
          events across the Bay Area and Central Valley.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/#book"
            className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-soft text-cream font-bold text-lg px-10 py-5 rounded-full transition-colors"
            style={{ letterSpacing: "var(--tracking-button)" }}
          >
            Check Availability
          </Link>
          <Link
            href="#menu"
            className="inline-flex items-center justify-center border-2 border-cream/25 hover:border-cream/50 text-cream font-semibold text-lg px-10 py-5 rounded-full transition-colors"
          >
            View Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
