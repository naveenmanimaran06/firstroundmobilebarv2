const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Tell us about your event — the date, guest count, vibe, and any drink preferences. We love hearing what you have in mind.",
  },
  {
    number: "02",
    title: "Plan Together",
    description:
      "We'll craft a custom drink menu and package tailored to your event. You pick the cocktails, we handle the rest.",
  },
  {
    number: "03",
    title: "We Show Up",
    description:
      "On the day of your event, we arrive early to set up a beautiful bar. You just relax and enjoy with your guests.",
  },
  {
    number: "04",
    title: "Cheers!",
    description:
      "We serve, we pour, we clean up. You get to be the host with the most — no stress, just great drinks and great company.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-espresso text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-warm font-medium tracking-[0.2em] uppercase text-sm mb-4">
            How It Works
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Simple as 1, 2, 3...&nbsp;4
          </h2>
          <p className="text-warm-300 text-lg max-w-2xl mx-auto">
            Booking your mobile bar experience is easy. Here&apos;s how we go
            from &quot;hello&quot; to &quot;cheers!&quot;
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-warm-700" />
              )}
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-warm/20 flex items-center justify-center mb-6 relative z-10">
                <span className="font-[var(--font-playfair)] text-xl font-bold text-amber-warm">
                  {step.number}
                </span>
              </div>
              <h3 className="font-[var(--font-playfair)] text-xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-warm-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
