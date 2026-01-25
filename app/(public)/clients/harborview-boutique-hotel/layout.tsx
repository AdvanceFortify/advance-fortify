import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HarborView Boutique Hotel | Luxury Coastal Retreat in Constanța',
  description: 'Experience refined coastal luxury at HarborView. Elegant rooms, gourmet dining, and breathtaking Black Sea views.',
  openGraph: {
    title: 'HarborView Boutique Hotel | Luxury Coastal Retreat',
    description: 'Experience refined coastal luxury at HarborView.',
  },
};

export default function HarborViewHotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
