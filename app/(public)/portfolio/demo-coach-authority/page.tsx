'use client';

import DemoLandingShell from '@/components/DemoLandingShell';
import { useState, FormEvent } from 'react';

export default function DemoCoachAuthorityPage() {
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const handleApplicationSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => setApplicationSubmitted(false), 5000);
  };

  return (
    <>
      <DemoLandingShell
        title="Transform Your Life"
        subtitle="Elite executive coaching for leaders who refuse to settle. Join a select community of high-performers achieving extraordinary results through proven methodologies."
        primaryCTA="Apply Now"
        secondaryCTA="Read Success Stories"
        services={[
          {
            title: '1-on-1 Coaching',
            description: 'Personalized guidance tailored to your unique goals and challenges.',
            icon: '🎯',
          },
          {
            title: 'Mastermind Group',
            description: 'Connect with like-minded leaders in exclusive peer circles.',
            icon: '👥',
          },
          {
            title: 'Strategic Planning',
            description: '90-day sprints with accountability frameworks that drive results.',
            icon: '📋',
          },
          {
            title: 'Ongoing Support',
            description: '24/7 access to resources, community, and direct coaching support.',
            icon: '💬',
          },
        ]}
        results={[
          {
            percentage: '312%',
            caption: 'Average income increase for clients within 12 months',
          },
          {
            percentage: '94%',
            caption: 'Client satisfaction and goal achievement rate',
          },
        ]}
        themeAccent="purple"
      />

      {/* Editorial Section */}
      <section
        style={{
          padding: '8rem 0',
          background: 'rgba(150, 100, 255, 0.03)',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'rgba(150, 100, 255, 1)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              About the Coach
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 900,
                marginBottom: '2rem',
                lineHeight: 1.2,
              }}
            >
              Why Work With Me?
            </h2>
            <div
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.8,
                color: 'var(--muted)',
                marginBottom: '2rem',
              }}
            >
              <p style={{ marginBottom: '1.5rem' }}>
                With over 15 years of experience coaching C-suite executives and 7-figure entrepreneurs, I've developed a
                proven framework that cuts through the noise and delivers measurable results.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                My approach combines neuroscience-backed techniques with traditional business strategy, creating a
                unique methodology that transforms both mindset and outcomes.
              </p>
              <p>
                Featured in Forbes, Entrepreneur, and Inc. Magazine. Former Fortune 500 executive turned full-time
                coach and speaker.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(150, 100, 255, 0.2)',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'rgba(150, 100, 255, 1)',
                    marginBottom: '0.25rem',
                  }}
                >
                  500+
                </div>
                <div style={{ color: 'var(--muted-2)', fontSize: '0.9375rem' }}>
                  Clients Coached
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'rgba(150, 100, 255, 1)',
                    marginBottom: '0.25rem',
                  }}
                >
                  15 Years
                </div>
                <div style={{ color: 'var(--muted-2)', fontSize: '0.9375rem' }}>
                  Experience
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'rgba(150, 100, 255, 1)',
                    marginBottom: '0.25rem',
                  }}
                >
                  4.9★
                </div>
                <div style={{ color: 'var(--muted-2)', fontSize: '0.9375rem' }}>
                  Client Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              Apply for Coaching
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: 'var(--muted)',
                fontSize: '1.125rem',
                marginBottom: '3rem',
              }}
            >
              Spots are limited. Complete the application below to be considered for the next cohort.
            </p>
            <form
              onSubmit={handleApplicationSubmit}
              style={{
                padding: '3rem',
                background: 'rgba(150, 100, 255, 0.05)',
                border: '1px solid rgba(150, 100, 255, 0.2)',
                borderRadius: '28px',
              }}
            >
              <div className="form-group">
                <label htmlFor="app-name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="app-name"
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="app-email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="app-email"
                  className="form-input"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="app-role" className="form-label">
                  Current Role
                </label>
                <input
                  type="text"
                  id="app-role"
                  className="form-input"
                  placeholder="CEO, Entrepreneur, Executive, etc."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="app-revenue" className="form-label">
                  Annual Revenue / Income
                </label>
                <select id="app-revenue" className="form-select" required>
                  <option value="">Select range</option>
                  <option value="100k-250k">$100k - $250k</option>
                  <option value="250k-500k">$250k - $500k</option>
                  <option value="500k-1m">$500k - $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="app-goals" className="form-label">
                  What are your top 3 goals?
                </label>
                <textarea
                  id="app-goals"
                  className="form-input"
                  rows={4}
                  placeholder="Describe what you want to achieve in the next 90 days..."
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  marginTop: '1rem',
                }}
              >
                Submit Application
              </button>
              {applicationSubmitted && (
                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(150, 100, 255, 0.15)',
                    border: '1px solid rgba(150, 100, 255, 0.3)',
                    borderRadius: '0.5rem',
                    color: 'rgba(150, 100, 255, 1)',
                    textAlign: 'center',
                    fontWeight: 600,
                  }}
                >
                  Demo only — no data is sent.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
