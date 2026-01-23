'use client';

import DemoLandingShell from '@/components/DemoLandingShell';

export default function DemoMinimalLuxePage() {
  return (
    <>
      <DemoLandingShell
        title="Essence Collection"
        subtitle="Timeless luxury redefined. Handcrafted leather goods that blend traditional craftsmanship with modern minimalism. Every piece tells a story."
        primaryCTA="Explore Collection"
        secondaryCTA="Our Philosophy"
        services={[
          {
            title: 'Handcrafted',
            description: 'Each piece is meticulously crafted by master artisans using traditional techniques.',
            icon: '✋',
          },
          {
            title: 'Premium Leather',
            description: 'Sourced from the finest Italian tanneries. Ages beautifully over time.',
            icon: '🎨',
          },
          {
            title: 'Lifetime Guarantee',
            description: 'We stand behind our work. Lifetime repairs and maintenance included.',
            icon: '♾️',
          },
          {
            title: 'Sustainable',
            description: 'Ethically sourced materials. Carbon-neutral production. Built to last generations.',
            icon: '🌿',
          },
        ]}
        results={[
          {
            percentage: '10,000+',
            caption: 'Satisfied customers in 45 countries',
          },
          {
            percentage: '98%',
            caption: 'Customer retention and repeat purchase rate',
          },
        ]}
        themeAccent="gold"
      />

      {/* Philosophy Section */}
      <section
        style={{
          padding: '8rem 0',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--accent-1)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Our Philosophy
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                marginBottom: '2rem',
                lineHeight: 1.4,
                color: 'var(--text)',
              }}
            >
              Less is More
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'var(--muted)',
              }}
            >
              In a world of mass production and disposable goods, we choose a different path. Every stitch, every cut,
              every detail is intentional. We believe in creating fewer, better things that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        style={{
          padding: '6rem 0',
          background: 'rgba(212, 175, 55, 0.02)',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Why Choose Essence?
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              fontSize: '1.125rem',
              marginBottom: '4rem',
            }}
          >
            Not all leather goods are created equal
          </p>
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                background: 'rgba(212, 175, 55, 0.05)',
              }}
            >
              <div style={{ padding: '1.5rem', fontWeight: 700, fontSize: '0.875rem' }}>
                Feature
              </div>
              <div style={{ padding: '1.5rem', fontWeight: 700, fontSize: '0.875rem', textAlign: 'center' }}>
                Essence
              </div>
              <div
                style={{
                  padding: '1.5rem',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textAlign: 'center',
                  color: 'var(--muted-2)',
                }}
              >
                Others
              </div>
            </div>
            {[
              { feature: 'Full-grain leather', us: true, them: false },
              { feature: 'Hand-stitched seams', us: true, them: false },
              { feature: 'Lifetime guarantee', us: true, them: false },
              { feature: 'Ethically sourced', us: true, them: '?' },
              { feature: 'Made to order', us: true, them: false },
              { feature: 'Personalization', us: true, them: false },
            ].map((row, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr',
                  borderBottom:
                    index < 5 ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
                }}
              >
                <div style={{ padding: '1.5rem', color: 'var(--muted)' }}>
                  {row.feature}
                </div>
                <div
                  style={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    color: row.us ? 'rgba(100, 255, 150, 1)' : 'var(--muted-2)',
                    fontSize: '1.25rem',
                  }}
                >
                  {row.us === true ? '✓' : row.us === false ? '✗' : row.us}
                </div>
                <div
                  style={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    color: 'var(--muted-2)',
                    fontSize: '1.25rem',
                  }}
                >
                  {row.them === true ? '✓' : row.them === false ? '✗' : row.them}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Product Showcase */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '4rem',
              textAlign: 'center',
            }}
          >
            Signature Pieces
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
            }}
          >
            {[
              { name: 'The Classic Wallet', price: '$245' },
              { name: 'The Everyday Tote', price: '$595' },
              { name: 'The Weekend Duffle', price: '$895' },
            ].map((product, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    aspectRatio: '3/4',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(150, 120, 40, 0.05) 100%)',
                    borderRadius: '12px',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                  }}
                >
                  👜
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--text)',
                  }}
                >
                  {product.name}
                </h3>
                <div
                  style={{
                    fontSize: '1.125rem',
                    color: 'var(--accent-1)',
                    fontWeight: 700,
                  }}
                >
                  {product.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
