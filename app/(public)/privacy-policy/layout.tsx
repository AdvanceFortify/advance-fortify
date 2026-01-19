import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Advance Fortify',
  description: 'Privacy Policy for Advance Fortify SRL - Learn how we collect, use, and protect your personal data.',
  alternates: {
    canonical: '/privacy-policy',
    languages: {
      'en': '/privacy-policy',
      'ro': '/privacy-policy',
    },
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
