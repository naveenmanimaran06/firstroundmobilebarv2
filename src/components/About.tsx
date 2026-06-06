export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-warm-200 to-warm-300 overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-warm-400/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-warm-700"
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
                  <p className="text-warm-700 font-medium italic">
                    Your bartender, setting up for
                    <br />
                    an evening of great drinks
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-warm/10 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-amber-warm font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-espresso mb-6 leading-tight">
              Small Events,
              <br />
              Big Impressions
            </h2>
            <p className="text-warm-600 text-lg leading-relaxed mb-6">
              First Round Mobile Bar was born from a simple idea: every
              gathering, no matter how small, deserves a great bar experience.
              We&apos;re not about massive venues or corporate galas — we&apos;re
              about the backyard birthday, the intimate dinner party, the
              surprise celebration for someone special.
            </p>
            <p className="text-warm-600 text-lg leading-relaxed mb-8">
              With years of bartending experience and a genuine love for
              crafting the perfect drink, we bring warmth, personality, and
              expertly mixed cocktails to your doorstep. Your event, your vibe,
              our bar.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="font-[var(--font-playfair)] text-4xl font-bold text-amber-warm">
                  200+
                </p>
                <p className="text-warm-500 text-sm mt-1">Events Served</p>
              </div>
              <div>
                <p className="font-[var(--font-playfair)] text-4xl font-bold text-amber-warm">
                  5★
                </p>
                <p className="text-warm-500 text-sm mt-1">Average Rating</p>
              </div>
              <div>
                <p className="font-[var(--font-playfair)] text-4xl font-bold text-amber-warm">
                  100%
                </p>
                <p className="text-warm-500 text-sm mt-1">Love & Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
