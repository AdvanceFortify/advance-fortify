'use client';

import Link from 'next/link';

export default function SolaraSkincare() {
  const brandColor = '#FFB4C8';
  const darkPink = '#8B3A52';

  return (
    <div style={{ background: '#FFF5F8', color: '#3D1F2A' }}>
      {/* Case Study Label */}
      <div
        style={{
          background: 'rgba(255, 180, 200, 0.15)',
          borderBottom: '1px solid rgba(255, 180, 200, 0.25)',
          padding: '0.75rem 1rem',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: darkPink,
          fontWeight: 600,
        }}
      >
        Case Study Preview — Client Work Sample
      </div>

      {/* Hero - Elegant E-commerce Style */}
      <section
        style={{
          padding: '6rem 1.5rem 5rem',
          background: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              background: 'rgba(255, 180, 200, 0.15)',
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: darkPink,
              marginBottom: '2rem',
            }}
          >
            CLEAN BEAUTY • VEGAN • CRUELTY-FREE
          </div>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 600,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: darkPink,
              letterSpacing: '-0.02em',
            }}
          >
            Radiant Skin, Naturally
          </h1>
          <p
            style={{
              fontSize: '1.375rem',
              color: '#8B6B7A',
              marginBottom: '3rem',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto 3rem',
            }}
          >
            Plant-based skincare formulated with clean ingredients for healthy, glowing skin
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#products"
              style={{
                padding: '1.125rem 2.5rem',
                background: `linear-gradient(135deg, ${brandColor} 0%, #FFC8DC 100%)`,
                color: '#FFFFFF',
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(255, 180, 200, 0.3)',
              }}
            >
              Shop Now
            </a>
            <a
              href="#quiz"
              style={{
                padding: '1.125rem 2.5rem',
                background: 'transparent',
                color: darkPink,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: '50px',
                textDecoration: 'none',
                border: `2px solid ${darkPink}`,
              }}
            >
              Take Skin Quiz
            </a>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section
        style={{
          padding: '2rem 1.5rem',
          background: `linear-gradient(135deg, ${brandColor} 0%, #FFC8DC 100%)`,
          color: '#FFFFFF',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {[
            { icon: '🌸', label: '100% Vegan' },
            { icon: '♻️', label: 'Sustainable' },
            { icon: '🐰', label: 'Cruelty-Free' },
            { icon: '🌿', label: 'Clean Ingredients' },
          ].map((value, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{value.icon}</span>
              <span style={{ fontWeight: 600, fontSize: '1rem' }}>{value.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section id="products" style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: '1rem',
              color: darkPink,
            }}
          >
            Best Sellers
          </h2>
          <p style={{ textAlign: 'center', color: '#8B6B7A', fontSize: '1.125rem', marginBottom: '3rem' }}>
            Our most-loved products for glowing skin
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                name: 'Radiance Serum',
                category: 'Serum',
                price: '$48',
                desc: 'Vitamin C + hyaluronic acid for bright, hydrated skin',
                rating: 4.9,
              },
              {
                name: 'Gentle Cleanser',
                category: 'Cleanser',
                price: '$32',
                desc: 'Creamy, pH-balanced formula for all skin types',
                rating: 4.8,
              },
              {
                name: 'Night Renewal Cream',
                category: 'Moisturizer',
                price: '$56',
                desc: 'Rich overnight treatment with retinol & peptides',
                rating: 4.9,
              },
              {
                name: 'Hydrating Toner',
                category: 'Toner',
                price: '$28',
                desc: 'Rose water & niacinamide for balanced complexion',
                rating: 4.7,
              },
            ].map((product, i) => (
              <div
                key={i}
                style={{
                  background: '#FFF5F8',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 180, 200, 0.2)',
                }}
              >
                <div
                  style={{
                    aspectRatio: '1',
                    background: `linear-gradient(135deg, rgba(255, 180, 200, 0.2) 0%, rgba(255, 200, 220, 0.15) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3.5rem',
                  }}
                >
                  💧
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: brandColor,
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {product.category}
                  </div>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 600, marginBottom: '0.5rem', color: darkPink }}>
                    {product.name}
                  </h3>
                  <div style={{ color: '#FFB4C8', fontSize: '0.9375rem', marginBottom: '0.75rem' }}>
                    {'⭐'.repeat(Math.floor(product.rating))} {product.rating}
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: '#8B6B7A', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {product.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: darkPink }}>{product.price}</span>
                    <button
                      style={{
                        padding: '0.625rem 1.5rem',
                        background: brandColor,
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '50px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Quiz CTA */}
      <section id="quiz" style={{ padding: '5rem 1.5rem', background: '#FFF5F8' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✨</div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              marginBottom: '1rem',
              color: darkPink,
            }}
          >
            Find Your Perfect Routine
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#8B6B7A', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Take our 2-minute skin quiz and get personalized product recommendations based on your skin type and concerns.
          </p>
          <a
            href="#"
            style={{
              display: 'inline-block',
              padding: '1.125rem 2.5rem',
              background: `linear-gradient(135deg, ${brandColor} 0%, #FFC8DC 100%)`,
              color: '#FFFFFF',
              fontSize: '1.125rem',
              fontWeight: 700,
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(255, 180, 200, 0.3)',
            }}
          >
            Start Quiz →
          </a>
        </div>
      </section>

      {/* Ingredients Section */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkPink,
            }}
          >
            Clean, Effective Ingredients
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: '🌸',
                name: 'Hyaluronic Acid',
                benefit: 'Deep hydration & plumping',
              },
              {
                icon: '🍊',
                name: 'Vitamin C',
                benefit: 'Brightening & antioxidant protection',
              },
              {
                icon: '🌿',
                name: 'Plant Peptides',
                benefit: 'Firming & anti-aging',
              },
              {
                icon: '🌹',
                name: 'Rose Extract',
                benefit: 'Soothing & balancing',
              },
            ].map((ingredient, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#FFF5F8',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '2px solid rgba(255, 180, 200, 0.2)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{ingredient.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: darkPink }}>
                  {ingredient.name}
                </h3>
                <p style={{ color: '#8B6B7A', fontSize: '0.9375rem' }}>{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFF5F8' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkPink,
            }}
          >
            What Our Community Says
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                name: 'Jessica M.',
                product: 'Radiance Serum',
                text: 'My skin has never looked better! The glow is real and it feels so luxurious.',
                rating: 5,
              },
              {
                name: 'Emily R.',
                product: 'Night Renewal Cream',
                text: "Finally found a clean retinol product that doesn't irritate my sensitive skin. Love it!",
                rating: 5,
              },
              {
                name: 'Sarah L.',
                product: 'Complete Routine',
                text: 'Switched to Solara 3 months ago and my hormonal acne has improved dramatically.',
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div style={{ color: brandColor, fontSize: '1.125rem', marginBottom: '1rem' }}>
                  {'⭐'.repeat(review.rating)}
                </div>
                <p
                  style={{
                    color: '#8B6B7A',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    fontStyle: 'italic',
                  }}
                >
                  "{review.text}"
                </p>
                <div style={{ fontWeight: 600, color: darkPink, marginBottom: '0.25rem' }}>{review.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#999' }}>Verified Purchase • {review.product}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles & Subscriptions */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: '1rem',
              color: darkPink,
            }}
          >
            Save with Bundles
          </h2>
          <p style={{ textAlign: 'center', color: '#8B6B7A', fontSize: '1.125rem', marginBottom: '3rem' }}>
            Complete routines at a better value
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                name: 'Morning Glow Set',
                products: ['Cleanser', 'Toner', 'Serum', 'SPF Moisturizer'],
                price: '$128',
                save: 'Save $24',
              },
              {
                name: 'Complete Routine',
                products: ['Full AM/PM routine', '6 products', 'Travel sizes included'],
                price: '$189',
                save: 'Save $45',
                featured: true,
              },
              {
                name: 'Night Repair Set',
                products: ['Cleanser', 'Toner', 'Retinol Serum', 'Night Cream'],
                price: '$142',
                save: 'Save $28',
              },
            ].map((bundle, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem',
                  background: bundle.featured ? '#FFF5F8' : '#FFFFFF',
                  borderRadius: '20px',
                  border: bundle.featured ? `3px solid ${brandColor}` : '2px solid rgba(255, 180, 200, 0.2)',
                  position: 'relative',
                }}
              >
                {bundle.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '0.375rem 1rem',
                      background: `linear-gradient(135deg, ${brandColor} 0%, #FFC8DC 100%)`,
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      borderRadius: '50px',
                    }}
                  >
                    BEST VALUE
                  </div>
                )}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: darkPink }}>
                  {bundle.name}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
                  {bundle.products.map((product, j) => (
                    <li
                      key={j}
                      style={{
                        padding: '0.5rem 0',
                        color: '#8B6B7A',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: brandColor }}>✓</span> {product}
                    </li>
                  ))}
                </ul>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: darkPink, marginBottom: '0.5rem' }}>
                  {bundle.price}
                </div>
                <div style={{ fontSize: '0.875rem', color: brandColor, fontWeight: 600, marginBottom: '1.5rem' }}>
                  {bundle.save}
                </div>
                <button
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: bundle.featured
                      ? `linear-gradient(135deg, ${brandColor} 0%, #FFC8DC 100%)`
                      : 'transparent',
                    color: bundle.featured ? '#FFFFFF' : darkPink,
                    border: bundle.featured ? 'none' : `2px solid ${darkPink}`,
                    borderRadius: '50px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFF5F8' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkPink,
            }}
          >
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                q: 'Are your products suitable for sensitive skin?',
                a: 'Yes! All our formulas are gentle, fragrance-free (except natural essential oils), and dermatologist-tested.',
              },
              {
                q: 'Do you offer free shipping?',
                a: 'Free shipping on all US orders over $50. International shipping available.',
              },
              {
                q: 'What is your return policy?',
                a: "60-day satisfaction guarantee. If you're not happy, return for a full refund.",
              },
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Absolutely. No commitments. Cancel, skip, or modify your subscription anytime.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '2px solid rgba(255, 180, 200, 0.2)',
                }}
              >
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: darkPink }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#8B6B7A', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: `linear-gradient(135deg, ${brandColor} 0%, #FFC8DC 100%)`,
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            Join the Solara Community
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.95 }}>
            Get 15% off your first order + exclusive skincare tips and early access to new products.
          </p>
          <Link
            href="/contact?project=solara-skincare"
            style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              background: '#FFFFFF',
              color: darkPink,
              fontSize: '1.25rem',
              fontWeight: 700,
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
            }}
          >
            Shop Now →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: darkPink, color: '#FFFFFF', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌸</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Solara Skincare</h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.85 }}>
            8520 Sunset Boulevard, Los Angeles, CA 90069
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <a href="tel:+13105551234" style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}>
              📞 (310) 555-1234
            </a>
            {' | '}
            <a
              href="mailto:hello@solaraskincare.com"
              style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}
            >
              📧 hello@solaraskincare.com
            </a>
          </div>
          <Link
            href="/portfolio/real"
            style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', textDecoration: 'none' }}
          >
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
