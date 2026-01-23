'use client';

import Link from 'next/link';
import PortfolioCard from '@/components/PortfolioCard';

interface PortfolioItem {
  title: string;
  badge: string;
  image: string;
  slug: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nebula SaaS Platform',
    badge: 'SaaS Landing',
    image: '/portfolio/nebula-saas-preview.jpg',
    slug: 'demo-nebula-saas',
  },
  {
    title: 'Local Hero Service',
    badge: 'Local Business',
    image: '/portfolio/local-hero-preview.jpg',
    slug: 'demo-local-hero',
  },
  {
    title: 'Coach Authority Brand',
    badge: 'Personal Brand',
    image: '/portfolio/coach-authority-preview.jpg',
    slug: 'demo-coach-authority',
  },
  {
    title: 'Ecom Product Drop',
    badge: 'E-commerce',
    image: '/portfolio/ecom-drop-preview.jpg',
    slug: 'demo-ecom-drop',
  },
  {
    title: 'Minimal Luxe Collection',
    badge: 'Luxury Brand',
    image: '/portfolio/minimal-luxe-preview.jpg',
    slug: 'demo-minimal-luxe',
  },
  {
    title: 'Bold Creative Studio',
    badge: 'Agency',
    image: '/portfolio/bold-studio-preview.jpg',
    slug: 'demo-bold-studio',
  },
];

export default function PortfolioPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="portfolio-hero"
        style={{
          padding: '8rem 0 6rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, #0b0b0e 0%, #111114 100%)',
        }}
      >
        {/* Subtle animated glow */}
        <div
          className="hero-glow"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
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
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: 'var(--muted)',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
            }}
          >
            Curated website & landing page designs — built to convert.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
              padding: '0.875rem 2rem',
            }}
          >
            Request a Quote
          </Link>
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

          @media (max-width: 768px) {
            .portfolio-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-glow {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* Portfolio Grid */}
      <section
        style={{
          padding: '4rem 0 6rem',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div
            className="portfolio-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
            }}
          >
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                badge={item.badge}
                image={item.image}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
