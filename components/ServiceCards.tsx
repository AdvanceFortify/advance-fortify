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
    <section
      style={{
        padding: '6rem 0',
        background: 'transparent',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className="section-title">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'var(--text)',
            }}
          >
            {t.home.services.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: 'var(--muted)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {t.home.services.subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card-premium"
              style={{
                position: 'relative',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2.5rem',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: service.gradient,
                  opacity: 0.5,
                  pointerEvents: 'none',
                  transition: 'opacity 0.3s ease',
                }}
              />
              
              {/* Icon badge */}
              <div
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%)',
                  color: 'var(--bg-0)',
                  marginBottom: '1.5rem',
                  boxShadow: '0 4px 12px rgba(212, 175, 55, 0.25)',
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: 'var(--text)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  fontSize: '0.9375rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
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
        .service-card-premium:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.2);
        }

        .service-card-premium:hover > div:first-child {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .service-card-premium {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
