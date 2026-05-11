import { Briefcase, Footprints, HandHeart, ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: 'Corporate Executive',
    subtitle: 'Command the Boardroom',
    description:
      'Premium laptop bags, belts, and wallets crafted from the finest local hides. Designed for the professional who demands excellence in every detail.',
    items: ['Laptop Bags', 'Executive Belts', 'Card Wallets'],
    image:
      'https://images.pexels.com/photos/28028270/pexels-photo-28028270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    icon: Briefcase,
    accent: 'from-tan to-tan-dark',
  },
  {
    title: "Gentleman's Casual",
    subtitle: 'Step with Distinction',
    description:
      'Hand-stitched shoes and loafers that marry traditional Kenyan leatherwork with contemporary style. Every step tells a story of artisan mastery.',
    items: ['Hand-Stitched Shoes', 'Casual Loafers', 'Leather Sandals'],
    image:
      'https://images.pexels.com/photos/29258015/pexels-photo-29258015.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    icon: Footprints,
    accent: 'from-charcoal to-charcoal-light',
  },
  {
    title: "Ladies' Collection",
    subtitle: 'Elegance Redefined',
    description:
      'Elegant handbags and bespoke accessories that celebrate feminine grace. Each piece is a unique expression of Kenyan craftsmanship and modern sophistication.',
    items: ['Elegant Handbags', 'Clutch Purses', 'Bespoke Accessories'],
    image:
      'https://images.pexels.com/photos/31666160/pexels-photo-31666160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    icon: HandHeart,
    accent: 'from-gold to-tan',
  },
];

export default function ProductCategories() {
  return (
    <section id="collections" className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-tan text-xs uppercase tracking-[0.3em] font-semibold">
            Our Collections
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-4 mb-6">
            Curated for the <span className="text-tan italic">Discerning</span>
          </h2>
          <p className="text-charcoal/60 text-lg leading-relaxed">
            Each collection is thoughtfully designed for those who appreciate the 
            intersection of heritage craft and modern living.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid gap-8 lg:gap-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={cat.title}
                className={`group grid lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-lg shadow-charcoal/5 hover:shadow-xl hover:shadow-charcoal/10 transition-shadow duration-500 ${
                  isReversed ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-72 lg:h-[420px] overflow-hidden ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent} opacity-20`} />
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center">
                      <Icon size={22} className="text-tan" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`p-8 lg:p-12 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : ''
                  }`}
                >
                  <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl text-charcoal mt-3 mb-4">
                    {cat.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed mb-6">{cat.description}</p>

                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-1.5 bg-cream text-charcoal/70 text-xs uppercase tracking-wider font-medium rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#catalogue"
                    className="inline-flex items-center gap-2 text-tan hover:text-tan-dark text-sm uppercase tracking-wider font-semibold group/link transition-colors"
                  >
                    View Collection
                    <ArrowUpRight
                      size={16}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
