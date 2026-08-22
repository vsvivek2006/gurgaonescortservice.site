import { Link } from 'react-router-dom';
import {
  Phone, ShieldCheck, BadgeCheck, Clock, Lock, Star, Crown, Gem, GraduationCap,
  User, Plane, Camera, Award, Luggage, Sparkles, UtensilsCrossed, Calendar,
  PartyPopper, Briefcase, Lock as LockIcon, MapPin, ArrowRight, CheckCircle2,
  Users, Heart, Globe, Coffee, Sunset, Music, Film, Compass, Gift, DollarSign,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig, generalFaqs } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { locations } from '@/data/locations';
import { services } from '@/data/content';
import { blogPosts } from '@/data/blogs';

import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Crown, Star, Gem, GraduationCap, User, Plane, Camera, Award, Luggage, Sparkles,
  UtensilsCrossed, Calendar, PartyPopper, Briefcase, Lock: LockIcon,
};

const whyChooseUs = [
  { 
    icon: ShieldCheck, 
    title: 'Verified Call Girls & Escorts', 
    description: 'Every call girl and escort undergoes a thorough verification process including ID checks, photo authentication, and background screening for your safety.' 
  },
  { 
    icon: Lock, 
    title: '100% Discreet Escort Service', 
    description: 'Your privacy is our priority. All bookings and client information for our escort service in Gurgaon are kept strictly confidential.' 
  },
  { 
    icon: Clock, 
    title: '24/7 Call Girls Service', 
    description: 'Our escort service operates round the clock to accommodate your schedule and last-minute requests for call girls in Gurgaon.' 
  },
  { 
    icon: BadgeCheck, 
    title: 'Premium Escort Quality', 
    description: 'We handpick only the finest VIP call girls and escorts who meet our exacting standards of elegance, beauty, and sophistication.' 
  },
  { 
    icon: Star, 
    title: 'Elite VIP Selection', 
    description: 'From VIP escorts to celebrity companions, our curated selection represents the best in luxury escort service in Gurgaon.' 
  },
  { 
    icon: Phone, 
    title: '24/7 Booking Support', 
    description: 'Our booking team provides personalised assistance for call girls booking from initial inquiry to the end of your engagement.' 
  },
];

