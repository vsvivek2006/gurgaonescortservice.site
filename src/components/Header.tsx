import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Escort Services', path: '/services' },
  { name: 'Call Girls', path: '/call-girls' },
  { name: 'Locations', path: '/locations' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl md:text-3xl font-medium tracking-wider text-white group-hover:text-gold-500 transition-colors">
              ALINA
            </span>
            <span className="font-serif text-2xl md:text-3xl font-light tracking-wider text-gold-500">
              VIP
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-gold-500' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm text-charcoal-200 hover:text-gold-500 transition-colors"
            >
              <Phone size={16} className="text-gold-500" />
              <span className="tracking-wider">{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gold-500 p-2"
            aria-label="Toggle menu"
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
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-serif text-2xl tracking-wider transition-colors ${
                location.pathname === link.path ? 'text-gold-500' : 'text-white hover:text-gold-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-gold-500 mt-6 font-sans tracking-wider"
          >
            <Phone size={18} />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}