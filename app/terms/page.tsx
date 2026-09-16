import type { Metadata } from 'next';
import { TermsPage } from '@/components/LegalPages';
import { siteConfig, getAlternateLanguages } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Gurgaon Escort Service Escort Service',
  description: 'Terms and conditions governing the booking and provision of luxury escort services by Gurgaon Escort Service.',
  keywords: [
    ...siteConfig.keywords.slice(0, 10),
    'terms of service, booking policies, client agreement',
  ],
  alternates: {
    canonical: `${siteConfig.url}/terms`,
    languages: getAlternateLanguages('/terms'),
  },
  robots: {
    index: false,
    follow: true,
  },
};


export default function Page() {
  return <TermsPage />;
}
