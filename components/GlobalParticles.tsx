'use client';

import { useEffect, useRef } from 'react';

export default function GlobalParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    life: number;
    maxLife: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const getParticleCount = () => {
      if (prefersReducedMotion) return 10;
      if (window.innerWidth < 768) return 30;
      if (window.innerWidth < 1024) return 50;
      return 80;
    };

    const initializeParticles = () => {
      const particleCount = getParticleCount();
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.3),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.1 : 0.3),
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          life: Math.random(),
          maxLife: Math.random() * 2 + 1,
        });
      }
    };

    initializeParticles();

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (prefersReducedMotion) {
        // Static particles for reduced motion
        particlesRef.current.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
          ctx.fill();
        });
        // Re-request animation frame but with slower updates
        animationFrameRef.current = requestAnimationFrame(() => {
          setTimeout(animate, 100); // Update every 100ms instead of every frame
        });
        return;
      }

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.01;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity
        const pulse = Math.sin(particle.life) * 0.3 + 0.7;
        const currentOpacity = particle.opacity * pulse;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${currentOpacity})`;
        ctx.fill();

        // Add subtle glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(212, 175, 55, ${currentOpacity * 0.4})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => {
      initializeParticles();
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.5,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
