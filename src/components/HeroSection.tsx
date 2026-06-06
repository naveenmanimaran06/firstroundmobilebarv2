export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-terracotta">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(239,178,47,0.25) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(28,16,11,0.4) 0%, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <p
          className="text-gold font-semibold uppercase text-[14px] mb-6"
          style={{ letterSpacing: "var(--tracking-eyebrow)" }}
        >
          Mobile Bartending · Tracy &amp; Bay Area
        </p>
        <h1
          className="font-display text-5xl md:text-7xl font-bold text-cream leading-[1.1] mb-8"
          style={{ letterSpacing: "var(--tracking-display)" }}
        >
          Craft Cocktails,
          <br />
          <span className="text-cream-warm italic">Delivered&nbsp;to&nbsp;You</span>
        </h1>
        <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Full bar service for weddings, birthdays, and private events.
          You buy the bottles — we bring the bar, the bartender, and everything
          in&nbsp;between.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="bg-gold text-ink px-8 py-4 rounded-xl text-[17px] font-bold hover:bg-gold-spark transition-colors shadow-lg"
            style={{ letterSpacing: "var(--tracking-button)", boxShadow: "var(--shadow-lift)" }}
          >
            Check Availability
          </a>
          <a
            href="#services"
            className="border-2 border-cream/30 text-cream px-8 py-4 rounded-xl text-[17px] font-bold hover:bg-cream/10 transition-colors"
          >
            How It Works
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-cream/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
