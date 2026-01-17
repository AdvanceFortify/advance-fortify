import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslation } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'Portfolio | Advance Fortify',
  description: 'View our portfolio of successful web design, SEO, and marketing projects.',
};

export default function PortfolioPage() {
  const t = getTranslation('en');

  const filters = ['All', 'Landing Pages', 'SEO', 'Marketing', 'Web Design'];
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Design',
      description: 'Modern e-commerce solution with advanced features',
      image: '🛒',
    },
    {
      title: 'SaaS Landing Page',
      category: 'Landing Pages',
      description: 'High-converting landing page for SaaS product',
      image: '💼',
    },
    {
      title: 'SEO Campaign',
      category: 'SEO',
      description: 'Increased organic traffic by 200%',
      image: '📈',
    },
    {
      title: 'Social Media Campaign',
      category: 'Marketing',
      description: 'Viral campaign with 1M+ impressions',
      image: '📱',
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional corporate website redesign',
      image: '🏢',
    },
    {
      title: 'Product Launch Page',
      category: 'Landing Pages',
      description: 'Successful product launch campaign',
      image: '🚀',
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
            {t.nav.portfolio}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Explore our successful projects and case studies
          </p>
        </div>
      </section>

      <section
        style={{
          padding: '2rem 0 4rem',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                className="btn btn-secondary"
                style={{
                  fontSize: '0.875rem',
                  padding: '0.625rem 1.25rem',
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {projects.map((project, index) => (
              <Link
                key={index}
                href="#"
                className="card"
                style={{
                  textDecoration: 'none',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '300px',
                }}
              >
                <div
                  style={{
                    fontSize: '4rem',
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  {project.image}
                </div>
                <div
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid var(--border-glow)',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    color: 'var(--gold)',
                    display: 'inline-block',
                    marginBottom: '1rem',
                    width: 'fit-content',
                  }}
                >
                  {project.category}
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
