import { Mail, Phone, MapPin } from 'lucide-react';

function FacebookIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TiktokIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const socials = [
  { icon: FacebookIcon, label: 'Bella True', href: 'https://facebook.com/BellaTrue' },
  { icon: InstagramIcon, label: '@Bella True', href: 'https://instagram.com/BellaTrue' },
  { icon: TiktokIcon, label: 'Bella True', href: 'https://tiktok.com/@BellaTrue' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-tan flex items-center justify-center">
                <span className="font-heading text-white text-lg font-bold leading-none">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-ivory text-lg font-semibold tracking-wider leading-tight">
                  BELA TRUE
                </span>
                <span className="text-gold text-[9px] tracking-[0.25em] uppercase font-medium leading-tight">
                  Kenyan Leather
                </span>
              </div>
            </div>
            <p className="text-ivory/50 text-sm leading-relaxed mb-6 max-w-xs">
              100% handcrafted Kenyan leather goods for the discerning professional. 
              Authentic craftsmanship, enduring quality.
            </p>
            {/* Social Links with Labels */}
            <div className="flex flex-col gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-tan/20 flex items-center justify-center transition-colors">
                      <Icon size={15} className="text-ivory/50 group-hover:text-gold transition-colors" />
                    </div>
                    <span className="text-ivory/50 group-hover:text-gold text-sm transition-colors">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-ivory font-semibold text-sm uppercase tracking-wider mb-5">
              Collections
            </h4>
            <ul className="space-y-3">
              {['Corporate Executive', "Gentleman's Casual", "Ladies' Collection", 'Gifting Suite'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#collections"
                      className="text-ivory/50 hover:text-gold text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-ivory font-semibold text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Artisans', 'Sustainability', 'Custom Orders'].map((item) => (
                <li key={item}>
                  <a
                    href="#story"
                    className="text-ivory/50 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ivory font-semibold text-sm uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-ivory/50 text-sm">hello@belatrue.co.ke</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="tel:0710823501" className="text-ivory/50 hover:text-gold text-sm transition-colors">
                  0710 823 501
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-ivory/50 text-sm">RNG Plaza, 2nd Floor<br />Nairobi, Kenya</span>
              </li>
            </ul>

            {/* Social handles in contact */}
            <h4 className="text-ivory font-semibold text-sm uppercase tracking-wider mt-8 mb-4">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 group"
                    >
                      <Icon size={15} className="text-ivory/40 group-hover:text-gold transition-colors" />
                      <span className="text-ivory/50 group-hover:text-gold text-sm transition-colors">
                        {social.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ivory/30 text-xs">
            © {new Date().getFullYear()} Bela True. All rights reserved. Proudly Made in Kenya 🇰🇪
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-ivory/30 hover:text-ivory/50 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-ivory/30 hover:text-ivory/50 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
