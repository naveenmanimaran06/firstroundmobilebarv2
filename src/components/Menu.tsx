const cocktails = [
  {
    name: "Classic Old Fashioned",
    ingredients: "Bourbon, bitters, sugar, orange peel",
    category: "Classics",
  },
  {
    name: "Espresso Martini",
    ingredients: "Vodka, coffee liqueur, fresh espresso, vanilla",
    category: "Classics",
  },
  {
    name: "Aperol Spritz",
    ingredients: "Aperol, prosecco, soda water, orange slice",
    category: "Classics",
  },
  {
    name: "Lavender Lemonade",
    ingredients: "Gin, lavender syrup, fresh lemon, sparkling water",
    category: "Signature",
  },
  {
    name: "Smoky Paloma",
    ingredients: "Mezcal, grapefruit, lime, agave, smoked salt",
    category: "Signature",
  },
  {
    name: "Honey Bee",
    ingredients: "Bourbon, honey syrup, lemon juice, thyme",
    category: "Signature",
  },
  {
    name: "Garden Mule",
    ingredients: "Vodka, cucumber, mint, ginger beer, lime",
    category: "Seasonal",
  },
  {
    name: "Spiced Pear Fizz",
    ingredients: "Pear nectar, cinnamon, prosecco, star anise",
    category: "Seasonal",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-warm font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Sample Menu
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-espresso mb-6">
            A Taste of What We Pour
          </h2>
          <p className="text-warm-500 text-lg max-w-2xl mx-auto">
            Every menu is customized for your event. Here are some of our
            favorites to get you inspired.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cocktails.map((cocktail) => (
            <div
              key={cocktail.name}
              className="flex items-start gap-4 p-6 rounded-xl bg-warm-50 border border-warm-100 hover:border-warm-200 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-amber-warm/10 flex items-center justify-center mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-warm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-[var(--font-playfair)] text-lg font-bold text-espresso">
                    {cocktail.name}
                  </h3>
                  <span className="text-xs font-medium text-amber-warm bg-amber-warm/10 px-2 py-0.5 rounded-full">
                    {cocktail.category}
                  </span>
                </div>
                <p className="text-warm-500 text-sm">{cocktail.ingredients}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-warm-400 italic">
            + mocktails, beer, wine, and non-alcoholic options always available
          </p>
        </div>
      </div>
    </section>
  );
}
