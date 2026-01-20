'use client';

export default function StormBackground() {
  return (
    <>
      <div className="storm-background" aria-hidden="true">
        <div className="storm-base"></div>
        <div className="storm-radial-1"></div>
        <div className="storm-radial-2"></div>
        <div className="storm-radial-3"></div>
        <div className="storm-swirl-1"></div>
        <div className="storm-swirl-2"></div>
        <div className="storm-swirl-3"></div>
        <div className="storm-noise"></div>
      </div>
      <style jsx>{`
        .storm-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }

        .storm-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0a0b0e;
        }

        /* Soft radial light gradients */
        .storm-radial-1 {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.6;
        }

        .storm-radial-2 {
          position: absolute;
          bottom: -15%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(201, 169, 97, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
        }

        .storm-radial-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, rgba(230, 200, 120, 0.04) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }

        /* Abstract swirl/curve shapes */
        .storm-swirl-1 {
          position: absolute;
          top: 20%;
          right: 15%;
          width: 400px;
          height: 400px;
          background: conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(212, 175, 55, 0.03) 45deg,
            transparent 90deg,
            rgba(201, 169, 97, 0.02) 135deg,
            transparent 180deg,
            rgba(212, 175, 55, 0.03) 225deg,
            transparent 270deg,
            rgba(201, 169, 97, 0.02) 315deg,
            transparent 360deg
          );
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.5;
          transform: rotate(15deg);
        }

        .storm-swirl-2 {
          position: absolute;
          bottom: 25%;
          left: 10%;
          width: 350px;
          height: 350px;
          background: conic-gradient(
            from 180deg at 50% 50%,
            transparent 0deg,
            rgba(201, 169, 97, 0.025) 60deg,
            transparent 120deg,
            rgba(212, 175, 55, 0.03) 180deg,
            transparent 240deg,
            rgba(201, 169, 97, 0.025) 300deg,
            transparent 360deg
          );
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.4;
          transform: rotate(-25deg);
        }

        .storm-swirl-3 {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: conic-gradient(
            from 90deg at 50% 50%,
            transparent 0deg,
            rgba(212, 175, 55, 0.02) 50deg,
            transparent 100deg,
            rgba(230, 200, 120, 0.025) 150deg,
            transparent 200deg,
            rgba(212, 175, 55, 0.02) 250deg,
            transparent 300deg,
            rgba(230, 200, 120, 0.025) 350deg,
            transparent 360deg
          );
          border-radius: 50%;
          filter: blur(45px);
          opacity: 0.35;
          transform: translateX(-50%) rotate(45deg);
        }

        /* Cinematic grain/noise overlay */
        .storm-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.15;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .storm-radial-1,
          .storm-radial-2,
          .storm-radial-3 {
            filter: blur(40px);
          }

          .storm-swirl-1,
          .storm-swirl-2,
          .storm-swirl-3 {
            width: 250px;
            height: 250px;
            filter: blur(30px);
          }

          .storm-noise {
            opacity: 0.12;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .storm-swirl-1,
          .storm-swirl-2,
          .storm-swirl-3 {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
