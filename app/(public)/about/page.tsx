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
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%)',
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
            We transform businesses through premium digital solutions
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
                  color: 'var(--gold)',
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
                At Advance Fortify, we believe that every business deserves a digital presence that
                not only looks premium but also drives real results. We combine cutting-edge
                technology with strategic marketing to create solutions that convert visitors into
                customers.
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontSize: '1.125rem',
                }}
              >
                With over 150 successful projects and a 4.9/5 client rating, we've helped
                businesses across Romania and the USA achieve their digital goals.
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
                  color: 'var(--gold)',
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
                  'Premium design with conversion-focused approach',
                  'Fast, optimized websites built with Next.js',
                  'Comprehensive SEO and marketing strategies',
                  'Dedicated support throughout your journey',
                  'Proven track record of success',
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
                    <span>{item}</span>
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
