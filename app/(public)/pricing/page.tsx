'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function PricingPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const tiers = [
    {
      name: t.pricing.simple.name,
      price: t.pricing.simple.price,
      description: t.pricing.simple.description,
      cta: t.pricing.simple.cta,
      features: t.pricing.simple.features,
    },
    {
      name: t.pricing.klaviyo.name,
      price: t.pricing.klaviyo.price,
      description: t.pricing.klaviyo.description,
      cta: t.pricing.klaviyo.cta,
      popular: true,
      features: t.pricing.klaviyo.features,
    },
    {
      name: t.pricing.full.name,
      price: t.pricing.full.price,
      description: t.pricing.full.description,
      cta: t.pricing.full.cta,
      features: t.pricing.full.features,
    },
  ];

  return (
    <div>
      <section
        style={{
          padding: '8rem 0 4rem',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 50%, var(--accent-2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.pricing.title}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {t.pricing.subtitle}
          </p>
        </div>
      </section>

      <section
        style={{
          padding: '4rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: '2.5rem',
                  position: 'relative',
                  border: tier.popular ? '2px solid var(--accent-1)' : '1px solid var(--border)',
                  boxShadow: tier.popular ? 'var(--shadow-glow-strong)' : 'var(--shadow-glow)',
                }}
              >
                {tier.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--accent-1)',
                      color: 'var(--bg-0)',
                      padding: '0.375rem 1rem',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    {t.pricing.klaviyo.popular}
                  </div>
                )}
                <h2
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--accent-1)',
                  }}
                >
                  {tier.name}
                </h2>
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    marginBottom: '0.5rem',
                    color: 'var(--text)',
                    lineHeight: 1,
                  }}
                >
                  {tier.price}
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    fontSize: '0.9375rem',
                  }}
                >
                  {tier.description}
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    marginBottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9375rem',
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: 'var(--accent-1)', marginTop: '0.25rem', fontWeight: 600 }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={tier.popular ? 'btn btn-primary' : 'btn btn-secondary'}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
