import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Phone, Star, Users, Crown, Sparkles, CheckCircle, MapPin, Clock, Shield } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig } from '@/data/siteConfig';
import { getCategory } from '@/data/categories';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategory(slug || '');

  if (!category) {
    return (
      <div className="pt-32 pb-20 text-center bg-white">
        <h1 className="section-title mb-4 text-[#1a1a2e]">Category Not Found</h1>
        <p className="text-gray-600 mb-6">The escort service category you're looking for doesn't exist.</p>
        <Link to="/services" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
          View All Services
        </Link>
      </div>
    );
  }

  // Category image mapping
  const categoryImages: Record<string, string> = {
    'russian-escorts': '/images/categories/russian-escorts.jpg',
    'model-escorts': '/images/categories/model-escorts.jpg',
    'housewife-escorts': '/images/categories/housewife-escorts.jpg',
    'college-girls': '/images/categories/college-girls.jpg',
    'independent-escorts': '/images/categories/independent-escorts.jpg',
    'vip-escorts': '/images/categories/vip-escorts.jpg',
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    'russian-escorts': <Crown className="w-12 h-12 text-gold-500" />,
    'model-escorts': <Sparkles className="w-12 h-12 text-gold-500" />,
    'housewife-escorts': <Users className="w-12 h-12 text-gold-500" />,
    'college-girls': <Users className="w-12 h-12 text-gold-500" />,
    'independent-escorts': <Star className="w-12 h-12 text-gold-500" />,
    'vip-escorts': <Crown className="w-12 h-12 text-gold-500" />,
  };

  return (
    <>
      <SEO
        title={`${category.name} | Escort Service in Gurgaon | VIP Call Girls`}
        description={`${category.shortDescription} ALINA VIP offers verified ${category.name.toLowerCase()} in Gurgaon. Premium escort service, 100% discreet. Call now for booking.`}
        keywords={`${category.name.toLowerCase()} Gurgaon, ${category.name.toLowerCase()} escorts, premium ${category.name.toLowerCase()}, call girls Gurgaon, VIP escort service Gurgaon`}
        canonical={`https://gurgaonescortservice.site/category/${category.slug}`}
        breadcrumbs={[
          { name: 'Home', url: 'https://gurgaonescortservice.site' },
          { name: 'Services', url: 'https://gurgaonescortservice.site/services' },
          { name: category.name, url: `https://gurgaonescortservice.site/category/${category.slug}` },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: category.name },
        ]} 
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gold-pattern.png')] bg-repeat" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
                ★ Premium Escort Service
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {category.name} <br />
                <span className="text-gradient-gold">in Gurgaon</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {category.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${siteConfig.phone}`} className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Book Now
                </a>
                <Link to="/contact" className="border-2 border-gold-500 hover:bg-gold-500/10 text-gold-400 px-8 py-4 rounded-full font-bold text-lg transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={categoryImages[category.slug] || '/images/categories/default.jpg'}
                alt={`${category.name} - Escort Service in Gurgaon | Call Girls`}
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="max-w-4xl prose-luxury">
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                  About Our {category.name}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {category.description}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  At <strong>ALINA VIP</strong>, we take pride in offering the finest 
                  <Link to="/services" className="text-gold-600 hover:underline"> escort service in Gurgaon</Link>. 
                  Each {category.name.toLowerCase()} has been carefully selected through our rigorous verification 
                  process, which includes identity verification, photo authentication, and background screening. 
                  This ensures that every profile is genuine and that our clients can book with complete confidence.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  Our <Link to={`/category/${category.slug}`} className="text-gold-600 hover:underline">{category.name.toLowerCase()}</Link> 
                  are available for a variety of engagements, including dinner dates, social events, corporate 
                  functions, travel companionship, and private engagements. They are discreet, professional, and 
                  committed to providing an exceptional <Link to="/services" className="text-gold-600 hover:underline">escort service experience</Link>.
                </p>

                {/* Features */}
                <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                  Why Choose Our {category.name}?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm">Verified Profiles</h4>
                      <p className="text-gray-600 text-sm">100% genuine profiles with photo verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Shield className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm">100% Discreet</h4>
                      <p className="text-gray-600 text-sm">Complete privacy guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm">24/7 Availability</h4>
                      <p className="text-gray-600 text-sm">Book anytime, day or night</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1a1a2e] text-sm">All Gurgaon Areas</h4>
                      <p className="text-gray-600 text-sm">Cyber City, MG Road, Golf Course Road & more</p>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                  Areas We Serve in Gurgaon
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link to="/cyber-city-escorts" className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 rounded-full text-sm transition-colors">
                    Cyber City
                  </Link>
                  <Link to="/mg-road-call-girls" className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 rounded-full text-sm transition-colors">
                    MG Road
                  </Link>
                  <Link to="/golf-course-road-escorts" className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 rounded-full text-sm transition-colors">
                    Golf Course Road
                  </Link>
                  <Link to="/dlf-city-escorts" className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 rounded-full text-sm transition-colors">
                    DLF City
                  </Link>
                  <Link to="/iffco-chowk-call-girls" className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 rounded-full text-sm transition-colors">
                    Iffco Chowk
                  </Link>
                  <Link to="/sector-29-escorts" className="px-4 py-2 bg-gray-100 hover:bg-gold-100 text-gray-700 hover:text-gold-700 rounded-full text-sm transition-colors">
                    Sector 29
                  </Link>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-200">
                  <p className="text-center text-lg font-semibold text-[#1a1a2e]">
                    📞 Book Your {category.name} Today
                  </p>
                  <p className="text-center text-gray-600 mt-2">
                    Call us 24/7 at <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold">{siteConfig.phoneDisplay}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Category Icon */}
              <div className="bg-gradient-to-br from-gold-50 to-amber-50 p-8 rounded-2xl text-center border-2 border-gold-200">
                <div className="flex justify-center mb-4">
                  {categoryIcons[category.slug] || <Star className="w-12 h-12 text-gold-500" />}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">{category.name}</h3>
                <p className="text-gray-600 text-sm mt-2">Premium escort service in Gurgaon</p>
              </div>

              {/* Quick Book */}
              <div className="bg-[#1a1a2e] p-6 rounded-2xl text-center">
                <h4 className="text-white font-bold text-lg mb-3">Book Now</h4>
                <a href={`tel:${siteConfig.phone}`} className="block bg-gold-600 hover:bg-gold-700 text-white py-3 rounded-full font-bold transition-all">
                  Call Now
                </a>
                <Link to="/contact" className="block text-gold-400 hover:text-gold-300 text-sm mt-3">
                  Or Contact Us
                </Link>
              </div>

              {/* Related Categories */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-[#1a1a2e] mb-4">Other Escort Services</h4>
                <div className="space-y-3">
                  <Link to="/russian-escorts" className="flex items-center gap-3 text-gray-700 hover:text-gold-600 transition-colors">
                    <Crown className="w-4 h-4 text-gold-500" />
                    Russian Escorts
                  </Link>
                  <Link to="/model-escorts" className="flex items-center gap-3 text-gray-700 hover:text-gold-600 transition-colors">
                    <Sparkles className="w-4 h-4 text-gold-500" />
                    Model Escorts
                  </Link>
                  <Link to="/housewife-escorts" className="flex items-center gap-3 text-gray-700 hover:text-gold-600 transition-colors">
                    <Users className="w-4 h-4 text-gold-500" />
                    Housewife Escorts
                  </Link>
                  <Link to="/college-girls" className="flex items-center gap-3 text-gray-700 hover:text-gold-600 transition-colors">
                    <Users className="w-4 h-4 text-gold-500" />
                    College Girls
                  </Link>
                  <Link to="/independent-escorts" className="flex items-center gap-3 text-gray-700 hover:text-gold-600 transition-colors">
                    <Star className="w-4 h-4 text-gold-500" />
                    Independent Escorts
                  </Link>
                  <Link to="/vip-escorts" className="flex items-center gap-3 text-gray-700 hover:text-gold-600 transition-colors">
                    <Crown className="w-4 h-4 text-gold-500" />
                    VIP Escorts
                  </Link>
                </div>
              </div>

              {/* Rating */}
              <div className="bg-gold-50 p-6 rounded-2xl border border-gold-200 text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="font-bold text-[#1a1a2e]">4.9/5 Rating</p>
                <p className="text-gray-600 text-sm">500+ verified client reviews</p>
              </div>
            </div>
          </div>

          {/* ===== BOOKING CTA ===== */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              To book our {category.name.toLowerCase()}, simply call us or fill out our contact form.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.phone}`} className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                <Phone className="w-5 h-5" /> Book Now
              </a>
              <Link to="/contact" className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}