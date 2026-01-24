'use client';

import Link from 'next/link';

export default function PortfolioHubPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: '8rem 0 4rem',
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
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
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
            Portfolio
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              color: 'var(--muted)',
              maxWidth: '700px',
              margin: '0 auto 1rem',
              lineHeight: 1.6,
            }}
          >
            Explore our curated collection of design concepts and real client projects
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted-2)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Choose your path: conceptual UI designs or real-world success stories
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

      {/* Portfolio Categories */}
      <section
        style={{
          padding: '4rem 0 8rem',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
              gap: '3rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Demo Portfolio Card */}
            <Link
              href="/portfolio/demos"
              style={{
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '32px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="portfolio-hub-card"
            >
              {/* Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(150, 100, 255, 0.3) 0%, rgba(100, 150, 255, 0.3) 100%)',
                  borderRadius: '20px',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  boxShadow: '0 8px 32px rgba(150, 100, 255, 0.3)',
                }}
              >
                🎨
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}
              >
                Demo Portfolio
              </h2>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--muted)',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                  flexGrow: 1,
                }}
              >
                Explore our concept designs and UI style templates. Premium landing pages showcasing different design philosophies and visual approaches.
              </p>

              {/* Mini Previews */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}
              >
                {['Nebula', 'Local Hero', 'Coach'].map((name, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      aspectRatio: '16/10',
                      background: `linear-gradient(135deg, rgba(150, 100, 255, ${0.2 - i * 0.04}) 0%, rgba(100, 150, 255, ${0.15 - i * 0.03}) 100%)`,
                      borderRadius: '12px',
                      border: '1px solid rgba(150, 100, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--muted-2)',
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(150, 100, 255, 1)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                }}
              >
                Explore Demos
                <span style={{ fontSize: '1.25rem' }}>→</span>
              </div>

              {/* Hover glow */}
              <div
                className="hub-card-glow"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(150, 100, 255, 0.15) 0%, transparent 70%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  borderRadius: '32px',
                }}
              />
            </Link>

            {/* Real Portfolio Card */}
            <Link
              href="/portfolio/real"
              style={{
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '32px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="portfolio-hub-card"
            >
              {/* Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.4) 0%, rgba(255, 191, 0, 0.3) 100%)',
                  borderRadius: '20px',
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  boxShadow: '0 8px 32px rgba(212, 175, 55, 0.3)',
                }}
              >
                🏆
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}
              >
                Real Portfolio
              </h2>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--muted)',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                  flexGrow: 1,
                }}
              >
                Browse realistic client projects with proven results. See how we transform businesses across industries with tailored branding and strategic design.
              </p>

              {/* Mini Previews */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                }}
              >
                {['BrightSmile', 'UrbanNest', 'PeakPhysio'].map((name, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      aspectRatio: '16/10',
                      background: `linear-gradient(135deg, rgba(212, 175, 55, ${0.25 - i * 0.05}) 0%, rgba(255, 191, 0, ${0.2 - i * 0.04}) 100%)`,
                      borderRadius: '12px',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--muted-2)',
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--accent-1)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                }}
              >
                Explore Real Projects
                <span style={{ fontSize: '1.25rem' }}>→</span>
              </div>

              {/* Hover glow */}
              <div
                className="hub-card-glow"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none',
                  borderRadius: '32px',
                }}
              />
            </Link>
          </div>
        </div>

        <style jsx>{`
          .portfolio-hub-card:hover {
            transform: translateY(-12px) scale(1.02);
            border-color: rgba(212, 175, 55, 0.4);
            box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.3);
            background: rgba(255, 255, 255, 0.06);
          }

          .portfolio-hub-card:hover .hub-card-glow {
            opacity: 1;
          }

          @media (max-width: 768px) {
            .portfolio-hub-card {
              padding: 2rem !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .portfolio-hub-card {
              transition: none;
            }
            .hub-card-glow {
              transition: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
