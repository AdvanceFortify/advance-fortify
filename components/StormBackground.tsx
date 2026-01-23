'use client';

export default function StormBackground() {
  return (
    <>
      <div className="bg-cosmic" aria-hidden="true">
        <div className="cosmic-base"></div>
        <div className="nebula-1"></div>
        <div className="nebula-2"></div>
        <div className="nebula-3"></div>
        <div className="cosmic-mist"></div>
        <div className="star-field"></div>
        <div className="cosmic-noise"></div>
      </div>
      <style jsx>{`
        .bg-cosmic {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .cosmic-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, #0a0a0d 0%, #050508 50%, #000000 100%);
        }

        /* Orange/gold nebula glows */
        .nebula-1 {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(
            ellipse,
            rgba(255, 140, 50, 0.25) 0%,
            rgba(255, 165, 0, 0.15) 20%,
            rgba(212, 175, 55, 0.08) 40%,
            transparent 70%
          );
          filter: blur(100px);
          animation: nebulaDrift1 50s ease-in-out infinite;
          opacity: 0.9;
        }

        .nebula-2 {
          position: absolute;
          bottom: -15%;
          left: -8%;
          width: 55%;
          height: 55%;
          background: radial-gradient(
            ellipse,
            rgba(255, 165, 0, 0.2) 0%,
            rgba(230, 150, 50, 0.12) 25%,
            rgba(212, 175, 55, 0.06) 45%,
            transparent 75%
          );
          filter: blur(110px);
          animation: nebulaDrift2 60s ease-in-out infinite;
          opacity: 0.8;
        }

        .nebula-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40%;
          height: 40%;
          background: radial-gradient(
            circle,
            rgba(255, 140, 50, 0.15) 0%,
            rgba(230, 150, 50, 0.08) 30%,
            rgba(212, 175, 55, 0.04) 50%,
            transparent 80%
          );
          filter: blur(120px);
          animation: nebulaDrift3 45s ease-in-out infinite;
          opacity: 0.7;
        }

        /* Subtle moving mist/energy */
        .cosmic-mist {
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

        /* Star field using CSS */
        .star-field {
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

        /* Subtle noise overlay */
        .cosmic-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='cosmicNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23cosmicNoiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.08;
          mix-blend-mode: overlay;
          pointer-events: none;
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

        @keyframes nebulaDrift3 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2) rotate(5deg);
            opacity: 0.8;
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

        @media (max-width: 768px) {
          .nebula-1,
          .nebula-2,
          .nebula-3 {
            filter: blur(60px);
          }

          .cosmic-mist {
            opacity: 0.5;
          }

          .star-field {
            opacity: 0.3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nebula-1,
          .nebula-2,
          .nebula-3,
          .cosmic-mist {
            animation: none;
          }

          .star-field {
            animation: none;
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
}
