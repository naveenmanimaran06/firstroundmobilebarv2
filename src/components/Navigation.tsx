"use client";

import { useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-cream/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-display text-xl font-bold text-cream tracking-wide"
        >
          First Round
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-semibold text-cream/60 hover:text-gold transition-colors uppercase"
                style={{ letterSpacing: "var(--tracking-eyebrow)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#book"
              className="inline-block bg-terracotta text-white px-5 py-2.5 rounded-xl text-[14px] font-bold hover:bg-terracotta-soft transition-colors"
              style={{ letterSpacing: "var(--tracking-button)" }}
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-cream"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink border-t border-cream/10 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-cream/70 hover:text-gold transition-colors font-semibold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="inline-block bg-terracotta text-white px-5 py-2.5 rounded-xl text-[14px] font-bold hover:bg-terracotta-soft transition-colors"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
