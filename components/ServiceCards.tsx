'use client';

import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function ServiceCards() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const services = [
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
        background: 'transparent',
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
          {t.home.services.title}
        </h2>

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
                textAlign: 'center',
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
                  fontWeight: 600,
                  marginBottom: '1rem',
                  color: 'var(--amber)',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
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
