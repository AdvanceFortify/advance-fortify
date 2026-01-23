import DemoLandingShell from '@/components/DemoLandingShell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SaaS Conversion Page Demo | Advance Fortify',
  description: 'Premium SaaS landing page demo showcasing conversion-focused design with cosmic aesthetics.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoSaaSPage() {
  return (
    <DemoLandingShell
      title="Transform Your Workflow"
      subtitle="The all-in-one platform that helps teams collaborate, ship faster, and scale effortlessly. Built for modern teams who demand excellence."
      primaryCTA="Start Free Trial"
      secondaryCTA="Watch Demo"
      services={[
        {
          title: 'Automation',
          description: 'Streamline repetitive tasks with intelligent automation that adapts to your workflow.',
          icon: '⚡',
        },
        {
          title: 'Analytics',
          description: 'Get real-time insights and data-driven decisions with powerful analytics tools.',
          icon: '📊',
        },
        {
          title: 'Integrations',
          description: 'Connect with 100+ tools you already use. Seamless integration, zero friction.',
          icon: '🔗',
        },
        {
          title: 'Security',
          description: 'Enterprise-grade security with end-to-end encryption and compliance standards.',
          icon: '🔒',
        },
      ]}
      results={[
        {
          percentage: '340%',
          caption: 'Average ROI increase for teams using our platform',
        },
        {
          percentage: '89%',
          caption: 'Time saved on routine tasks with automation',
        },
      ]}
      themeAccent="blue"
      metadata={{
        title: 'SaaS Conversion Page Demo | Advance Fortify',
        description: 'Premium SaaS landing page demo showcasing conversion-focused design.',
      }}
    />
  );
}
