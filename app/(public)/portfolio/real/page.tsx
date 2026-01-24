'use client';

import Link from 'next/link';
import { realProjects } from '@/lib/realProjects';

export default function RealPortfolioPage() {
  return (
    <div>
      {/* Hero Section */}
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
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--muted)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              marginBottom: '2rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-1)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            ← Back to Portfolio Hub
          </Link>

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
            Real Portfolio
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: 'var(--muted)',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
            }}
          >
            Realistic client projects across industries — proven results and tailored solutions.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
              padding: '0.875rem 2rem',
            }}
          >
            Request Similar Project
          </Link>
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
            .hero-glow {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* Projects Grid */}
      <section
        style={{
          padding: '4rem 0 6rem',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: '2.5rem',
            }}
          >
            {realProjects.map((project, index) => (
              <Link
                key={index}
                href={`/portfolio/real/${project.slug}`}
                style={{
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className="real-project-card"
              >
                {/* Client Project Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.375rem 0.875rem',
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-1)',
                    zIndex: 2,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  CLIENT PROJECT
                </div>

                {/* Realistic Preview Thumbnail */}
                <div
                  style={{
                    aspectRatio: '16/10',
                    background: `linear-gradient(135deg, ${project.theme.gradientStart} 0%, ${project.theme.gradientEnd} 100%)`,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {/* Mock Browser Chrome */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      left: '1.5rem',
                      right: '1.5rem',
                      bottom: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '8px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Browser Header */}
                    <div
                      style={{
                        height: '28px',
                        background: 'rgba(0, 0, 0, 0.05)',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 0.75rem',
                        gap: '0.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#FF5F56',
                        }}
                      />
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#FFBD2E',
                        }}
                      />
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#27C93F',
                        }}
                      />
                    </div>
                    {/* Content Area */}
                    <div
                      style={{
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 'calc(100% - 28px)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '2.5rem',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {project.features[0]?.icon || '🏢'}
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: project.theme.accentColor,
                          textAlign: 'center',
                        }}
                      >
                        {project.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div
                  style={{
                    padding: '2rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      marginBottom: '0.75rem',
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--muted)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.industry}
                  </div>

                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--muted-2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem' }}>📍</span>
                    {project.location}
                  </div>

                  {/* Key Metric */}
                  <div
                    style={{
                      padding: '1rem',
                      background: project.theme.gradientStart,
                      border: `1px solid ${project.theme.borderColor}`,
                      borderRadius: '12px',
                      marginBottom: '1rem',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--muted)',
                        marginBottom: '0.25rem',
                        fontWeight: 600,
                      }}
                    >
                      Key Result
                    </div>
                    <div
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: project.theme.accentColor,
                      }}
                    >
                      {project.metric}
                    </div>
                  </div>

                  {/* Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginTop: 'auto',
                    }}
                  >
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.375rem 0.875rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '9999px',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          color: 'var(--muted-2)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="project-card-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at center, ${project.theme.glowColor} 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                    borderRadius: '20px',
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

        <style jsx>{`
          .real-project-card:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: rgba(212, 175, 55, 0.4);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.3);
            background: rgba(255, 255, 255, 0.05);
          }

          .real-project-card:hover .project-card-glow {
            opacity: 1;
          }

          @media (max-width: 768px) {
            .portfolio-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .real-project-card {
              transition: none;
            }
            .project-card-glow {
              transition: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
