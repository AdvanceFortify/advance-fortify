import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lumina Skin & Aesthetics | Premium Aesthetic Treatments',
  description: 'Reveal your natural radiance. Expert aesthetic treatments, skincare, and beauty services in an elegant setting.',
  openGraph: {
    title: 'Lumina Skin & Aesthetics | Premium Beauty Clinic',
    description: 'Reveal your natural radiance.',
  },
};

export default function LuminaSkinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
