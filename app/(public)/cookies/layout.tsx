import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Advance Fortify',
  description: 'Cookie Policy for Advance Fortify - Learn about how we use cookies and manage your preferences.',
  alternates: {
    canonical: '/cookies',
    languages: {
      'en': '/cookies',
      'ro': '/cookies',
    },
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
