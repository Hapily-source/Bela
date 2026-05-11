import { Gift, Star, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Gift,
    title: 'Corporate Rewards',
    description: 'Premium leather sets for employee milestones, client appreciation, and executive gifts.',
  },
  {
    icon: Star,
    title: 'Personal Milestones',
    description: 'Celebrate birthdays, anniversaries, and achievements with a gift that lasts a lifetime.',
  },
  {
    icon: Award,
    title: 'Custom Branding',
    description: 'Add personalized embossing, monograms, or corporate logos to any leather piece.',
  },
  {
    icon: Heart,
    title: 'Bespoke Packaging',
    description: 'Every gift arrives in our signature box with hand-tied ribbon and a personal note.',
  },
];

export default function GiftingSuite() {
  return (
    <section id="gifting" className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/gifting.jpg"
                alt="Bela True Gifting Suite"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-gold text-charcoal px-6 py-4 rounded-xl shadow-lg">
              <div className="font-heading text-2xl font-bold">100%</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Customizable</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
              The Gifting Suite
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ivory mt-4 mb-6 leading-tight">
              Customized Gift{' '}
              <span className="text-gold italic">Packages</span>
            </h2>
            <p className="text-ivory/60 text-lg leading-relaxed mb-10">
              Whether it's a corporate reward for your top performers or a personal milestone 
              worth celebrating, our Gifting Suite offers bespoke leather packages that 
              leave a lasting impression.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-tan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-tan/30 transition-colors">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="text-ivory font-semibold text-sm mb-1">{feature.title}</h4>
                        <p className="text-ivory/50 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#catalogue"
              className="inline-flex items-center gap-3 bg-tan hover:bg-tan-light text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded mt-10"
            >
              <Gift size={18} />
              Enquire About Gifting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
