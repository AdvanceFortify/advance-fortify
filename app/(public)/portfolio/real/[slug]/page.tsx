'use client';

import { useState, FormEvent, CSSProperties, use } from 'react';
import Link from 'next/link';
import { realProjects, RealProject } from '@/lib/realProjects';
import { notFound } from 'next/navigation';

export default function RealProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = realProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getButtonStyle = (): CSSProperties => ({
    padding: '1rem 2.5rem',
    fontSize: '1.125rem',
    fontWeight: 700,
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: project.theme.buttonBg,
    color: '#0b0b0e',
    boxShadow: `0 4px 16px ${project.theme.glowColor}`,
  });

  return (
    <>
      {/* Demo Banner */}
      <div
        style={{
          background: project.theme.gradientStart,
          borderBottom: `1px solid ${project.theme.borderColor}`,
          padding: '0.875rem 1rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: project.theme.accentColor,
          fontWeight: 600,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
        }}
      >
        Real Portfolio Preview — Demo UI Only • No actual company data
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        style={{
          padding: project.heroStyle === 'editorial' ? '10rem 0 6rem' : '8rem 0 6rem',
          position: 'relative',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: project.heroStyle === 'split' ? '10%' : '50%',
            transform: project.heroStyle === 'split' ? 'none' : 'translateX(50%)',
            width: '600px',
            height: '600px',
            background: `radial-gradient(circle, ${project.theme.gradientStart} 0%, transparent 70%)`,
            filter: 'blur(100px)',
            animation: 'heroGlow 8s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: project.heroStyle === 'split' ? 'grid' : 'flex',
              gridTemplateColumns: project.heroStyle === 'split' ? '1fr 1fr' : undefined,
              flexDirection: project.heroStyle === 'split' ? undefined : 'column',
              alignItems: project.heroStyle === 'split' ? 'center' : (project.heroStyle === 'centered' ? 'center' : 'flex-start'),
              textAlign: project.heroStyle === 'centered' ? 'center' : 'left',
              gap: '4rem',
            }}
            className="hero-layout"
          >
            <div style={{ maxWidth: project.heroStyle === 'centered' ? '800px' : 'none', margin: project.heroStyle === 'centered' ? '0 auto' : '0' }}>
              {/* Logo */}
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(135deg, ${project.theme.gradientStart} 0%, ${project.theme.gradientEnd} 100%)`,
                  borderRadius: '20px',
                  border: `1px solid ${project.theme.borderColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: project.theme.accentColor,
                  marginBottom: '2rem',
                  boxShadow: `0 8px 32px ${project.theme.glowColor}`,
                  margin: project.heroStyle === 'centered' ? '0 auto 2rem' : '0 0 2rem 0',
                }}
              >
                {project.name[0]}
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: project.theme.headingWeight,
                  marginBottom: '1rem',
                  lineHeight: 1.1,
                  color: 'var(--text)',
                  letterSpacing: '-0.03em',
                }}
              >
                {project.name}
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  color: project.theme.accentColor,
                  marginBottom: '1rem',
                  fontWeight: 600,
                }}
              >
                {project.tagline}
              </p>

              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: 'var(--muted)',
                  marginBottom: '2.5rem',
                  lineHeight: 1.6,
                  maxWidth: '600px',
                  margin: project.heroStyle === 'centered' ? '0 auto 2.5rem' : '0 0 2.5rem 0',
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '2rem',
                  justifyContent: project.heroStyle === 'centered' ? 'center' : 'flex-start',
                }}
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  style={getButtonStyle()}
                  onMouseEnter={(e) => (e.currentTarget.style.background = project.theme.buttonHoverBg)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = project.theme.buttonBg)}
                >
                  Get Started
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  style={{
                    padding: '1rem 2.5rem',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    borderRadius: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${project.theme.borderColor}`,
                    color: 'var(--text)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = project.theme.accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = project.theme.borderColor;
                  }}
                >
                  Learn More
                </button>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                  fontSize: '0.9375rem',
                  color: 'var(--muted-2)',
                  justifyContent: project.heroStyle === 'centered' ? 'center' : 'flex-start',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  📍 {project.location}
                </span>
                <span>•</span>
                <span>{project.industry}</span>
              </div>
            </div>

            {project.heroStyle === 'split' && (
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  background: `linear-gradient(135deg, ${project.theme.gradientStart} 0%, ${project.theme.gradientEnd} 100%)`,
                  borderRadius: '24px',
                  border: `1px solid ${project.theme.borderColor}`,
                  boxShadow: `0 20px 60px ${project.theme.glowColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 900,
                  color: project.theme.accentColor,
                }}
                className="hero-visual"
              >
                {project.name.split(' ')[0]}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        style={{
          padding: '6rem 0',
          position: 'relative',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: project.theme.headingWeight,
              marginBottom: '1rem',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            What We Offer
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto 4rem',
            }}
          >
            Comprehensive solutions tailored to your needs
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
            }}
          >
            {project.features.map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="feature-card"
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: `linear-gradient(135deg, ${project.theme.gradientStart} 0%, ${project.theme.gradientEnd} 100%)`,
                    borderRadius: '16px',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    border: `1px solid ${project.theme.borderColor}`,
                    boxShadow: `0 8px 24px ${project.theme.glowColor}`,
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text)',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section
        id="results"
        style={{
          padding: '6rem 0',
          position: 'relative',
          background: `linear-gradient(to bottom, transparent 0%, ${project.theme.gradientEnd} 50%, transparent 100%)`,
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: project.theme.headingWeight,
              marginBottom: '1rem',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            Proven Results
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto 4rem',
            }}
          >
            Achieved in {project.timeframe}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '2rem',
            }}
          >
            {project.results.map((result, index) => (
              <div
                key={index}
                style={{
                  padding: '3rem 2rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${project.theme.borderColor}`,
                  borderRadius: '28px',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className="result-card"
              >
                <div
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 900,
                    color: project.theme.accentColor,
                    marginBottom: '0.75rem',
                    lineHeight: 1,
                  }}
                >
                  {result.metric}
                </div>
                <p
                  style={{
                    fontSize: '1.125rem',
                    color: 'var(--muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section
        id="deliverables"
        style={{
          padding: '6rem 0',
          position: 'relative',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: project.theme.headingWeight,
              marginBottom: '4rem',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            Project Deliverables
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {project.deliverables.map((deliverable, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: project.theme.accentColor,
                  }}
                >
                  {deliverable.name}
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {deliverable.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        padding: '0.5rem 0',
                        color: 'var(--muted)',
                        fontSize: '0.9375rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                      }}
                    >
                      <span style={{ color: project.theme.accentColor, fontSize: '1.125rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        style={{
          padding: '6rem 0',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: project.theme.headingWeight,
                marginBottom: '1rem',
                textAlign: 'center',
                color: 'var(--text)',
              }}
            >
              Request Similar Project
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: 'var(--muted)',
                fontSize: '1.125rem',
                marginBottom: '3rem',
              }}
            >
              Interested in similar results? Contact us today.
            </p>
            <form
              onSubmit={handleSubmit}
              style={{
                padding: '3rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${project.theme.borderColor}`,
                borderRadius: '28px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  ...getButtonStyle(),
                  width: '100%',
                  marginTop: '1rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = project.theme.buttonHoverBg)}
                onMouseLeave={(e) => (e.currentTarget.style.background = project.theme.buttonBg)}
              >
                Send Message
              </button>
              {formSubmitted && (
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: project.theme.gradientStart,
                    border: `1px solid ${project.theme.borderColor}`,
                    borderRadius: '0.5rem',
                    color: project.theme.accentColor,
                    textAlign: 'center',
                    fontWeight: 600,
                  }}
                >
                  Demo only — no data is sent.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div style={{ padding: '3rem 0', textAlign: 'center' }}>
        <Link
          href="/portfolio/real"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.875rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '0.5rem',
            color: 'var(--text)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = project.theme.borderColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          ← Back to Real Portfolio
        </Link>
      </div>

      <style jsx>{`
        @keyframes heroGlow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .feature-card:hover {
          transform: translateY(-6px);
          border-color: ${project.theme.borderColor};
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px ${project.theme.borderColor};
          background: rgba(255, 255, 255, 0.05);
        }

        .result-card:hover {
          transform: translateY(-6px);
          border-color: ${project.theme.accentColor};
          box-shadow: 0 16px 32px ${project.theme.glowColor}, 0 0 0 1px ${project.theme.borderColor};
          background: rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 1024px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }

          .hero-visual {
            max-width: 400px;
            margin: 0 auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
