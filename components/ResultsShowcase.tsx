'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function ResultsShowcase() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <section
      style={{
        padding: '6rem 0',
      }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--text-primary)',
          }}
        >
          {t.home.results.title}
        </h2>

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
              position: 'relative',
              overflow: 'hidden',
              padding: '3rem 2rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%)',
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
                color: 'var(--text-secondary)',
                fontSize: '1.125rem',
              }}
            >
              Increase in qualified leads
            </p>
          </div>

          <div
            className="card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '3rem 2rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%)',
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
                color: 'var(--text-secondary)',
                fontSize: '1.125rem',
              }}
            >
              Reduction in cost per acquisition
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href="/portfolio"
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
