import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NorthEdge Growth Marketing | Performance Marketing Agency',
  description: 'Data-driven growth marketing. We scale brands with SEO, paid ads, landing pages, and conversion optimization.',
  openGraph: {
    title: 'NorthEdge Growth Marketing | Performance Marketing',
    description: 'Data-driven growth marketing.',
  },
};

export default function NorthEdgeMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
