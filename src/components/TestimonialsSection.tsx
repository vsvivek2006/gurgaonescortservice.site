import { Link } from 'react-router-dom';
import { Star, Phone } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-luxury">
        <div className="text-center mb-14">
          <p className="section-subtitle text-gold-600">Client Testimonials</p>
          <h2 className="section-title mb-4 text-[#1a1a2e]">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Real reviews from clients who have used our 
            <Link to="/services" className="text-gold-600 hover:underline"> escort service in Gurgaon</Link> 
            and booked <Link to="/call-girls" className="text-gold-600 hover:underline">call girls</Link> 
            and <Link to="/escorts" className="text-gold-600 hover:underline">escorts</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all group"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#1a1a2e] font-sans text-sm font-bold">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{t.location}</p>
                </div>
                <span className="text-xs bg-gold-100 text-gold-700 px-3 py-1 rounded-full font-semibold">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ===== CTA Section ===== */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to experience the best <Link to="/services" className="text-gold-600 hover:underline">escort service in Gurgaon</Link>?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91-9996265679" className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <Phone className="w-5 h-5" /> Book Call Girls Now
            </a>
            <Link to="/contact" className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Contact Us
            </Link>
            <Link to="https://alinavip.com" target="_blank" className="text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-2">
              Visit ALINAVIP.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}