export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso text-cream">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-warm-900 to-warm-800 opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(184,134,11,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(184,134,11,0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <p className="text-amber-warm font-medium tracking-[0.3em] uppercase text-sm mb-6">
          Mobile Bartending for Intimate Occasions
        </p>
        <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl font-bold leading-tight mb-8">
          We Bring the Bar
          <br />
          <span className="text-champagne italic">to You</span>
        </h1>
        <p className="text-warm-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Handcrafted cocktails, professional service, and a warm atmosphere —
          delivered right to your backyard, living room, or wherever you
          celebrate.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-amber-warm text-espresso px-8 py-4 rounded-full text-lg font-semibold hover:bg-warm-300 transition-colors shadow-lg"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="border-2 border-warm-400 text-warm-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-warm-800/50 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-warm-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
