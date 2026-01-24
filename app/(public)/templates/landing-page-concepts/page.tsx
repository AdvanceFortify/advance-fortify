'use client';

import Link from 'next/link';

const landingPageTemplates = [
  {
    name: 'Bold Studio',
    slug: 'demo-bold-studio',
    description: 'Creative agency landing page with bold typography and motion graphics',
    useCases: ['Creative agencies', 'Design studios', 'Marketing firms'],
    sections: ['Hero', 'Services', 'Results', 'Contact'],
  },
  {
    name: 'Coach Authority',
    slug: 'demo-coach-authority',
    description: 'Professional coaching landing page with trust-building elements',
    useCases: ['Life coaches', 'Business consultants', 'Personal trainers'],
    sections: ['Hero', 'About', 'Testimonials', 'Booking'],
  },
  {
    name: 'E-com Drop',
    slug: 'demo-ecom-drop',
    description: 'Product-focused landing page optimized for dropshipping stores',
    useCases: ['E-commerce stores', 'Product launches', 'Dropshipping'],
    sections: ['Product showcase', 'Features', 'Reviews', 'Purchase'],
  },
  {
    name: 'Local Hero',
    slug: 'demo-local-hero',
    description: 'Service-area business landing page with local SEO focus',
    useCases: ['Local services', 'Home repair', 'Service providers'],
    sections: ['Hero', 'Services', 'Service area', 'Contact'],
  },
  {
    name: 'Minimal Luxe',
    slug: 'demo-minimal-luxe',
    description: 'Clean, minimalist design perfect for premium brands',
    useCases: ['Luxury brands', 'Fashion', 'High-end products'],
    sections: ['Hero', 'Collection', 'About', 'Contact'],
  },
  {
    name: 'Nebula SaaS',
    slug: 'demo-nebula-saas',
    description: 'Modern SaaS landing page with feature highlights and pricing',
    useCases: ['SaaS products', 'Software tools', 'Tech startups'],
    sections: ['Hero', 'Features', 'Pricing', 'Demo'],
  },
];

export default function LandingPageConcepts() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: '8rem 0 6rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, #0b0b0e 0%, #111114 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'glowPulse 8s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link
            href="/templates"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--muted)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              marginBottom: '2rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-1)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            ← Back to Templates
          </Link>

          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              color: 'var(--text)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Landing Page Concepts
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: 'var(--muted)',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
            }}
          >
            Single-page templates optimized for conversions. Choose a concept, and we'll customize it for your business.
          </p>
        </div>

        <style jsx>{`
          @keyframes glowPulse {
            0%, 100% {
              opacity: 0.6;
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1.1);
            }
          }
        `}</style>
      </section>

      {/* Templates Grid */}
      <section
        style={{
          padding: '4rem 0 6rem',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: '2.5rem',
            }}
          >
            {landingPageTemplates.map((template, index) => (
              <Link
                key={index}
                href={`/templates/landing/${template.slug}`}
                style={{
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '28px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="template-card"
              >
                {/* Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    padding: '0.375rem 0.875rem',
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-1)',
                    zIndex: 2,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  LANDING PAGE TEMPLATE
                </div>

                {/* Content */}
                <div style={{ padding: '2.5rem 2rem' }}>
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      marginBottom: '1rem',
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}
                  >
                    {template.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'var(--muted)',
                      marginBottom: '1.5rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {template.description}
                  </p>

                  {/* Use Cases */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: 'var(--accent-1)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Perfect for:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {template.useCases.map((useCase, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--muted-2)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                        >
                          <span style={{ color: 'var(--accent-1)' }}>•</span>
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sections */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: 'var(--accent-1)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Included Sections:
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      {template.sections.map((section, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '0.375rem 0.875rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '9999px',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            color: 'var(--muted-2)',
                          }}
                        >
                          {section}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      marginTop: '2rem',
                      padding: '1rem 1.5rem',
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      borderRadius: '12px',
                      textAlign: 'center',
                      fontWeight: 700,
                      color: 'var(--accent-1)',
                      fontSize: '1rem',
                    }}
                  >
                    Preview & Use This Concept
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="template-card-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                    borderRadius: '28px',
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

        <style jsx>{`
          .template-card:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: rgba(212, 175, 55, 0.4);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.3);
            background: rgba(255, 255, 255, 0.05);
          }

          .template-card:hover .template-card-glow {
            opacity: 1;
          }

          @media (prefers-reduced-motion: reduce) {
            .template-card {
              transition: none;
            }
            .template-card-glow {
              transition: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
