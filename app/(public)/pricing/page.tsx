import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslation } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'Pricing | Advance Fortify',
  description: 'Flexible pricing plans for web design, SEO, and marketing services.',
};

export default function PricingPage() {
  const t = getTranslation('en');

  const tiers = [
    {
      name: t.pricing.launch.name,
      description: t.pricing.launch.description,
      cta: t.pricing.launch.cta,
      features: [
        'Basic website (up to 5 pages)',
        'Responsive design',
        'Basic SEO setup',
        '1 month support',
        'Contact form',
      ],
    },
    {
      name: t.pricing.growth.name,
      description: t.pricing.growth.description,
      cta: t.pricing.growth.cta,
      popular: true,
      features: [
        'Custom website (up to 15 pages)',
        'Advanced SEO optimization',
        'Landing page design',
        '3 months support',
        'Analytics integration',
        'Social media setup',
        'Content strategy',
      ],
    },
    {
      name: t.pricing.enterprise.name,
      description: t.pricing.enterprise.description,
      cta: t.pricing.enterprise.cta,
      features: [
        'Unlimited pages',
        'Custom development',
        'Full SEO campaign',
        '6 months support',
        'Marketing strategy',
        'Dedicated account manager',
        'Priority support',
        'Custom integrations',
      ],
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
                      background: 'var(--gold)',
                      color: 'var(--bg-dark)',
                      padding: '0.375rem 1rem',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                    }}
                  >
                    {t.pricing.growth.popular}
                  </div>
                )}
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--accent-1)',
                  }}
                >
                  {tier.name}
                </h2>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                  }}
                >
                  {tier.description}
                </p>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    marginBottom: '2rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  Request Quote
                </div>
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
                      }}
                    >
                      <span style={{ color: 'var(--gold)', marginTop: '0.25rem' }}>✓</span>
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
