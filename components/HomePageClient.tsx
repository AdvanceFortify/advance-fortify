'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import LaunchSystemSection from '@/components/LaunchSystemSection';
import ServiceCards from '@/components/ServiceCards';
import WhyWorkWithUs from '@/components/WhyWorkWithUs';
import ResultsShowcase from '@/components/ResultsShowcase';
import CTAForm from '@/components/CTAForm';

function useIntersectionObserver(
  options?: { rootMargin?: string; threshold?: number }
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsInView(true);
      },
      {
        rootMargin: options?.rootMargin ?? '0px 0px -8% 0px',
        threshold: options?.threshold ?? 0.1,
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  return [ref, isInView];
}

function RevealSection({ children }: { children: ReactNode }) {
  const [ref, isInView] = useIntersectionObserver();
  return (
    <div ref={ref} className={`home-reveal-section ${isInView ? 'reveal-in' : ''}`}>
      {children}
    </div>
  );
}

function SectionSeparator() {
  return (
    <div className="home-separator" role="presentation">
      <div className="home-separator-line" />
    </div>
  );
}

export default function HomePageClient() {
  return (
    <div className="home-cinematic">
      <div className="home-cinematic-bg" aria-hidden="true" />
      <div className="home-cinematic-glow" aria-hidden="true" />
      <div className="home-cinematic-noise" aria-hidden="true" />
      <div className="home-cinematic-vignette" aria-hidden="true" />

      <Hero />

      <SectionSeparator />

      <RevealSection>
        <LaunchSystemSection />
      </RevealSection>

      <SectionSeparator />

      <RevealSection>
        <ServiceCards />
      </RevealSection>

      <SectionSeparator />

      <RevealSection>
        <WhyWorkWithUs />
      </RevealSection>

      <SectionSeparator />

      <RevealSection>
        <ResultsShowcase />
      </RevealSection>

      <SectionSeparator />

      <RevealSection>
        <Suspense fallback={null}>
          <CTAForm />
        </Suspense>
      </RevealSection>

      <style jsx global>{`
        .home-cinematic {
          position: relative;
          min-height: 100%;
        }

        .home-cinematic-bg {
          position: fixed;
          inset: 0;
          z-index: -4;
          background: linear-gradient(180deg, #05070d 0%, #080b12 35%, #0b0f19 70%, #0a0c14 100%);
        }

        .home-cinematic-glow {
          position: fixed;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%);
          width: 140%;
          max-width: 1600px;
          height: 80vh;
          z-index: -3;
          background: radial-gradient(
            ellipse 70% 50% at 50% 50%,
            rgba(212, 175, 55, 0.04) 0%,
            rgba(212, 175, 55, 0.01) 45%,
            transparent 70%
          );
          pointer-events: none;
        }

        .home-cinematic-noise {
          position: fixed;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .home-cinematic-vignette {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: radial-gradient(
            ellipse 100% 100% at 50% 50%,
            transparent 45%,
            rgba(0, 0, 0, 0.25) 85%,
            rgba(0, 0, 0, 0.45) 100%
          );
        }

        .home-separator {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem;
        }
        .home-separator-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(212, 175, 55, 0.12) 20%,
            rgba(212, 175, 55, 0.2) 50%,
            rgba(212, 175, 55, 0.12) 80%,
            transparent 100%
          );
        }

        .home-reveal-section {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .home-reveal-section.reveal-in {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .home-reveal-section,
          .home-reveal-section.reveal-in {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
