'use client';

import Link from 'next/link';

export default function DemoMinimalPage() {
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
          padding: '8rem 2rem 6rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            marginBottom: '2rem',
            lineHeight: 1.2,
          }}
        >
          Clean. Simple. Effective.
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'rgba(245, 245, 245, 0.7)',
            marginBottom: '3rem',
            lineHeight: 1.8,
          }}
        >
          A minimal approach to showcasing your work. Focus on what matters most — your content.
        </p>
      </section>

      {/* Content Grid */}
      <section
        style={{
          padding: '4rem 2rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '3rem',
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                padding: '2rem 0',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Project Title {i}</h3>
              <p style={{ color: 'rgba(245, 245, 245, 0.7)', lineHeight: 1.6 }}>
                Brief description of the project and its impact. Clean and focused presentation.
              </p>
            </div>
          ))}
        </div>
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
