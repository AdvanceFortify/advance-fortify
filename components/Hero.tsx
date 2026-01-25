'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [projectCount, setProjectCount] = useState(0);
  const animationStarted = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // If reduced motion is preferred, show 50 immediately
      setProjectCount(50);
      return;
    }

    // Only animate once per page load
    if (animationStarted.current) return;
    animationStarted.current = true;

    // Animate from 1 to 50 over 10 seconds with ease-out
    const duration = 10000; // 10 seconds
    const startTime = Date.now();
    const startValue = 1;
    const endValue = 50;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      const currentValue = Math.round(startValue + (endValue - startValue) * easedProgress);
      
      setProjectCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <section
      className="hero-clean"
      style={{
        position: 'relative',
        padding: '6rem 0',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #0b0b0e 0%, #111114 100%)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Text Content */}
          <div className="hero-content">
            {/* Brand Kicker */}
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ADVANCE FORTIFY
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}
            >
              {t.home.hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: 'var(--muted)',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
                maxWidth: '600px',
              }}
            >
              {t.home.hero.subheadline}
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                }}
              >
                Request a Consultation
              </Link>
              <Link
                href="/templates"
                className="btn btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                }}
              >
                {t.home.hero.ctaPortfolio}
              </Link>
            </div>

            {/* Proof Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--accent-1)',
                  }}
                >
                  +{projectCount}
                </span>
                <span
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--muted)',
                    fontWeight: 500,
                  }}
                >
                  Projects
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    fontSize: '1.125rem',
                    color: 'var(--accent-1)',
                    letterSpacing: '0.1em',
                  }}
                >
                  ★★★★★
                </span>
                <span
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--muted)',
                    fontWeight: 600,
                  }}
                >
                  4.8/5
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Logo */}
          <div
            className="hero-logo-wrapper"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '500px',
            }}
          >
            {/* Logo Image - Clean, no effects */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                aspectRatio: '1',
                zIndex: 1,
              }}
            >
              <Image
                src="/brand/logo.png"
                alt="Advance Fortify Logo"
                fill
                style={{
                  objectFit: 'contain',
                }}
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .hero-logo-wrapper {
            order: -1;
            min-height: 400px !important;
          }

          .hero-content {
            text-align: center;
          }

          .hero-content > div:last-child {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-logo-wrapper {
            min-height: 300px !important;
          }

          section.hero-clean {
            padding: 4rem 0 !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
