'use client';

import Link from 'next/link';

export default function TemplatesHub() {
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
            Templates
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              color: 'var(--muted)',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: 1.6,
            }}
          >
            Choose a landing page or website concept. We customize it for your business — branding, content, and layout tailored to your needs.
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

          @media (prefers-reduced-motion: reduce) {
            .hero-glow {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* Template Categories */}
      <section
        style={{
          padding: '0 0 6rem',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: '3rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Landing Page Concepts */}
            <Link
              href="/templates/landing-page-concepts"
              style={{
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '32px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                padding: '3rem',
                minHeight: '400px',
              }}
              className="template-category-card"
            >
              <div
                style={{
                  fontSize: '4rem',
                  marginBottom: '2rem',
                }}
              >
                📄
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  color: 'var(--text)',
                  lineHeight: 1.2,
                }}
              >
                Landing Page Concepts
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--muted)',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                Single-page designs perfect for campaigns, product launches, and lead generation. High-converting layouts ready to customize.
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--accent-1)',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                }}
              >
                Browse Concepts
                <span style={{ fontSize: '1.5rem' }}>→</span>
              </div>

              {/* Hover glow */}
              <div
                className="category-card-glow"
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

            {/* Website Concepts */}
            <Link
              href="/templates/website-concepts"
              style={{
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '32px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                padding: '3rem',
                minHeight: '400px',
              }}
              className="template-category-card"
            >
              <div
                style={{
                  fontSize: '4rem',
                  marginBottom: '2rem',
                }}
              >
                🌐
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  color: 'var(--text)',
                  lineHeight: 1.2,
                }}
              >
                Website Concepts
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--muted)',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                Fully-built client websites across various industries. Explore complete designs with unique branding and functionality.
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--accent-1)',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                }}
              >
                Browse Concepts
                <span style={{ fontSize: '1.5rem' }}>→</span>
              </div>

              {/* Hover glow */}
              <div
                className="category-card-glow"
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
          .template-category-card:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: rgba(212, 175, 55, 0.4);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.3);
            background: rgba(255, 255, 255, 0.05);
          }

          .template-category-card:hover .category-card-glow {
            opacity: 1;
          }

          @media (prefers-reduced-motion: reduce) {
            .template-category-card {
              transition: none;
            }
            .category-card-glow {
              transition: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
