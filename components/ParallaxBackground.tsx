'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      containerRef.current.style.setProperty('--mouse-x', `${xPercent}%`);
      containerRef.current.style.setProperty('--mouse-y', `${yPercent}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.3,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 179, 71, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          top: 'calc(var(--mouse-y, 50%) - 300px)',
          left: 'calc(var(--mouse-x, 50%) - 300px)',
          transition: 'top 0.3s ease-out, left 0.3s ease-out',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}
