'use client';

import Link from 'next/link';
import { getTranslation } from '@/lib/translations';
import { trackEvent } from '@/lib/analytics';
import { LAUNCH_STAGES, homeProposalUrl } from '@/lib/launchStages';

export default function PricingPage() {
  const t = getTranslation('en'); // Pricing copy is EN-focused for US founders

  return (
    <div>
      <section
        style={{
          padding: '8rem 0 4rem',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 50%, var(--accent-2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.pricing.title}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Transparent, stage-based pricing. Book one stage or bundle and save.
          </p>
        </div>
      </section>

      {/* A la carte by stage */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '0.5rem',
              color: 'var(--text)',
            }}
          >
            A la carte by stage
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              marginBottom: '2.5rem',
              fontSize: '1rem',
            }}
          >
            Start with one stage or combine later.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {LAUNCH_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="card"
                style={{
                  padding: '2rem',
                  border: '1px solid var(--border)',
                  borderRadius: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-1)',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}
                >
                  STAGE {stage.number}
                </div>
                <h3
                  style={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text)',
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  style={{
                    color: 'var(--muted)',
                    marginBottom: '1rem',
                    fontSize: '0.9375rem',
                    lineHeight: 1.5,
                  }}
                >
                  {stage.whoFor}
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    marginBottom: '1rem',
                    fontSize: '0.875rem',
                    color: 'var(--muted-2)',
                    lineHeight: 1.5,
                  }}
                >
                  {stage.deliverables.map((d, i) => (
                    <li key={i} style={{ marginBottom: '0.35rem' }}>
                      ✓ {d}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--accent-1)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {stage.price}
                  {stage.priceNote && (
                    <span style={{ fontSize: '0.9375rem', color: 'var(--muted)', fontWeight: 500 }}>
                      {' '}{stage.priceNote}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted-2)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {stage.delivery}
                </div>
                <Link
                  href={homeProposalUrl(stage.id)}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.75rem 1rem',
                  }}
                  onClick={() => trackEvent('request_quote')}
                >
                  {stage.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '0.5rem',
              color: 'var(--text)',
            }}
          >
            Bundles
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              marginBottom: '2rem',
              fontSize: '1rem',
            }}
          >
            Discount applies when booked together.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <div
              className="card"
              style={{
                padding: '2.5rem',
                border: '2px solid var(--accent-1)',
                borderRadius: '1.25rem',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--accent-1)',
                  color: 'var(--bg-0)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                10% OFF
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                Bundle A
              </h3>
              <p
                style={{
                  color: 'var(--muted)',
                  marginBottom: '1rem',
                  fontSize: '0.9375rem',
                }}
              >
                Stage 1 + Stage 2 — Validate and test in one go.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  marginBottom: '1.5rem',
                  fontSize: '0.9375rem',
                  color: 'var(--muted-2)',
                }}
              >
                <li>✓ Validation Landing Page</li>
                <li>✓ Traffic & Testing (test sprint)</li>
              </ul>
              <Link
                href="/#request-proposal"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  padding: '0.75rem 1rem',
                }}
                onClick={() => trackEvent('request_quote')}
              >
                Request Proposal
              </Link>
            </div>

            <div
              className="card"
              style={{
                padding: '2.5rem',
                border: '2px solid var(--accent-1)',
                borderRadius: '1.25rem',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--accent-1)',
                  color: 'var(--bg-0)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                15% OFF
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                Bundle B
              </h3>
              <p
                style={{
                  color: 'var(--muted)',
                  marginBottom: '1rem',
                  fontSize: '0.9375rem',
                }}
              >
                Stage 1 + Stage 2 + Stage 4 — Launch, test, and scale content.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  marginBottom: '1.5rem',
                  fontSize: '0.9375rem',
                  color: 'var(--muted-2)',
                }}
              >
                <li>✓ Validation Landing Page</li>
                <li>✓ Traffic & Testing</li>
                <li>✓ Content & Ads Engine</li>
              </ul>
              <Link
                href="/#request-proposal"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'block',
                  padding: '0.75rem 1rem',
                }}
                onClick={() => trackEvent('request_quote')}
              >
                Request Proposal
              </Link>
            </div>
          </div>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted-2)',
              fontSize: '0.9375rem',
              marginTop: '1.5rem',
              fontStyle: 'italic',
            }}
          >
            Discount applies when booked together.
          </p>
        </div>
      </section>
    </div>
  );
}
