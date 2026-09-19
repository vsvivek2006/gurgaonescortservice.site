import type { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  alternates: { canonical: `${siteConfig.url}/faq` },
  robots: { index: false, follow: false },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
