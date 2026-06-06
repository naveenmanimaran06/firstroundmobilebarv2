export default function FooterSection() {
  return (
    <footer className="bg-ink-soft py-16 px-6 border-t border-cream/8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              First Round
            </h3>
            <p className="text-cream/50 leading-relaxed text-[16px]">
              Mobile bartending for weddings, parties, and private events.
              Based in Tracy, serving the Central Valley and Bay Area.
            </p>
          </div>

          <div>
            <h4
              className="font-semibold text-cream/70 uppercase text-[13px] mb-4"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Menu", href: "#menu" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
                { label: "Book Now", href: "#book" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/40 hover:text-gold transition-colors text-[16px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-cream/70 uppercase text-[13px] mb-4"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Get in Touch
            </h4>
            <div className="space-y-3 text-cream/50 text-[16px]">
              <p>hello@firstroundmobilebar.com</p>
              <p>(209) 555-0127</p>
              <p>Tracy, CA · Bay Area</p>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-cream/8 flex items-center justify-center text-cream/40 hover:bg-terracotta hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-cream/8 flex items-center justify-center text-cream/40 hover:bg-terracotta hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-cream/8 flex items-center justify-center text-cream/40 hover:bg-terracotta hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11V9a6.27 6.27 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.46V13a8.16 8.16 0 005.58 2.18V11.7a4.81 4.81 0 01-2.41-.65A4.84 4.84 0 0119.59 6.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-[14px]">
            &copy; {new Date().getFullYear()} First Round Mobile Bar. All rights
            reserved.
          </p>
          <p className="text-cream/30 text-[14px]">
            Drink responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
