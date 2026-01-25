'use client';

import Link from 'next/link';

const clients = [
  {
    name: 'BrightSmile Dental',
    slug: 'brightsmile-dental',
    industry: 'Healthcare',
    description: 'Modern dental clinic with clean, clinical design and patient-focused experience.',
    color: '#17a2b8',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
  },
  {
    name: 'UrbanThreads Apparel',
    slug: 'urbanthreads-apparel',
    industry: 'Fashion & Retail',
    description: 'Contemporary fashion brand with bold editorial style and sustainable focus.',
    color: '#0066ff',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  },
  {
    name: 'HarborView Boutique Hotel',
    slug: 'harborview-boutique-hotel',
    industry: 'Hospitality',
    description: 'Luxury coastal hotel with elegant design and refined brand identity.',
    color: '#d4a574',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
  },
  {
    name: 'PeakPhysio Performance',
    slug: 'peakphysio-performance',
    industry: 'Sports & Wellness',
    description: 'Sports physiotherapy clinic with bold, energetic design and performance focus.',
    color: '#0a5c3e',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    name: 'NorthEdge Growth Marketing',
    slug: 'northedge-growth-marketing',
    industry: 'Marketing Agency',
    description: 'Performance marketing agency with modern gradients and data-driven approach.',
    color: '#7c3aed',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    name: 'Lumina Skin & Aesthetics',
    slug: 'lumina-skin-aesthetics',
    industry: 'Beauty & Aesthetics',
    description: 'Premium beauty clinic with refined, feminine design and luxury feel.',
    color: '#d4a5a5',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  },
];

export default function ClientsPage() {
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
            Client Websites
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
            Explore our portfolio of real client websites. Each one custom-built with unique design, brand identity, and user experience.
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

      {/* Clients Grid */}
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
            {clients.map((client, index) => (
              <Link
                key={index}
                href={`/clients/${client.slug}`}
                style={{
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '28px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="client-card"
              >
                {/* Image */}
                <div
                  style={{
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    loading="lazy"
                    width={600}
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    className="client-card-image"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.375rem 0.875rem',
                      background: client.color,
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      zIndex: 2,
                    }}
                  >
                    {client.industry}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      marginBottom: '0.75rem',
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}
                  >
                    {client.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'var(--muted)',
                      marginBottom: '1.5rem',
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {client.description}
                  </p>

                  {/* CTA */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: client.color,
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    View Website
                    <span style={{ fontSize: '1.25rem' }}>→</span>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="client-card-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at center, ${client.color}20 0%, transparent 70%)`,
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
          .client-card:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: rgba(212, 175, 55, 0.4);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.3);
            background: rgba(255, 255, 255, 0.05);
          }

          .client-card:hover .client-card-glow {
            opacity: 1;
          }

          .client-card:hover .client-card-image {
            transform: scale(1.05);
          }

          @media (prefers-reduced-motion: reduce) {
            .client-card {
              transition: none;
            }
            .client-card-glow {
              transition: none;
            }
            .client-card-image {
              transition: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
