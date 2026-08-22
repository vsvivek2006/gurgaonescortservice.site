import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/siteConfig';
import { categories } from '@/data/categories';
import { Phone, Star, Crown, Sparkles, Users, Eye, ArrowRight } from 'lucide-react';

export default function GalleryPage() {
  // Category image mapping
  const categoryImages: Record<string, string> = {
    'russian-escorts': '/images/gallery/russian-escorts.jpg',
    'model-escorts': '/images/gallery/model-escorts.jpg',
    'housewife-escorts': '/images/gallery/housewife-escorts.jpg',
    'college-girls': '/images/gallery/college-girls.jpg',
    'independent-escorts': '/images/gallery/independent-escorts.jpg',
    'vip-escorts': '/images/gallery/vip-escorts.jpg',
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    'russian-escorts': <Crown className="w-8 h-8 text-gold-500" />,
    'model-escorts': <Sparkles className="w-8 h-8 text-gold-500" />,
    'housewife-escorts': <Users className="w-8 h-8 text-gold-500" />,
    'college-girls': <Users className="w-8 h-8 text-gold-500" />,
    'independent-escorts': <Star className="w-8 h-8 text-gold-500" />,
    'vip-escorts': <Crown className="w-8 h-8 text-gold-500" />,
  };

  return (
    <>
      <SEO
        title="Gallery | Escort Service in Gurgaon | VIP Call Girls Profiles"
        description="Browse our gallery of premium escort service in Gurgaon. Explore verified VIP call girls, Russian escorts, model escorts, and more. 100% discreet service."
        keywords="escort service Gurgaon gallery, call girls profiles, VIP escort gallery, Russian escorts photos, model escorts Gurgaon, premium escort service"
        canonical="https://gurgaonescortservice.site/gallery"
        breadcrumbs={[
          { name: 'Home', url: 'https://gurgaonescortservice.site' },
          { name: 'Gallery', url: 'https://gurgaonescortservice.site/gallery' },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: 'Gallery' }
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
              ★ Gallery
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Escort Service <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our premium collection of <strong className="text-gold-400">VIP call girls</strong>, 
              <Link to="/russian-escorts" className="text-gold-400 hover:underline"> Russian escorts</Link>, 
              <Link to="/model-escorts" className="text-gold-400 hover:underline"> model escorts</Link>, and 
              <Link to="/services" className="text-gold-400 hover:underline"> more escort services in Gurgaon</Link>.
            </p>
            <div className="gold-divider mx-auto mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <p className="section-subtitle text-gold-600">Our Gallery</p>
            <h2 className="section-title mb-4 text-[#1a1a2e]">
              Premium <span className="text-gradient-gold">Call Girls</span> Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls in Gurgaon</Link>. 
              Each category represents premium <Link to="/services" className="text-gold-600 hover:underline">escort service</Link> options.
            </p>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          {/* ===== GALLERY GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src={categoryImages[cat.slug] || `/images/gallery/default.jpg`}
                    alt={`${cat.name} - Escort Service in Gurgaon | VIP Call Girls`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gold-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-2">
                    {categoryIcons[cat.slug]}
                    {cat.name}
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <p className="text-white text-sm leading-relaxed line-clamp-3">
                        {cat.shortDescription}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase flex items-center gap-1">
                          View Profile <ArrowRight className="w-4 h-4" />
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                          <span className="text-white text-sm font-bold">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl text-[#1a1a2e] font-bold group-hover:text-gold-600 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-xs bg-gold-100 text-gold-700 px-3 py-1 rounded-full font-semibold">
                      Premium
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {cat.shortDescription}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                      <span className="text-sm font-bold text-[#1a1a2e]">4.9</span>
                      <span className="text-xs text-gray-400">(128 reviews)</span>
                    </div>
                    <span className="text-gold-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">500+</div>
              <p className="text-gray-400 text-sm">Verified Call Girls</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">4.9/5</div>
              <p className="text-gray-400 text-sm">Client Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Availability</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-500 mb-2">100%</div>
              <p className="text-gray-400 text-sm">Discreet Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED CATEGORIES ===== */}
      <section className="py-16 bg-[#faf6f2]">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">
              Popular <span className="text-gold-600">Escort Services</span>
            </h3>
            <p className="text-gray-600">
              Browse our most popular <Link to="/services" className="text-gold-600 hover:underline">escort service categories in Gurgaon</Link>
            </p>
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
            <Link to="/housewife-escorts" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Users className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">Housewife Escorts</span>
            </Link>
            <Link to="/college-girls" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Users className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">College Girls</span>
            </Link>
            <Link to="/independent-escorts" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Star className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">Independent Escorts</span>
            </Link>
            <Link to="/vip-escorts" className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-gold-300 group">
              <Crown className="w-10 h-10 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-gold-600">VIP Escorts</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container-luxury">
          <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-gold-200 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#1a1a2e] mb-4">
              Ready to Book Your <span className="text-gold-600">Escort Service?</span>
            </h3>
            <p className="text-gray-700 mb-6">
              Browse our gallery and choose from verified <Link to="/call-girls" className="text-gold-600 hover:underline">call girls in Gurgaon</Link>. 
              Call us 24/7 for <Link to="/services" className="text-gold-600 hover:underline">premium escort service</Link> booking.
            </p>
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
      </section>

      <CTASection />
    </>
  );
}