'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';
import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function Hero() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [projectCount, setProjectCount] = useState(0);
  const animationStarted = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setProjectCount(50);
      return;
    }
    if (animationStarted.current) return;
    animationStarted.current = true;
    const duration = 10000;
    const startTime = Date.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      setProjectCount(Math.round(1 + 49 * easedProgress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = typeof window !== 'undefined' ? window.scrollY : 0;
          setParallaxY(y * 0.12);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero-cinematic" aria-label="Hero">
      {/* Dark gradient background */}
      <div className="hero-bg-gradient" />

      {/* Subtle radial gold glow behind heading */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Soft animated light sweep */}
      <div className="hero-sweep" aria-hidden="true" />

      {/* Noise texture overlay */}
      <div className="hero-noise" aria-hidden="true" />

      <div className="container hero-container">
        <div
          ref={contentRef}
          className="hero-grid hero-parallax-content"
          style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
        >
          <div className="hero-content">
            <div className="hero-kicker">ADVANCE FORTIFY</div>
            <h1 className="hero-headline">{t.home.hero.headline}</h1>
            <div className="hero-underline-wrap">
              <span className="hero-underline" aria-hidden="true" />
            </div>
            <p className="hero-subtitle">{t.home.hero.subheadline}</p>
            <div className="hero-ctas">
              <Link
                href="/services"
                className="btn btn-primary"
                onClick={() => trackEvent('request_quote')}
              >
                View Services
              </Link>
              <Link href="/#request-proposal" className="btn btn-secondary">
                Get a Proposal
              </Link>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-item">
                <span className="hero-proof-num">+{projectCount}</span>
                <span className="hero-proof-label">Projects</span>
              </div>
              <div className="hero-proof-item">
                <span className="hero-proof-stars">★★★★★</span>
                <span className="hero-proof-label">4.8/5</span>
              </div>
            </div>
          </div>
          <div className="hero-logo-wrapper">
            <div className="hero-logo-inner">
              <Image
                src="/brand/logo.png"
                alt="Advance Fortify Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-cinematic {
          position: relative;
          padding: 6rem 0;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, #05070d 0%, #0b0f19 100%);
          z-index: 0;
        }

        .hero-glow {
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: min(120%, 900px);
          height: 280px;
          background: radial-gradient(
            ellipse 80% 50% at 50% 50%,
            rgba(212, 175, 55, 0.12) 0%,
            rgba(212, 175, 55, 0.04) 40%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 1;
        }

        .hero-sweep {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .hero-sweep::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(212, 175, 55, 0.03) 40%,
            rgba(212, 175, 55, 0.06) 50%,
            rgba(212, 175, 55, 0.03) 60%,
            transparent 100%
          );
          animation: hero-sweep 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-sweep::after {
            animation: none;
            opacity: 0;
          }
        }
        @keyframes hero-sweep {
          0% { transform: translateX(0); }
          100% { transform: translateX(400%); }
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .hero-container {
          position: relative;
          z-index: 3;
        }

        .hero-parallax-content {
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-parallax-content {
            will-change: auto;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-kicker {
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-headline {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          margin-bottom: 0.5rem;
          color: var(--text);
          letter-spacing: -0.03em;
        }

        .hero-underline-wrap {
          margin-bottom: 1.5rem;
        }

        .hero-underline {
          display: inline-block;
          height: 3px;
          width: 80px;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-3));
          border-radius: 2px;
          animation: hero-underline 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-underline {
            animation: none;
          }
        }
        @keyframes hero-underline {
          0%, 100% { opacity: 0.7; transform: scaleX(1); }
          50% { opacity: 1; transform: scaleX(1.15); }
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 1.25vw, 1.25rem);
          color: var(--muted);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          max-width: 60ch;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .hero-ctas .btn {
          text-decoration: none;
        }

        .hero-proof {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .hero-proof-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .hero-proof-num {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-1);
        }
        .hero-proof-stars {
          font-size: 1.125rem;
          color: var(--accent-1);
          letter-spacing: 0.1em;
        }
        .hero-proof-label {
          font-size: 0.9375rem;
          color: var(--muted);
          font-weight: 500;
        }
        .hero-proof .hero-proof-item:last-child .hero-proof-label {
          font-weight: 600;
        }

        .hero-logo-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
        }
        .hero-logo-inner {
          position: relative;
          width: 100%;
          max-width: 600px;
          aspect-ratio: 1;
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-logo-wrapper {
            order: -1;
            min-height: 400px;
          }
          .hero-content {
            text-align: center;
          }
          .hero-subtitle {
            max-width: 100%;
          }
          .hero-proof {
            justify-content: center;
          }
          .hero-glow {
            top: 35%;
          }
        }

        @media (max-width: 768px) {
          .hero-cinematic {
            padding: 4rem 0;
            min-height: auto;
          }
          .hero-headline {
            font-size: clamp(2.25rem, 8vw, 3rem);
          }
          .hero-subtitle {
            font-size: 1.125rem;
          }
          .hero-logo-wrapper {
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
