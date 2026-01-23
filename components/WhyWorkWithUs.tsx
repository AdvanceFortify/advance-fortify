'use client';

import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function WhyWorkWithUs() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t.home.whyWorkWithUs.fastDev.title,
      description: t.home.whyWorkWithUs.fastDev.description,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t.home.whyWorkWithUs.clientFirst.title,
      description: t.home.whyWorkWithUs.clientFirst.description,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t.home.whyWorkWithUs.attention.title,
      description: t.home.whyWorkWithUs.attention.description,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V9H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21V15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 3L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 21L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t.home.whyWorkWithUs.results.title,
      description: t.home.whyWorkWithUs.results.description,
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
            {t.home.whyWorkWithUs.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: 'var(--muted)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {t.home.whyWorkWithUs.subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(230, 150, 50, 0.1) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: 'var(--accent-1)',
                  marginBottom: '1.5rem',
                  boxShadow: '0 4px 12px rgba(212, 175, 55, 0.15)',
                }}
              >
                {benefit.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text)',
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  fontSize: '0.9375rem',
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
