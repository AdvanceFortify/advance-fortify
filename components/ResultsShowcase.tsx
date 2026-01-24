'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function ResultsShowcase() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <section
      style={{
        padding: '6rem 0',
        background: 'transparent',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-block',
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--accent-1), transparent)',
              marginBottom: '1rem',
            }}
          />
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}
          >
            {t.home.results.title}
          </h2>
          <div
            style={{
              display: 'inline-block',
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--accent-1), transparent)',
              marginTop: '1rem',
            }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
            <div
              className="card"
              style={{
                padding: '3rem 2rem',
                textAlign: 'center',
              }}
            >
            <div
              style={{
                fontSize: '4rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
              }}
            >
              {t.home.results.leads}
            </div>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '1.125rem',
              }}
            >
              Increase in qualified leads
            </p>
          </div>

            <div
              className="card"
              style={{
                padding: '3rem 2rem',
                textAlign: 'center',
              }}
            >
            <div
              style={{
                fontSize: '4rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
              }}
            >
              {t.home.results.cpa}
            </div>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '1.125rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Reduction in cost per acquisition
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href="/templates"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            <span>📊</span>
            {t.home.results.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
