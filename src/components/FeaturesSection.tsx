import { GlassWater, Calendar, MapPin, Leaf } from "lucide-react";

const FEATURES = [
  {
    icon: GlassWater,
    title: "Craft Cocktails",
    description:
      "Custom menus built around your event — from signature cocktails named after you to classics done right. Fresh citrus, house syrups, proper glassware.",
  },
  {
    icon: Leaf,
    title: "Zero-Proof Menu",
    description:
      "Every event includes a dedicated mocktail menu. Built drinks, real ingredients, same glassware — not an afterthought.",
  },
  {
    icon: Calendar,
    title: "Dry Hire — You Save",
    description:
      "You provide the alcohol at retail prices, we bring everything else: bar, tools, garnishes, ice, mixers, and staff. We send you the shopping list.",
  },
  {
    icon: MapPin,
    title: "Tracy to the Bay",
    description:
      "Based in Tracy, CA. We travel to Stockton, Modesto, Livermore, San Jose, Sacramento, and everywhere in between.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-cream-paper py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="font-display text-3xl md:text-5xl font-bold text-ink text-balance"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Everything your bar needs.
            <br className="hidden md:block" />
            <span className="text-terracotta"> Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-2"
              >
                <div className="w-11 h-11 bg-terracotta/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-terracotta" />
                </div>
                <h3 className="font-display text-xl md:text-[22px] font-bold text-ink mb-3">
                  {feature.title}
                </h3>
                <p className="text-ink/70 text-[16px] leading-relaxed max-w-[50ch]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
