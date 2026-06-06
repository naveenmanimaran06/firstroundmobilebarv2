const FEATURES = [
  {
    title: "Dry-Hire Model",
    description:
      "You purchase the alcohol at retail — no markup. We bring the bar, tools, ice, garnishes, and mixers. You save money and keep full control.",
    icon: "&#9830;",
  },
  {
    title: "Custom Cocktail Menus",
    description:
      "Every event gets a hand-crafted drink menu designed around your taste, theme, and budget. Signature cocktails included.",
    icon: "&#9733;",
  },
  {
    title: "Full Bar Setup & Cleanup",
    description:
      "We arrive early, build a beautiful bar, serve all night, and pack out at the end. You don't lift a finger.",
    icon: "&#9670;",
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed to serve in California with liability insurance. Your venue and guests are covered.",
    icon: "&#10038;",
  },
  {
    title: "Mocktail Stations",
    description:
      "Non-drinkers deserve great drinks too. We offer creative mocktails that look and taste just as good as the real thing.",
    icon: "&#10047;",
  },
  {
    title: "Events of Any Size",
    description:
      "From an intimate dinner for 15 to a wedding with 200 guests — we scale our service to match your event perfectly.",
    icon: "&#9827;",
  },
];

export default function FeaturesSection() {
  return (
    <section id="services" className="bg-cream-paper py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-terracotta text-[14px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            Why First Round
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-ink mb-6"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Everything You Need, Nothing You Don&apos;t
          </h2>
          <p className="text-ink/60 text-lg max-w-2xl mx-auto">
            Professional bar service designed to be easy, affordable, and
            tailored to your event.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-cream rounded-2xl p-8 border border-ink/8 hover:border-terracotta/30 transition-colors group"
              style={{ boxShadow: "var(--shadow-1)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta text-xl mb-5 group-hover:bg-terracotta/15 transition-colors">
                <span dangerouslySetInnerHTML={{ __html: feature.icon }} />
              </div>
              <h3 className="font-display text-xl font-bold text-ink mb-3">
                {feature.title}
              </h3>
              <p className="text-ink/60 leading-relaxed text-[16px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
