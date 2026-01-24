'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface Result {
  percentage: string;
  caption: string;
}

interface DemoLandingShellProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  services: Service[];
  results: Result[];
  themeAccent: 'blue' | 'gold' | 'purple' | 'green';
  metadata?: {
    title: string;
    description: string;
  };
}

export default function DemoLandingShell({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  services,
  results,
  themeAccent,
  metadata,
}: DemoLandingShellProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const getAccentColor = () => {
    const colors = {
      blue: { primary: 'rgba(100, 150, 255, 0.3)', secondary: 'rgba(100, 150, 255, 0.15)', glow: 'rgba(100, 150, 255, 0.2)' },
      gold: { primary: 'rgba(212, 175, 55, 0.3)', secondary: 'rgba(212, 175, 55, 0.15)', glow: 'rgba(212, 175, 55, 0.2)' },
      purple: { primary: 'rgba(150, 100, 255, 0.3)', secondary: 'rgba(150, 100, 255, 0.15)', glow: 'rgba(150, 100, 255, 0.2)' },
      green: { primary: 'rgba(100, 255, 150, 0.3)', secondary: 'rgba(100, 255, 150, 0.15)', glow: 'rgba(100, 255, 150, 0.2)' },
    };
    return colors[themeAccent];
  };

  const accent = getAccentColor();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Cosmic Background */}
      <div className="demo-cosmic-bg" aria-hidden="true">
        <div className="demo-cosmic-base"></div>
        <div className="demo-nebula-1" style={{ background: `radial-gradient(ellipse, ${accent.primary} 0%, ${accent.secondary} 40%, transparent 70%)` }}></div>
        <div className="demo-nebula-2" style={{ background: `radial-gradient(ellipse, ${accent.secondary} 0%, ${accent.primary} 30%, transparent 70%)` }}></div>
        <div className="demo-cosmic-dust"></div>
        <div className="demo-star-field"></div>
        <div className="demo-glow-streaks"></div>
      </div>

      {/* Demo Banner */}
      <div
        style={{
          background: 'rgba(212, 175, 55, 0.15)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '0.875rem 1rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--accent-1)',
          fontWeight: 600,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
        }}
      >
        Template Preview • This is a design concept. We customize content, layout, and branding for your business.
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        style={{
          padding: '6rem 0 8rem',
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* Left: Content */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 900,
                  marginBottom: '1.5rem',
                  lineHeight: 1.1,
                  color: 'var(--text)',
                  letterSpacing: '-0.03em',
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  color: 'var(--muted)',
                  marginBottom: '2.5rem',
                  lineHeight: 1.6,
                  maxWidth: '600px',
                }}
              >
                {subtitle}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '2rem',
                }}
              >
                <button
                  onClick={() => scrollToSection('lead-form')}
                  className="btn btn-primary"
                  style={{
                    padding: '1rem 2.5rem',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                  }}
                >
                  {primaryCTA}
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="btn btn-secondary"
                  style={{
                    padding: '1rem 2.5rem',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                  }}
                >
                  {secondaryCTA}
                </button>
              </div>
              {/* Trust Row */}
              <div
                style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'center',
                  fontSize: '0.9375rem',
                  color: 'var(--muted-2)',
                }}
              >
                <span>+150 Projects</span>
                <span>•</span>
                <span>4.9/5 Rating</span>
                <span>•</span>
                <span>Trusted by 500+</span>
              </div>
            </div>

            {/* Right: 3D Logo Placeholder */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="hero-logo-3d"
            >
              <div
                style={{
                  width: '80%',
                  height: '80%',
                  position: 'relative',
                  background: `linear-gradient(135deg, ${accent.primary} 0%, ${accent.secondary} 100%)`,
                  borderRadius: '2rem',
                  transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                  boxShadow: `0 20px 60px ${accent.glow}, 0 0 0 1px ${accent.primary}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* Animated gradient ribbon */}
                <div
                  style={{
                    position: 'absolute',
                    width: '200%',
                    height: '200%',
                    background: `conic-gradient(from 0deg, transparent, ${accent.primary}, transparent, ${accent.secondary}, transparent)`,
                    animation: 'rotateGradient 8s linear infinite',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 900,
                    color: 'var(--text)',
                    textShadow: `0 0 20px ${accent.glow}`,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {title.split(' ')[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: '6rem 0',
          position: 'relative',
        }}
      >
        <div className="container">
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '4rem',
            }}
          >
            What We Offer
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
                className="demo-service-card"
                style={{
                  padding: '2.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Icon Square */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: `linear-gradient(135deg, ${accent.primary} 0%, ${accent.secondary} 100%)`,
                    borderRadius: '16px',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    boxShadow: `0 8px 24px ${accent.glow}`,
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
                {/* Hover glow */}
                <div
                  className="service-card-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at center, ${accent.glow} 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none',
                  }}
                />
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
        }}
      >
        <div className="container">
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '4rem',
            }}
          >
            Proven Results
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2.5rem',
            }}
            className="results-grid"
          >
            {results.map((result, index) => (
              <div
                key={index}
                className="demo-result-card"
                style={{
                  padding: '3rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '28px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: 900,
                    background: `linear-gradient(135deg, var(--accent-1) 0%, ${accent.primary} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                    lineHeight: 1,
                  }}
                >
                  {result.percentage}
                </div>
                <p
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {result.caption}
                </p>
                {/* Accent glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)`,
                    opacity: 0.3,
                    pointerEvents: 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section
        id="lead-form"
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
              className="section-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                marginBottom: '1rem',
              }}
            >
              Get Your Proposal
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: 'var(--muted)',
                fontSize: '1.125rem',
                marginBottom: '3rem',
              }}
            >
              Ready to transform your digital presence? Let's discuss your project.
            </p>
            <form
              onSubmit={handleSubmit}
              className="demo-lead-form"
              style={{
                padding: '3rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
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
                <label htmlFor="service" className="form-label">
                  Service Type
                </label>
                <select
                  id="service"
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="website">Full Website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="seo">SEO & Marketing</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  marginTop: '1rem',
                }}
              >
                Get Proposal
              </button>
              {formSubmitted && (
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '0.5rem',
                    color: 'var(--accent-1)',
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
          href="/portfolio"
          className="btn btn-secondary"
          style={{
            padding: '0.875rem 2rem',
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          ← Back to Portfolio
        </Link>
      </div>

      <style jsx>{`
        .demo-cosmic-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .demo-cosmic-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, #0a0a0d 0%, #050508 50%, #000000 100%);
        }

        .demo-nebula-1 {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 60%;
          filter: blur(100px);
          animation: nebulaDrift1 50s ease-in-out infinite;
          opacity: 0.9;
        }

        .demo-nebula-2 {
          position: absolute;
          bottom: -15%;
          left: -8%;
          width: 55%;
          height: 55%;
          filter: blur(110px);
          animation: nebulaDrift2 60s ease-in-out infinite;
          opacity: 0.8;
        }

        .demo-cosmic-dust {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 165, 0, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
          animation: mistFloat 40s ease-in-out infinite;
          opacity: 0.6;
        }

        .demo-star-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(1px 1px at 40% 50%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(1.5px 1.5px at 60% 20%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(1px 1px at 80% 40%, rgba(255, 255, 255, 0.5), transparent),
            radial-gradient(2px 2px at 10% 70%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(1px 1px at 30% 80%, rgba(255, 255, 255, 0.5), transparent),
            radial-gradient(1.5px 1.5px at 70% 90%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.4), transparent);
          background-size: 200% 200%, 150% 150%, 180% 180%, 160% 160%, 190% 190%, 170% 170%, 200% 200%, 140% 140%;
          background-position: 0% 0%, 20% 30%, 40% 50%, 60% 20%, 80% 40%, 10% 70%, 30% 80%, 70% 90%;
          animation: starTwinkle 8s ease-in-out infinite;
          opacity: 0.4;
        }

        .demo-glow-streaks {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            ${accent.glow} 50%,
            transparent 70%
          );
          background-size: 200% 200%;
          animation: streakMove 20s linear infinite;
          opacity: 0.1;
        }

        @keyframes nebulaDrift1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translate(30px, -40px) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes nebulaDrift2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-25px, 35px) scale(1.15);
            opacity: 0.9;
          }
        }

        @keyframes mistFloat {
          0%, 100% {
            opacity: 0.6;
            transform: translate(0, 0);
          }
          50% {
            opacity: 0.7;
            transform: translate(20px, -15px);
          }
        }

        @keyframes starTwinkle {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes streakMove {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        @keyframes rotateGradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .demo-service-card:hover {
          transform: translateY(-8px);
          border-color: ${accent.primary};
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${accent.primary};
          background: rgba(255, 255, 255, 0.05);
        }

        .demo-service-card:hover .service-card-glow {
          opacity: 1;
        }

        .demo-result-card:hover {
          transform: translateY(-8px);
          border-color: ${accent.primary};
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${accent.primary};
          background: rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .hero-logo-3d {
            max-width: 400px;
            margin: 0 auto;
          }

          .results-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .demo-nebula-1,
          .demo-nebula-2 {
            filter: blur(60px);
          }

          .demo-cosmic-dust {
            opacity: 0.5;
          }

          .demo-star-field {
            opacity: 0.3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .demo-nebula-1,
          .demo-nebula-2,
          .demo-cosmic-dust,
          .demo-glow-streaks {
            animation: none;
          }

          .demo-star-field {
            animation: none;
            opacity: 0.4;
          }

          .hero-logo-3d > div > div {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
