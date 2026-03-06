import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Advance Fortify',
  description: 'Learn about Advance Fortify and our mission to transform digital presence.',
};

export default function AboutPage() {
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
            About Advance Fortify
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            The Dedicated Tech Ops Team for 7-Figure Brands.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: '4rem 0',
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
              className="card"
              style={{
                padding: '3rem',
                marginBottom: '2rem',
              }}
            >
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                Our Mission
              </h2>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontSize: '1.125rem',
                  marginBottom: '1.5rem',
                }}
              >
                At Advance Fortify, we believe founders should focus on building their product and serving their audience, not getting stuck in the technical weeds. Our mission is to eliminate tech friction from your Road to $1 Million. We don&apos;t just build websites; we engineer the exact infrastructure—from validation funnels to scalable Shopify stores and automated retention engines—required to hit 100 sales per day.
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontSize: '1.125rem',
                }}
              >
                With over 150 successful projects, we provide the technical foundation that physical product entrepreneurs across Romania and the USA trust to launch, test, and scale with zero chaos.
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: '3rem',
              }}
            >
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                Why Choose Us
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                {[
                  { title: 'Flawless Execution of The Pathway', text: 'We execute a strict 5-stage system. No skipped steps, no premature scaling.' },
                  { title: 'Zero Technical Friction', text: 'We handle the coding, Meta/Google pixels, and Klaviyo flow integrations so you don\'t have to.' },
                  { title: 'Built for 100 Sales/Day', text: 'Robust Shopify and modern web infrastructure engineered to scale without breaking.' },
                  { title: 'Data-Driven Validation', text: 'Exact CPA reporting and split testing to validate demand before you order heavy inventory.' },
                  { title: 'Retention & LTV Focus', text: 'Automated systems for post-purchase reviews (Loox/Okendo) and ambassador programs.' },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      color: 'var(--text-secondary)',
                      fontSize: '1.125rem',
                    }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '1.5rem' }}>★</span>
                    <span>
                      <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '0.25rem' }}>{item.title}</strong>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
