import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/siteConfig';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-gradient opacity-5" />
      <div className="container-luxury relative text-center">
        <p className="section-subtitle">Ready to Experience Luxury?</p>
        <h2 className="section-title mb-6">
          Book Your <span className="text-gradient-gold">Premium Companion</span> Today
        </h2>
        <p className="text-charcoal-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Contact ALINA VIP now to arrange a discreet and luxurious companionship experience. Our team is available 24/7 to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${siteConfig.phone}`} className="btn-gold">
            <Phone size={16} /> Call Now
          </a>
          <Link to="/contact" className="btn-outline-gold">Book Online</Link>
        </div>
      </div>
    </section>
  );
}
