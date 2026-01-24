import type { Metadata } from "next";
import { realProjects } from '@/lib/realProjects';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = realProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Advance Fortify',
    };
  }

  return {
    title: `${project.name} - Real Portfolio | Advance Fortify`,
    description: `${project.industry} project achieving ${project.metric} in ${project.location}. ${project.tagline}`,
    alternates: {
      canonical: `/portfolio/real/${project.slug}`,
    },
  };
}

export default function RealProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
