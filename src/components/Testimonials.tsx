const testimonials = [
  {
    quote:
      "They turned our tiny backyard into the coziest cocktail bar. Every single guest asked where we found them!",
    name: "Sarah M.",
    event: "30th Birthday Party",
  },
  {
    quote:
      "The drinks were incredible and the bartender was so warm and personable. It felt like having a friend behind the bar, not just a service.",
    name: "David & Priya",
    event: "Engagement Celebration",
  },
  {
    quote:
      "I wanted to actually enjoy my own dinner party for once. First Round handled everything — setup, drinks, cleanup. Absolute game changer.",
    name: "Marcus T.",
    event: "Dinner Party for 12",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-warm font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Kind Words
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-espresso mb-6">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-cream rounded-2xl p-8 shadow-sm border border-warm-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-amber-warm"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-warm-600 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-espresso">{t.name}</p>
                <p className="text-warm-400 text-sm">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
