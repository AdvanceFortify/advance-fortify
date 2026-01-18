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
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Base deep space gradient - near-black + deep violet */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, #07060B 0%, #0C0B12 30%, #07060B 60%, #07060B 100%)',
        }}
      />

      {/* Purple nebula layer */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '1000px',
          height: '1000px',
          background: 'radial-gradient(circle, rgba(110, 58, 242, 0.15) 0%, rgba(110, 58, 242, 0.08) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          transform: 'translate(calc(var(--parallax-x, 0px) * 0.25), calc(var(--parallax-y, 0px) * 0.25))',
          animation: 'nebulaFloat1 30s ease-in-out infinite alternate',
        }}
      />

      {/* Amber energy nebula */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '900px',
          height: '900px',
          background: 'radial-gradient(circle, rgba(255, 179, 71, 0.18) 0%, rgba(214, 178, 94, 0.12) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          transform: 'translate(calc(var(--parallax-x, 0px) * -0.2), calc(var(--parallax-y, 0px) * -0.2))',
          animation: 'nebulaFloat2 35s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Amber energy core */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(255, 179, 71, 0.15) 0%, rgba(214, 178, 94, 0.08) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(110px)',
          transform: 'translate(calc(-50% + var(--parallax-x, 0px) * 0.15), calc(-50% + var(--parallax-y, 0px) * 0.15))',
          animation: 'nebulaFloat3 40s ease-in-out infinite alternate',
        }}
      />

      {/* Magenta accent nebula */}
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(228, 69, 168, 0.12) 0%, rgba(228, 69, 168, 0.06) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          transform: 'translate(calc(var(--parallax-x, 0px) * 0.1), calc(var(--parallax-y, 0px) * 0.1))',
          animation: 'nebulaFloat4 45s ease-in-out infinite alternate-reverse',
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


      {/* Animated glints/streaks */}
      <div
        className="glint-1"
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '2px',
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, rgba(214, 178, 94, 0.35), transparent)',
          transform: 'rotate(45deg)',
          animation: 'glintMove1 8s ease-in-out infinite',
          opacity: 0.3,
        }}
      />
      <div
        className="glint-2"
        style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '2px',
          height: '150px',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 179, 71, 0.25), transparent)',
          transform: 'rotate(-30deg)',
          animation: 'glintMove2 10s ease-in-out infinite',
          opacity: 0.25,
        }}
      />
      <div
        className="glint-3"
        style={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: '1px',
          height: '100px',
          background: 'linear-gradient(to bottom, transparent, rgba(228, 69, 168, 0.25), transparent)',
          transform: 'rotate(60deg)',
          animation: 'glintMove3 12s ease-in-out infinite',
          opacity: 0.2,
        }}
      />

      {/* Hex grid floor with perspective */}
      <div
        className="hex-grid-floor"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '45%',
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(214, 178, 94, 0.03) 28px, rgba(214, 178, 94, 0.03) 29px, transparent 29px, transparent 57px),
            repeating-linear-gradient(60deg, transparent, transparent 28px, rgba(255, 179, 71, 0.025) 28px, rgba(255, 179, 71, 0.025) 29px, transparent 29px, transparent 57px),
            repeating-linear-gradient(120deg, transparent, transparent 28px, rgba(214, 178, 94, 0.02) 28px, rgba(214, 178, 94, 0.02) 29px, transparent 29px, transparent 57px)
          `,
          backgroundSize: '57px 57px',
          transform: 'perspective(1000px) rotateX(75deg) translateY(15%)',
          transformOrigin: 'bottom center',
          opacity: 0.5,
          maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)',
        }}
      />

      <style jsx>{`
        @keyframes nebulaFloat1 {
          0% {
            transform: translate(0, 0) scale(1) translate(calc(var(--parallax-x, 0px) * 0.25), calc(var(--parallax-y, 0px) * 0.25));
          }
          100% {
            transform: translate(40px, -40px) scale(1.15) translate(calc(var(--parallax-x, 0px) * 0.25), calc(var(--parallax-y, 0px) * 0.25));
          }
        }

        @keyframes nebulaFloat2 {
          0% {
            transform: translate(0, 0) scale(1) translate(calc(var(--parallax-x, 0px) * -0.2), calc(var(--parallax-y, 0px) * -0.2));
          }
          100% {
            transform: translate(-35px, 35px) scale(1.12) translate(calc(var(--parallax-x, 0px) * -0.2), calc(var(--parallax-y, 0px) * -0.2));
          }
        }

        @keyframes nebulaFloat3 {
          0% {
            transform: translate(-50%, -50%) scale(1) translate(calc(var(--parallax-x, 0px) * 0.15), calc(var(--parallax-y, 0px) * 0.15));
          }
          100% {
            transform: translate(-50%, -50%) translate(25px, -25px) scale(1.1) translate(calc(var(--parallax-x, 0px) * 0.15), calc(var(--parallax-y, 0px) * 0.15));
          }
        }

        @keyframes nebulaFloat4 {
          0% {
            transform: translate(0, 0) scale(1) translate(calc(var(--parallax-x, 0px) * 0.1), calc(var(--parallax-y, 0px) * 0.1));
          }
          100% {
            transform: translate(30px, 30px) scale(1.08) translate(calc(var(--parallax-x, 0px) * 0.1), calc(var(--parallax-y, 0px) * 0.1));
          }
        }

        @keyframes glintMove1 {
          0%, 100% {
            opacity: 0;
            transform: rotate(45deg) translateX(-100px);
          }
          50% {
            opacity: 0.3;
            transform: rotate(45deg) translateX(100px);
          }
        }

        @keyframes glintMove2 {
          0%, 100% {
            opacity: 0;
            transform: rotate(-30deg) translateX(80px);
          }
          50% {
            opacity: 0.25;
            transform: rotate(-30deg) translateX(-80px);
          }
        }

        @keyframes glintMove3 {
          0%, 100% {
            opacity: 0;
            transform: rotate(60deg) translateY(-60px);
          }
          50% {
            opacity: 0.2;
            transform: rotate(60deg) translateY(60px);
          }
        }

        @media (max-width: 768px) {
          .hero-background > div[style*='filter: blur'] {
            filter: blur(60px) !important;
            opacity: 0.6 !important;
          }
          .noise-overlay {
            opacity: 0.02 !important;
          }
          .hex-grid-floor {
            opacity: 0.3 !important;
          }
          .glint-1,
          .glint-2,
          .glint-3 {
            opacity: 0.15 !important;
          }
        }
      `}</style>
    </div>
  );
}
