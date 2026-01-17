import { Metadata } from 'next';
import { getTranslation } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'Services | Advance Fortify',
  description: 'Premium web design, landing pages, SEO, and digital marketing services.',
};

export default function ServicesPage() {
  const t = getTranslation('en'); // Default to EN for server component

  const services = [
    {
      icon: '🌐',
      title: t.home.services.webDesign.title,
      description: t.home.services.webDesign.description,
      features: [
        'Custom Next.js development',
        'Responsive design',
        'Performance optimization',
        'SEO-friendly structure',
      ],
    },
    {
      icon: '🚀',
      title: t.home.services.landingPages.title,
      description: t.home.services.landingPages.description,
      features: [
        'High-converting layouts',
        'A/B testing ready',
        'Fast loading times',
        'Mobile-first approach',
      ],
    },
    {
      icon: '📈',
      title: t.home.services.seo.title,
      description: t.home.services.seo.description,
      features: [
        'Technical SEO audit',
        'Keyword research',
        'On-page optimization',
        'Link building strategy',
      ],
    },
    {
      icon: '💡',
      title: t.home.services.marketing.title,
      description: t.home.services.marketing.description,
      features: [
        'Campaign strategy',
        'Social media management',
        'Content marketing',
        'Analytics & reporting',
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
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.home.services.title}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Comprehensive digital solutions to elevate your business
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
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: '2.5rem',
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
                <h2
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    color: 'var(--gold)',
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span style={{ color: 'var(--gold)' }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '4rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <a
            href="/contact"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
