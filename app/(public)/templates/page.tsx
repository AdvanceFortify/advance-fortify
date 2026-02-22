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
            Portfolio
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
            High-tech builds. Real outcomes. Conversion-first systems.
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
            className="portfolio-card-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: '3rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Real Portfolio */}
            <Link href="/portfolio" className="portfolio-card" style={{ pointerEvents: 'auto' }}>
              <span className="portfolio-card-border">
                <span className="portfolio-card-inner">
                  <span className="portfolio-card-blob" aria-hidden="true" style={{ pointerEvents: 'none' }} />
                  <span className="portfolio-card-icon">💼</span>
                  <h2
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                      fontWeight: 800,
                      marginBottom: '1rem',
                      color: 'var(--text)',
                      lineHeight: 1.2,
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
                      flex: 1,
                    }}
                  >
                    Real client work, live links, and short case studies.
                  </p>
                  <span className="portfolio-card-cta">
                    View Portfolio
                    <span className="portfolio-card-cta-arrow">→</span>
                  </span>
                  <span className="portfolio-card-glow" aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </span>
              </span>
            </Link>

            {/* Landing Page Inspiration */}
            <Link href="/templates/landing-page-concepts" className="portfolio-card" style={{ pointerEvents: 'auto' }}>
              <span className="portfolio-card-border">
                <span className="portfolio-card-inner">
                  <span className="portfolio-card-blob" aria-hidden="true" style={{ pointerEvents: 'none' }} />
                  <span className="portfolio-card-icon">📄</span>
                  <h2
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                      fontWeight: 800,
                      marginBottom: '1rem',
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}
                  >
                    Landing Page Inspiration
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
                  <span className="portfolio-card-cta">
                    Browse Inspiration
                    <span className="portfolio-card-cta-arrow">→</span>
                  </span>
                  <span className="portfolio-card-glow" aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </span>
              </span>
            </Link>

            {/* Website Inspiration */}
            <Link href="/templates/website-concepts" className="portfolio-card" style={{ pointerEvents: 'auto' }}>
              <span className="portfolio-card-border">
                <span className="portfolio-card-inner">
                  <span className="portfolio-card-blob" aria-hidden="true" style={{ pointerEvents: 'none' }} />
                  <span className="portfolio-card-icon">🌐</span>
                  <h2
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                      fontWeight: 800,
                      marginBottom: '1rem',
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}
                  >
                    Website Inspiration
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
                  <span className="portfolio-card-cta">
                    Browse Inspiration
                    <span className="portfolio-card-cta-arrow">→</span>
                  </span>
                  <span className="portfolio-card-glow" aria-hidden="true" style={{ pointerEvents: 'none' }} />
                </span>
              </span>
            </Link>
          </div>
        </div>

        <style jsx>{`
          .portfolio-card {
            display: block;
            text-decoration: none;
            color: inherit;
            outline: none;
            border-radius: 32px;
            transition: transform 250ms ease, box-shadow 250ms ease;
            pointer-events: auto;
          }
          .portfolio-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25), 0 0 32px rgba(212, 175, 55, 0.18);
          }
          .portfolio-card:focus-visible {
            outline: 2px solid var(--accent-1);
            outline-offset: 4px;
          }
          .portfolio-card-border {
            display: block;
            position: relative;
            padding: 2px;
            border-radius: 32px;
            background: linear-gradient(
              135deg,
              rgba(212, 175, 55, 0.5) 0%,
              rgba(100, 150, 255, 0.2) 35%,
              rgba(212, 175, 55, 0.4) 70%,
              rgba(212, 175, 55, 0.5) 100%
            );
            background-size: 200% 200%;
            animation: borderFlow 8s ease-in-out infinite;
            transition: box-shadow 250ms ease;
          }
          .portfolio-card:hover .portfolio-card-border {
            box-shadow: 0 0 28px rgba(212, 175, 55, 0.25);
          }
          .portfolio-card-inner {
            position: relative;
            display: flex;
            flex-direction: column;
            min-height: 400px;
            padding: 3rem;
            border-radius: 30px;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            overflow: hidden;
          }
          .portfolio-card:hover .portfolio-card-inner {
            background: rgba(255, 255, 255, 0.06);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 36px rgba(212, 175, 55, 0.12);
          }
          .portfolio-card-blob {
            position: absolute;
            top: -20%;
            right: -20%;
            width: 60%;
            height: 60%;
            background: radial-gradient(
              circle,
              rgba(212, 175, 55, 0.08) 0%,
              transparent 70%
            );
            pointer-events: none;
            animation: blobPulse 10s ease-in-out infinite;
          }
          .portfolio-card-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
            margin-bottom: 2rem;
            font-size: 2.25rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(212, 175, 55, 0.2);
            box-shadow: 0 0 24px rgba(212, 175, 55, 0.15), inset 0 0 20px rgba(212, 175, 55, 0.05);
          }
          .portfolio-card:hover .portfolio-card-icon {
            box-shadow: 0 0 28px rgba(212, 175, 55, 0.22), inset 0 0 24px rgba(212, 175, 55, 0.06);
          }
          .portfolio-card-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--accent-1);
            font-weight: 600;
            font-size: 1.125rem;
            margin-top: auto;
            position: relative;
            width: fit-content;
          }
          .portfolio-card-cta::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0;
            height: 2px;
            background: var(--accent-1);
            transition: width 0.35s ease;
          }
          .portfolio-card:hover .portfolio-card-cta::after {
            width: 100%;
          }
          .portfolio-card-cta-arrow {
            font-size: 1.5rem;
            transition: transform 0.35s ease;
          }
          .portfolio-card:hover .portfolio-card-cta-arrow {
            transform: translateX(4px);
          }
          .portfolio-card-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
              circle at center,
              rgba(212, 175, 55, 0.12) 0%,
              transparent 65%
            );
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
            border-radius: 30px;
          }
          .portfolio-card:hover .portfolio-card-glow {
            opacity: 1;
          }
          @keyframes borderFlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes blobPulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          @media (prefers-reduced-motion: reduce) {
            .portfolio-card,
            .portfolio-card:hover { transform: none; }
            .portfolio-card-border { animation: none; }
            .portfolio-card-blob { animation: none; }
            .portfolio-card-cta::after { transition: none; }
            .portfolio-card-cta-arrow { transition: none; }
            .portfolio-card:hover .portfolio-card-cta-arrow { transform: none; }
          }
        `}</style>
      </section>
    </div>
  );
}
