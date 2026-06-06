const galleryItems = [
  { label: "Bar Setup", span: "col-span-2 row-span-2" },
  { label: "Craft Cocktail", span: "col-span-1 row-span-1" },
  { label: "Happy Guests", span: "col-span-1 row-span-1" },
  { label: "Garnish Detail", span: "col-span-1 row-span-1" },
  { label: "Outdoor Event", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-warm font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Gallery
          </p>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-espresso mb-6">
            Moments We&apos;ve Mixed
          </h2>
          <p className="text-warm-500 text-lg max-w-2xl mx-auto">
            A glimpse into the events we&apos;ve had the pleasure of serving.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`${item.span} rounded-2xl bg-gradient-to-br from-warm-200 to-warm-300 flex items-center justify-center overflow-hidden group cursor-pointer relative`}
            >
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors" />
              <p className="text-warm-600 font-medium text-sm group-hover:text-cream relative z-10 transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-warm-400 text-sm mt-8 italic">
          Add your own event photos to personalize this gallery
        </p>
      </div>
    </section>
  );
}
