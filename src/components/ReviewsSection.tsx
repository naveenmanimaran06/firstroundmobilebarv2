const REVIEWS = [
  {
    quote:
      "The bar was the highlight of our wedding. Guests are still talking about the drinks weeks later. Worth every penny.",
    name: "Alyssa & Jordan",
    event: "Wedding · 150 guests",
  },
  {
    quote:
      "I loved the dry-hire model — saved us hundreds on alcohol. The bartender was professional, warm, and made incredible cocktails.",
    name: "Marcus T.",
    event: "Birthday Party · 40 guests",
  },
  {
    quote:
      "Set up was beautiful, drinks were amazing, cleanup was spotless. We literally just showed up to our own party and enjoyed it.",
    name: "Priya & David",
    event: "Engagement Party · 60 guests",
  },
  {
    quote:
      "First Round handled our corporate mixer flawlessly. Custom menu, professional service, and they even made killer mocktails for non-drinkers.",
    name: "Sarah K.",
    event: "Corporate Event · 80 guests",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-ink py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-gold text-[14px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            Reviews
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-cream mb-6"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-ink-soft rounded-2xl p-8 border border-cream/8"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-gold"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-cream/70 leading-relaxed mb-6 text-[16px] italic">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-cream text-[16px]">{review.name}</p>
                <p className="text-cream/40 text-[14px]">{review.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
