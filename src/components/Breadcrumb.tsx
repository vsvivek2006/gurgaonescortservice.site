import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  name: string;
  path?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="container-luxury pt-28 pb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-charcoal-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.path ? (
              <Link to={item.path} className="hover:text-gold-500 transition-colors">
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
  );
}