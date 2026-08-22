import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/content';
import { categories } from '@/data/categories';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Escort Service in Gurgaon | Call Girls Services | ALINA VIP"
        description="Explore ALINA VIP's premium escort service in Gurgaon. VIP call girls, Russian escorts, model escorts, party companions, travel companions, and more. Call +91-9996265679."
        keywords="escort service Gurgaon, call girls services Gurgaon, VIP escorts Gurgaon, Russian escorts Gurgaon, model escorts Gurgaon"
        canonical="https://gurgaonescortservice.site/services"
        breadcrumbs={[
          { name: 'Home', url: 'https://gurgaonescortservice.site' },
          { name: 'Services', url: 'https://gurgaonescortservice.site/services' },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: 'Our Services' }
        ]} 
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gold-pattern.png')] bg-repeat" />
        </div>
        <div className="container-luxury relative z-10 text-center">
          <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
            ★ Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Escort Service <span className="text-gradient-gold">in Gurgaon</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-gold-400">ALINA VIP</strong> offers premium 
            <Link to="/services" className="text-gold-400 hover:underline"> escort service in Gurgaon</Link> 
            with verified <Link to="/call-girls" className="text-gold-400 hover:underline">call girls</Link>, 
            <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, and 
            <Link to="/model-escorts" className="text-gold-400 hover:underline"> model escorts</Link>. 
            Each service is delivered with the highest standards of quality, discretion, and professionalism.
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

      {/* ===== SERVICES LIST ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Our Escort Services</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Premium <span className="text-gradient-gold">Call Girls</span> Services
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
              <strong>ALINA VIP</strong> offers a comprehensive range of premium 
              <Link to="/services" className="text-gold-600 hover:underline"> escort service in Gurgaon</Link> 
              designed to meet the diverse needs of our discerning clientele. Each service is delivered with 
              the highest standards of quality, discretion, and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service) => (
              <div key={service.slug} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all group">
                <h3 className="font-bold text-2xl text-[#1a1a2e] mb-4 group-hover:text-gold-600 transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link to="/contact" className="text-xs text-gold-600 font-semibold tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  Book Call Girls <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* ===== CATEGORIES SECTION ===== */}
          <div className="text-center mb-14">
            <p className="section-subtitle text-gold-600">Call Girls Categories</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Explore Our <span className="text-gradient-gold">Escort Categories</span>
            </h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Browse our verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
              and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> categories. 
              Find the perfect companion for your <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all group"
              >
                <h3 className="font-bold text-2xl text-[#1a1a2e] mb-3 group-hover:text-gold-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{cat.description}</p>
                <span className="text-xs text-gold-600 font-semibold tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Call Girls <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#1a1a2e]">
              Popular <span className="text-gold-600">Escort Services</span>
            </h3>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link to="/russian-escorts" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Crown className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">Russian Escorts</span>
            </Link>
            <Link to="/model-escorts" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Sparkles className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">Model Escorts</span>
            </Link>
            <Link to="/vip-escorts" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Crown className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">VIP Escorts</span>
            </Link>
            <Link to="/college-girls" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Users className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">College Girls</span>
            </Link>
            <Link to="/housewife-escorts" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Users className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">Housewife Escorts</span>
            </Link>
            <Link to="/independent-escorts" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Star className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">Independent Escorts</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SEO CONTENT ===== */}
      <section className="py-16 bg-white">
        <div className="container-luxury max-w-4xl">
          <div className="prose-luxury">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
              Premium Escort Service in Gurgaon
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>ALINA VIP</strong> is the leading <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>, 
              providing premium <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> and 
              <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link> for discerning gentlemen. 
              Our <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escorts</Link>, 
              <Link to="/model-escorts" className="text-gold-600 hover:underline"> model escorts</Link>, and 
              <Link to="/vip-escorts" className="text-gold-600 hover:underline">VIP escorts</Link> are available 
              for a wide range of engagements including dinner dates, social events, corporate functions, 
              travel companionship, and private engagements.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Each service is delivered with the highest standards of quality, discretion, and professionalism. 
              Our <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> are verified, 
              and all bookings are handled with complete confidentiality.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              To book <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> for any 
              of our <Link to="/services" className="text-gold-600 hover:underline">escort services</Link>, call us at 
              <a href={`tel:${siteConfig.phone}`} className="text-gold-600 hover:underline font-bold"> {siteConfig.phoneDisplay}</a> 
              or visit <a href="https://alinavip.com" target="_blank" className="text-gold-600 hover:underline font-bold">ALINAVIP.com</a>.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}