'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Escorts', path: '/services' },
  { name: 'Locations', path: '/locations' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-wider text-white group-hover:text-gold-500 transition-colors">
              ALINA
            </span>
            <span className="font-serif text-2xl md:text-3xl font-light tracking-wider text-gold-500">
              VIP
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${pathname === link.path ? 'text-gold-500' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm text-charcoal-200 hover:text-gold-400 transition-colors font-medium"
            >
              <Phone size={15} className="text-gold-400" />
              <span className="tracking-wider">{siteConfig.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="btn-gold !py-2.5 !px-6 text-[11px] rounded-full"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white hover:text-gold-500 transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 glass lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-5 pt-20 px-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-serif text-2xl tracking-wider transition-colors ${
                pathname === link.path ? 'text-gold-500' : 'text-white hover:text-gold-500'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-neutral-950 py-3 rounded-xl font-bold tracking-wider text-sm shadow-lg"
            >
              <Phone size={16} />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold tracking-wider text-sm shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
