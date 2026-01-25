import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PeakPhysio Performance | Sports Physiotherapy & Rehabilitation',
  description: 'Return stronger, move better. Expert sports physiotherapy, injury recovery, and performance optimization.',
  openGraph: {
    title: 'PeakPhysio Performance | Sports Physiotherapy',
    description: 'Return stronger, move better.',
  },
};

export default function PeakPhysioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
