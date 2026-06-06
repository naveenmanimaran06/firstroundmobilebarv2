const services = [
  {
    title: "Cocktail Parties",
    description:
      "Custom cocktail menus tailored to your taste. From classic old fashioneds to creative seasonal mixes, we craft each drink with care.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Birthday Celebrations",
    description:
      "Make their birthday unforgettable with a personal bartender. We'll create a signature drink just for the guest of honor.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 15.546M12 3v1m0 11v1m-4.93-9.07l.707.707M17.66 6.34l-.707.707"
        />
      </svg>
    ),
  },
  {
    title: "Dinner Parties",
    description:
      "Elevate your dinner party with paired cocktails and wine service. We handle the drinks so you can enjoy your guests.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 8v2m-4-4h8"
        />
      </svg>
    ),
  },
  {
    title: "Backyard Gatherings",
    description:
      "From summer BBQs to fall bonfire nights, we set up a beautiful mobile bar right in your backyard with everything you need.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Engagement Parties",
    description:
      "Toast to love with champagne service and specialty cocktails. We make your engagement celebration as special as the moment itself.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Holiday Parties",
    description:
      "Festive cocktails for any holiday. Themed drinks, seasonal garnishes, and the holiday spirit — all served with a smile.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-warm font-medium tracking-[0.2em] uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-espresso mb-6">
            Perfect for Every Small Occasion
          </h2>
          <p className="text-warm-500 text-lg max-w-2xl mx-auto">
            No event is too small for great drinks. We specialize in bringing
            a polished bar experience to intimate gatherings of all kinds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-warm-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-warm/10 flex items-center justify-center text-amber-warm mb-6 group-hover:bg-amber-warm/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-[var(--font-playfair)] text-xl font-bold text-espresso mb-3">
                {service.title}
              </h3>
              <p className="text-warm-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
