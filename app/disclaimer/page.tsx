import type { Metadata } from 'next';
import { DisclaimerPage } from '@/components/LegalPages';
import { siteConfig, getAlternateLanguages } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Disclaimer | Gurgaon Escort Service Escort Service',
  description: 'Legal disclaimer and terms of engagement for Gurgaon Escort Service luxury escort services.',
  keywords: [
    ...siteConfig.keywords.slice(0, 10),
    'disclaimer, adult escort terms, legal compliance',
  ],
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
    languages: getAlternateLanguages('/disclaimer'),
  },
  robots: {
    index: false,
    follow: true,
  },
};


export default function Page() {
  return <DisclaimerPage />;
}
