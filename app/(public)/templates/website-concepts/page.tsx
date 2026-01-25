'use client';

import Link from 'next/link';

const websiteTemplates = [
  {
    name: 'BrightSmile Dental',
    slug: 'brightsmile-dental',
    description: 'Modern dental clinic with clean design, appointment booking, and patient-focused experience',
    pages: ['Home', 'Services', 'Our Doctors', 'Testimonials', 'Booking'],
    industries: ['Healthcare', 'Dental', 'Medical'],
  },
  {
    name: 'UrbanThreads Apparel',
    slug: 'urbanthreads-apparel',
    description: 'Contemporary fashion store with editorial style and sustainable focus',
    pages: ['Collection', 'Lookbook', 'Our Story', 'Reviews', 'Newsletter'],
    industries: ['Fashion', 'E-commerce', 'Retail'],
  },
  {
    name: 'HarborView Boutique Hotel',
    slug: 'harborview-boutique-hotel',
    description: 'Luxury coastal hotel with elegant design and booking system',
    pages: ['Rooms', 'Amenities', 'Restaurant', 'Gallery', 'Contact'],
    industries: ['Hospitality', 'Hotels', 'Travel'],
  },
  {
    name: 'PeakPhysio Performance',
    slug: 'peakphysio-performance',
    description: 'Sports physiotherapy clinic with bold design and performance focus',
    pages: ['Programs', 'Process', 'Team', 'Pricing', 'Booking'],
    industries: ['Healthcare', 'Sports', 'Wellness'],
  },
  {
    name: 'NorthEdge Growth Marketing',
    slug: 'northedge-growth-marketing',
    description: 'Performance marketing agency with modern design and data-driven approach',
    pages: ['Services', 'Case Studies', 'Process', 'Lead Magnet', 'Contact'],
    industries: ['Marketing', 'Agency', 'Digital'],
  },
  {
    name: 'Lumina Skin & Aesthetics',
    slug: 'lumina-skin-aesthetics',
    description: 'Premium beauty clinic with refined design and luxury feel',
    pages: ['Treatments', 'Gallery', 'Specialist', 'Pricing', 'Booking'],
    industries: ['Beauty', 'Aesthetics', 'Wellness'],
  },
];

export default function WebsiteConcepts() {
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
            Website Concepts
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
            Fully-built client websites across various industries. Click any website to explore the complete design and functionality.
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
            {websiteTemplates.map((template, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '28px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="website-card"
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
                  FULL WEBSITE
                </div>

                {/* Content */}
                <div style={{ padding: '2.5rem 2rem', flex: 1 }}>
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

                  {/* Pages Included */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: 'var(--accent-1)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Pages Included:
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      {template.pages.map((page, i) => (
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
                          {page}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suitable Industries */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: 'var(--accent-1)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Suitable for:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {template.industries.map((industry, i) => (
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
                          {industry}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div
                  style={{
                    margin: '0 2rem 2rem',
                    padding: '1rem 1.5rem',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: '12px',
                    textAlign: 'center',
                  }}
                >
                  <Link
                    href={`/clients/${template.slug}`}
                    style={{
                      fontWeight: 700,
                      color: 'var(--accent-1)',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      display: 'block',
                    }}
                  >
                    View Website →
                  </Link>
                </div>

                {/* Hover glow */}
                <div
                  className="website-card-glow"
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
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .website-card:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: rgba(212, 175, 55, 0.4);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.3);
            background: rgba(255, 255, 255, 0.05);
          }

          .website-card:hover .website-card-glow {
            opacity: 1;
          }

          @media (prefers-reduced-motion: reduce) {
            .website-card {
              transition: none;
            }
            .website-card-glow {
              transition: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
