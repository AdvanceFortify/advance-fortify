'use client';

import Link from 'next/link';
import PortfolioImage from './PortfolioImage';

interface PortfolioCardProps {
  title: string;
  badge: string;
  image: string;
  slug: string;
}

export default function PortfolioCard({ title, badge, slug }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="portfolio-card-premium"
      style={{
        display: 'block',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
      }}
    >
      {/* Preview Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          overflow: 'hidden',
          background: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <PortfolioImage slug={slug} title={title} />
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(11, 11, 14, 0.95) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: '1.5rem',
          position: 'relative',
        }}
      >
        {/* Badge */}
        <span
          style={{
            display: 'inline-block',
            padding: '0.375rem 0.875rem',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--accent-1)',
            letterSpacing: '0.025em',
            marginBottom: '0.75rem',
          }}
        >
          {badge}
        </span>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Hover glow effect */}
      <div
        className="card-glow"
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
          borderRadius: '24px',
        }}
      />

      <style jsx>{`
        .portfolio-card-premium:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .portfolio-card-premium:hover .card-glow {
          opacity: 1;
        }

        .portfolio-card-premium:hover > div > div {
          transform: scale(1.05);
        }
      `}</style>
    </Link>
  );
}
