'use client';

import { use } from 'react';
import { realProjects } from '@/lib/realProjects';
import { notFound } from 'next/navigation';
import BrightSmileDental from '@/components/ClientLanding/BrightSmileDental';
import UrbanNestRealty from '@/components/ClientLanding/UrbanNestRealty';
import PeakPhysioTherapy from '@/components/ClientLanding/PeakPhysioTherapy';
import CasaVerdeBistro from '@/components/ClientLanding/CasaVerdeBistro';
import NorthEdgeMarketing from '@/components/ClientLanding/NorthEdgeMarketing';
import SolaraSkincare from '@/components/ClientLanding/SolaraSkincare';

export default function RealProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = realProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Render the appropriate client landing page component
  switch (resolvedParams.slug) {
    case 'brightsmile-dental':
      return <BrightSmileDental />;
    case 'urbannest-realty':
      return <UrbanNestRealty />;
    case 'peakphysio-therapy':
      return <PeakPhysioTherapy />;
    case 'casaverde-bistro':
      return <CasaVerdeBistro />;
    case 'northedge-marketing':
      return <NorthEdgeMarketing />;
    case 'solara-skincare':
      return <SolaraSkincare />;
    default:
      notFound();
  }
}
