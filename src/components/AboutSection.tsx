const CREDENTIALS = [
  "Licensed & Insured",
  "Dry-hire model",
  "Custom menus",
  "Tracy & Bay Area",
  "Mocktails available",
  "Fast response",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-ink py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-gold text-sm font-semibold uppercase mb-3"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            Our Story
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-cream"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Behind the Bar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-ink-soft rounded-2xl border border-cream/10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-terracotta/30 flex items-center justify-center mb-4">
                <span className="text-gold text-3xl">&#127865;</span>
              </div>
              <p className="text-cream/30 text-sm">Photo coming soon</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta rounded-2xl -z-0 opacity-60" />
          </div>

          <div>
            <blockquote className="border-l-4 border-gold pl-6 mb-8">
              <p className="font-display text-2xl font-bold text-cream leading-snug italic">
                &ldquo;Good drinks make any room feel like a celebration.&rdquo;
              </p>
            </blockquote>

            <div className="space-y-5 text-cream/70 leading-relaxed">
              <p>
                First Round Mobile Bar started with a simple belief: great
                cocktails shouldn&apos;t cost a fortune, and your guests deserve
                better than a cash bar with a bored bartender. Based in Tracy,
                California, we built a mobile bar service that brings the craft
                cocktail experience to you — wherever you are in the Central
                Valley or Bay Area.
              </p>
              <p>
                We operate on a dry-hire model, which means you buy the alcohol
                at retail prices and we handle everything else. The bar setup,
                the tools, the fresh citrus, the garnishes, the ice, the mixers
                — all of it arrives with us. We send you a detailed shopping
                list in advance so there are no surprises.
              </p>
              <p>
                As a solo operator, every event gets personal attention.
                I&apos;ll work with you directly to design a custom menu, answer
                every question, and make sure the bar is a highlight of your
                event — not an afterthought. Whether it&apos;s 20 guests in a
                backyard or 200 at a wedding venue, the drinks will be fresh,
                the service will be smooth, and your guests will be talking about
                it afterward.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {CREDENTIALS.map((cred) => (
                <span
                  key={cred}
                  className="px-3 py-1.5 bg-cream/10 border border-cream/15 rounded-full text-sm text-cream/80 font-medium"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
