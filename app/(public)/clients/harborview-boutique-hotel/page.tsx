'use client';

export default function HarborViewBoutiqueHotel() {
  return (
    <div style={{ background: '#f9f7f4', color: '#2a2520', minHeight: '100vh', fontFamily: 'Georgia, "Times New Roman", serif' }}>
      {/* Navigation */}
      <nav
        style={{
          background: 'rgba(42, 37, 32, 0.95)',
          padding: '1.25rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 300, color: '#d4a574', letterSpacing: '3px', fontFamily: 'Georgia, serif' }}>
            HARBORVIEW
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#rooms" style={{ color: '#e8dfd6', fontWeight: 400, textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '1px' }}>
              Rooms
            </a>
            <a href="#amenities" style={{ color: '#e8dfd6', fontWeight: 400, textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '1px' }}>
              Amenities
            </a>
            <a href="#restaurant" style={{ color: '#e8dfd6', fontWeight: 400, textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '1px' }}>
              Dining
            </a>
            <a href="#contact" style={{ color: '#e8dfd6', fontWeight: 400, textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '1px' }}>
              Contact
            </a>
            <a
              href="#booking"
              style={{
                background: '#d4a574',
                color: '#2a2520',
                padding: '0.75rem 1.75rem',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9375rem',
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
          alt="Luxury hotel lobby"
          loading="eager"
          width={1600}
          height={900}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#ffffff',
            maxWidth: '900px',
            width: '90%',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 300,
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              letterSpacing: '2px',
            }}
          >
            Where Luxury Meets
            <br />
            <span style={{ fontWeight: 400, color: '#d4a574' }}>the Black Sea</span>
          </h1>
          <p
            style={{
              fontSize: '1.375rem',
              marginBottom: '2.5rem',
              fontWeight: 300,
              letterSpacing: '0.5px',
              opacity: 0.95,
            }}
          >
            Experience refined coastal elegance in the heart of Constanța
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#booking"
              style={{
                display: 'inline-block',
                background: '#d4a574',
                color: '#2a2520',
                padding: '1.125rem 2.5rem',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '1px',
                transition: 'all 0.3s ease',
              }}
            >
              Reserve Your Stay
            </a>
            <a
              href="#rooms"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#ffffff',
                padding: '1.125rem 2.5rem',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                letterSpacing: '1px',
                border: '2px solid #ffffff',
                transition: 'all 0.3s ease',
              }}
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </section>

      {/* Booking Mock UI */}
      <section
        id="booking"
        style={{
          padding: '3rem 2rem',
          background: '#2a2520',
          color: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <form
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', alignItems: 'end' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#d4a574', letterSpacing: '1px' }}>
                CHECK-IN
              </label>
              <input
                type="date"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid #4a4540',
                  background: '#3a3530',
                  color: '#ffffff',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#d4a574', letterSpacing: '1px' }}>
                CHECK-OUT
              </label>
              <input
                type="date"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid #4a4540',
                  background: '#3a3530',
                  color: '#ffffff',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#d4a574', letterSpacing: '1px' }}>
                GUESTS
              </label>
              <select
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid #4a4540',
                  background: '#3a3530',
                  color: '#ffffff',
                  fontSize: '1rem',
                }}
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <button
              type="submit"
              style={{
                background: '#d4a574',
                color: '#2a2520',
                padding: '0.875rem 2rem',
                border: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                letterSpacing: '1px',
              }}
            >
              Check Availability
            </button>
          </form>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                marginBottom: '1rem',
                letterSpacing: '2px',
              }}
            >
              Our Rooms & Suites
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6a5f54', letterSpacing: '0.5px', fontWeight: 300 }}>
              Each room is a sanctuary of comfort and elegance
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {[
              {
                name: 'Deluxe Sea View',
                desc: 'Spacious room with panoramic Black Sea views, king-size bed, marble bathroom, and private balcony.',
                price: '€280 / night',
                img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
                features: ['45 m²', 'King Bed', 'Sea View', 'Balcony', 'Marble Bath'],
              },
              {
                name: 'Premium Suite',
                desc: 'Elegant suite with separate living area, premium furnishings, luxury amenities, and stunning coastal vistas.',
                price: '€450 / night',
                img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
                features: ['65 m²', 'Living Room', 'Dining Area', 'Premium Bar', 'Spa Bath'],
              },
              {
                name: 'Penthouse Suite',
                desc: 'Our signature accommodation. Private terrace, jacuzzi, butler service, and unparalleled luxury.',
                price: '€750 / night',
                img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
                features: ['120 m²', 'Private Terrace', 'Jacuzzi', 'Butler Service', 'Ocean View'],
              },
            ].map((room, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <img
                    src={room.img}
                    alt={room.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ order: i % 2 === 0 ? 2 : 1, padding: '2rem' }}>
                  <h3 style={{ fontSize: '2.25rem', fontWeight: 300, marginBottom: '1rem', letterSpacing: '1px' }}>
                    {room.name}
                  </h3>
                  <p style={{ fontSize: '1.75rem', fontWeight: 600, color: '#d4a574', marginBottom: '1.5rem' }}>{room.price}</p>
                  <p style={{ fontSize: '1.125rem', color: '#6a5f54', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 300 }}>
                    {room.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                    {room.features.map((feature, j) => (
                      <span
                        key={j}
                        style={{
                          padding: '0.5rem 1.25rem',
                          background: '#f0ebe4',
                          fontSize: '0.875rem',
                          color: '#2a2520',
                          fontWeight: 500,
                          letterSpacing: '0.5px',
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#booking"
                    style={{
                      display: 'inline-block',
                      background: '#2a2520',
                      color: '#d4a574',
                      padding: '1rem 2rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Reserve Room
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" style={{ padding: '6rem 2rem', background: '#2a2520', color: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '2px',
            }}
          >
            Amenities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {[
              { icon: '🏊', name: 'Infinity Pool', desc: 'Rooftop pool with panoramic sea views' },
              { icon: '🧖', name: 'Spa & Wellness', desc: 'Full-service spa with treatments' },
              { icon: '🏋️', name: 'Fitness Center', desc: '24/7 state-of-the-art gym' },
              { icon: '🍷', name: 'Wine Cellar', desc: 'Curated selection of fine wines' },
              { icon: '🚗', name: 'Valet Parking', desc: 'Complimentary valet service' },
              { icon: '📞', name: 'Concierge', desc: '24-hour personalized service' },
            ].map((amenity, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{amenity.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem', color: '#d4a574', letterSpacing: '1px' }}>
                  {amenity.name}
                </h3>
                <p style={{ color: '#c8bfb4', lineHeight: 1.7, fontWeight: 300 }}>{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant */}
      <section id="restaurant" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 300,
                  marginBottom: '1.5rem',
                  letterSpacing: '2px',
                }}
              >
                Azure Restaurant
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6a5f54', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 300 }}>
                Savor Mediterranean-inspired cuisine crafted by our award-winning chef. Fresh seafood, locally-sourced ingredients, and an extensive wine list.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '1rem', color: '#d4a574', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '1px' }}>
                  DINING HOURS
                </p>
                <p style={{ color: '#6a5f54', lineHeight: 1.7, fontWeight: 300 }}>
                  Breakfast: 7:00 AM - 11:00 AM
                  <br />
                  Lunch: 12:30 PM - 3:30 PM
                  <br />
                  Dinner: 7:00 PM - 11:00 PM
                </p>
              </div>
              <a
                href="#booking"
                style={{
                  display: 'inline-block',
                  background: '#2a2520',
                  color: '#d4a574',
                  padding: '1rem 2rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '1px',
                }}
              >
                Reserve Table
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant"
                loading="lazy"
                width={800}
                height={600}
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section style={{ padding: '6rem 2rem', background: '#f0ebe4' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '2px',
            }}
          >
            Gallery
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80"
              alt="Gallery 1"
              loading="lazy"
              width={600}
              height={400}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80"
              alt="Gallery 2"
              loading="lazy"
              width={600}
              height={400}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80"
              alt="Gallery 3"
              loading="lazy"
              width={600}
              height={400}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80"
              alt="Gallery 4"
              loading="lazy"
              width={600}
              height={400}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80"
              alt="Gallery 5"
              loading="lazy"
              width={600}
              height={400}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <img
              src="https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=80"
              alt="Gallery 6"
              loading="lazy"
              width={600}
              height={400}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '2px',
            }}
          >
            Guest Reviews
          </h2>
          <div style={{ display: 'grid', gap: '2.5rem' }}>
            {[
              {
                name: 'Sophie Laurent',
                location: 'Paris, France',
                text: 'An absolute gem. The attention to detail, impeccable service, and breathtaking views made our anniversary unforgettable.',
              },
              {
                name: 'Marcus Weber',
                location: 'Berlin, Germany',
                text: 'Exceeded all expectations. The rooms are exquisite, the restaurant is world-class, and the staff went above and beyond.',
              },
              {
                name: 'Isabella Rossi',
                location: 'Milan, Italy',
                text: 'Pure elegance and sophistication. This is luxury hospitality at its finest. We will definitely return.',
              },
            ].map((review, i) => (
              <div key={i} style={{ padding: '2.5rem', background: '#f9f7f4', border: '1px solid #e8dfd6' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '1.5rem', color: '#6a5f54', fontStyle: 'italic', fontWeight: 300 }}>
                  "{review.text}"
                </p>
                <p style={{ fontWeight: 600, color: '#2a2520', letterSpacing: '0.5px' }}>
                  {review.name}
                  <span style={{ fontWeight: 300, color: '#6a5f54', marginLeft: '0.5rem' }}>— {review.location}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '6rem 2rem', background: '#2a2520', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              marginBottom: '2rem',
              letterSpacing: '2px',
            }}
          >
            Contact Us
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', color: '#c8bfb4', fontWeight: 300 }}>
            Bulevardul Mamaia 255, Constanța, Romania
            <br />
            Phone: +40 341 123 456 | Email: reservations@harborview.ro
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1714', color: '#c8bfb4', padding: '3rem 2rem 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 300, marginBottom: '1rem', color: '#d4a574', letterSpacing: '3px' }}>
          HARBORVIEW
        </div>
        <p style={{ marginBottom: '2rem', fontWeight: 300 }}>Luxury coastal hospitality since 2015</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <a href="https://www.instagram.com/advancefortify/" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a574', textDecoration: 'none', fontSize: '1.5rem' }}>
            📷
          </a>
          <a href="https://www.facebook.com/advancefortify" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a574', textDecoration: 'none', fontSize: '1.5rem' }}>
            📘
          </a>
          <a href="https://www.linkedin.com/in/gabriel-lung-" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a574', textDecoration: 'none', fontSize: '1.5rem' }}>
            💼
          </a>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'rgba(200, 191, 180, 0.6)' }}>
          © {new Date().getFullYear()} HarborView Boutique Hotel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
