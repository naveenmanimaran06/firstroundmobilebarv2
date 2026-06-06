const COCKTAILS = [
  {
    name: "Classic Old Fashioned",
    ingredients: "Bourbon, bitters, demerara, orange peel",
    tag: "Classic",
  },
  {
    name: "Espresso Martini",
    ingredients: "Vodka, coffee liqueur, fresh espresso, vanilla",
    tag: "Classic",
  },
  {
    name: "Paloma Fresca",
    ingredients: "Tequila, fresh grapefruit, lime, agave, Tajín rim",
    tag: "Classic",
  },
  {
    name: "Aperol Spritz",
    ingredients: "Aperol, prosecco, soda water, orange slice",
    tag: "Classic",
  },
  {
    name: "Lavender Collins",
    ingredients: "Gin, lavender syrup, fresh lemon, sparkling water",
    tag: "Signature",
  },
  {
    name: "Smoky Honey Bee",
    ingredients: "Mezcal, honey syrup, lemon, smoked rosemary",
    tag: "Signature",
  },
  {
    name: "Spiced Pear Fizz",
    ingredients: "Pear nectar, cinnamon, prosecco, star anise",
    tag: "Seasonal",
  },
  {
    name: "Cucumber Garden Mule",
    ingredients: "Vodka, cucumber, mint, ginger beer, lime",
    tag: "Seasonal",
  },
];

const MOCKTAILS = [
  {
    name: "Virgin Espresso Tonic",
    ingredients: "Cold brew, tonic water, vanilla, orange peel",
  },
  {
    name: "Berry Lavender Spritz",
    ingredients: "Muddled berries, lavender syrup, soda, lemon",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-cream-paper py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-terracotta text-[14px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            Sample Menu
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-ink mb-6"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            A Taste of What We Pour
          </h2>
          <p className="text-ink/60 text-lg max-w-2xl mx-auto">
            Every menu is custom-built for your event. Here are some favorites
            to get you inspired.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          {COCKTAILS.map((drink) => (
            <div
              key={drink.name}
              className="flex items-start gap-4 p-5 rounded-xl bg-cream border border-ink/8 hover:border-terracotta/25 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center mt-0.5">
                <span className="text-terracotta text-sm">&#9830;</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {drink.name}
                  </h3>
                  <span className="text-[11px] font-bold text-terracotta bg-terracotta/10 px-2 py-0.5 rounded-full uppercase">
                    {drink.tag}
                  </span>
                </div>
                <p className="text-ink/50 text-[15px]">{drink.ingredients}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mocktails */}
        <div className="max-w-4xl mx-auto">
          <h3
            className="font-display text-xl font-bold text-ink text-center mb-5"
          >
            Mocktails
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {MOCKTAILS.map((drink) => (
              <div
                key={drink.name}
                className="flex items-start gap-4 p-5 rounded-xl bg-olive/8 border border-olive/15 hover:border-olive/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-olive/15 flex items-center justify-center mt-0.5">
                  <span className="text-olive text-sm">&#10047;</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink mb-1">
                    {drink.name}
                  </h3>
                  <p className="text-ink/50 text-[15px]">{drink.ingredients}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-ink/40 text-[15px] mt-10 italic">
          + beer, wine, and non-alcoholic options always available
        </p>
      </div>
    </section>
  );
}
