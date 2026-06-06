const STEPS = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Fill out the booking form or send us a message with your event date, guest count, and any ideas you have.",
  },
  {
    number: "02",
    title: "Get Your Quote",
    description:
      "We'll send a transparent, itemized quote and a custom drink menu designed around your event — no hidden fees.",
  },
  {
    number: "03",
    title: "Shop Your List",
    description:
      "We send you a detailed shopping list for the alcohol. You buy it at retail prices — no markup from us.",
  },
  {
    number: "04",
    title: "We Handle the Rest",
    description:
      "We arrive early, set up a beautiful bar, serve all night, and pack out at the end. You just enjoy your party.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-gold text-[14px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            How It Works
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-cream mb-6"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            From Inquiry to&nbsp;Cheers
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Four simple steps. No surprises, no stress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-cream/15" />
              )}
              <div className="w-16 h-16 mx-auto rounded-full bg-terracotta/25 flex items-center justify-center mb-6 relative z-10">
                <span className="font-display text-xl font-bold text-gold">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                {step.title}
              </h3>
              <p className="text-cream/50 leading-relaxed text-[16px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
