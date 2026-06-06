const COCKTAILS = [
  {
    name: "The Signature",
    description:
      "Named after you, built for the night. Fresh citrus, a house syrup, and whatever spirit fits the room.",
    note: "Custom to your event",
  },
  {
    name: "The Paloma Blanca",
    description:
      "Tequila, fresh grapefruit, a pinch of salt, and a long pour. Crisp, sessionable, crowd-pleasing.",
    note: "A First Round staple",
  },
  {
    name: "The Old Friend",
    description:
      "Spirit-forward, stirred slow, served on a big cube. For the guests who know exactly what they want.",
    note: "Spirit-forward build",
  },
];

export default function DrinkShowcaseSection() {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            You host.{" "}
            <em className="not-italic text-terracotta">We pour.</em>
            {" "}Everyone wins.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-gold" />
            <p
              className="text-gold text-sm font-semibold uppercase"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              The cocktails
            </p>
          </div>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-cream mb-4 max-w-2xl"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Fresh citrus. House syrups.{" "}
            <em className="not-italic text-terracotta">No shortcuts.</em>
          </h2>
          <p className="text-cream/65 text-lg max-w-2xl leading-relaxed">
            Every menu is custom — built for your event, your guests, your
            night. We squeeze the citrus that morning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {COCKTAILS.map((cocktail) => (
            <div
              key={cocktail.name}
              className="group flex flex-col bg-ink-soft rounded-2xl overflow-hidden border border-cream/5 hover:border-terracotta/30 transition-colors"
            >
              <div className="aspect-[4/3] bg-ink border-b border-cream/5 flex items-center justify-center">
                <span className="text-cream/20 text-xs tracking-widest uppercase">
                  Photo goes here
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <span
                  className="text-gold text-xs font-semibold uppercase mb-2"
                  style={{ letterSpacing: "var(--tracking-eyebrow)" }}
                >
                  {cocktail.note}
                </span>
                <h3 className="font-display text-xl font-bold text-cream mb-3">
                  {cocktail.name}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed flex-1">
                  {cocktail.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-soft text-cream font-bold text-base px-8 py-4 rounded-full transition-colors"
            style={{ letterSpacing: "var(--tracking-button)" }}
          >
            Book your event &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
