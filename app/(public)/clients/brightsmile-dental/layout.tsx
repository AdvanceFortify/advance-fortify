import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BrightSmile Dental Clinic | Modern Dentistry in Cluj-Napoca',
  description: 'Experience gentle, modern dental care in Cluj-Napoca. Offering implants, whitening, Invisalign, and emergency services.',
  openGraph: {
    title: 'BrightSmile Dental Clinic | Modern Dentistry in Cluj-Napoca',
    description: 'Experience gentle, modern dental care in Cluj-Napoca.',
  },
};

export default function BrightSmileDentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
