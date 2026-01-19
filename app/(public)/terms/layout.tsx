import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Advance Fortify',
  description: 'Terms and Conditions for Advance Fortify SRL - Read our terms of service and user obligations.',
  alternates: {
    canonical: '/terms',
    languages: {
      'en': '/terms',
      'ro': '/terms',
    },
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
