import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'The 5-Stage Launch System | Advance Fortify',
  description:
    'Start lean. Validate fast. Scale with confidence. Modular stages — Validation Landing, Traffic & Testing, Build the Brand, Growth Engine, Scale & Optimize. Starting at pricing, no fixed prices.',
  openGraph: {
    title: 'The 5-Stage Launch System | Advance Fortify',
    description:
      'Start lean. Validate fast. Scale with confidence. Every stage is modular — you only pay for what you need.',
    type: 'website',
    url: '/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 5-Stage Launch System | Advance Fortify',
    description: 'Start lean. Validate fast. Scale with confidence. Modular launch stages.',
  },
  robots: { index: true, follow: true },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
