import DemoLandingShell from '@/components/DemoLandingShell';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coach Personal Brand Demo | Advance Fortify',
  description: 'Premium personal brand landing page for coaches and consultants. Build trust and attract clients.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoCoachPage() {
  return (
    <DemoLandingShell
      title="Unlock Your Potential"
      subtitle="Transform your life and achieve your goals with personalized coaching that empowers you to reach new heights. Your journey to success starts here."
      primaryCTA="Book Consultation"
      secondaryCTA="My Story"
      services={[
        {
          title: '1-on-1 Coaching',
          description: 'Personalized sessions tailored to your unique goals, challenges, and aspirations.',
          icon: '🎯',
        },
        {
          title: 'Custom Programs',
          description: 'Structured programs designed to create lasting change and measurable results.',
          icon: '📋',
        },
        {
          title: 'Accountability',
          description: 'Stay on track with regular check-ins and support throughout your journey.',
          icon: '🤝',
        },
        {
          title: 'Proven Methods',
          description: 'Evidence-based strategies that have helped hundreds achieve their dreams.',
          icon: '✨',
        },
      ]}
      results={[
        {
          percentage: '92%',
          caption: 'Of clients achieve their primary goals within 90 days',
        },
        {
          percentage: '5.0/5',
          caption: 'Average client rating based on transformation results',
        },
      ]}
      themeAccent="purple"
      metadata={{
        title: 'Coach Personal Brand Demo | Advance Fortify',
        description: 'Premium personal brand landing page for coaches and consultants.',
      }}
    />
  );
}
