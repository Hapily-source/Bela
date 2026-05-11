import { MapPin, Users, Leaf, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: MapPin,
    title: 'Locally Sourced',
    text: 'Every hide is ethically sourced from Kenyan farms, ensuring traceability and quality from pasture to product.',
  },
  {
    icon: Users,
    title: 'Artisan Empowerment',
    text: 'Each purchase directly supports Kenyan leather artisans and their families, preserving generational craft skills.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Craft',
    text: 'We use traditional, eco-conscious tanning methods that honor both the material and the environment.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    text: 'Every piece undergoes rigorous quality checks ensuring durability that stands the test of time.',
  },
];

export default function MadeInKenya() {
  return (
    <section id="story" className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                <div className="w-6 h-4 rounded-sm overflow-hidden flex flex-col">
                  <div className="h-1 bg-black" />
                  <div className="h-0.5 bg-white" />
                  <div className="h-1 bg-[#006600]" />
                  <div className="h-0.5 bg-white" />
                  <div className="h-1 bg-[#bb0000]" />
                </div>
              </div>
              <span className="text-tan text-xs uppercase tracking-[0.3em] font-semibold">
                Made in Kenya
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Every Stitch Tells a{' '}
              <span className="text-tan italic">Kenyan Story</span>
            </h2>

            <p className="text-charcoal/60 text-lg leading-relaxed mb-4">
              At Bela True, we believe that true luxury is rooted in authenticity. 
              Every product in our collection is 100% handcrafted in Kenya, using 
              premium local hides selected for their natural beauty and durability.
            </p>
            <p className="text-charcoal/60 leading-relaxed mb-10">
              Our artisans carry decades of leatherworking expertise passed down 
              through generations. When you choose Bela True, you're not just buying 
              a product—you're investing in Kenyan talent, supporting local 
              communities, and wearing a piece of authentic African craftsmanship.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-tan/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-tan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal text-sm mb-1">{h.title}</h4>
                      <p className="text-charcoal/50 text-sm leading-relaxed">{h.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/9744735/pexels-photo-9744735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Kenyan artisan crafting leather goods"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
            </div>
            {/* Overlapping accent card */}
            <div className="absolute -bottom-6 -left-4 sm:left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Users size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-heading text-xl font-bold text-charcoal">50+</div>
                  <div className="text-xs text-charcoal/50 uppercase tracking-wider">Local Artisans</div>
                </div>
              </div>
              <p className="text-charcoal/60 text-xs leading-relaxed">
                Supporting families and preserving Kenya's rich leather craft heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