const howItWorks = [
  { 
    number: '01', 
    title: 'Browse Call Girls Profiles', 
    description: 'Explore our curated selection of verified call girls and escorts across various categories and locations in Gurgaon.' 
  },
  { 
    number: '02', 
    title: 'Contact Escort Service', 
    description: 'Call us or fill out our contact form with your preferences for call girls in Gurgaon and desired booking time.' 
  },
  { 
    number: '03', 
    title: 'Confirm Booking', 
    description: 'Our team will confirm availability of your chosen escort, discuss details, and arrange everything discreetly.' 
  },
  { 
    number: '04', 
    title: 'Enjoy Premium Experience', 
    description: 'Meet your VIP call girl or escort and enjoy a premium escort service experience in Gurgaon.' 
  },
];

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: 'https://gurgaonescortservice.site',
    phone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'DLF Phase 3, Golf Course Road',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: 'https://gurgaonescortservice.site',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://gurgaonescortservice.site/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: 'https://gurgaonescortservice.site/og-image.jpg',
    url: 'https://gurgaonescortservice.site',
    telephone: siteConfig.phone,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'DLF Phase 3, Golf Course Road',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122002',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4595,
      longitude: 77.0266,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Escort Service in Gurgaon | VIP Call Girls | ALINA VIP"
        description="ALINA VIP offers premium escort service in Gurgaon. Book verified VIP call girls, Russian escorts, model escorts, and more. 100% discreet. Call +91-9996265679. 24/7 service."
        keywords="escort service Gurgaon, call girls Gurgaon, VIP escorts Gurgaon, Russian escorts Gurgaon, model escorts Gurgaon, premium call girls, escort service, call girls, VIP escort service Gurgaon"
        canonical="https://gurgaonescortservice.site/"
        jsonLd={[organizationSchema, websiteSchema, localBusinessSchema, faqSchema]}
        breadcrumbs={[{ name: 'Home', url: 'https://gurgaonescortservice.site' }]}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-luxury relative z-10 text-center pt-20">
          <p className="section-subtitle animate-fade-down">Welcome to ALINA VIP</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none mb-6 animate-fade-up">
            Premium
            <br />
            <span className="shimmer-text font-medium">Escort Service</span>
          </h1>
          <p className="text-charcoal-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Experience the finest <strong className="text-gold-400">escort service in Gurgaon</strong>. 
            Verified <Link to="/call-girls" className="text-gold-400 hover:underline">call girls</Link>, 
            <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, 
            and <Link to="/vip-escorts" className="text-gold-400 hover:underline">VIP companions</Link>. 
            100% discreet service for discerning gentlemen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/services" className="btn-gold">
              Explore Call Girls <ArrowRight size={16} />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline-gold">
              <Phone size={16} /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />
        </div>
      </section>

      {/* ===== PREMIUM CTA BANNER ===== */}
      <section className="py-16 bg-charcoal-800 border-y border-charcoal-700">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gold-500 font-sans text-xs tracking-ultra uppercase mb-2">Available 24/7</p>
              <h2 className="font-serif text-2xl md:text-3xl text-white font-light">
                Book <Link to="/call-girls" className="text-gold-400 hover:underline">Call Girls</Link> &amp; 
                <Link to="/services" className="text-gold-400 hover:underline"> Escort Service</Link> in Gurgaon
              </h2>
            </div>
            <a href={`tel:${siteConfig.phone}`} className="btn-gold whitespace-nowrap">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT COMPANY ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-subtitle text-gold-600">About ALINA VIP</p>
              <h2 className="section-title mb-6 text-[#1a1a2e]">
                Best <span className="text-gradient-gold">Escort Service</span> in Gurgaon
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>ALINA VIP</strong> is Gurgaon's premier <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>, 
                  dedicated to providing discerning gentlemen with exceptional <Link to="/call-girls" className="text-gold-600 hover:underline">VIP call girls</Link>, 
                  <Link to="/russian-escorts" className="text-gold-600 hover:underline"> Russian escorts</Link>, 
                  and <Link to="/model-escorts" className="text-gold-600 hover:underline">model escorts</Link> for social events, 
                  dinner dates, travel, and private engagements.
                </p>
                <p>
                  With years of experience in the <strong>escort service industry in Gurgaon</strong>, we have built 
                  a reputation for excellence, discretion, and uncompromising quality. Our mission is to redefine 
                  the <Link to="/services" className="text-gold-600 hover:underline">call girls service</Link> experience 
                  by offering verified profiles, premium companions, and professional service.
                </p>
                <p>
                  Every <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> and 
                  <Link to="/escorts" className="text-gold-600 hover:underline"> escort</Link> in our portfolio is carefully 
                  selected through a rigorous vetting process that evaluates not only physical beauty but also intelligence, 
                  social grace, and the ability to engage in meaningful conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/about" className="btn-outline-gold">
                  Learn More <ArrowRight size={16} />
                </Link>
                <Link to="https://alinavip.com" target="_blank" className="text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-2">
                  Visit ALINAVIP.com <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Verified Call Girls' },
                { value: '27', label: 'Locations in Gurgaon' },
                { value: '10', label: 'Escort Categories' },
                { value: '24/7', label: 'Service Available' },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 p-8 text-center rounded-2xl border border-gray-100 hover:border-gold-300 transition-all">
                  <p className="font-serif text-4xl md:text-5xl text-gold-600 font-light mb-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 md:py-28 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Why Choose Us</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              The <span className="text-gradient-gold">ALINA VIP</span> Difference
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500 transition-colors rounded-lg">
                    <Icon size={24} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1a1a2e] mb-3 font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== VERIFIED PROFILES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Verified Call Girls</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Authenticated &amp; <span className="text-gradient-gold">Verified Escorts</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
              Every <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escort</Link> profile on ALINA VIP 
              is verified through our rigorous authentication process for your safety and confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Identity Verified', description: 'All call girls and escorts provide valid identification verified by our team for escort service in Gurgaon.', icon: BadgeCheck },
              { title: 'Photos Verified', description: 'Profile photos are confirmed to be genuine and recent representations of our call girls and escorts.', icon: Camera },
              { title: 'Background Checked', description: 'We conduct background checks on all escorts to ensure safety and quality of our call girls service.', icon: ShieldCheck },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-gray-50 p-8 text-center rounded-2xl border border-gray-100 hover:border-gold-300 transition-all group">
                  <div className="w-16 h-16 mx-auto border-2 border-gold-500/30 rounded-full flex items-center justify-center mb-6 group-hover:border-gold-500 transition-colors">
                    <Icon size={28} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1a1a2e] mb-3 font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LUXURY SERVICES ===== */}
      <section className="py-20 md:py-28 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Our Escort Services</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Premium <span className="text-gradient-gold">Call Girls</span> Services
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-500 transition-colors rounded-lg">
                    <Icon size={24} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1a1a2e] mb-3 font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.shortDescription}</p>
                  <span className="text-xs text-gold-600 tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all font-semibold">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TOP CATEGORIES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Top Categories</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Explore Our <span className="text-gradient-gold">Call Girls</span> Categories
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Sparkles;
              return (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="bg-gray-50 p-6 text-center rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 mx-auto border border-gold-500/30 rounded-full flex items-center justify-center mb-4 group-hover:border-gold-500 transition-colors">
                    <Icon size={20} className="text-gold-500" />
                  </div>
                  <h3 className="font-serif text-sm text-[#1a1a2e] mb-2 font-bold leading-tight">{cat.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{cat.shortDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PREMIUM LOCATIONS ===== */}
      <section className="py-20 md:py-28 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Premium Locations</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Escort Service in <span className="text-gradient-gold">Gurgaon</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
              We provide <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> across all 
              major areas of Gurgaon. Find <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              in your area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="flex items-center gap-2 p-4 bg-white border border-gray-200 hover:border-gold-500 hover:shadow-lg transition-all rounded-xl group"
              >
                <MapPin size={16} className="text-gold-500 flex-shrink-0" />
                <span className="text-xs text-gray-700 group-hover:text-gold-600 transition-colors font-medium">
                  {loc.name} Escorts
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">How It Works</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Simple &amp; <span className="text-gradient-gold">Discreet Process</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="text-center group p-6 rounded-2xl bg-gray-50 hover:bg-gold-50 transition-all border border-gray-100 hover:border-gold-300">
                <div className="font-serif text-6xl text-gold-500/20 font-light mb-4 group-hover:text-gold-500/40 transition-colors">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl text-[#1a1a2e] mb-3 font-bold">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialsSection />

      {/* ===== LATEST BLOG ===== */}
      <section className="py-20 md:py-28 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Latest from Our Blog</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Escort Service <span className="text-gradient-gold">Insights</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-gold-300 group"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={post.image || `/images/blog/${post.slug}.jpg`}
                    alt={`${post.title} - Escort Service in Gurgaon`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-gold-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#1a1a2e] mt-2 mb-3 font-bold leading-tight group-hover:text-gold-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="btn-outline-gold">
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Frequently Asked Questions</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Escort Service <span className="text-gradient-gold">FAQs</span>
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {generalFaqs.slice(0, 8).map((faq, i) => (
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
          <div className="text-center mt-10">
            <Link to="/faq" className="btn-outline-gold">
              View All FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SEO CONTENT - 5000+ WORDS ===== */}
      <section className="py-20 md:py-28 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto prose-luxury">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">Premium Escort Service in Gurgaon</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>ALINA VIP</strong> is the leading <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>, 
              offering premium <Link to="/call-girls" className="text-gold-600 hover:underline">VIP call girls</Link>, 
              <Link to="/russian-escorts" className="text-gold-600 hover:underline"> Russian escorts</Link>, 
              <Link to="/model-escorts" className="text-gold-600 hover:underline"> model escorts</Link>, and 
              elite companions for discerning gentlemen. In the dynamic and fast-paced environment of one of India's 
              most cosmopolitan cities, the demand for high-quality <strong>call girls service</strong> has grown 
              significantly. Business professionals, entrepreneurs, and visitors to Gurgaon often seek the company 
              of sophisticated <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              who can match their lifestyle and provide a memorable experience.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">Why Choose ALINA VIP for Escort Service in Gurgaon?</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              The <strong>escort service industry in Gurgaon</strong> is competitive, but ALINA VIP has established 
              itself as a leader through rigorous standards, exceptional service, and an unwavering commitment to 
              client satisfaction. Our comprehensive verification process ensures every <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> 
              and escort profile is genuine, accurate, and trustworthy. Our clients can browse with confidence, 
              knowing that the <Link to="/escorts" className="text-gold-600 hover:underline">escort</Link> they 
              select will match the profile they have seen.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Beyond verification, we place a strong emphasis on the personal qualities of our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>. 
              We look for individuals who are not only beautiful but also educated, articulate, and socially adept. 
              Our <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> come from diverse 
              backgrounds and bring a range of personalities, interests, and skills to their engagements. Whether 
              you need a <Link to="/vip-escorts" className="text-gold-600 hover:underline">VIP escort</Link> for 
              a corporate event, a <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escort</Link> 
              for a dinner date, or a <Link to="/model-escorts" className="text-gold-600 hover:underline">model escort</Link> 
              for a weekend getaway, we have the perfect companion for you.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">Our Premium Call Girls Categories</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian Escorts</Link> – 
              Exotic European companions known for their elegance and international flair. These <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              are popular for their sophisticated demeanour and ability to navigate diverse social settings with ease.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <Link to="/vip-escorts" className="text-gold-600 hover:underline">VIP Escorts</Link> – 
              The pinnacle of <strong>escort service in Gurgaon</strong>. These <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              are handpicked for their exceptional beauty, intelligence, and social sophistication. Ideal for clients 
              who expect the absolute finest in <Link to="/services" className="text-gold-600 hover:underline">escort service</Link>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <Link to="/model-escorts" className="text-gold-600 hover:underline">Model Escorts</Link> – 
              Professional fashion models with striking features and confident presence. These <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              bring glamour and sophistication to every engagement.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <Link to="/college-girls" className="text-gold-600 hover:underline">College Girls</Link> – 
              Young, vibrant, and energetic <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              currently pursuing or recently completed their higher education. Perfect for clients seeking youthful 
              energy and fresh perspectives.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <Link to="/housewife-escorts" className="text-gold-600 hover:underline">Housewife Escorts</Link> – 
              Mature, experienced <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              who offer a more relaxed and genuine <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
              experience. Ideal for clients seeking meaningful conversation and connection.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <Link to="/independent-escorts" className="text-gold-600 hover:underline">Independent Escorts</Link> – 
              Self-employed professional <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              who manage their own schedules and engagements. This often results in a more personalised and authentic 
              <Link to="/services" className="text-gold-600 hover:underline"> escort service</Link> experience.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">Areas We Serve in Gurgaon</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We provide <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
              across all major areas. Our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              are available in:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><Link to="/cyber-city-escorts" className="text-gold-600 hover:underline">Cyber City Escorts</Link> – Premium call girls for corporate events and business meetings</li>
              <li><Link to="/mg-road-call-girls" className="text-gold-600 hover:underline">MG Road Call Girls</Link> – Luxury companions near the heart of Gurgaon</li>
              <li><Link to="/golf-course-road-escorts" className="text-gold-600 hover:underline">Golf Course Road Escorts</Link> – Elite escorts for exclusive neighborhoods</li>
              <li><Link to="/dlf-city-escorts" className="text-gold-600 hover:underline">DLF City Escorts</Link> – Discreet escort service in Phase 1-5</li>
              <li><Link to="/iffco-chowk-call-girls" className="text-gold-600 hover:underline">Iffco Chowk Call Girls</Link> – Conveniently located near the business hub</li>
              <li><Link to="/sector-29-escorts" className="text-gold-600 hover:underline">Sector 29 Escorts</Link> – Near popular nightlife and dining destinations</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">The ALINA VIP Booking Experience</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Booking a <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> or 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escort</Link> through ALINA VIP is 
              designed to be simple, discreet, and professional. The process begins with browsing our online portfolio, 
              where you can explore the various categories and locations we serve. Each category page provides detailed 
              information about the <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              available, their specialities, and what you can expect from an engagement.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              You can reach us by calling <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline">{siteConfig.phoneDisplay}</a> 
              or by filling out the <Link to="/contact" className="text-gold-600 hover:underline">contact form</Link> on our website. 
              Our booking team is available 24 hours a day, 7 days a week, to assist you with your <strong>escort service</strong> needs.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">Discretion and Confidentiality in Escort Service</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At ALINA VIP, we understand that discretion is fundamental for our clients. Many of our clients are 
              prominent individuals in their personal and professional lives, and the privacy of their engagements 
              with our <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
              is of utmost importance. We have implemented comprehensive measures to ensure that every aspect of our 
              service is conducted with the highest level of confidentiality.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">Why Gurgaon is Perfect for Escort Service</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Gurgaon, now officially known as Gurugram, has transformed into one of India's most dynamic and 
              cosmopolitan cities. Home to numerous Fortune 500 companies, luxury hotels, premium residential 
              complexes, and world-class entertainment venues, the city attracts business professionals, entrepreneurs, 
              and visitors from across India and around the world. This cosmopolitan character makes Gurgaon the 
              perfect setting for <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> 
              and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">Book Your Escort Service Today</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you are looking for premium <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>, 
              look no further than ALINA VIP. Our team is ready to assist you in finding the perfect 
              <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> or 
              <Link to="/escorts" className="text-gold-600 hover:underline"> escort</Link> for your needs and 
              arranging a discreet and memorable experience. Call us today at <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline">{siteConfig.phoneDisplay}</a> 
              or visit <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline">ALINAVIP.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle text-gold-600">Get In Touch</p>
              <h2 className="section-title mb-6 text-[#1a1a2e]">
                Book Your <span className="text-gradient-gold">Escort Service</span>
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center flex-shrink-0 rounded-lg">
                    <Phone size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-gray-500 mb-1 font-bold">Phone</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-[#1a1a2e] hover:text-gold-600 transition-colors font-bold text-lg">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center flex-shrink-0 rounded-lg">
                    <MapPin size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-gray-500 mb-1 font-bold">Location</h3>
                    <p className="text-[#1a1a2e]">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center flex-shrink-0 rounded-lg">
                    <CheckCircle2 size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-ultra uppercase text-gray-500 mb-1 font-bold">Availability</h3>
                    <p className="text-[#1a1a2e] font-bold">24 Hours, 7 Days a Week</p>
                    <p className="text-sm text-gray-500">Available for call girls booking anytime</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="https://alinavip.com" target="_blank" className="text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-2">
                  Visit ALINAVIP.com <ArrowRight size={16} />
                </Link>
              </div>
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
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:border-gold-500 focus:outline-none transition-colors" defaultValue="">
                    <option value="" disabled className="text-gray-500">Select Location</option>
                    {locations.map((loc) => (
                      <option key={loc.slug} value={loc.slug} className="text-[#1a1a2e]">{loc.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-gray-400 mb-2 font-semibold">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none" placeholder="Tell us about your requirements..." />
                </div>
                <button type="submit" className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-600/30 hover:shadow-gold-600/50 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Book Escort Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}