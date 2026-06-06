"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What exactly is a dry-hire bar?",
    answer:
      "You purchase the alcohol yourself at retail prices (Costco, Total Wine, etc.) and we bring everything else: bar setup, tools, fresh citrus, garnishes, ice, mixers, syrups, and a professional bartender. We send you a detailed shopping list. Most clients save significantly compared to full-service bars.",
  },
  {
    question: "How far do you travel?",
    answer:
      "We're based in Tracy, CA and cover Stockton, Modesto, Livermore, Pleasanton, Dublin, Fremont, San Jose, Sacramento, and beyond. No travel fee within 30 miles of Tracy. $75 surcharge beyond that.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Full liability insurance, California ABC compliant. We can provide a certificate of insurance for your venue.",
  },
  {
    question: "Do you offer mocktails?",
    answer:
      "Every event includes a dedicated zero-proof menu — built drinks, real ingredients, same glassware. Non-drinking guests get the same attention and craft as everyone else.",
  },
  {
    question: "What's included in your packages?",
    answer:
      "Professional bartender(s), portable bar setup, all mixing tools, fresh citrus and garnishes, ice, mixers, syrups, cups, napkins, and a custom cocktail menu. Add-ons include mocktail station, mimosa bar, and signature cocktail creation.",
  },
  {
    question: "How early should I book?",
    answer:
      "4–8 weeks for standard events, 3–6 months for weddings or large events. We do accommodate last-minute bookings when available.",
  },
  {
    question: "What's the minimum event size?",
    answer:
      "Around 15 guests. No strict maximum — we've served 200+ guest events with additional staffing.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section id="faq" className="bg-cream-paper py-24 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-display text-3xl md:text-5xl font-bold text-ink"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-1"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-7 py-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink text-[16px] md:text-[17px] pr-6 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`text-terracotta text-2xl font-bold flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-7 pb-6 -mt-1">
                    <p className="text-ink/70 leading-relaxed text-[16px] max-w-[52ch]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <p className="text-ink/60 text-[16px] mb-5">Still have questions?</p>
          <a
            href="#book"
            className="inline-flex items-center bg-terracotta hover:bg-terracotta-soft text-white font-semibold text-[16px] px-8 py-4 rounded-full transition-colors"
            style={{ letterSpacing: "var(--tracking-button)" }}
          >
            Ask us directly
          </a>
        </div>
      </div>
    </section>
  );
}
