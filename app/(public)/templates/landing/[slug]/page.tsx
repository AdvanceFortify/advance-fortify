'use client';

import { use } from 'react';
import { notFound, redirect } from 'next/navigation';
import DemoBoldStudio from '@/app/(public)/portfolio/demo-bold-studio/page';
import DemoCoachAuthority from '@/app/(public)/portfolio/demo-coach-authority/page';
import DemoEcomDrop from '@/app/(public)/portfolio/demo-ecom-drop/page';
import DemoLocalHero from '@/app/(public)/portfolio/demo-local-hero/page';
import DemoMinimalLuxe from '@/app/(public)/portfolio/demo-minimal-luxe/page';
import DemoNebulaSaas from '@/app/(public)/portfolio/demo-nebula-saas/page';
import { ReactElement } from 'react';

const templateMap: Record<string, () => ReactElement> = {
  'demo-bold-studio': DemoBoldStudio,
  'demo-coach-authority': DemoCoachAuthority,
  'demo-ecom-drop': DemoEcomDrop,
  'demo-local-hero': DemoLocalHero,
  'demo-minimal-luxe': DemoMinimalLuxe,
  'demo-nebula-saas': DemoNebulaSaas,
};

export default function LandingTemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const TemplateComponent = templateMap[resolvedParams.slug];

  if (!TemplateComponent) {
    notFound();
  }

  return <TemplateComponent />;
}
