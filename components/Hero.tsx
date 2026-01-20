'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const whatsappMessage = language === 'en'
    ? 'Hello! I\'d like to get a free consultation.'
    : 'Bună! Aș dori să obțin o consultație gratuită.';

  return (
    <section
      className="hero-storm"
      style={{
        position: 'relative',
        padding: '6rem 0',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'visible',
        background: 'transparent',
      }}
    >
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div style={{ order: 1 }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}
            >
              {t.home.hero.headline}
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--muted)',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
                maxWidth: '600px',
              }}
            >
              {t.home.hero.subheadline}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              <a
                href={`https://wa.me/40748979607?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  boxShadow: 'none',
                }}
              >
                <span>💬</span>
                {t.home.hero.ctaConsultation}
              </a>
              <Link
                href="/portfolio"
                className="btn btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  boxShadow: 'none',
                }}
              >
                <span>🎨</span>
                {t.home.hero.ctaPortfolio}
              </Link>
            </div>

            {t.home.hero.trust && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9375rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        color: 'var(--accent-1)', 
                        fontSize: '1.25rem',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span>{t.home.hero.trust}</span>
              </div>
            )}
          </div>

          <div
            className="hero-logo-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              order: 2,
              background: 'transparent',
            }}
          >
            <div
              className="logo-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '780px',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
              }}
            >
              {/* Logo with floating animation */}
              <div
                className="logo-container"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '860px',
                  aspectRatio: '1',
                  zIndex: 2,
                  animation: 'logoFloat 6s ease-in-out infinite',
                  background: 'transparent',
                }}
              >
                <Image
                  src="/brand/logo.png"
                  alt="Advance Fortify Logo"
                  fill
                  style={{
                    objectFit: 'contain',
                    filter: 'brightness(1.15) contrast(1.1)',
                    backgroundColor: 'transparent',
                  }}
                  priority
                  sizes="(max-width: 768px) 100vw, 860px"
                  className="logo-image"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

        /* Force transparency on ALL elements inside logo-container and wrapper */
        .logo-wrapper :global(*),
        .logo-container :global(*) {
          background: transparent !important;
          background-color: transparent !important;
          background-image: none !important;
        }

        /* Specifically target Next.js Image wrapper structure - all possible wrappers */
        .logo-wrapper :global(span),
        .logo-wrapper :global(div),
        .logo-container :global(span),
        .logo-container :global(div),
        .logo-container :global(img),
        .logo-image,
        .logo-image :global(*) {
          background: transparent !important;
          background-color: transparent !important;
          background-image: none !important;
          box-shadow: none !important;
        }

        /* Target Next.js Image internal structure more aggressively */
        .logo-container :global(span[style]),
        .logo-container :global(div[style]),
        .logo-wrapper :global(span[style]),
        .logo-wrapper :global(div[style]) {
          background: transparent !important;
          background-color: transparent !important;
        }

        /* Target Next.js Image specific classes if they exist */
        .logo-container :global([class*='next-image']),
        .logo-wrapper :global([class*='next-image']),
        .logo-container :global([class*='next']),
        .logo-wrapper :global([class*='next']) {
          background: transparent !important;
          background-color: transparent !important;
        }

        /* Ensure all possible wrapper combinations are transparent */
        .logo-wrapper > :global(*),
        .logo-container > :global(*) {
          background: transparent !important;
          background-color: transparent !important;
        }

        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }


        @media (min-width: 1024px) {
          div[style*='grid-template-columns'] {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-logo-container {
            order: 2 !important;
          }
          div[style*='order: 1'] {
            order: 1 !important;
          }
        }

        @media (max-width: 1023px) {
          .hero-logo-container {
            order: 1 !important;
            min-height: 300px !important;
          }
          div[style*='order: 1'] {
            order: 2 !important;
          }
          .hero-logo-container > div {
            max-width: 520px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-logo-container {
            min-height: 250px !important;
          }
          .hero-logo-container > div {
            max-width: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
