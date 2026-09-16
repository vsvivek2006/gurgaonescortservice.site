import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { locations } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 pt-16 pb-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-medium text-white mb-2">
              Gurgaon <span className="text-gold-500 font-light">Escorts</span>
            </h3>
            <p className="text-sm text-charcoal-400 leading-relaxed mb-6">
              {siteConfig.tagline}. Premium luxury escort services in Gurgaon for discerning gentlemen.
            </p>
            <div className="flex gap-4">
              {siteConfig.socialLinks.map((social) => {
                const Icon = social.icon === 'Instagram' ? Instagram : social.icon === 'Twitter' ? Twitter : Facebook;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-charcoal-600 flex items-center justify-center text-charcoal-300 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra uppercase text-gold-500 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'FAQ', path: '/faq' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-charcoal-400 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra uppercase text-gold-500 mb-5">Service Categories</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-charcoal-400 hover:text-gold-500 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-ultra uppercase text-gold-500 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-charcoal-400">
                <MapPin size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm text-charcoal-400 hover:text-gold-500 transition-colors"
                >
                  <Phone size={16} className="text-gold-500 flex-shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-charcoal-400 hover:text-gold-500 transition-colors"
                >
                  <MessageCircle size={16} className="text-gold-500 flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-charcoal-400 hover:text-gold-500 transition-colors"
                >
                  <Mail size={16} className="text-gold-500 flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Primary Service Locations Strip */}
        <div className="border-t border-charcoal-700 pt-8 mb-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-sans text-xs tracking-ultra uppercase text-gold-500">Service Locations Directory</h4>
              <p className="text-xs text-charcoal-400 mt-1">
                24/7 five-star hotel and private residential outcalls across Delhi NCR.
              </p>
            </div>
            <Link
              href="/locations"
              className="text-xs text-gold-400 hover:text-gold-300 font-semibold underline underline-offset-4 flex items-center gap-1.5 self-start sm:self-auto"
            >
              Explore All 108 Locations &amp; Sectors &rarr;
            </Link>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wider text-charcoal-400 font-semibold mb-2.5">
              Regional Master Hubs
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {locations
                .filter((l) => l.isHub)
                .map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="text-xs text-gold-400/90 hover:text-gold-300 font-medium transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wider text-charcoal-400 font-semibold mb-2.5">
              Key Business Corridors &amp; Hospitality Districts
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                { name: 'Cyber City', slug: 'cyber-city' },
                { name: 'Golf Course Road', slug: 'golf-course-road' },
                { name: 'DLF Phase 1', slug: 'dlf-phase-1' },
                { name: 'DLF Phase 2', slug: 'dlf-phase-2' },
                { name: 'DLF Phase 5', slug: 'dlf-phase-5' },
                { name: 'Aerocity', slug: 'aerocity' },
                { name: 'MG Road', slug: 'mg-road' },
                { name: 'Sohna Road', slug: 'sohna-road' },
                { name: 'Sushant Lok', slug: 'sushant-lok' },
                { name: 'Sector 29', slug: 'sector-29' },
              ].map((corridor) => (
                <Link
                  key={corridor.slug}
                  href={`/locations/${corridor.slug}`}
                  className="text-xs text-charcoal-400 hover:text-gold-400 transition-colors"
                >
                  {corridor.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="border-t border-charcoal-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" prefetch={false} className="text-xs text-charcoal-500 hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" prefetch={false} className="text-xs text-charcoal-500 hover:text-gold-500 transition-colors">Disclaimer</Link>
            <Link href="/terms" prefetch={false} className="text-xs text-charcoal-500 hover:text-gold-500 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>

        <p className="text-xs text-charcoal-600 mt-6 text-center max-w-3xl mx-auto leading-relaxed">
          This website is intended for adults aged 18 and above. By accessing this site, you confirm that you are of legal age and that such content is legal in your jurisdiction.
        </p>
      </div>
    </footer>
  );
}
