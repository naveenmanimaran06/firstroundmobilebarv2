import Link from "next/link";

const LINKS = [
  { label: "Packages", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Now", href: "#book" },
];

const SERVICE_AREAS = [
  "Tracy",
  "Stockton",
  "Modesto",
  "Livermore",
  "Pleasanton",
  "Dublin",
  "Fremont",
  "San Jose",
  "Sacramento",
];

export default function FooterSection() {
  return (
    <footer className="bg-ink pt-20 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-display font-bold text-2xl text-cream">First Round</span>
              <span
                className="text-[11px] font-semibold uppercase text-terracotta mt-1"
                style={{ letterSpacing: "var(--tracking-eyebrow)" }}
              >
                Mobile Bar
              </span>
            </div>
            <p className="text-cream/60 text-[15px] leading-relaxed max-w-[32ch]">
              Craft cocktails and mocktails for private events. Serving the Bay
              Area and Central Valley from Tracy, CA.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-[13px] font-semibold uppercase text-cream/40 mb-4"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/60 hover:text-gold text-[15px] transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Service Area */}
          <div>
            <p
              className="text-[13px] font-semibold uppercase text-cream/40 mb-4"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Contact
            </p>
            <div className="space-y-3 text-[15px] text-cream/60 mb-8">
              <p>Tracy, CA 95376</p>
              <p>
                <a
                  href="mailto:hello@firstroundmobilebar.com"
                  className="hover:text-gold transition-colors"
                >
                  hello@firstroundmobilebar.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+15555550100"
                  className="hover:text-gold transition-colors"
                >
                  (555) 555-0100
                </a>
              </p>
            </div>

            <p
              className="text-[13px] font-semibold uppercase text-cream/40 mb-3"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Service Area
            </p>
            <p className="text-cream/50 text-[14px] leading-relaxed">
              {SERVICE_AREAS.join(" · ")}
            </p>
          </div>
        </div>

        <div className="border-t border-cream/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-[14px]">
            &copy; 2025 First Round Mobile Bar
          </p>
          <p className="text-cream/30 text-[14px]">
            Licensed &amp; Insured &middot; Dry Hire &middot; Custom Menus
          </p>
        </div>
      </div>
    </footer>
  );
}
