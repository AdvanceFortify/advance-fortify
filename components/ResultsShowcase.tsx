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
            className="results-section-title"
            style={{
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
            <div className="results-stat-card card">
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
            <p className="results-stat-desc" style={{ color: 'var(--muted)' }}>
              Increase in qualified leads
            </p>
          </div>

            <div className="results-stat-card card">
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
            <p className="results-stat-desc" style={{ color: 'var(--muted)', position: 'relative', zIndex: 1 }}>
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
      <style jsx>{`
        .results-section-title {
          font-size: clamp(1.75rem, 3vw, 2.625rem);
        }
        .results-stat-card {
          padding: 2.5rem 2rem !important;
          text-align: center;
          background: rgba(15, 18, 28, 0.6) !important;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(212, 175, 55, 0.18) !important;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .results-stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.28) !important;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(212, 175, 55, 0.08);
        }
        .results-stat-desc {
          font-size: 1.125rem;
          line-height: 1.6;
        }
        @media (max-width: 767px) {
          .results-stat-desc {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
