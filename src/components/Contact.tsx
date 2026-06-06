"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info side */}
          <div>
            <p className="text-amber-warm font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-espresso mb-6 leading-tight">
              Let&apos;s Plan Your
              <br />
              Perfect Event
            </h2>
            <p className="text-warm-500 text-lg leading-relaxed mb-10">
              Whether you have a date in mind or you&apos;re just exploring,
              we&apos;d love to hear from you. No event is too small — if
              you&apos;re celebrating, we want to be there.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-warm/10 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-warm"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-espresso">Email Us</p>
                  <p className="text-warm-500">hello@firstroundmobilebar.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-warm/10 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-warm"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-espresso">Call or Text</p>
                  <p className="text-warm-500">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-warm/10 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-warm"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-espresso">Service Area</p>
                  <p className="text-warm-500">
                    Serving the greater metro area & surroundings
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-sm border border-warm-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-amber-warm/10 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-amber-warm"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-espresso mb-3">
                  Thank You!
                </h3>
                <p className="text-warm-500">
                  We&apos;ll be in touch soon to start planning your event.
                  Cheers!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-espresso mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-espresso placeholder:text-warm-300 focus:outline-none focus:ring-2 focus:ring-amber-warm/50 focus:border-amber-warm transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-espresso mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-espresso placeholder:text-warm-300 focus:outline-none focus:ring-2 focus:ring-amber-warm/50 focus:border-amber-warm transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-espresso mb-1.5"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-espresso focus:outline-none focus:ring-2 focus:ring-amber-warm/50 focus:border-amber-warm transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-espresso mb-1.5"
                    >
                      Guest Count
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-espresso placeholder:text-warm-300 focus:outline-none focus:ring-2 focus:ring-amber-warm/50 focus:border-amber-warm transition-colors"
                      placeholder="15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-espresso mb-1.5"
                  >
                    Tell Us About Your Event
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 bg-warm-50 text-espresso placeholder:text-warm-300 focus:outline-none focus:ring-2 focus:ring-amber-warm/50 focus:border-amber-warm transition-colors resize-none"
                    placeholder="Backyard birthday for 20 friends, love whiskey cocktails..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-warm-800 text-cream py-4 rounded-xl font-semibold text-lg hover:bg-warm-900 transition-colors shadow-sm cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
