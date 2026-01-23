import DemoLandingShell from '@/components/DemoLandingShell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Teaser Demo | Advance Fortify',
  description: 'Premium e-commerce landing page demo designed to showcase products and drive conversions.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoEcommercePage() {
  return (
    <DemoLandingShell
      title="Discover Premium Quality"
      subtitle="Curated collection of exceptional products crafted with care. Experience the difference that quality makes in every purchase."
      primaryCTA="Shop Now"
      secondaryCTA="View Collection"
      services={[
        {
          title: 'Premium Quality',
          description: 'Handpicked products that meet our strict standards for excellence and durability.',
          icon: '⭐',
        },
        {
          title: 'Fast Shipping',
          description: 'Quick and reliable delivery to get your orders to you as fast as possible.',
          icon: '🚚',
        },
        {
          title: 'Easy Returns',
          description: 'Hassle-free returns within 30 days. Your satisfaction is our priority.',
          icon: '↩️',
        },
        {
          title: 'Secure Checkout',
          description: 'Safe and encrypted payment processing for your peace of mind.',
          icon: '💳',
        },
      ]}
      results={[
        {
          percentage: '50K+',
          caption: 'Happy customers trust us for their shopping needs',
        },
        {
          percentage: '4.8/5',
          caption: 'Average product rating from verified purchases',
        },
      ]}
      themeAccent="green"
      metadata={{
        title: 'E-commerce Teaser Demo | Advance Fortify',
        description: 'Premium e-commerce landing page demo designed to showcase products.',
      }}
    />
  );
}
