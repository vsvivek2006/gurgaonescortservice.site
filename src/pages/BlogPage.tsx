import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { blogPosts, blogCategories } from '@/data/blogs';
import { useState } from 'react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts;

  return (
    <>
      <SEO
        title="Blog | Luxury Lifestyle & Companionship Insights | ALINA VIP"
        description="Read the ALINA VIP blog for insights on luxury living, dining, nightlife, travel, dating tips, and the premium lifestyle in Gurgaon. Expert articles and guides."
        keywords="luxury blog Gurgaon, lifestyle blog Gurgaon, dating tips, nightlife Gurgaon blog, luxury living blog"
        canonical={`${siteConfig.url}/blog`}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Blog', url: `${siteConfig.url}/blog` },
        ]}
      />

      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Blog' }]} />

      <section className="py-16 md:py-24">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle">Our Blog</p>
            <h1 className="section-title mb-6">
              Insights &amp; <span className="text-gradient-gold">Articles</span>
            </h1>
            <div className="gold-divider" />
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 text-xs tracking-wider uppercase transition-all ${
                activeCategory === null
                  ? 'bg-gold-500 text-charcoal-900'
                  : 'border border-charcoal-600 text-charcoal-300 hover:border-gold-500 hover:text-gold-500'
              }`}
            >
              All
            </button>
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-charcoal-900'
                    : 'border border-charcoal-600 text-charcoal-300 hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="luxury-card overflow-hidden group hover:shadow-lg hover:shadow-gold-500/10"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-charcoal-700 to-charcoal-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity" />
                  <span className="text-gold-500/30 font-serif text-6xl font-light">
                    {post.category.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold-500 tracking-wider uppercase">{post.category}</span>
                  <h3 className="font-serif text-lg text-white mt-2 mb-3 font-light leading-tight group-hover:text-gold-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-charcoal-400 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-charcoal-500">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-charcoal-400 py-12">No articles found in this category.</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
