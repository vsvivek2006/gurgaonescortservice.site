import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { siteConfig, generalFaqs } from '@/data/siteConfig';
import { Phone, Star, Shield, Crown, Users, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function FAQPage() {
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
        title="FAQ | Escort Service in Gurgaon | VIP Call Girls Questions"
        description="Find answers to frequently asked questions about escort service in Gurgaon. Learn about VIP call girls, Russian escorts, booking, verification, discretion, and more."
        keywords="escort service FAQ Gurgaon, call girls questions, VIP escort booking FAQ, Russian escorts Gurgaon, model escorts FAQ, discreet escort service"
        canonical="https://gurgaonescortservice.site/faq"
        jsonLd={faqSchema}
        breadcrumbs={[
          { name: 'Home', url: 'https://gurgaonescortservice.site' },
          { name: 'FAQ', url: 'https://gurgaonescortservice.site/faq' },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: 'FAQ' }
        ]} 
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gold-pattern.png')] bg-repeat" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="text-center">
            <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
              ★ FAQ
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Escort Service <span className="text-gradient-gold">FAQ</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about <strong className="text-gold-400">escort service in Gurgaon</strong>, 
              <Link to="/call-girls" className="text-gold-400 hover:underline"> VIP call girls</Link>, 
              <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, and 
              <Link to="/services" className="text-gold-400 hover:underline"> premium escort services</Link>.
            </p>
            <div className="gold-divider mx-auto mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* ===== LEFT COLUMN - FAQ LIST ===== */}
            <div className="lg:col-span-2">
              <div className="text-center mb-12">
                <p className="section-subtitle text-gold-600">FAQ</p>
                <h2 className="section-title mb-4 text-[#1a1a2e]">
                  Frequently Asked <span className="text-gradient-gold">Questions</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everything you need to know about our <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
                  and <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link>.
                </p>
                <div className="gold-divider mx-auto mt-6" />
              </div>

              <div className="space-y-4">
                {generalFaqs.map((faq, i) => (
                  <details key={i} className="group bg-white rounded-2xl border border-gray-200 hover:border-gold-300 transition-all shadow-sm hover:shadow-md overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gold-50/30 transition-colors">
                      <span className="font-semibold text-[#1a1a2e] text-lg pr-4 flex items-center gap-3">
                        <span className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        {faq.question}
                      </span>
                      <span className="text-gold-600 text-3xl font-light group-open:rotate-45 transition-transform duration-300 flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                      {/* Add internal links in answers if they contain keywords */}
                      {faq.answer.includes('escort') && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Link to="/services" className="text-xs bg-gold-50 text-gold-600 px-3 py-1 rounded-full hover:bg-gold-100 transition-colors">
                            View Escort Services
                          </Link>
                          <Link to="/call-girls" className="text-xs bg-gold-50 text-gold-600 px-3 py-1 rounded-full hover:bg-gold-100 transition-colors">
                            Browse Call Girls
                          </Link>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">Still have questions? We're here to help 24/7.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={`tel:${siteConfig.phone}`} className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                  <Link to="/contact" className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* ===== RIGHT COLUMN - SIDEBAR ===== */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d1b0e] p-6 rounded-2xl border border-gold-500/20">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-gold-500" />
                  Our Escort Services
                </h3>
                <div className="space-y-3">
                  <Link to="/russian-escorts" className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5">
                    <span>Russian Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link to="/model-escorts" className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5">
                    <span>Model Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link to="/housewife-escorts" className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5">
                    <span>Housewife Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link to="/college-girls" className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5">
                    <span>College Girls</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link to="/independent-escorts" className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2 border-b border-white/5">
                    <span>Independent Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                  <Link to="/vip-escorts" className="flex items-center justify-between text-gray-300 hover:text-gold-400 transition-colors py-2">
                    <span>VIP Escorts</span>
                    <ArrowRight className="w-4 h-4 text-gold-500" />
                  </Link>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-[#1a1a2e] text-lg mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-500" />
                  Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Link to="/cyber-city-escorts" className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors">
                    Cyber City
                  </Link>
                  <Link to="/mg-road-call-girls" className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors">
                    MG Road
                  </Link>
                  <Link to="/golf-course-road-escorts" className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors">
                    Golf Course Road
                  </Link>
                  <Link to="/dlf-city-escorts" className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors">
                    DLF City
                  </Link>
                  <Link to="/iffco-chowk-call-girls" className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors">
                    Iffco Chowk
                  </Link>
                  <Link to="/sector-29-escorts" className="text-xs bg-white hover:bg-gold-100 text-gray-700 hover:text-gold-700 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gold-300 transition-colors">
                    Sector 29
                  </Link>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gold-50 p-6 rounded-2xl border-2 border-gold-200">
                <h3 className="font-bold text-[#1a1a2e] text-center mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gold-600" />
                    <span className="text-sm text-gray-700">100% Discreet Service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-600" />
                    <span className="text-sm text-gray-700">Verified Call Girls & Escorts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-600" />
                    <span className="text-sm text-gray-700">24/7 Availability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-gold-600" />
                    <span className="text-sm text-gray-700">500+ Verified Reviews</span>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/faq-sidebar.jpg" 
                  alt="Escort Service in Gurgaon - VIP Call Girls FAQ"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STILL HAVE QUESTIONS ===== */}
      <section className="py-16 bg-gradient-to-br from-[#faf6f2] to-white">
        <div className="container-luxury">
          <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-gold-200 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">
              Still Have Questions About <span className="text-gold-600">Escort Service?</span>
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team is available 24/7 to answer all your questions about 
              <Link to="/call-girls" className="text-gold-600 hover:underline"> call girls in Gurgaon</Link>, 
              <Link to="/russian-escorts" className="text-gold-600 hover:underline"> Russian escorts</Link>, 
              and <Link to="/services" className="text-gold-600 hover:underline"> VIP escort services</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${siteConfig.phone}`} className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call {siteConfig.phoneDisplay}
              </a>
              <Link to="/contact" className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}