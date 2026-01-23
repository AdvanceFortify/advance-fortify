import DemoLandingShell from '@/components/DemoLandingShell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Service Business Demo | Advance Fortify',
  description: 'Premium local service business website demo designed to convert visitors into customers.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoLocalServicePage() {
  return (
    <DemoLandingShell
      title="Your Trusted Local Experts"
      subtitle="Professional service solutions delivered with excellence. We're here to solve your problems with quality, reliability, and unmatched customer care."
      primaryCTA="Get Free Quote"
      secondaryCTA="Our Services"
      services={[
        {
          title: 'Expert Team',
          description: 'Licensed professionals with years of experience and proven track records.',
          icon: '👷',
        },
        {
          title: '24/7 Support',
          description: 'Round-the-clock availability for emergencies and urgent service needs.',
          icon: '🕐',
        },
        {
          title: 'Quality Guarantee',
          description: '100% satisfaction guaranteed. We stand behind our work with confidence.',
          icon: '✅',
        },
        {
          title: 'Fair Pricing',
          description: 'Transparent, competitive pricing with no hidden fees or surprises.',
          icon: '💰',
        },
      ]}
      results={[
        {
          percentage: '98%',
          caption: 'Customer satisfaction rate across all service calls',
        },
        {
          percentage: '4.9/5',
          caption: 'Average rating from 500+ verified customer reviews',
        },
      ]}
      themeAccent="gold"
      metadata={{
        title: 'Local Service Business Demo | Advance Fortify',
        description: 'Premium local service business website demo designed to convert visitors.',
      }}
    />
  );
}
