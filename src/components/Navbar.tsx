import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Collections', href: '#collections' },
    { label: 'Gifting Suite', href: '#gifting' },
    { label: 'Our Story', href: '#story' },
    { label: 'Catalogue', href: '#catalogue' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-tan flex items-center justify-center">
              <span className="font-heading text-white text-lg font-bold leading-none">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-ivory text-xl font-semibold tracking-wider leading-tight">
                BELA TRUE
              </span>
              <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-medium leading-tight">
                Kenyan Leather
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-ivory/70 hover:text-gold text-sm tracking-wide uppercase font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#catalogue"
              className="bg-tan hover:bg-tan-light text-white px-6 py-2.5 text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded"
            >
              Get Catalogue
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ivory p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 space-y-3 bg-charcoal border-t border-white/5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-ivory/70 hover:text-gold text-sm tracking-wide uppercase font-medium py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#catalogue"
            onClick={() => setOpen(false)}
            className="block text-center bg-tan hover:bg-tan-light text-white px-6 py-3 text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded mt-2"
          >
            Get Catalogue
          </a>
        </div>
      </div>
    </nav>
  );
}
