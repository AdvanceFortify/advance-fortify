'use client';

import DemoLandingShell from '@/components/DemoLandingShell';

export default function DemoNebulaSaaSPage() {
  return (
    <>
      <DemoLandingShell
        title="Nebula Platform"
        subtitle="Next-generation cloud infrastructure that scales infinitely. Deploy, monitor, and optimize your applications with AI-powered automation across the cosmos."
        primaryCTA="Start Free Trial"
        secondaryCTA="Explore Features"
        services={[
          {
            title: 'Quantum Compute',
            description: 'Lightning-fast serverless functions powered by distributed edge computing.',
            icon: '⚛️',
          },
          {
            title: 'Neural Scaling',
            description: 'AI-driven auto-scaling that predicts traffic spikes before they happen.',
            icon: '🧠',
          },
          {
            title: 'Cosmic CDN',
            description: 'Global content delivery with sub-10ms latency from 300+ edge locations.',
            icon: '🌌',
          },
          {
            title: 'Blockchain Logs',
            description: 'Immutable audit trails with cryptographic verification built-in.',
            icon: '⛓️',
          },
        ]}
        results={[
          {
            percentage: '99.99%',
            caption: 'Guaranteed uptime SLA with zero-downtime deployments',
          },
          {
            percentage: '10x',
            caption: 'Faster deployment speed compared to traditional cloud',
          },
        ]}
        themeAccent="blue"
      />

      {/* Additional Futuristic Section */}
      <section
        style={{
          padding: '6rem 0',
          position: 'relative',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(100, 150, 255, 0.05) 100%)',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '4rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(100, 150, 255, 1) 0%, rgba(212, 175, 55, 1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Built for the Future
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { metric: '< 100ms', label: 'Global Response Time' },
              { metric: '∞', label: 'Horizontal Scalability' },
              { metric: '256-bit', label: 'End-to-End Encryption' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem',
                  background: 'rgba(100, 150, 255, 0.05)',
                  border: '1px solid rgba(100, 150, 255, 0.2)',
                  borderRadius: '24px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'rgba(100, 150, 255, 1)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.metric}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '1.125rem' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
