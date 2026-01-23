'use client';

import Link from 'next/link';

export default function DemoLuxuryPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0d', color: '#f5f5f5' }}>
      {/* Demo Banner */}
      <div
        style={{
          background: 'rgba(212, 175, 55, 0.15)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '1rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--accent-1)',
          fontWeight: 600,
        }}
      >
        Demo Only — UI Preview
      </div>

      {/* Hero */}
      <section
        style={{
          padding: '10rem 2rem 8rem',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '0.875rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent-1)',
            marginBottom: '2rem',
            fontWeight: 600,
          }}
        >
          Exclusive Collection
        </div>
        <h1
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 300,
            marginBottom: '2rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Timeless Elegance
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'rgba(245, 245, 245, 0.7)',
            marginBottom: '3rem',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.8,
          }}
        >
          Crafted for those who appreciate the finest things in life.
        </p>
        <button
          disabled
          style={{
            padding: '1rem 2.5rem',
            background: 'transparent',
            color: '#f5f5f5',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            borderRadius: '0.5rem',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'not-allowed',
            opacity: 0.6,
            letterSpacing: '0.05em',
          }}
        >
          Explore Collection
        </button>
      </section>

      {/* Back Button */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Link
          href="/portfolio"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0.5rem',
            color: '#f5f5f5',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
