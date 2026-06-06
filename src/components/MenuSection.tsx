import Link from "next/link";

const MENU_CATEGORIES = [
  {
    title: "Craft Cocktails",
    badge: "Signature",
    items: [
      "Classic Margarita",
      "Spicy Jalapeño Margarita",
      "Paloma",
      "Moscow Mule",
      "Whiskey Sour",
      "Aperol Spritz",
      "Cosmo",
      "Custom Signature Cocktail",
    ],
  },
  {
    title: "Mocktail Station",
    badge: "Zero-Proof",
    items: [
      "Virgin Mojito",
      "Sparkling Lemonade",
      "Watermelon Agua Fresca",
      "Ginger Mule",
      "Hibiscus Cooler",
      "Cucumber Mint Spritzer",
      "Tropical Punch",
      "Custom Zero-Proof Creation",
    ],
  },
  {
    title: "Bubbles & Add-Ons",
    badge: "Extras",
    items: [
      "Mimosa Bar",
      "Classic Champagne Service",
      "Prosecco Tower",
      "Bellinis",
      "Rosé Spritz",
      "Beer & Wine Service",
      "Non-Alcoholic Bubbly Bar",
      "Champagne Toast",
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-ink py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p
            className="text-gold text-[15px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            The Menu
          </p>
          <h2
            className="font-display text-3xl md:text-5xl font-bold text-cream mb-5"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Fresh citrus. House syrups. No shortcuts.
          </h2>
          <p className="text-cream/70 text-lg max-w-[48ch] mx-auto leading-relaxed">
            Every menu is custom. Every drink is made to order. We squeeze the
            citrus that morning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {MENU_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-ink-soft rounded-2xl p-8 md:p-9"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl font-bold text-cream">{cat.title}</h3>
                <span className="text-gold text-[13px] font-semibold uppercase" style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                  {cat.badge}
                </span>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] text-cream/80">
                    <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-cream/60 text-[16px] mb-8 max-w-[52ch] mx-auto leading-relaxed">
            First Round is dry-hire — you provide the alcohol, we bring
            everything else. Setup, tools, garnishes, ice, mixers, and staff.
          </p>
          <Link
            href="#book"
            className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-soft text-cream font-bold text-[17px] px-10 py-5 rounded-full transition-colors"
            style={{ letterSpacing: "var(--tracking-button)" }}
          >
            See Packages &amp; Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
