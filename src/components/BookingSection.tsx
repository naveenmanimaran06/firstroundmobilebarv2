"use client";

import { useState } from "react";

const EVENT_TYPES = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Baby / Bridal Shower",
  "Bachelorette / Bachelor",
  "Backyard / Pop-Up",
  "Quinceañera",
  "Other",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  eventType: string;
  guestCount: string;
  city: string;
  notes: string;
};

export default function BookingSection() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    guestCount: "",
    city: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full bg-ink border border-cream/12 rounded-xl px-4 py-3.5 text-cream placeholder-cream/30 text-[16px] focus:outline-none focus:border-terracotta transition-colors";

  const labelClasses =
    "block text-[13px] font-semibold text-cream/50 uppercase mb-2";

  return (
    <section id="book" className="bg-ink py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Copy */}
          <div className="lg:pt-4">
            <p
              className="text-gold text-[15px] font-semibold uppercase mb-4"
              style={{ letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Book Your Event
            </p>
            <h2
              className="font-display text-3xl md:text-5xl font-bold text-cream mb-6"
              style={{ letterSpacing: "var(--tracking-display)" }}
            >
              Check Availability
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-10 max-w-[44ch]">
              Fill out the form and we&apos;ll get back to you within a few
              hours. No commitment — just a quick conversation to see if
              we&apos;re a fit.
            </p>

            <div className="space-y-6">
              {[
                { label: "Fast response", detail: "Usually same day." },
                { label: "No commitment", detail: "No deposits until you're ready." },
                { label: "Transparent pricing", detail: "Full itemized quote before you commit." },
                { label: "Custom menu included", detail: "Built around your event." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-gold text-[15px] mt-0.5">&#10022;</span>
                  <div>
                    <span className="text-cream font-semibold text-[16px]">{item.label}</span>
                    <span className="text-cream/60 text-[16px]"> — {item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-ink-soft rounded-2xl p-10 md:p-12 text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">&#127881;</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-3">
                  Inquiry Received!
                </h3>
                <p className="text-cream/70 text-[16px] leading-relaxed max-w-[38ch] mx-auto">
                  We&apos;ll review your details and get back to you within a
                  few hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-ink-soft rounded-2xl p-8 md:p-10 space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Jane"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Smith"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@email.com"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Select type</option>
                      {EVENT_TYPES.map((et) => (
                        <option key={et} value={et}>
                          {et}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                      Guest Count
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={form.guestCount}
                      onChange={handleChange}
                      min={1}
                      placeholder="75"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                      Event City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Tracy, CA"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClasses} style={{ letterSpacing: "var(--tracking-eyebrow)" }}>
                    Anything else?
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Theme, vibe, favorite cocktails, dietary needs..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-terracotta-soft text-white font-bold px-6 rounded-xl transition-colors text-[17px] mt-2 cursor-pointer"
                  style={{ letterSpacing: "var(--tracking-button)", paddingTop: "18px", paddingBottom: "18px" }}
                >
                  Send Inquiry
                </button>

                <p className="text-cream/35 text-[14px] text-center leading-relaxed">
                  No spam. We reply within a few hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
