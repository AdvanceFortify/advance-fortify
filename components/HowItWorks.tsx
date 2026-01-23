'use client';

import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const steps = [
    {
      number: '1',
      title: t.home.howItWorks.step1.title,
      description: t.home.howItWorks.step1.description,
    },
    {
      number: '2',
      title: t.home.howItWorks.step2.title,
      description: t.home.howItWorks.step2.description,
    },
    {
      number: '3',
      title: t.home.howItWorks.step3.title,
      description: t.home.howItWorks.step3.description,
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
            {t.home.howItWorks.title}
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
            gap: '3rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--bg-0)',
                  boxShadow: '0 4px 16px rgba(212, 175, 55, 0.3)',
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: 'var(--accent-1)',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                  fontSize: '0.9375rem',
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
