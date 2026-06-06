export default function DetailsSection() {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] bg-ink-soft rounded-2xl border border-cream/5 flex items-center justify-center order-2 md:order-1">
            <span className="text-cream/20 text-xs tracking-widest uppercase">
              Photo goes here
            </span>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-gold" />
              <p
                className="text-gold text-sm font-semibold uppercase"
                style={{ letterSpacing: "var(--tracking-eyebrow)" }}
              >
                The details
              </p>
            </div>

            <h2
              className="font-display text-3xl md:text-4xl font-bold text-cream mb-5 leading-tight"
              style={{ letterSpacing: "var(--tracking-display)" }}
            >
              Glass coupes. Proper ice.{" "}
              <em className="not-italic text-terracotta">
                Garnish that photographs.
              </em>
            </h2>

            <p className="text-cream/65 text-lg leading-relaxed mb-8">
              Glassware that matches the drink. Ice that fits the cocktail.
              Presentation that lands.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                {
                  label: "Glassware",
                  detail:
                    "Coupes, rocks glasses, highballs — the right vessel for the right drink.",
                },
                {
                  label: "Ice program",
                  detail:
                    "Crushed for highballs, large format for spirit-forward pours. We bring more than you think you need.",
                },
                {
                  label: "Garnish",
                  detail:
                    "Fresh citrus twists, herbs, dehydrated fruit. Cut the morning of the event.",
                },
              ].map(({ label, detail }) => (
                <li key={label} className="flex gap-4">
                  <span className="text-gold text-xs mt-1.5">&#10022;</span>
                  <div>
                    <span className="text-cream font-semibold text-base">
                      {label}{" "}
                    </span>
                    <span className="text-cream/60 text-base">{detail}</span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-soft text-cream font-bold text-base px-8 py-4 rounded-full transition-colors"
              style={{ letterSpacing: "var(--tracking-button)" }}
            >
              See our packages &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
