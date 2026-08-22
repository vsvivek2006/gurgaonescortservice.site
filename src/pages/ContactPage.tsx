import { Phone, MapPin, Mail, MessageCircle, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import { siteConfig } from '@/data/siteConfig';
import { locations } from '@/data/locations';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact ALINA VIP | Book Luxury Companionship in Gurgaon"
        description="Contact ALINA VIP for premium luxury companionship services in Gurgaon. Call +91-9996265679 or fill out our contact form. Available 24/7 with discreet service."
        keywords="contact ALINA VIP, book companion Gurgaon, luxury companionship contact, escort service contact Gurgaon"
        canonical={`${siteConfig.url}/contact`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Contact', url: `${siteConfig.url}/contact` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Contact' }]} />

      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle">Contact Us</p>
            <h1 className="section-title mb-6">
              Get In <span className="text-gradient-gold">Touch</span>
            </h1>
            <div className="gold-divider" />
            <p className="text-charcoal-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Contact ALINA VIP to arrange a discreet and luxurious companionship experience. Our team is available 24/7 to assist you with bookings and inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="luxury-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-charcoal-500 mb-2">Phone</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-xl text-white hover:text-gold-500 transition-colors font-serif font-light">
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-sm text-charcoal-400 mt-2">Call us anytime, 24/7</p>
                  </div>
                </div>
              </div>

              <div className="luxury-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-charcoal-500 mb-2">WhatsApp</h3>
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-gold-500 transition-colors font-serif font-light">
                      Chat on WhatsApp
                    </a>
                    <p className="text-sm text-charcoal-400 mt-2">Quick and discreet messaging</p>
                  </div>
                </div>
              </div>

              <div className="luxury-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-charcoal-500 mb-2">Address</h3>
                    <p className="text-white font-serif font-light leading-relaxed">{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <div className="luxury-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-charcoal-500 mb-2">Hours</h3>
                    <p className="text-xl text-white font-serif font-light">24 Hours, 7 Days</p>
                    <p className="text-sm text-charcoal-400 mt-2">Always available for our clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="luxury-card p-8">
              <h2 className="font-serif text-2xl text-white font-light mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message. We will contact you shortly.'); }}>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Name</label>
                  <input type="text" required className="input-luxury" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Phone</label>
                  <input type="tel" required className="input-luxury" placeholder="Your Phone Number" />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Email</label>
                  <input type="email" className="input-luxury" placeholder="Your Email (Optional)" />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Location</label>
                  <select className="input-luxury" defaultValue="">
                    <option value="" disabled>Select Location</option>
                    {locations.map((loc) => (
                      <option key={loc.slug} value={loc.slug}>{loc.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Message</label>
                  <textarea rows={5} required className="input-luxury resize-none" placeholder="Your Message" />
                </div>
                <button type="submit" className="btn-gold w-full">Send Message</button>
              </form>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-12">
            <div className="aspect-[21/9] bg-charcoal-800 border border-charcoal-600 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gold-500/50 mx-auto mb-4" />
                <p className="text-charcoal-400 text-sm">Gurgaon, Haryana, India</p>
                <p className="text-charcoal-500 text-xs mt-2">Google Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
