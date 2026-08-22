import { Link, useParams } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, ArrowLeft, CheckCircle2, Navigation, Star, Shield, Clock, Crown, Sparkles, Users } from 'lucide-react';
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
      <div className="pt-32 pb-20 text-center bg-white">
        <h1 className="section-title mb-4 text-[#1a1a2e]">Location Not Found</h1>
        <p className="text-gray-600 mb-6">The escort service location you're looking for doesn't exist.</p>
        <Link to="/locations" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
          View All Locations
        </Link>
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
        title={`${location.name} Escorts | Call Girls in ${location.name} | Escort Service Gurgaon`}
        description={`Find premium escort service in ${location.name}, Gurgaon. Book verified call girls, VIP escorts, Russian escorts, and model escorts in ${location.name}. 100% discreet. Call now.`}
        keywords={`escorts in ${location.name}, call girls ${location.name}, ${location.name} escorts, VIP escorts ${location.name}, Russian escorts ${location.name}, model escorts ${location.name}, escort service ${location.name}`}
        canonical={`https://gurgaonescortservice.site/locations/${location.slug}`}
        jsonLd={[faqSchema, placeSchema]}
        breadcrumbs={[
          { name: 'Home', url: 'https://gurgaonescortservice.site' },
          { name: 'Locations', url: 'https://gurgaonescortservice.site/locations' },
          { name: location.name, url: `https://gurgaonescortservice.site/locations/${location.slug}` },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: location.name },
        ]} 
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gold-pattern.png')] bg-repeat" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
            ★ Escort Service in {location.city}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Escorts in <span className="text-gradient-gold">{location.name}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {location.shortDescription} <strong className="text-gold-400">ALINA VIP</strong> provides verified, discreet, 
            and premium <Link to="/services" className="text-gold-400 hover:underline">escort service in Gurgaon</Link> 
            with <Link to="/call-girls" className="text-gold-400 hover:underline">VIP call girls</Link>, 
            <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, and 
            <Link to="/model-escorts" className="text-gold-400 hover:underline"> model escorts</Link>.
          </p>
          <div className="gold-divider mx-auto mt-8" />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={`tel:${siteConfig.phone}`} className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <Phone className="w-5 h-5" /> Book Now
            </a>
            <Link to="/contact" className="border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="py-8 bg-[#1a1a2e] border-y border-gold-500/20">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-gold-500">500+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Verified Call Girls</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold-500">4.9/5</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Client Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold-500">24/7</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Service Available</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold-500">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Discreet Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT - 3000+ WORDS ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
              Premium Escort Service in {location.name}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>ALINA VIP</strong> is proud to offer its premium <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
              in {location.name}, one of the most sought-after areas in {location.city}. Known for its distinctive character 
              and upscale lifestyle, {location.name} is home to discerning residents and visitors who appreciate the finer 
              things in life. Our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls service</Link> 
              is designed to meet the exacting standards of this prestigious neighbourhood, providing verified, elite 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escorts</Link> who can enhance any social 
              or private engagement.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {location.name} is a location that demands excellence. The residents and visitors to this area are accustomed 
              to premium experiences, whether in dining, hospitality, or entertainment. <strong>ALINA VIP</strong> was 
              created to bring this same level of excellence to the <strong>escort service industry</strong>. We understand 
              that our clients in {location.name} are not looking for an ordinary service — they are looking for an experience 
              that matches the quality and sophistication of their lifestyle. Every aspect of our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>, 
              from escort selection to booking and engagement, is designed to deliver this experience.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
              Why Choose ALINA VIP in {location.name}?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              There are several reasons why <strong>ALINA VIP</strong> has become the preferred 
              <Link to="/services" className="text-gold-600 hover:underline"> escort service in Gurgaon</Link> for 
              clients in {location.name}. First and foremost is our commitment to verification. Every 
              <Link to="/call-girls" className="text-gold-600 hover:underline"> call girl</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escort</Link> in our portfolio undergoes 
              a thorough vetting process that includes identity verification, photo authentication, and background screening. 
              This ensures that when you browse our profiles, you can be confident that what you see is exactly what you 
              will get. In an industry where authenticity is often a concern, our verification process provides peace of 
              mind that is invaluable.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Second is our unwavering commitment to discretion. We understand that for many of our clients in {location.name}, 
              privacy is not just a preference but a necessity. Whether you are a prominent business professional, a public 
              figure, or simply someone who values their privacy, you can trust that your engagement with our 
              <Link to="/services" className="text-gold-600 hover:underline"> escort service</Link> will be handled 
              with complete confidentiality. All client information is kept strictly private, and our 
              <Link to="/call-girls" className="text-gold-600 hover:underline"> call girls</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escorts</Link> are trained to maintain 
              the highest standards of discretion in all interactions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Third is the quality of our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>. We do not simply accept 
              anyone into our portfolio. Each escort is carefully selected for their beauty, intelligence, social grace, 
              and ability to engage in meaningful conversation. We look for individuals who can navigate diverse social 
              settings with ease, from corporate events to intimate dinners. Our escorts in {location.name} are educated, 
              well-spoken, and cultured, ensuring that your <strong>escort service</strong> experience is not just visually 
              pleasing but intellectually stimulating as well.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
              Our Call Girls Categories in {location.name}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>ALINA VIP</strong> offers a diverse range of <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> categories to cater to 
              the varied preferences of our clients in {location.name}.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Crown className="w-6 h-6 text-gold-500 mb-2" />
                <h4 className="font-bold text-[#1a1a2e]">
                  <Link to="/vip-escorts" className="hover:text-gold-600 transition-colors">VIP Escorts</Link>
                </h4>
                <p className="text-sm text-gray-600">Handpicked for exceptional beauty and social sophistication. Ideal for high-profile events.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Sparkles className="w-6 h-6 text-gold-500 mb-2" />
                <h4 className="font-bold text-[#1a1a2e]">
                  <Link to="/russian-escorts" className="hover:text-gold-600 transition-colors">Russian Escorts</Link>
                </h4>
                <p className="text-sm text-gray-600">Exotic European escorts known for elegance and international flair.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Star className="w-6 h-6 text-gold-500 mb-2" />
                <h4 className="font-bold text-[#1a1a2e]">
                  <Link to="/model-escorts" className="hover:text-gold-600 transition-colors">Model Escorts</Link>
                </h4>
                <p className="text-sm text-gray-600">Professional fashion models with striking features and confident presence.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Users className="w-6 h-6 text-gold-500 mb-2" />
                <h4 className="font-bold text-[#1a1a2e]">
                  <Link to="/college-girls" className="hover:text-gold-600 transition-colors">College Girls</Link>
                </h4>
                <p className="text-sm text-gray-600">Young, vibrant, and energetic call girls for a fresh and engaging experience.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Users className="w-6 h-6 text-gold-500 mb-2" />
                <h4 className="font-bold text-[#1a1a2e]">
                  <Link to="/housewife-escorts" className="hover:text-gold-600 transition-colors">Housewife Escorts</Link>
                </h4>
                <p className="text-sm text-gray-600">Mature, experienced escorts offering a relaxed and genuine experience.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Star className="w-6 h-6 text-gold-500 mb-2" />
                <h4 className="font-bold text-[#1a1a2e]">
                  <Link to="/independent-escorts" className="hover:text-gold-600 transition-colors">Independent Escorts</Link>
                </h4>
                <p className="text-sm text-gray-600">Self-employed professionals offering a more personalised escort service.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
              Booking a Call Girl in {location.name}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Booking a <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> or 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escort</Link> through 
              <strong>ALINA VIP</strong> in {location.name} is a simple and discreet process. You can begin by browsing 
              our online portfolio to explore the various categories and escorts we offer. Once you have identified an 
              escort or category that interests you, the next step is to contact our booking team. You can call us at 
              <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold"> {siteConfig.phoneDisplay}</a> 
              or fill out the <Link to="/contact" className="text-gold-600 hover:underline">contact form</Link> on our website.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              When you contact us, our booking team will discuss your requirements, including the type of 
              <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> or 
              <Link to="/escorts" className="text-gold-600 hover:underline">escort</Link> you are looking for, 
              the duration of the engagement, the location in {location.name}, and any specific preferences you may have. 
              We will then check availability and confirm your booking, providing you with all the details you need. 
              We recommend booking 2-3 hours in advance when possible, though we do our best to accommodate last-minute 
              requests subject to availability for our <strong>escort service in Gurgaon</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              All bookings are handled with complete confidentiality. Your personal information is never shared with 
              any third party, and all records of your booking are kept strictly private. Our 
              <Link to="/call-girls" className="text-gold-600 hover:underline"> call girls</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escorts</Link> arrive at the designated 
              location in {location.name} dressed appropriately for the setting, and they conduct themselves with 
              discretion throughout the engagement.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
              Areas Near {location.name} We Serve
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              In addition to {location.name} itself, we also serve the surrounding areas. Our 
              <Link to="/call-girls" className="text-gold-600 hover:underline"> call girls</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escorts</Link> are available for 
              outcall services to luxury hotels, private residences, and social venues in and around {location.name}. 
              Some of the nearby areas we serve include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 my-4">
              {location.nearbyAreas.map((area) => (
                <li key={area}>
                  <Link to={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`} className="text-gold-600 hover:underline">
                    {area} Escorts
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you are located in or near any of these areas, our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              can reach you quickly and discreetly. For specific location inquiries, please do not hesitate to contact 
              our booking team for <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
              The ALINA VIP Escort Service Experience in {location.name}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              When you book a <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> or 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escort</Link> through 
              <strong>ALINA VIP</strong> in {location.name}, you are not just booking a service — you are investing 
              in an experience. Our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> are trained to provide 
              more than just company. They are skilled conversationalists who can engage in discussions on a wide range 
              of topics, from current affairs to arts and culture. They are well-versed in social etiquette and can 
              navigate diverse social settings with ease.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you are planning a romantic dinner at one of {location.name}'s fine dining restaurants, a social 
              event at a luxury venue, a business dinner with clients, or a quiet evening at your residence, our 
              <Link to="/call-girls" className="text-gold-600 hover:underline"> call girls</Link> can enhance the 
              experience. They are adaptable and can match the tone and atmosphere of any setting, ensuring that your 
              <strong>escort service</strong> engagement is enjoyable, comfortable, and memorable.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We also offer extended bookings for clients who require <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              for longer durations. Whether you need a <Link to="/escorts" className="text-gold-600 hover:underline">escort</Link> 
              for a full day, a weekend, or a travel engagement, we can arrange the right escort for your needs. 
              Our <Link to="/travel-escorts" className="text-gold-600 hover:underline">travel escorts</Link> are 
              well-travelled and cultured, making them ideal for domestic and international trips.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
              Discretion and Safety for Escort Service in {location.name}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Discretion and safety are at the core of our <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
              in {location.name}. We have implemented comprehensive measures to ensure that every engagement is conducted 
              with the highest level of confidentiality and safety. All client information is kept strictly private, 
              and our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> are trained in the art of 
              discretion. We also respect the boundaries and comfort levels of our escorts, ensuring that all 
              engagements are consensual and respectful.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              For our clients, we provide a safe and reliable way to arrange <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>. Our verified profiles 
              give you confidence in your choices, and our professional booking process ensures that your engagement 
              is arranged properly. We are always available to address any concerns and to ensure that your experience 
              with <strong>ALINA VIP</strong> in {location.name} is safe, enjoyable, and memorable.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
              Book Your Escort Service in {location.name} Today
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you are looking for premium <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
              in {location.name}, look no further than <strong>ALINA VIP</strong>. Our team is ready to assist you in 
              finding the perfect <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> or 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escort</Link> for your needs and arranging 
              a discreet and memorable experience. Call us today at 
              <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold"> {siteConfig.phoneDisplay}</a> 
              or fill out our <Link to="/contact" className="text-gold-600 hover:underline">contact form</Link> to get started. 
              We are available 24/7 to serve you.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Visit <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline font-bold">ALINAVIP.com</a> 
              for more information about our premium <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
              and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> in Gurgaon.
            </p>

            {/* ===== BOOKING CTA ===== */}
            <div className="my-8 p-6 bg-gradient-to-r from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-200">
              <p className="text-center text-lg font-semibold text-[#1a1a2e]">
                📞 Call us 24/7: <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold">{siteConfig.phoneDisplay}</a>
              </p>
              <p className="text-center text-gray-600 mt-2">
                Book <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and 
                <Link to="/escorts" className="text-gold-600 hover:underline"> escorts</Link> in {location.name} today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEARBY AREAS ===== */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <p className="section-subtitle text-gold-600">Nearby Areas</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Locations Near <span className="text-gradient-gold">{location.name}</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We also provide <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
              in these nearby areas with verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {nearbyLocationLinks.map((loc) => loc && (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="flex items-center gap-2 p-4 bg-white border border-gray-200 hover:border-gold-500 hover:shadow-lg transition-all rounded-xl group"
              >
                <Navigation size={16} className="text-gold-500 flex-shrink-0" />
                <span className="text-xs text-gray-700 group-hover:text-gold-600 transition-colors font-medium">
                  {loc.name} Escorts
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR CATEGORIES ===== */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <p className="section-subtitle text-gold-600">Our Categories</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Call Girls & <span className="text-gradient-gold">Escort Categories</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="bg-gray-50 p-4 text-center rounded-xl border border-gray-100 hover:border-gold-300 hover:shadow-lg transition-all group"
              >
                <h3 className="text-sm font-bold text-[#1a1a2e] group-hover:text-gold-600 transition-colors">{cat.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{cat.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP PLACEHOLDER ===== */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="aspect-[21/9] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gold-500/20">
            <div className="text-center">
              <MapPin size={48} className="text-gold-500/50 mx-auto mb-4" />
              <p className="text-gray-300 text-lg font-semibold">{location.name}, {location.city}</p>
              <p className="text-gray-500 text-sm mt-2">📍 Google Map - Escort Service Location</p>
              <p className="text-gray-500 text-xs mt-1">Call us for precise location details</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">FAQ</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              {location.name} <span className="text-gradient-gold">Escort Service FAQs</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Find answers to common questions about <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
              and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> in {location.name}.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {location.faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold-300 transition-all group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#1a1a2e] text-lg pr-4">{faq.question}</span>
                  <span className="text-gold-600 text-2xl font-light group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="py-16 md:py-24 bg-[#faf6f2]">
        <div className="container-luxury max-w-2xl">
          <div className="text-center mb-10">
            <p className="section-subtitle text-gold-600">Book Now</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Book <span className="text-gradient-gold">{location.name}</span> Escorts
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 mt-4">
              Fill out the form to book <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              or <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> in {location.name}.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d1b0e] p-8 rounded-3xl shadow-2xl border border-gold-500/20">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your booking request. We will contact you shortly.'); }}>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Name</label>
                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Phone</label>
                <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors" placeholder="Your Phone Number" />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Location</label>
                <input type="text" readOnly value={location.name} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-gold-400 font-semibold focus:border-gold-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none" placeholder="Tell us about your requirements..." />
              </div>
              <button type="submit" className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-600/30 hover:shadow-gold-600/50 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Book Escort Service
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">🔒 Your information is 100% confidential</p>
            </form>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}