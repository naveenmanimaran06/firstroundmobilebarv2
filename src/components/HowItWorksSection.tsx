import Link from "next/link";

const STEPS = [
  {
    num: "1",
    heading: "Tell us about your event",
    body: "Date, headcount, and vibe. Takes two minutes.",
  },
  {
    num: "2",
    heading: "We design the menu",
    body: "Custom cocktails and mocktails, plus a shopping list for the alcohol.",
  },
  {
    num: "3",
    heading: "We show up — you don't worry",
    body: "Full setup, professional service, and complete cleanup.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-cream-paper pb-24 md:pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-terracotta text-[15px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            How it works
          </p>
          <h2
            className="font-display text-3xl md:text-5xl font-bold text-ink"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Three steps. Five minutes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {STEPS.map((step) => (
            <div key={step.num} className="text-center">
              <span className="inline-flex w-14 h-14 rounded-full bg-ink text-gold font-display font-bold text-xl items-center justify-center mb-6">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-bold text-ink mb-3">
                {step.heading}
              </h3>
              <p className="text-ink/70 text-[16px] leading-relaxed max-w-[36ch] mx-auto">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#book"
            className="inline-flex items-center justify-center bg-ink hover:bg-ink-soft text-cream font-bold text-[17px] px-10 py-5 rounded-full transition-colors"
            style={{ letterSpacing: "var(--tracking-button)" }}
          >
            Get an Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
