'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function UrbanNestRealty() {
  const [activeFilter, setActiveFilter] = useState('all');

  const brandColor = '#FF8C50';
  const darkBrown = '#3D2817';

  return (
    <div style={{ background: '#FFF8F3', color: '#2D1810' }}>
      {/* Case Study Label */}
      <div
        style={{
          background: 'rgba(255, 140, 80, 0.1)',
          borderBottom: '1px solid rgba(255, 140, 80, 0.2)',
          padding: '0.75rem 1rem',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: brandColor,
          fontWeight: 600,
        }}
      >
        Case Study Preview — Client Work Sample
      </div>

      {/* Navigation Bar */}
      <nav
        style={{
          background: '#FFFFFF',
          borderBottom: '1px solid rgba(255, 140, 80, 0.1)',
          padding: '1rem 1.5rem',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: brandColor }}>
            🏢 UrbanNest Realty
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#properties" style={{ color: darkBrown, textDecoration: 'none', fontWeight: 600 }}>
              Properties
            </a>
            <a href="#services" style={{ color: darkBrown, textDecoration: 'none', fontWeight: 600 }}>
              Services
            </a>
            <a
              href="tel:+40212345678"
              style={{
                color: '#FFFFFF',
                background: brandColor,
                padding: '0.625rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero - Full Width Split */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '600px',
          background: '#FFFFFF',
        }}
        className="hero-split"
      >
        <div
          style={{
            padding: '4rem 3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: '0.875rem', color: brandColor, fontWeight: 700, marginBottom: '1rem' }}>
            PREMIER REAL ESTATE IN BUCHAREST
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: darkBrown,
            }}
          >
            Find Your Perfect Nest
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#5D4037',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
            }}
          >
            Exclusive urban properties, luxury apartments, and smart investment opportunities across Bucharest's most desirable neighborhoods.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#properties"
              style={{
                padding: '1rem 2rem',
                background: brandColor,
                color: '#FFFFFF',
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(255, 140, 80, 0.3)',
              }}
            >
              Browse Properties
            </a>
            <a
              href="#contact"
              style={{
                padding: '1rem 2rem',
                background: 'transparent',
                color: brandColor,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: '8px',
                textDecoration: 'none',
                border: `2px solid ${brandColor}`,
              }}
            >
              Schedule Viewing
            </a>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient(135deg, rgba(255, 140, 80, 0.15) 0%, rgba(255, 160, 100, 0.1) 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '6rem',
          }}
        >
          🏢
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          background: darkBrown,
          color: '#FFFFFF',
          padding: '2.5rem 1.5rem',
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
            { value: '500+', label: 'Properties Sold' },
            { value: '22 days', label: 'Avg. Time to Close' },
            { value: '€2.5M+', label: 'Total Value Transacted' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: brandColor, marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '1rem', opacity: 0.9 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" style={{ padding: '5rem 1.5rem', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              color: darkBrown,
            }}
          >
            Featured Properties
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#5D4037', marginBottom: '2rem' }}>
            Curated selection of premium listings
          </p>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['All', 'Apartments', 'Houses', 'Commercial'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                style={{
                  padding: '0.625rem 1.5rem',
                  background:
                    activeFilter === filter.toLowerCase() ? brandColor : 'rgba(255, 140, 80, 0.1)',
                  color: activeFilter === filter.toLowerCase() ? '#FFFFFF' : brandColor,
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Property Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { type: 'Apartment', location: 'Aviatorilor', price: '€285,000', beds: '3', area: '120 m²' },
              { type: 'Penthouse', location: 'Herastrau', price: '€650,000', beds: '4', area: '200 m²' },
              { type: 'Studio', location: 'Romana', price: '€95,000', beds: '1', area: '45 m²' },
            ].map((property, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div
                  style={{
                    aspectRatio: '16/10',
                    background: `linear-gradient(135deg, rgba(255, 140, 80, 0.2) 0%, rgba(255, 160, 100, 0.1) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                  }}
                >
                  🏠
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: brandColor,
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {property.type}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: darkBrown }}>
                    {property.location}
                  </h3>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: brandColor, marginBottom: '1rem' }}>
                    {property.price}
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9375rem', color: '#5D4037' }}>
                    <span>🛏️ {property.beds} beds</span>
                    <span>📐 {property.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkBrown,
            }}
          >
            Complete Real Estate Services
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
                icon: '🔍',
                title: 'Property Search',
                desc: 'Personalized search based on your needs, budget, and lifestyle.',
              },
              {
                icon: '💼',
                title: 'Investment Consulting',
                desc: 'Expert guidance on ROI, market trends, and portfolio diversification.',
              },
              {
                icon: '🤝',
                title: 'Negotiation Support',
                desc: 'Professional representation to get you the best deal.',
              },
              {
                icon: '📸',
                title: 'Property Marketing',
                desc: 'Premium photography, staging, and multi-channel marketing.',
              },
            ].map((service, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', color: darkBrown }}>
                  {service.title}
                </h3>
                <p style={{ color: '#5D4037', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '3rem',
              color: darkBrown,
            }}
          >
            Client Success Stories
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
                name: 'Alexandru Popa',
                role: 'First-time Buyer',
                text: 'UrbanNest made buying my first apartment stress-free. They handled everything professionally!',
              },
              {
                name: 'Diana Stanescu',
                role: 'Property Investor',
                text: 'The investment advice was spot-on. My property portfolio has grown significantly thanks to their team.',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                  textAlign: 'left',
                }}
              >
                <div style={{ color: brandColor, fontSize: '1.5rem', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: '#5D4037', lineHeight: 1.6, marginBottom: '1rem', fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </p>
                <div style={{ fontWeight: 700, color: darkBrown }}>{testimonial.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#999' }}>{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        style={{
          padding: '5rem 1.5rem',
          background: brandColor,
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
            Ready to Find Your Dream Property?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.95 }}>
            Contact our team today for a free consultation.
          </p>
          <Link
            href="/contact?project=urbannest-realty"
            style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              background: '#FFFFFF',
              color: brandColor,
              fontSize: '1.25rem',
              fontWeight: 700,
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            Schedule Consultation →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: darkBrown, color: '#FFFFFF', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏢</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>UrbanNest Realty</h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
            Calea Victoriei 155, Bucharest, 010073
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <a href="tel:+40212345678" style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}>
              📞 021 234 5678
            </a>
            {' | '}
            <a href="mailto:info@urbannest.ro" style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}>
              📧 info@urbannest.ro
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

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
