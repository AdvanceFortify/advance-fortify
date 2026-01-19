'use client';

import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function ServiceCards() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const services = [
    {
      icon: '🎨',
      title: t.home.services.branding.title,
      description: t.home.services.branding.description,
    },
    {
      icon: '🌐',
      title: t.home.services.webDesign.title,
      description: t.home.services.webDesign.description,
    },
    {
      icon: '🚀',
      title: t.home.services.landingPages.title,
      description: t.home.services.landingPages.description,
    },
    {
      icon: '📈',
      title: t.home.services.seo.title,
      description: t.home.services.seo.description,
    },
    {
      icon: '💡',
      title: t.home.services.marketing.title,
      description: t.home.services.marketing.description,
    },
  ];

  return (
    <section
      style={{
        padding: '6rem 0',
        background: 'var(--bg-0)',
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
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            {t.home.services.title}
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
              style={{
                textAlign: 'left',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  marginBottom: '1.5rem',
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--accent-1)',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
