import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Websites | Advance Fortify',
  description: 'Explore our portfolio of real client websites across various industries.',
  openGraph: {
    title: 'Client Websites | Advance Fortify',
    description: 'Explore our portfolio of real client websites.',
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
