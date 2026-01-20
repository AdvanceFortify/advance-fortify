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
        background: '#000000',
      }}
    >
      {/* Storm background effects container with overflow hidden */}
      <div className="hero-storm-bg-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div className="hero-storm-base"></div>
        <div className="hero-storm-radial-1"></div>
        <div className="hero-storm-radial-2"></div>
        <div className="hero-storm-radial-3"></div>
        <div className="hero-storm-swirl-1"></div>
        <div className="hero-storm-swirl-2"></div>
        <div className="hero-storm-swirl-3"></div>
        <div className="hero-storm-noise"></div>
      </div>
      
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
        /* Storm background effects container */
        .hero-storm-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        /* Storm background effects for hero */
        .hero-storm-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          z-index: 0;
          pointer-events: none;
        }

        /* Soft radial glow gradients */
        .hero-storm-radial-1 {
          position: absolute;
          top: -10%;
          left: -5%;
          width: 55%;
          height: 55%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.8;
          z-index: 0;
          pointer-events: none;
        }

        .hero-storm-radial-2 {
          position: absolute;
          bottom: -8%;
          right: -5%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(201, 169, 97, 0.07) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.7;
          z-index: 0;
          pointer-events: none;
        }

        .hero-storm-radial-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, rgba(230, 200, 120, 0.05) 0%, transparent 65%);
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.6;
          z-index: 0;
          pointer-events: none;
        }

        /* Abstract swirl/curve light shapes */
        .hero-storm-swirl-1 {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 600px;
          height: 600px;
          background-image: url("data:image/svg+xml,%3Csvg width='600' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='hswirl1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(212,175,55,0.06)' stop-opacity='1'/%3E%3Cstop offset='50%25' stop-color='rgba(212,175,55,0.03)' stop-opacity='1'/%3E%3Cstop offset='100%25' stop-color='transparent' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 300 300 Q 420 180 540 300 T 540 540 Q 420 420 300 540 T 60 540 Q 180 420 300 300' fill='none' stroke='url(%23hswirl1)' stroke-width='1.5' opacity='0.7'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(40px);
          opacity: 0.7;
          transform: rotate(25deg);
          z-index: 0;
          pointer-events: none;
        }

        .hero-storm-swirl-2 {
          position: absolute;
          bottom: 15%;
          left: 5%;
          width: 550px;
          height: 550px;
          background-image: url("data:image/svg+xml,%3Csvg width='550' height='550' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='hswirl2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(201,169,97,0.055)' stop-opacity='1'/%3E%3Cstop offset='50%25' stop-color='rgba(201,169,97,0.028)' stop-opacity='1'/%3E%3Cstop offset='100%25' stop-color='transparent' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 275 275 Q 165 165 55 275 T 55 495 Q 165 385 275 495 T 495 495 Q 385 385 275 275' fill='none' stroke='url(%23hswirl2)' stroke-width='1.5' opacity='0.6'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(45px);
          opacity: 0.6;
          transform: rotate(-35deg);
          z-index: 0;
          pointer-events: none;
        }

        .hero-storm-swirl-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background-image: url("data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='hswirl3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(230,200,120,0.045)' stop-opacity='1'/%3E%3Cstop offset='50%25' stop-color='rgba(212,175,55,0.022)' stop-opacity='1'/%3E%3Cstop offset='100%25' stop-color='transparent' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 250 250 Q 350 150 450 250 T 450 450 Q 350 350 250 450 T 50 450 Q 150 350 250 250' fill='none' stroke='url(%23hswirl3)' stroke-width='1.5' opacity='0.5'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(42px);
          opacity: 0.55;
          transform: translate(-50%, -50%) rotate(55deg);
          z-index: 0;
          pointer-events: none;
        }

        /* Cinematic grain/noise overlay */
        .hero-storm-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='heroNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23heroNoiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.15;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 0;
        }

        @media (max-width: 768px) {
          .hero-storm-radial-1,
          .hero-storm-radial-2,
          .hero-storm-radial-3 {
            filter: blur(60px);
          }

          .hero-storm-swirl-1,
          .hero-storm-swirl-2,
          .hero-storm-swirl-3 {
            width: 350px;
            height: 350px;
            filter: blur(30px);
          }

          .hero-storm-noise {
            opacity: 0.12;
          }
        }

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
