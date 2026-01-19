'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      mouseRef.current = { x: xPercent, y: yPercent };

      // Very subtle parallax
      const parallaxX = (xPercent - 50) * 0.015;
      const parallaxY = (yPercent - 50) * 0.015;

      containerRef.current.style.setProperty('--mouse-x', `${xPercent}%`);
      containerRef.current.style.setProperty('--mouse-y', `${yPercent}%`);
      containerRef.current.style.setProperty('--parallax-x', `${parallaxX}px`);
      containerRef.current.style.setProperty('--parallax-y', `${parallaxY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Subtle overlay for readability - fades smoothly to transparent beyond hero */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 'calc(100% + 400px)',
          background: 'linear-gradient(to bottom, rgba(10, 4, 30, 0.12) 0%, rgba(10, 4, 30, 0.08) 40%, rgba(10, 4, 30, 0.04) 70%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />


      {/* Subtle noise overlay */}
      <div
        className="noise-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }}
      />



      <style jsx>{`
        @media (max-width: 768px) {
          .noise-overlay {
            opacity: 0.02 !important;
          }
        }
      `}</style>
    </div>
  );
}
