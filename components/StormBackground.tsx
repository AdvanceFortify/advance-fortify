'use client';

export default function StormBackground() {
  return (
    <>
      <div className="bg-storm" aria-hidden="true">
        <div className="storm-base"></div>
        <div className="storm-radial-1"></div>
        <div className="storm-radial-2"></div>
        <div className="storm-radial-3"></div>
        <div className="storm-swirl-1"></div>
        <div className="storm-swirl-2"></div>
        <div className="storm-swirl-3"></div>
        <div className="storm-swirl-4"></div>
        <div className="storm-noise"></div>
      </div>
      <style jsx>{`
        .bg-storm {
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
          background: #000000;
        }

        /* Soft radial glow for depth */
        .storm-radial-1 {
          position: absolute;
          top: -15%;
          left: -5%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 65%);
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.7;
        }

        .storm-radial-2 {
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 45%;
          height: 45%;
          background: radial-gradient(circle, rgba(201, 169, 97, 0.05) 0%, transparent 65%);
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
        }

        .storm-radial-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 35%;
          height: 35%;
          background: radial-gradient(circle, rgba(230, 200, 120, 0.03) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.5;
        }

        /* Abstract swirl/curve light lines using SVG */
        .storm-swirl-1 {
          position: absolute;
          top: 15%;
          right: 12%;
          width: 500px;
          height: 500px;
          background-image: url("data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='swirl1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(212,175,55,0.04)' stop-opacity='1'/%3E%3Cstop offset='50%25' stop-color='rgba(212,175,55,0.02)' stop-opacity='1'/%3E%3Cstop offset='100%25' stop-color='transparent' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 250 250 Q 350 150 400 250 T 400 450 Q 350 350 250 450 T 50 450 Q 150 350 250 250' fill='none' stroke='url(%23swirl1)' stroke-width='1' opacity='0.6'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(35px);
          opacity: 0.6;
          transform: rotate(20deg);
        }

        .storm-swirl-2 {
          position: absolute;
          bottom: 20%;
          left: 8%;
          width: 450px;
          height: 450px;
          background-image: url("data:image/svg+xml,%3Csvg width='450' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='swirl2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(201,169,97,0.035)' stop-opacity='1'/%3E%3Cstop offset='50%25' stop-color='rgba(201,169,97,0.018)' stop-opacity='1'/%3E%3Cstop offset='100%25' stop-color='transparent' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 225 225 Q 125 125 25 225 T 25 425 Q 125 325 225 425 T 425 425 Q 325 325 225 225' fill='none' stroke='url(%23swirl2)' stroke-width='1' opacity='0.5'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(40px);
          opacity: 0.5;
          transform: rotate(-30deg);
        }

        .storm-swirl-3 {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 400px;
          background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='swirl3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(230,200,120,0.03)' stop-opacity='1'/%3E%3Cstop offset='50%25' stop-color='rgba(212,175,55,0.015)' stop-opacity='1'/%3E%3Cstop offset='100%25' stop-color='transparent' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 200 200 Q 300 100 400 200 T 400 400 Q 300 300 200 400 T 0 400 Q 100 300 200 200' fill='none' stroke='url(%23swirl3)' stroke-width='1' opacity='0.4'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(38px);
          opacity: 0.45;
          transform: translateX(-50%) rotate(50deg);
        }

        .storm-swirl-4 {
          position: absolute;
          top: 30%;
          left: 25%;
          width: 380px;
          height: 380px;
          background-image: url("data:image/svg+xml,%3Csvg width='380' height='380' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='swirl4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='rgba(212,175,55,0.025)' stop-opacity='1'/%3E%3Cstop offset='50%25' stop-color='rgba(201,169,97,0.012)' stop-opacity='1'/%3E%3Cstop offset='100%25' stop-color='transparent' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M 190 190 Q 290 90 380 190 T 380 380 Q 280 280 190 380 T 0 380 Q 100 280 190 190' fill='none' stroke='url(%23swirl4)' stroke-width='1' opacity='0.35'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          filter: blur(42px);
          opacity: 0.4;
          transform: rotate(-15deg);
        }

        /* Cinematic grain/noise overlay */
        .storm-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.12;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .storm-radial-1,
          .storm-radial-2,
          .storm-radial-3 {
            filter: blur(50px);
          }

          .storm-swirl-1,
          .storm-swirl-2,
          .storm-swirl-3,
          .storm-swirl-4 {
            width: 280px;
            height: 280px;
            filter: blur(25px);
          }

          .storm-noise {
            opacity: 0.1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .storm-swirl-1,
          .storm-swirl-2,
          .storm-swirl-3,
          .storm-swirl-4 {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
