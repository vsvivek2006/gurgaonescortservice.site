import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/siteConfig';
import { getBlogPost, blogPosts } from '@/data/blogs';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="section-title mb-4">Article Not Found</h1>
        <Link to="/blog" className="btn-outline-gold">Back to Blog</Link>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} | ALINA VIP Blog`}
        description={post.excerpt}
        keywords={`${post.category}, luxury lifestyle Gurgaon, ALINA VIP blog`}
        canonical={`${siteConfig.url}/blog/${post.slug}`}
        ogType="article"
        jsonLd={articleSchema}
        breadcrumbs={[
          { name: 'Home', url: siteConfig.url },
          { name: 'Blog', url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ]}
      />

      <Breadcrumb items={[
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title },
      ]} />

      <article className="py-16 md:py-24">
        <div className="container-luxury max-w-4xl">
          <div className="mb-8">
            <span className="text-xs text-gold-500 tracking-wider uppercase">{post.category}</span>
            <h1 className="font-serif text-3xl md:text-5xl text-white font-light mt-3 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-xs text-charcoal-500">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-gold-500" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="aspect-[16/9] bg-gradient-to-br from-charcoal-700 to-charcoal-800 flex items-center justify-center mb-10">
            <span className="text-gold-500/20 font-serif text-8xl font-light">
              {post.category.charAt(0)}
            </span>
          </div>

          <div className="prose-luxury">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-charcoal-700">
            <Link to="/blog" className="flex items-center gap-2 text-gold-500 hover:gap-3 transition-all text-sm tracking-wider uppercase">
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-charcoal-800/50">
          <div className="container-luxury">
            <h2 className="font-serif text-3xl text-white font-light mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="luxury-card overflow-hidden group hover:shadow-lg hover:shadow-gold-500/10"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-charcoal-700 to-charcoal-800 flex items-center justify-center">
                    <span className="text-gold-500/30 font-serif text-5xl font-light">{rp.category.charAt(0)}</span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gold-500 tracking-wider uppercase">{rp.category}</span>
                    <h3 className="font-serif text-lg text-white mt-2 mb-3 font-light leading-tight group-hover:text-gold-500 transition-colors">
                      {rp.title}
                    </h3>
                    <span className="text-xs text-gold-500 tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
