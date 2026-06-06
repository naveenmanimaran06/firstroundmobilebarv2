import Link from "next/link";

const MOCKTAILS = [
  {
    name: "The Garden Spritz",
    description:
      "Cucumber, fresh mint, lime, and a splash of ginger beer. Bright, herby, and gone before you finish talking about it.",
    note: "Zero-proof",
  },
  {
    name: "The Sunset",
    description:
      "Hibiscus, mango, and a squeeze of lime layered in real glassware. It photographs as well as it tastes.",
    note: "Visually stunning",
  },
  {
    name: "The Custom Zero",
    description:
      "We build a mocktail designed specifically for your event — same process as the signature cocktail, same presentation.",
    note: "Custom to your event",
  },
];

export default function MocktailsSection() {
  return (
    <section className="bg-cream-paper py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Whatever you&apos;re celebrating —
            <br />
            <em className="not-italic text-terracotta">the first round&apos;s on its way.</em>
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-terracotta" />
            <p
              className="text-terracotta text-sm font-semibold uppercase"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Zero-proof
            </p>
          </div>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-ink mb-4 max-w-2xl"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Half your guests don&apos;t drink.{" "}
            <em className="not-italic text-terracotta">Their drinks still matter.</em>
          </h2>
          <p className="text-ink/65 text-lg max-w-2xl leading-relaxed">
            Every event includes a dedicated mocktail menu — built drinks, real
            ingredients, same glassware. Not an afterthought.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {MOCKTAILS.map((mocktail) => (
            <div
              key={mocktail.name}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-ink/5 hover:border-terracotta/20 transition-colors shadow-1"
            >
              <div className="aspect-[4/3] bg-cream-paper border-b border-ink/5 flex items-center justify-center">
                <span className="text-ink/20 text-xs tracking-widest uppercase">
                  Photo goes here
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <span
                  className="text-terracotta text-xs font-semibold uppercase mb-2"
                  style={{ letterSpacing: "var(--tracking-eyebrow)" }}
                >
                  {mocktail.note}
                </span>
                <h3 className="font-display text-xl font-bold text-ink mb-3">
                  {mocktail.name}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed flex-1">
                  {mocktail.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#book"
            className="inline-flex items-center justify-center bg-ink hover:bg-ink-soft text-cream font-bold text-base px-8 py-4 rounded-full transition-colors"
            style={{ letterSpacing: "var(--tracking-button)" }}
          >
            See our packages &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
