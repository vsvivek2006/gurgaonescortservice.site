import { Star } from 'lucide-react';
import { testimonials } from '@/data/content';

interface TestimonialsSectionProps {
  theme?: 'light' | 'dark';
}

export default function TestimonialsSection({ theme = 'dark' }: TestimonialsSectionProps) {
  const isLight = theme === 'light';

  return (
    <section className={`py-20 md:py-28 ${isLight ? 'bg-[#faf6f2]' : ''}`}>
      <div className="container-luxury">
        <div className="text-center mb-14">
          <p className={`section-subtitle ${isLight ? 'text-gold-600' : ''}`}>Client Testimonials</p>
          <h2 className={`section-title mb-4 ${isLight ? 'text-[#1a1a2e]' : ''}`}>
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={
                isLight
                  ? 'bg-white p-8 rounded-2xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all'
                  : 'luxury-card p-8 group hover:shadow-lg hover:shadow-gold-500/10'
              }
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className={`text-sm leading-relaxed mb-6 italic ${isLight ? 'text-gray-600' : 'text-charcoal-300'}`}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className={`font-sans text-sm ${isLight ? 'text-[#1a1a2e] font-bold' : 'text-white font-medium'}`}>{t.name}</p>
                <p className={`text-xs mt-1 ${isLight ? 'text-gray-500' : 'text-charcoal-500'}`}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
