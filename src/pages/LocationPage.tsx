import { Link, useParams } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, ArrowLeft, CheckCircle2, Navigation } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig } from '@/data/siteConfig';
import { getLocation, locations } from '@/data/locations';
import { categories } from '@/data/categories';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug || '');

  if (!location) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="section-title mb-4">Location Not Found</h1>
        <Link to="/locations" className="btn-outline-gold">View All Locations</Link>
      </div>
    );
  }

  const nearbyLocationLinks = location.nearbyAreas.map((area) => {
    const match = locations.find((l) => l.name === area || l.area === area);
    return match ? match : null;
  }).filter(Boolean);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: location.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: 'Haryana',
      addressCountry: 'IN',
    },
  };

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={`escorts in ${location.name}, ${location.name} companions, luxury escorts ${location.name}, VIP companions ${location.name}`}
        canonical={`${siteConfig.url}/locations/${location.slug}`}
        jsonLd={[faqSchema, placeSchema]}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Locations', url: `${siteConfig.url}/locations` },
          { name: location.name, url: `${siteConfig.url}/locations/${location.slug}` },
        ]}
      />

      <Breadcrumb items={[
        { name: 'Home', path: '/' },
        { name: 'Locations', path: '/locations' },
        { name: location.name },
      ]} />

      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container-luxury text-center">
          <p className="section-subtitle">{location.city}</p>
          <h1 className="section-title mb-6">
            Escorts in <span className="text-gradient-gold">{location.name}</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-charcoal-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            {location.shortDescription} ALINA VIP provides verified, discreet, and premium escort services in {location.name} and surrounding areas.
          </p>
        </div>
      </section>

      {/* Content - 2000+ words */}
      <section className="py-12 md:py-16">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury">
            <h2>Premium Escort Service in {location.name}</h2>
            <p>
              ALINA VIP is proud to offer its premium escort services in {location.name}, one of the most sought-after areas in {location.city}. Known for its distinctive character and upscale lifestyle, {location.name} is home to discerning residents and visitors who appreciate the finer things in life. Our escort service is designed to meet the exacting standards of this prestigious neighbourhood, providing verified, elite escorts who can enhance any social or private engagement.
            </p>
            <p>
              {location.name} is a location that demands excellence. The residents and visitors to this area are accustomed to premium experiences, whether in dining, hospitality, or entertainment. ALINA VIP was created to bring this same level of excellence to the escort service industry. We understand that our clients in {location.name} are not looking for an ordinary service — they are looking for an experience that matches the quality and sophistication of their lifestyle. Every aspect of our service, from escort selection to booking and engagement, is designed to deliver this experience.
            </p>

            <h3>Why Choose ALINA VIP in {location.name}?</h3>
            <p>
              There are several reasons why ALINA VIP has become the preferred escort service for clients in {location.name}. First and foremost is our commitment to verification. Every call girl and escort in our portfolio undergoes a thorough vetting process that includes identity verification, photo authentication, and background screening. This ensures that when you browse our profiles, you can be confident that what you see is exactly what you will get. In an industry where authenticity is often a concern, our verification process provides peace of mind that is invaluable.
            </p>
            <p>
              Second is our unwavering commitment to discretion. We understand that for many of our clients in {location.name}, privacy is not just a preference but a necessity. Whether you are a prominent business professional, a public figure, or simply someone who values their privacy, you can trust that your engagement with ALINA VIP will be handled with complete confidentiality. All client information is kept strictly private, and our call girls and escorts are trained to maintain the highest standards of discretion in all interactions.
            </p>
            <p>
              Third is the quality of our call girls and escorts. We do not simply accept anyone into our portfolio. Each escort is carefully selected for their beauty, intelligence, social grace, and ability to engage in meaningful conversation. We look for individuals who can navigate diverse social settings with ease, from corporate events to intimate dinners. Our escorts in {location.name} are educated, well-spoken, and cultured, ensuring that your escort service experience is not just visually pleasing but intellectually stimulating as well.
            </p>

            <h3>Our Call Girls Categories in {location.name}</h3>
            <p>
              ALINA VIP offers a diverse range of call girls and escorts categories to cater to the varied preferences of our clients in {location.name}. Our VIP Call Girls category is particularly popular in this area, featuring call girls who are handpicked for their exceptional beauty and social sophistication. These escorts are ideal for high-profile events and engagements where presentation is paramount.
            </p>
            <p>
              Our High Profile Girls category is also well-represented in {location.name}. These call girls are educated, well-spoken, and socially adept, making them perfect for corporate dinners, business meetings, and professional social events. They are comfortable in formal settings and can engage in conversation on a wide range of topics.
            </p>
            <p>
              For clients seeking a more intimate and personalised experience, our Independent Girls category offers escorts who operate with complete autonomy. These call girls manage their own schedules and engagements, often resulting in a more authentic and tailored experience. We also offer Model Escorts, College Girls, Air Hostess Escorts, and other categories to ensure that we can match the right escort to your specific preferences.
            </p>

            <h3>Booking a Call Girl in {location.name}</h3>
            <p>
              Booking a call girl or escort through ALINA VIP in {location.name} is a simple and discreet process. You can begin by browsing our online portfolio to explore the various categories and escorts we offer. Once you have identified an escort or category that interests you, the next step is to contact our booking team. You can call us at <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a> or fill out the contact form on our website.
            </p>
            <p>
              When you contact us, our booking team will discuss your requirements, including the type of call girl you are looking for, the duration of the engagement, the location in {location.name}, and any specific preferences you may have. We will then check availability and confirm your booking, providing you with all the details you need. We recommend booking 2-3 hours in advance when possible, though we do our best to accommodate last-minute requests subject to availability.
            </p>
            <p>
              All bookings are handled with complete confidentiality. Your personal information is never shared with any third party, and all records of your booking are kept strictly private. Our call girls and escorts arrive at the designated location in {location.name} dressed appropriately for the setting, and they conduct themselves with discretion throughout the engagement.
            </p>

            <h3>Areas We Serve Near {location.name}</h3>
            <p>
              In addition to {location.name} itself, we also serve the surrounding areas. Our call girls and escorts are available for outcall services to luxury hotels, private residences, and social venues in and around {location.name}. Some of the nearby areas we serve include:
            </p>
            <ul>
              {location.nearbyAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p>
              If you are located in or near any of these areas, our call girls can reach you quickly and discreetly. For specific location inquiries, please do not hesitate to contact our booking team.
            </p>

            <h3>The ALINA VIP Escort Service Experience in {location.name}</h3>
            <p>
              When you book a call girl or escort through ALINA VIP in {location.name}, you are not just booking a service — you are investing in an experience. Our call girls and escorts are trained to provide more than just company. They are skilled conversationalists who can engage in discussions on a wide range of topics, from current affairs to arts and culture. They are well-versed in social etiquette and can navigate diverse social settings with ease.
            </p>
            <p>
              Whether you are planning a romantic dinner at one of {location.name}&apos;s fine dining restaurants, a social event at a luxury venue, a business dinner with clients, or a quiet evening at your residence, our call girls can enhance the experience. They are adaptable and can match the tone and atmosphere of any setting, ensuring that your engagement is enjoyable, comfortable, and memorable.
            </p>
            <p>
              We also offer extended bookings for clients who require call girls for longer durations. Whether you need a escort for a full day, a weekend, or a travel engagement, we can arrange the right escort for your needs. Our travel escorts are well-travelled and cultured, making them ideal for domestic and international trips.
            </p>

            <h3>Discretion and Safety in {location.name}</h3>
            <p>
              Discretion and safety are at the core of our service in {location.name}. We have implemented comprehensive measures to ensure that every engagement is conducted with the highest level of confidentiality and safety. All client information is kept strictly private, and our call girls and escorts are trained in the art of discretion. We also respect the boundaries and comfort levels of our escorts, ensuring that all engagements are consensual and respectful.
            </p>
            <p>
              For our clients, we provide a safe and reliable way to arrange call girls and escorts. Our verified profiles give you confidence in your choices, and our professional booking process ensures that your engagement is arranged properly. We are always available to address any concerns and to ensure that your experience with ALINA VIP in {location.name} is safe, enjoyable, and memorable.
            </p>

            <h3>Contact ALINA VIP for {location.name} Services</h3>
            <p>
              If you are looking for premium escort services in {location.name}, look no further than ALINA VIP. Our team is ready to assist you in finding the perfect call girl or escort for your needs and arranging a discreet and memorable experience. Call us today at <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a> or fill out our contact form to get started. We are available 24/7 to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-charcoal-800/50">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <p className="section-subtitle">Nearby Areas</p>
            <h2 className="section-title mb-4">
              Locations Near <span className="text-gradient-gold">{location.name}</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {nearbyLocationLinks.map((loc) => loc && (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="flex items-center gap-2 p-4 border border-charcoal-700 hover:border-gold-500/50 hover:bg-charcoal-800 transition-all duration-300 group"
              >
                <Navigation size={16} className="text-gold-500 flex-shrink-0" />
                <span className="text-xs text-charcoal-300 group-hover:text-gold-500 transition-colors">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16">
        <div className="container-luxury">
          <div className="aspect-[21/9] bg-charcoal-800 border border-charcoal-600 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gold-500/50 mx-auto mb-4" />
              <p className="text-charcoal-400 text-sm">{location.name}, {location.city}</p>
              <p className="text-charcoal-500 text-xs mt-2">Google Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-charcoal-800/50">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title mb-4">
              {location.name} <span className="text-gradient-gold">FAQ</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {location.faqs.map((faq, i) => (
              <details key={i} className="luxury-card group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-serif text-lg text-white font-light pr-4">{faq.question}</span>
                  <span className="text-gold-500 text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-sm text-charcoal-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container-luxury max-w-2xl">
          <div className="text-center mb-10">
            <p className="section-subtitle">Book Now</p>
            <h2 className="section-title mb-4">
              Contact Us for <span className="text-gradient-gold">{location.name}</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="luxury-card p-8">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you. We will contact you shortly.'); }}>
              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Name</label>
                <input type="text" required className="input-luxury" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Phone</label>
                <input type="tel" required className="input-luxury" placeholder="Your Phone Number" />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Location</label>
                <input type="text" readOnly value={location.name} className="input-luxury" />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-charcoal-400 mb-2">Message</label>
                <textarea rows={4} className="input-luxury resize-none" placeholder="Your Message" />
              </div>
              <button type="submit" className="btn-gold w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
