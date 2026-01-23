'use client';

import DemoLandingShell from '@/components/DemoLandingShell';
import Link from 'next/link';

export default function DemoLocalHeroPage() {
  return (
    <>
      <DemoLandingShell
        title="Elite Roofing Co."
        subtitle="Your trusted local roofing experts serving the community for over 20 years. Quality craftsmanship, honest pricing, and lifetime warranties."
        primaryCTA="Get Free Estimate"
        secondaryCTA="View Our Work"
        services={[
          {
            title: 'Roof Replacement',
            description: 'Complete roof installations with premium materials and expert craftsmanship.',
            icon: '🏠',
          },
          {
            title: 'Roof Repairs',
            description: 'Fast emergency repairs and maintenance to protect your home.',
            icon: '🔧',
          },
          {
            title: 'Inspections',
            description: 'Comprehensive roof inspections with detailed reports and recommendations.',
            icon: '🔍',
          },
          {
            title: 'Storm Damage',
            description: 'Insurance claim assistance and rapid storm damage restoration.',
            icon: '⛈️',
          },
        ]}
        results={[
          {
            percentage: '1,200+',
            caption: 'Happy homeowners in your area',
          },
          {
            percentage: '4.9★',
            caption: 'Average rating from verified customers',
          },
        ]}
        themeAccent="gold"
      />

      {/* Trust Badges Section */}
      <section
        style={{
          padding: '4rem 0',
          background: 'rgba(212, 175, 55, 0.03)',
          borderTop: '1px solid rgba(212, 175, 55, 0.1)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {['Licensed & Insured', 'BBB A+ Rated', 'Lifetime Warranty', '24/7 Emergency', 'Free Estimates'].map(
              (badge, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem 1.5rem',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '12px',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--accent-1)',
                  }}
                >
                  {badge}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Service Area Map Mock */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            Proudly Serving Your Area
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              fontSize: '1.125rem',
              marginBottom: '3rem',
            }}
          >
            We cover a 50-mile radius with same-day emergency service available
          </p>
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              aspectRatio: '16/9',
              background: 'rgba(212, 175, 55, 0.05)',
              border: '2px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontSize: '4rem',
                opacity: 0.3,
              }}
            >
              📍
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '1rem 2rem',
                background: 'rgba(0, 0, 0, 0.8)',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Service Map (Interactive Demo)
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section style={{ padding: '6rem 0', background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            See the Transformation
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  style={{
                    aspectRatio: '4/3',
                    background: 'linear-gradient(135deg, rgba(100, 100, 100, 0.3) 0%, rgba(50, 50, 50, 0.3) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                  }}
                >
                  Before
                </div>
                <div
                  style={{
                    aspectRatio: '4/3',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(150, 120, 40, 0.2) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    color: 'var(--accent-1)',
                    fontWeight: 600,
                  }}
                >
                  After
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
