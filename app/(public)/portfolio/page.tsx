'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type StackFilter = 'all' | 'Next.js' | 'WordPress' | 'Shopify';

interface Project {
  id: string;
  title: string;
  url: string;
  industry: string;
  stack: string;
  summary: string;
  featured: boolean;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'advance-fortify',
    title: 'Advance Fortify',
    url: 'https://advancefortify.com',
    industry: 'Web Agency',
    stack: 'Next.js',
    summary: 'Luxury agency site with conversion-first structure and premium UI.',
    featured: true,
    tags: ['Next.js', 'Vercel', 'Performance'],
  },
  {
    id: 'cazareturda',
    title: 'CazareTurda',
    url: 'https://cazareturda.com',
    industry: 'Hospitality / Local SEO',
    stack: 'Next.js',
    summary: 'Direct booking website optimized for local SEO near Salina Turda.',
    featured: true,
    tags: ['Next.js', 'SEO', 'Performance'],
  },
  {
    id: 'ioana-lung',
    title: 'Ioana Lung',
    url: 'https://ioanalung.ro',
    industry: 'Beauty / Salon',
    stack: 'Next.js',
    summary: 'Premium salon website with services, branding, and conversion CTAs.',
    featured: false,
    tags: ['Next.js', 'UX', 'Branding'],
  },
  {
    id: 'cabana-ulici',
    title: 'Cabana Ulici',
    url: 'https://cabanaulici.ro',
    industry: 'Hospitality / Cabin',
    stack: 'WordPress',
    summary: 'Property-focused site with gallery-first layout and inquiry flow.',
    featured: false,
    tags: ['WordPress', 'Performance', 'UX'],
  },
  {
    id: 'beyondbtw',
    title: 'BeyondBTW',
    url: 'https://www.beyondbtw.com',
    industry: 'Brand',
    stack: 'WordPress',
    summary: 'Brand website with modern layout and strong messaging.',
    featured: false,
    tags: ['WordPress', 'Brand', 'UI'],
  },
  {
    id: 'metasiteai',
    title: 'MetaSiteAI',
    url: 'https://metasiteai.com',
    industry: 'Agency / Showcase',
    stack: 'WordPress',
    summary: 'Showcase site for premium web builds, offers, and portfolio presentation.',
    featured: false,
    tags: ['WordPress', 'Showcase', 'UI'],
  },
  {
    id: 'system4men',
    title: 'System4Men',
    url: 'https://system4men.com/',
    industry: 'E-commerce / Supplements',
    stack: 'Shopify',
    summary: 'Shopify storefront built for product validation and conversion-focused sales.',
    featured: false,
    tags: ['Shopify', 'E-commerce', 'Conversion'],
  },
];

const FILTERS: { value: StackFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'Next.js', label: 'Next.js' },
  { value: 'WordPress', label: 'WordPress' },
  { value: 'Shopify', label: 'Shopify' },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<StackFilter>('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.stack === filter);
  }, [filter]);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          padding: '8rem 0 6rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, #0b0b0e 0%, #111114 100%)',
        }}
      >
        <div
          className="portfolio-hero-glow"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'glowPulse 8s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              color: 'var(--text)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Portfolio
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              color: 'var(--muted)',
              maxWidth: '700px',
              margin: '0 auto 0.5rem',
              lineHeight: 1.6,
            }}
          >
            Real projects, live links, and proven stacks.
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted-2)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Built with Next.js and WordPress. Performance-first, conversion-focused.
          </p>
        </div>
        <style jsx>{`
          @keyframes glowPulse {
            0%, 100% {
              opacity: 0.6;
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1.1);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .portfolio-hero-glow {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* Filters + Grid */}
      <section
        style={{
          padding: '0 0 6rem',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div
            className="portfolio-filters"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              marginBottom: '2.5rem',
            }}
            role="group"
            aria-label="Filter by stack"
          >
            {FILTERS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className="portfolio-filter-chip"
                aria-pressed={filter === value}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  border: `1px solid ${filter === value ? 'var(--accent-1)' : 'rgba(255, 255, 255, 0.2)'}`,
                  borderRadius: '9999px',
                  background: filter === value ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                  color: filter === value ? 'var(--accent-1)' : 'var(--muted)',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, background 0.2s ease, color 0.2s ease',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            className="portfolio-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="portfolio-project-card"
                style={{
                  position: 'relative',
                  padding: '2rem',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
                  <h2
                    style={{
                      fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)',
                      fontWeight: 700,
                      color: 'var(--text)',
                      margin: 0,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {project.title}
                  </h2>
                  {project.featured && (
                    <span
                      className="portfolio-featured-badge"
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        background: 'rgba(212, 175, 55, 0.2)',
                        color: 'var(--accent-1)',
                        border: '1px solid rgba(212, 175, 55, 0.4)',
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted-2)',
                    margin: 0,
                  }}
                >
                  {project.industry}
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--muted)',
                    lineHeight: 1.55,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {project.summary}
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: 'var(--muted)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-btn portfolio-btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.625rem 1.25rem',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      borderRadius: '10px',
                      background: 'var(--accent-1)',
                      color: '#0b0b0e',
                      textDecoration: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
                    }}
                  >
                    Live
                  </a>
                  <button
                    type="button"
                    disabled
                    className="portfolio-btn portfolio-btn-secondary"
                    aria-label="Case study coming soon"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.625rem 1.25rem',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: 'var(--muted-2)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      cursor: 'not-allowed',
                    }}
                  >
                    Case Study — Coming soon
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <style jsx>{`
          .portfolio-filter-chip:hover {
            border-color: rgba(212, 175, 55, 0.5);
            color: var(--accent-1);
          }
          .portfolio-filter-chip:focus-visible {
            outline: 2px solid var(--accent-1);
            outline-offset: 2px;
          }
          @media (min-width: 640px) {
            .portfolio-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .portfolio-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          .portfolio-project-card {
            transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          }
          .portfolio-project-card:hover {
            border-color: rgba(212, 175, 55, 0.25);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25), 0 0 24px rgba(212, 175, 55, 0.08);
          }
          .portfolio-btn-primary:hover {
            opacity: 0.9;
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.35);
          }
          .portfolio-btn-primary:focus-visible {
            outline: 2px solid var(--accent-1);
            outline-offset: 2px;
          }
          @media (prefers-reduced-motion: reduce) {
            .portfolio-project-card,
            .portfolio-filter-chip {
              transition: none;
            }
          }
        `}</style>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          padding: '5rem 0 8rem',
          textAlign: 'center',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                marginBottom: '1rem',
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}
            >
              Want something similar?
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--muted)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              Tell us what you need and we&apos;ll recommend the best stack and plan.
            </p>
            <Link
              href="/contact"
              className="portfolio-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.875rem 1.75rem',
                fontSize: '1.0625rem',
                fontWeight: 600,
                borderRadius: '12px',
                background: 'var(--accent-1)',
                color: '#0b0b0e',
                textDecoration: 'none',
                border: 'none',
                transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              Start a Project
            </Link>
          </div>
        </div>
        <style jsx>{`
          .portfolio-cta-btn:hover {
            opacity: 0.92;
            box-shadow: 0 0 24px rgba(212, 175, 55, 0.4);
          }
          .portfolio-cta-btn:focus-visible {
            outline: 2px solid var(--accent-1);
            outline-offset: 4px;
          }
        `}</style>
      </section>
    </div>
  );
}
