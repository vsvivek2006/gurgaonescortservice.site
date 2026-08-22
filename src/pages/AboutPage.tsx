import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Lock, BadgeCheck, Star, Award, Users, Target, Eye, Crown, Gem, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About ALINA VIP | Premium Escort Service in Gurgaon | Call Girls Gurgaon"
        description="Discover ALINA VIP - Gurgaon's premier VIP escort service. Verified call girls, Russian models, and luxury companions in Cyber City, MG Road, Golf Course Road. 100% discreet."
        keywords="escort service Gurgaon, call girls Gurgaon, VIP escort Gurgaon, Russian escort Gurgaon, independent call girl, premium escort service, Cyber City escort, MG Road call girl, Golf Course Road escort"
        canonical={`https://gurgaonescortservice.site/about`}
        breadcrumbs={[
          { name: 'Home', url: 'https://gurgaonescortservice.site' },
          { name: 'About', url: 'https://gurgaonescortservice.site/about' },
        ]}
      />

      <Breadcrumb 
        items={[
          { name: 'Home', path: '/' }, 
          { name: 'About Us' }
        ]} 
      />

      {/* ===== HERO SECTION WITH KEYWORDS ===== */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#2d1b0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/gold-pattern.png')] bg-repeat" />
        </div>
        <div className="container-luxury relative z-10">
          <div className="text-center">
            <span className="inline-block px-6 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
              ★ Premium Escort Service in Gurgaon
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-gradient-gold">ALINA VIP</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gurgaon's most trusted <strong className="text-gold-400">VIP escort service</strong> offering verified 
              <strong className="text-gold-400"> call girls</strong>, <strong className="text-gold-400">Russian models</strong>, 
              and luxury companionship across <strong className="text-gold-400">Cyber City</strong>, 
              <strong className="text-gold-400"> MG Road</strong>, and <strong className="text-gold-400">Golf Course Road</strong>.
            </p>
            <div className="gold-divider mx-auto mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="prose-luxury max-w-3xl">
              <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                Welcome to ALINA VIP – <span className="text-gold-600">Gurgaon's Premier Escort Service</span>
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>ALINA VIP</strong> is Gurgaon's leading <Link to="/services" className="text-gold-600 hover:underline">premium escort service</Link>, 
                offering sophisticated companionship to discerning gentlemen across the city. Whether you're looking for 
                <Link to="/call-girls" className="text-gold-600 hover:underline"> VIP call girls</Link>, 
                <Link to="/russian-escorts" className="text-gold-600 hover:underline"> Russian escorts</Link>, or 
                <Link to="/models" className="text-gold-600 hover:underline"> elite models</Link>, we provide an 
                unparalleled experience of luxury, discretion, and elegance.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Founded with a vision to redefine the <strong>escort service in Gurgaon</strong>, we have established 
                ourselves as the city's most trusted name in luxury companionship. Our verified profiles, rigorous 
                screening process, and unwavering commitment to privacy set us apart from other 
                <Link to="/call-girls" className="text-gold-600 hover:underline"> call girl services in Gurgaon</Link>.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Why Choose ALINA VIP for Escort Service in Gurgaon?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <BadgeCheck className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">Verified Call Girls & Escorts</h4>
                    <p className="text-gray-600">Every profile on our platform is verified through ID checks, photo authentication, and background screening. You see exactly what you get.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <ShieldCheck className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">100% Discreet Service</h4>
                    <p className="text-gray-600">Your privacy is our priority. All client information, booking details, and preferences are kept strictly confidential.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Crown className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">VIP & Premium Companions</h4>
                    <p className="text-gray-600">Our curated selection includes <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escorts</Link>, 
                    <Link to="/models" className="text-gold-600 hover:underline"> models</Link>, 
                    <Link to="/housewives" className="text-gold-600 hover:underline"> housewives</Link>, and 
                    <Link to="/college-girls" className="text-gold-600 hover:underline"> college girls</Link> – all 
                    sophisticated, educated, and socially adept.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Gem className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1a1a2e]">Luxury Experience</h4>
                    <p className="text-gray-600">From <Link to="/incall" className="text-gold-600 hover:underline">incall services</Link> at premium hotels to 
                    <Link to="/outcall" className="text-gold-600 hover:underline"> outcall</Link> to your location, we ensure a 
                    seamless, high-end experience every time.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Mission: Redefining Escort Service in Gurgaon
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to provide the finest <strong>luxury escort service in Gurgaon</strong>, characterised 
                by verified profiles, exceptional companions, and unwavering discretion. We strive to create experiences 
                that are memorable, sophisticated, and tailored to the unique preferences of each client. Every engagement 
                is an opportunity to demonstrate our commitment to excellence, and we approach each one with the attention 
                and care it deserves.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                We believe that <strong>luxury companionship</strong> is about more than just physical beauty. It is 
                about the complete experience of spending time with someone who is cultured, articulate, and genuinely 
                engaging. It is about the comfort of knowing that your privacy is protected, your preferences are respected, 
                and your experience will be of the highest quality.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Core Values
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mt-4">
                <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                  <Lock className="w-8 h-8 text-gold-600 mb-3" />
                  <h4 className="font-bold text-[#1a1a2e]">Discretion</h4>
                  <p className="text-gray-600 text-sm">Complete confidentiality in all client interactions. Your privacy is non-negotiable.</p>
                </div>
                <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                  <Star className="w-8 h-8 text-gold-600 mb-3" />
                  <h4 className="font-bold text-[#1a1a2e]">Quality</h4>
                  <p className="text-gray-600 text-sm">Exacting standards in companion selection, training, and client support.</p>
                </div>
                <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                  <Eye className="w-8 h-8 text-gold-600 mb-3" />
                  <h4 className="font-bold text-[#1a1a2e]">Authenticity</h4>
                  <p className="text-gray-600 text-sm">Verified profiles with genuine photos and real backgrounds. No fake profiles.</p>
                </div>
                <div className="p-6 bg-gold-50 rounded-xl border border-gold-200">
                  <Users className="w-8 h-8 text-gold-600 mb-3" />
                  <h4 className="font-bold text-[#1a1a2e]">Professionalism</h4>
                  <p className="text-gray-600 text-sm">Luxury hospitality standards in every interaction, from booking to engagement.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Areas We Serve – Escort Service in Gurgaon
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our <Link to="/locations" className="text-gold-600 hover:underline">escort service in Gurgaon</Link> 
                covers all major areas including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li><Link to="/cyber-city-escorts" className="text-gold-600 hover:underline">Cyber City Escorts</Link> – Premium companions for corporate events and business meetings</li>
                <li><Link to="/mg-road-call-girls" className="text-gold-600 hover:underline">MG Road Call Girls</Link> – Luxury companions near the heart of Gurgaon</li>
                <li><Link to="/golf-course-road-escorts" className="text-gold-600 hover:underline">Golf Course Road Escorts</Link> – Elite companions for the city's most exclusive neighborhoods</li>
                <li><Link to="/dlf-city-escorts" className="text-gold-600 hover:underline">DLF City Escorts</Link> – Discreet service in Phase 1-5</li>
                <li><Link to="/iffco-chowk-call-girls" className="text-gold-600 hover:underline">Iffco Chowk Call Girls</Link> – Conveniently located near the business hub</li>
                <li><Link to="/sector-29-escorts" className="text-gold-600 hover:underline">Sector 29 Escorts</Link> – Near the popular nightlife and dining destinations</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Types of Escorts & Call Girls
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <Link to="/russian-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Russian Escorts</span>
                  <span className="text-sm text-gray-600">Exclusive European companions</span>
                </Link>
                <Link to="/model-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Model Escorts</span>
                  <span className="text-sm text-gray-600">Professional fashion models</span>
                </Link>
                <Link to="/housewife-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Housewife Escorts</span>
                  <span className="text-sm text-gray-600">Mature, experienced companions</span>
                </Link>
                <Link to="/college-girl-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">College Girls</span>
                  <span className="text-sm text-gray-600">Young, vibrant, and energetic</span>
                </Link>
                <Link to="/independent-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">Independent Escorts</span>
                  <span className="text-sm text-gray-600">Self-employed professional companions</span>
                </Link>
                <Link to="/vip-escorts" className="p-4 bg-gradient-to-r from-gold-50 to-white rounded-xl border border-gold-200 text-center hover:shadow-lg transition-shadow">
                  <span className="block font-bold text-[#1a1a2e]">VIP Escorts</span>
                  <span className="text-sm text-gray-600">High-profile premium companions</span>
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Our Commitment to Safety & Discretion
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Safety is a priority at <strong>ALINA VIP</strong>, both for our clients and our companions. Our 
                verification process is designed not only to ensure authenticity but also to create a safe environment 
                for all parties. We screen our companions thoroughly and provide them with guidelines on safety practices. 
                We also respect the boundaries and comfort levels of our companions, ensuring that all engagements are 
                consensual and respectful.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                For our clients, we provide a safe and reliable <Link to="/book-now" className="text-gold-600 hover:underline">booking process</Link> 
                that protects your privacy at every step. Our verified profiles give you confidence in your choices, 
                and our professional team ensures that your engagement is arranged properly.
              </p>

              <h3 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">
                Book Your Escort Service in Gurgaon Today
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Experience the finest <strong>escort service in Gurgaon</strong> with ALINA VIP. Whether you're looking 
                for a <Link to="/call-girls" className="text-gold-600 hover:underline">call girl</Link> for a night out, 
                a <Link to="/russian-escorts" className="text-gold-600 hover:underline">Russian escort</Link> for a 
                corporate event, or a <Link to="/vip-escorts" className="text-gold-600 hover:underline">VIP companion</Link> 
                for a weekend getaway, we have the perfect match for you.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/book-now" className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                  Book Now
                </Link>
                <Link to="/contact" className="bg-[#1a1a2e] hover:bg-[#2d2d44] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-200">
                <p className="text-center text-lg font-semibold text-[#1a1a2e]">
                  📞 Call us 24/7: <a href="tel:+919999999999" className="text-gold-600 hover:underline">+91 99999 99999</a>
                </p>
                <p className="text-center text-gray-600 mt-2">
                  Available for incall and outcall service across Gurgaon
                </p>
              </div>
            </div>

            {/* Right Column - Image Section */}
            <div className="space-y-6 sticky top-24">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-hero.jpg" 
                  alt="ALINA VIP - Premium Escort Service in Gurgaon | Call Girls Gurgaon" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/about-1.jpg" 
                    alt="VIP Call Girls Gurgaon | Russian Escorts" 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/about-2.jpg" 
                    alt="Escort Service Cyber City Gurgaon | Model Escorts" 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="bg-gold-50 p-6 rounded-2xl border border-gold-200 text-center">
                <Star className="w-8 h-8 text-gold-600 mx-auto mb-2" />
                <p className="font-bold text-[#1a1a2e]">4.9/5 Star Rating</p>
                <p className="text-gray-600 text-sm">Based on 500+ verified client reviews</p>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}