import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface Crumb {
  name: string;
  path?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const crumbUrl = item.path
        ? (item.path.startsWith('http') ? item.path : `${siteConfig.url}${item.path.startsWith('/') ? item.path : `/${item.path}`}`)
        : undefined;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(crumbUrl ? { item: crumbUrl } : {}),
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="container-luxury pt-28 pb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-charcoal-400">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {item.path ? (
                <Link href={item.path} className="hover:text-gold-500 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gold-500">{item.name}</span>
              )}
              {i < items.length - 1 && <ChevronRight size={12} className="text-charcoal-600" />}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
