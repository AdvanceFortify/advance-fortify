'use client';

import Link from 'next/link';
import { LAUNCH_STAGES } from '@/lib/launchStages';
import { trackEvent } from '@/lib/analytics';

export default function LaunchSystemSection() {
  return (
    <section
      aria-labelledby="launch-system-title"
      className="launch-system-section"
    >
      <div className="container">
        <header className="launch-system-header">
          <h2
            id="launch-system-title"
            className="launch-system-headline"
          >
            The 5-Stage Launch System
          </h2>
          <p className="launch-system-subtitle">
            From validation to scale — one team, one system, zero chaos.
          </p>
        </header>

        <div className="launch-system-grid">
          {LAUNCH_STAGES.map((stage) => (
            <article
              key={stage.id}
              className="launch-stage-card"
            >
              <div className="launch-stage-label">
                STAGE {stage.number}
              </div>
              <h3 className="launch-stage-title">
                {stage.title}
              </h3>
              <p className="launch-stage-who">
                {stage.whoFor}
              </p>
              <ul className="launch-stage-deliverables">
                {stage.deliverables.map((d, i) => (
                  <li key={i}>
                    <span className="launch-stage-check">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="launch-stage-delivery">
                {stage.delivery}
              </div>
              <Link
                href="/services#stages"
                className="btn btn-primary launch-stage-cta"
                onClick={() => trackEvent('request_quote')}
              >
                {stage.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .launch-system-section {
          padding: 7.5rem 0 8rem; /* ~120px top, 128px bottom — more vertical padding */
          background: transparent;
          position: relative;
        }

        .launch-system-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .launch-system-headline {
          font-size: clamp(1.75rem, 3vw, 2.625rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text);
        }

        .launch-system-subtitle {
          font-size: 1.125rem;
          color: var(--muted);
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.65;
        }
        @media (max-width: 767px) {
          .launch-system-subtitle {
            font-size: 1rem;
          }
        }

        .launch-system-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.25rem; /* 36px — between 28–40px */
          align-items: stretch;
          max-width: 1400px;
          margin: 0 auto;
        }

        .launch-stage-card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
          background: rgba(15, 18, 28, 0.6);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(212, 175, 55, 0.18);
          border-radius: 18px;
          padding: 36px 32px;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .launch-stage-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(212, 175, 55, 0.08);
        }

        .launch-stage-label {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--accent-1);
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .launch-stage-title {
          font-size: clamp(1.375rem, 2vw, 1.625rem); /* ~22–26px */
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .launch-stage-who {
          font-size: 1.125rem;
          color: var(--muted);
          margin-bottom: 1.25rem;
          line-height: 1.65;
          flex: 1;
        }
        @media (max-width: 767px) {
          .launch-stage-who {
            font-size: 1rem;
          }
        }

        .launch-stage-deliverables {
          list-style: none;
          margin: 0 0 1.25rem 0;
          padding: 0;
          font-size: 1.125rem;
          color: var(--muted-2);
          line-height: 1.7;
        }
        @media (max-width: 767px) {
          .launch-stage-deliverables {
            font-size: 1rem;
          }
        }

        .launch-stage-deliverables li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .launch-stage-deliverables li:last-child {
          margin-bottom: 0;
        }

        .launch-stage-check {
          color: var(--accent-1);
          flex-shrink: 0;
        }

        .launch-stage-delivery {
          font-size: 0.9375rem;
          color: var(--muted-2);
          margin-bottom: 1.25rem;
        }

        .launch-stage-cta {
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 14px 24px;
          font-size: 1rem;
          margin-top: auto;
        }

        @media (max-width: 719px) {
          .launch-system-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }

          .launch-system-section {
            padding: 5rem 0 6rem;
          }

          .launch-stage-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </section>
  );
}
