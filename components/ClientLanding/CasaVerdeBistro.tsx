'use client';

import Link from 'next/link';

export default function CasaVerdeBistro() {
  const brandColor = '#8CB464';
  const darkGreen = '#2D3A1F';

  return (
    <div style={{ background: '#FAFDF6', color: '#2D3A1F' }}>
      {/* Case Study Label */}
      <div
        style={{
          background: 'rgba(140, 180, 100, 0.1)',
          borderBottom: '1px solid rgba(140, 180, 100, 0.2)',
          padding: '0.75rem 1rem',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: brandColor,
          fontWeight: 600,
        }}
      >
        Case Study Preview — Client Work Sample
      </div>

      {/* Hero - Full Width with Overlay */}
      <section
        style={{
          position: 'relative',
          minHeight: '650px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, rgba(140, 180, 100, 0.9) 0%, rgba(160, 200, 120, 0.85) 100%)`,
          textAlign: 'center',
          color: '#FFFFFF',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🍽️</div>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 700,
              marginBottom: '1.25rem',
              lineHeight: 1,
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
            }}
          >
            Casa Verde Bistro
          </h1>
          <p
            style={{
              fontSize: '1.75rem',
              marginBottom: '1rem',
              fontWeight: 500,
              fontStyle: 'italic',
            }}
          >
            Fresh Flavors, Warm Atmosphere
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              opacity: 0.95,
            }}
          >
            Farm-to-table dining featuring seasonal Romanian cuisine in the heart of Brașov
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#menu"
              style={{
                padding: '1rem 2.5rem',
                background: '#FFFFFF',
                color: darkGreen,
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              }}
            >
              View Menu
            </a>
            <a
              href="#reservations"
              style={{
                padding: '1rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: '50px',
                textDecoration: 'none',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Reserve Table
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section
        style={{
          padding: '2.5rem 1.5rem',
          background: darkGreen,
          color: '#FFFFFF',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Address</div>
            <div style={{ fontSize: '0.9375rem', opacity: 0.85 }}>
              Strada Republicii 28, Brașov
            </div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🕐</div>
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Hours</div>
            <div style={{ fontSize: '0.9375rem', opacity: 0.85 }}>
              Tue-Sun: 12PM-11PM (Closed Monday)
            </div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞</div>
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Reservations</div>
            <div style={{ fontSize: '0.9375rem', opacity: 0.85 }}>
              <a href="tel:+40268456789" style={{ color: brandColor, textDecoration: 'none' }}>
                0268 456 789
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: darkGreen,
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: '#4A5A3D',
              lineHeight: 1.8,
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Casa Verde Bistro brings together the best of Romanian tradition and modern culinary innovation. 
            Our chef sources seasonal ingredients from local farms to create dishes that celebrate the rich 
            flavors of Transylvania. Whether you're joining us for a romantic dinner, family celebration, 
            or business lunch, we promise an unforgettable dining experience in our cozy mountain-inspired ambiance.
          </p>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" style={{ padding: '5rem 1.5rem', background: '#FAFDF6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '1rem',
              color: darkGreen,
            }}
          >
            Signature Dishes
          </h2>
          <p style={{ textAlign: 'center', color: '#4A5A3D', fontSize: '1.125rem', marginBottom: '3rem' }}>
            Seasonal menu featuring local ingredients
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                name: 'Mountain Trout',
                desc: 'Fresh trout with herb butter, seasonal vegetables, and polenta',
                price: '68 RON',
                category: 'Main Course',
              },
              {
                name: 'Traditional Sarmale',
                desc: 'Cabbage rolls with pork, rice, and smoked bacon, served with sour cream',
                price: '52 RON',
                category: 'Romanian Classic',
              },
              {
                name: 'Forest Mushroom Risotto',
                desc: 'Creamy risotto with wild mushrooms, parmesan, and truffle oil',
                price: '58 RON',
                category: 'Vegetarian',
              },
              {
                name: 'Casa Verde Burger',
                desc: 'Local beef, caramelized onions, smoked cheese, house-made pickles',
                price: '45 RON',
                category: 'Grill',
              },
              {
                name: 'Papanași',
                desc: 'Traditional Romanian fried doughnuts with sweet cheese and berry sauce',
                price: '28 RON',
                category: 'Dessert',
              },
              {
                name: 'Chef\'s Tasting Menu',
                desc: '5-course seasonal journey featuring chef\'s favorite ingredients',
                price: '180 RON',
                category: 'Experience',
              },
            ].map((dish, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '2px solid rgba(140, 180, 100, 0.2)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: brandColor,
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                  }}
                >
                  {dish.category}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: darkGreen }}>
                  {dish.name}
                </h3>
                <p style={{ fontSize: '1rem', color: '#4A5A3D', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {dish.desc}
                </p>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: brandColor }}>{dish.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beverages */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkGreen,
            }}
          >
            Craft Beverages
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
                icon: '🍷',
                title: 'Romanian Wines',
                desc: 'Curated selection from Dealu Mare, Murfatlar, and local vineyards',
              },
              {
                icon: '🍺',
                title: 'Craft Beers',
                desc: 'Local craft brews from Brașov and Transylvania microbreweries',
              },
              {
                icon: '🍸',
                title: 'Signature Cocktails',
                desc: 'House-made infusions with herbs from our garden',
              },
            ].map((beverage, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{beverage.icon}</div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', color: darkGreen }}>
                  {beverage.title}
                </h3>
                <p style={{ color: '#4A5A3D', lineHeight: 1.6 }}>{beverage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '5rem 1.5rem', background: '#FAFDF6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkGreen,
            }}
          >
            Ambiance & Dishes
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {['Interior Dining', 'Outdoor Terrace', 'Bar Area', 'Plated Dish', 'Wine Selection', 'Dessert Bar'].map(
              (label, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: '4/3',
                    background: `linear-gradient(135deg, rgba(140, 180, 100, 0.15) 0%, rgba(160, 200, 120, 0.1) 100%)`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: brandColor,
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    border: '2px dashed rgba(140, 180, 100, 0.3)',
                  }}
                >
                  {label}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkGreen,
            }}
          >
            What Our Guests Say
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
                name: 'Laura Georgescu',
                text: 'Best restaurant in Brașov! The food is exceptional and the atmosphere is perfect for special occasions.',
                rating: 5,
              },
              {
                name: 'Stefan Munteanu',
                text: 'Authentic Romanian flavors with a modern twist. The outdoor terrace is magical in summer.',
                rating: 5,
              },
              {
                name: 'Alexandra Popa',
                text: 'We had our anniversary dinner here and it was unforgettable. Service was impeccable!',
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#FAFDF6',
                  borderRadius: '16px',
                  border: '2px solid rgba(140, 180, 100, 0.2)',
                }}
              >
                <div style={{ color: brandColor, fontSize: '1.25rem', marginBottom: '1rem' }}>
                  {'⭐'.repeat(review.rating)}
                </div>
                <p
                  style={{
                    color: '#4A5A3D',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                    fontStyle: 'italic',
                  }}
                >
                  "{review.text}"
                </p>
                <div style={{ fontWeight: 700, color: darkGreen }}>— {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section style={{ padding: '5rem 1.5rem', background: '#FAFDF6' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              color: darkGreen,
            }}
          >
            Private Events & Celebrations
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4A5A3D', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Host your special event in our private dining room. Perfect for birthdays, anniversaries, 
            corporate gatherings, and family celebrations. Customizable menus available.
          </p>
          <a
            href="#reservations"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: brandColor,
              color: '#FFFFFF',
              fontSize: '1.125rem',
              fontWeight: 700,
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(140, 180, 100, 0.3)',
            }}
          >
            Inquire About Events
          </a>
        </div>
      </section>

      {/* Reservations CTA */}
      <section
        id="reservations"
        style={{
          padding: '5rem 1.5rem',
          background: `linear-gradient(135deg, ${brandColor} 0%, #A0C878 100%)`,
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            Reserve Your Table
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.95 }}>
            Experience the finest farm-to-table dining in Brașov
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact?project=casaverde-bistro"
              style={{
                display: 'inline-block',
                padding: '1.25rem 3rem',
                background: '#FFFFFF',
                color: darkGreen,
                fontSize: '1.25rem',
                fontWeight: 700,
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
              }}
            >
              Book Online →
            </Link>
            <a
              href="tel:+40268456789"
              style={{
                display: 'inline-block',
                padding: '1.25rem 3rem',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontSize: '1.25rem',
                fontWeight: 700,
                borderRadius: '50px',
                textDecoration: 'none',
                border: '2px solid rgba(255, 255, 255, 0.5)',
              }}
            >
              📞 Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: darkGreen, color: '#FFFFFF', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🍽️</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Casa Verde Bistro</h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
            Strada Republicii 28, Brașov, 500030
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <a href="tel:+40268456789" style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}>
              📞 0268 456 789
            </a>
            {' | '}
            <a
              href="mailto:reservations@casaverde.ro"
              style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}
            >
              📧 reservations@casaverde.ro
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
