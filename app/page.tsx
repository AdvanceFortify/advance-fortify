import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import ResultsShowcase from '@/components/ResultsShowcase';
import CTAForm from '@/components/CTAForm';
import StormBackground from '@/components/StormBackground';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advance Fortify | Premium Web Design, SEO & Marketing',
  description:
    'Premium Next.js websites and landing pages built for speed, trust, and conversions. Transform your digital presence with our expert team.',
  openGraph: {
    title: 'Advance Fortify | Premium Web Design, SEO & Marketing',
    description:
      'Premium Next.js websites and landing pages built for speed, trust, and conversions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advance Fortify | Premium Web Design, SEO & Marketing',
    description:
      'Premium Next.js websites and landing pages built for speed, trust, and conversions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <StormBackground />
      <Hero />
      <ServiceCards />
      <ResultsShowcase />
      <CTAForm />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Advance Fortify',
            url: 'https://advancefortify.com',
            email: 'admin@advancefortify.com',
            telephone: '+40748979607',
            address: {
              '@type': 'PostalAddress',
              addressCountry: ['RO', 'US'],
            },
            sameAs: [
              '#',
            ],
          }),
        }}
      />
    </>
  );
}
