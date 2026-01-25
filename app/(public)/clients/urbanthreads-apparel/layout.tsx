import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UrbanThreads | Contemporary Fashion & Streetwear',
  description: 'Discover sustainable streetwear and contemporary fashion. Bold designs, ethical production.',
  openGraph: {
    title: 'UrbanThreads | Contemporary Fashion & Streetwear',
    description: 'Discover sustainable streetwear and contemporary fashion.',
  },
};

export default function UrbanThreadsApparelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
