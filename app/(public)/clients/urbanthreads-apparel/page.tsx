'use client';

export default function UrbanThreadsApparel() {
  return (
    <div style={{ background: '#fafaf9', color: '#1a1a1a', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav
        style={{
          background: '#fafaf9',
          borderBottom: '1px solid #e5e5e0',
          padding: '1.25rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#1a1a1a', letterSpacing: '3px', textTransform: 'uppercase' }}>
            UrbanThreads
          </div>
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <a href="#collection" style={{ color: '#3a3a3a', fontWeight: 600, textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Collection
            </a>
            <a href="#lookbook" style={{ color: '#3a3a3a', fontWeight: 600, textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Lookbook
            </a>
            <a href="#story" style={{ color: '#3a3a3a', fontWeight: 600, textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Our Story
            </a>
            <a
              href="#newsletter"
              style={{
                background: '#0066ff',
                color: '#ffffff',
                padding: '0.625rem 1.75rem',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}
            >
              Newsletter
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80"
          alt="Fashion collection"
          loading="eager"
          width={1600}
          height={900}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '4rem',
            left: '4rem',
            maxWidth: '600px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '1.5rem',
              lineHeight: 0.95,
              letterSpacing: '-3px',
              textTransform: 'uppercase',
            }}
          >
            Spring
            <br />
            2026
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#ffffff',
              marginBottom: '2rem',
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}
          >
            Bold designs. Sustainable materials. Timeless style.
          </p>
          <a
            href="#collection"
            style={{
              display: 'inline-block',
              background: '#0066ff',
              color: '#ffffff',
              padding: '1rem 2.5rem',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Product Grid */}
      <section id="collection" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 900,
                marginBottom: '1rem',
                letterSpacing: '-1px',
                textTransform: 'uppercase',
              }}
            >
              New Arrivals
            </h2>
            <p style={{ color: '#666', fontSize: '1.125rem', letterSpacing: '0.5px' }}>Carefully curated pieces for the modern wardrobe</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {[
              { name: 'Oversized Hoodie', price: '€89', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80' },
              { name: 'Cargo Trousers', price: '€125', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80' },
              { name: 'Technical Jacket', price: '€185', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
              { name: 'Graphic Tee', price: '€49', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80' },
              { name: 'Denim Jacket', price: '€145', img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80' },
              { name: 'Utility Vest', price: '€95', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
              { name: 'Track Pants', price: '€79', img: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80' },
              { name: 'Puffer Coat', price: '€225', img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80' },
              { name: 'Knit Sweater', price: '€115', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80' },
              { name: 'Wide Leg Jeans', price: '€135', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80' },
              { name: 'Bomber Jacket', price: '€165', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
              { name: 'Minimal Shirt', price: '€69', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80' },
            ].map((product, i) => (
              <div key={i} style={{ cursor: 'pointer' }}>
                <div style={{ position: 'relative', marginBottom: '1rem', overflow: 'hidden', aspectRatio: '3/4' }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    width={600}
                    height={800}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0066ff' }}>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Section */}
      <section id="lookbook" style={{ padding: '6rem 2rem', background: '#1a1a1a', color: '#ffffff' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '-1px',
              textTransform: 'uppercase',
            }}
          >
            Spring Lookbook
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div style={{ height: '600px', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                alt="Lookbook 1"
                loading="lazy"
                width={800}
                height={1000}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '600px', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Lookbook 2"
                loading="lazy"
                width={800}
                height={1000}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '600px', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80"
                alt="Lookbook 3"
                loading="lazy"
                width={800}
                height={1000}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Story */}
      <section id="story" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '2rem',
              letterSpacing: '-1px',
              textTransform: 'uppercase',
            }}
          >
            Sustainable by Design
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Every piece is crafted from organic cotton, recycled materials, and deadstock fabrics. We believe fashion should look good and do good.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0066ff', marginBottom: '0.5rem' }}>100%</div>
              <p style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Organic Cotton</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0066ff', marginBottom: '0.5rem' }}>80%</div>
              <p style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Recycled Materials</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0066ff', marginBottom: '0.5rem' }}>0</div>
              <p style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Water Waste</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '6rem 2rem', background: '#f5f5f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-1px',
              textTransform: 'uppercase',
            }}
          >
            What People Are Saying
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Alex R.', text: 'Quality is unmatched. The fit is perfect and the materials feel premium. Worth every euro.' },
              { name: 'Jordan K.', text: 'Finally found a brand that matches my aesthetic. Minimalist, bold, and sustainable.' },
              { name: 'Sam T.', text: 'These pieces are timeless. I have been wearing them for months and they still look brand new.' },
            ].map((review, i) => (
              <div key={i} style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '0', border: '1px solid #e5e5e0' }}>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#3a3a3a' }}>"{review.text}"</p>
                <p style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" style={{ padding: '6rem 2rem', background: '#0066ff', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
              textTransform: 'uppercase',
            }}
          >
            Get 15% Off
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            Subscribe to our newsletter and receive 15% off your first order.
          </p>
          <form
            style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: '1rem 1.5rem',
                border: 'none',
                fontSize: '1rem',
                background: '#ffffff',
                color: '#1a1a1a',
              }}
            />
            <button
              type="submit"
              style={{
                background: '#1a1a1a',
                color: '#ffffff',
                padding: '1rem 2rem',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a1a', color: '#ffffff', padding: '4rem 2rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '2px' }}>URBANTHREADS</div>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.7 }}>
                Contemporary fashion. Sustainable mindset.
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Shop</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="#collection" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>New Arrivals</a>
                <a href="#collection" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Bestsellers</a>
                <a href="#collection" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Sale</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>Follow</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="https://www.instagram.com/advancefortify/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Instagram</a>
                <a href="https://www.facebook.com/advancefortify" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Facebook</a>
                <a href="https://www.linkedin.com/in/gabriel-lung-" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>LinkedIn</a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>TikTok</a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Pinterest</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} UrbanThreads. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
