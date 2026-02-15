'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function ServiceCards() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t.home.services.landingPages.title,
      description: t.home.services.landingPages.description,
      gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(230, 150, 50, 0.08) 100%)',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t.home.services.seo.title,
      description: t.home.services.seo.description,
      gradient: 'linear-gradient(135deg, rgba(201, 169, 97, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%)',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      title: t.home.services.marketing.title,
      description: t.home.services.marketing.description,
      gradient: 'linear-gradient(135deg, rgba(230, 200, 120, 0.15) 0%, rgba(201, 169, 97, 0.08) 100%)',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t.home.services.rebuild.title,
      description: t.home.services.rebuild.description,
      gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(230, 150, 50, 0.06) 100%)',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t.home.services.branding.title,
      description: t.home.services.branding.description,
      gradient: 'linear-gradient(135deg, rgba(230, 150, 50, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%)',
    },
  ];

  return (
    <section className="service-cards-section">
      <div className="container">
        <div className="section-title service-cards-header">
          <h2 className="service-cards-title">
            {t.home.services.title}
          </h2>
          <p className="service-cards-subtitle">
            {t.home.services.subtitle}
          </p>
        </div>

        <div className="service-cards-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-premium"
            >
              {/* Gradient overlay */}
              <div
                className="service-card-gradient"
                style={{ background: service.gradient }}
              />
              
              {/* Icon badge */}
              <div className="service-card-icon">
                {service.icon}
              </div>

              <h3 className="service-card-title">
                {service.title}
              </h3>
              <p className="service-card-desc">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            href="/services"
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            {t.home.services.viewAll}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .service-cards-section {
          padding: 5rem 0 6.5rem;
          background: transparent;
          position: relative;
          margin-top: 2rem; /* extra spacing from Stage cards above */
        }

        .service-cards-header {
          margin-bottom: 3.5rem;
        }

        .service-cards-title {
          font-size: clamp(1.75rem, 3vw, 2.625rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .service-cards-subtitle {
          font-size: 1.125rem;
          color: var(--muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.65;
        }
        @media (max-width: 767px) {
          .service-cards-subtitle {
            font-size: 1rem;
          }
        }

        .service-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .service-card-premium {
          position: relative;
          background: rgba(15, 18, 28, 0.6);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(212, 175, 55, 0.18);
          border-radius: 1rem;
          padding: 36px 32px;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .service-card-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.5;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .service-card-premium:hover .service-card-gradient {
          opacity: 0.8;
        }

        .service-card-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%);
          color: var(--bg-0);
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.25);
          z-index: 1;
        }

        .service-card-title {
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text);
          position: relative;
          z-index: 1;
        }

        .service-card-desc {
          color: var(--muted);
          line-height: 1.7;
          font-size: 1.125rem;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 767px) {
          .service-card-desc {
            font-size: 1rem;
          }
        }

        .service-card-premium:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(212, 175, 55, 0.08);
        }

        @media (max-width: 768px) {
          .service-card-premium {
            padding: 32px 24px;
          }

          .service-cards-section {
            padding: 4rem 0 5rem;
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
