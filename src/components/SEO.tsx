import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
  breadcrumbs?: { name: string; url: string }[];
}

function updateMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function updateLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function updateJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLd,
  breadcrumbs,
}: SEOProps) {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Update canonical URL
    if (canonical) updateLink('canonical', canonical);

    // Open Graph meta tags
    updateMeta('og:title', ogTitle || title, 'property');
    updateMeta('og:description', ogDescription || description, 'property');
    updateMeta('og:type', ogType, 'property');
    if (ogImage) updateMeta('og:image', ogImage, 'property');

    // Twitter Card meta tags
    updateMeta('twitter:title', ogTitle || title);
    updateMeta('twitter:description', ogDescription || description);
    if (ogImage) updateMeta('twitter:image', ogImage);
    updateMeta('twitter:card', 'summary_large_image');

    // JSON-LD structured data
    if (jsonLd) {
      updateJsonLd('page-jsonld', jsonLd);
    } else {
      removeJsonLd('page-jsonld');
    }

    // Breadcrumb structured data
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
      };
      updateJsonLd('breadcrumb-jsonld', breadcrumbLd);
    } else {
      removeJsonLd('breadcrumb-jsonld');
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, noindex, jsonLd, breadcrumbs]);

  return null;
}