"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What does \"dry-hire\" mean?",
    answer:
      "You purchase the alcohol yourself at retail prices — no markup from us. We provide everything else: the bar setup, bartender, tools, ice, garnishes, mixers, cups, and napkins. We'll send you a detailed shopping list in advance so you know exactly what to buy.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 3–4 weeks in advance, especially for weekend events. Popular dates (holidays, wedding season) can fill up faster, so the earlier the better. Last-minute inquiries are always welcome though — we'll do our best to accommodate.",
  },
  {
    question: "What's included in the service?",
    answer:
      "Everything except the alcohol itself. That includes the mobile bar setup, a professional bartender, all bar tools and equipment, ice, garnishes, fresh citrus, mixers, cups, napkins, straws, and full cleanup at the end of the night.",
  },
  {
    question: "Do you serve non-alcoholic drinks?",
    answer:
      "Absolutely. We offer creative mocktails that look and taste just as good as the cocktails. Non-drinkers and designated drivers deserve great drinks too. We can build a full mocktail menu alongside your cocktail menu.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Tracy, California and serve the Central Valley, East Bay, and greater Bay Area. Travel fees may apply for events outside our core service area — just ask and we'll let you know.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is based on guest count, event duration, and the complexity of the drink menu. After your inquiry, we'll send a fully transparent, itemized quote — no hidden fees. You only pay for what you need.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream-paper py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-terracotta text-[14px] font-semibold uppercase mb-4"
            style={{ letterSpacing: "var(--tracking-eyebrow)" }}
          >
            FAQ
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-ink mb-6"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-cream rounded-xl border border-ink/8 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-display text-lg font-bold text-ink pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`shrink-0 h-5 w-5 text-terracotta transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-ink/60 leading-relaxed text-[16px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
