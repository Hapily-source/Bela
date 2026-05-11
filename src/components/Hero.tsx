import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Kenyan leather craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-tan/20 border border-tan/30 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
              Authentic Kenyan Craftsmanship
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.1] mb-6">
            Bela True:
            <br />
            <span className="text-gold italic">Handcrafted</span>
            <br />
            Kenyan Excellence.
          </h1>

          {/* Subtext */}
          <p className="text-ivory/70 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
            Premium leather goods, meticulously handcrafted by Kenyan artisans using 
            100% locally sourced hides. Where tradition meets modern sophistication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#catalogue"
              className="group inline-flex items-center justify-center gap-3 bg-tan hover:bg-tan-light text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded"
            >
              Request Our Catalogue
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#collections"
              className="inline-flex items-center justify-center gap-3 border-2 border-ivory/30 hover:border-gold text-ivory hover:text-gold px-8 py-4 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded"
            >
              Explore Collections
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-ivory/10 pt-8">
            <div>
              <div className="font-heading text-3xl text-gold font-bold">100%</div>
              <div className="text-ivory/50 text-xs uppercase tracking-wider mt-1">Kenyan Made</div>
            </div>
            <div className="w-px h-12 bg-ivory/10" />
            <div>
              <div className="font-heading text-3xl text-gold font-bold">500+</div>
              <div className="text-ivory/50 text-xs uppercase tracking-wider mt-1">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-ivory/10" />
            <div>
              <div className="font-heading text-3xl text-gold font-bold">10+</div>
              <div className="text-ivory/50 text-xs uppercase tracking-wider mt-1">Years of Craft</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-ivory/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
