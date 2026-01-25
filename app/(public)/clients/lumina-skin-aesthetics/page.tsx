'use client';

import { useState } from 'react';

export default function LuminaSkinAesthetics() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <div style={{ background: '#fdfbf7', color: '#3d3935', minHeight: '100vh', fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
      {/* Navigation */}
      <nav
        style={{
          background: 'rgba(253, 251, 247, 0.98)',
          borderBottom: '1px solid #f0e6dc',
          padding: '1.5rem 0',
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
          <div style={{ fontSize: '1.75rem', fontWeight: 300, color: '#d4a5a5', letterSpacing: '2px', fontFamily: '"Cormorant Garamond", serif' }}>
            Lumina
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', fontFamily: 'system-ui, sans-serif' }}>
            <a href="#treatments" style={{ color: '#6b5f5a', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '0.5px' }}>
              Treatments
            </a>
            <a href="#gallery" style={{ color: '#6b5f5a', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '0.5px' }}>
              Gallery
            </a>
            <a href="#specialist" style={{ color: '#6b5f5a', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '0.5px' }}>
              Our Specialist
            </a>
            <a href="#pricing" style={{ color: '#6b5f5a', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem', letterSpacing: '0.5px' }}>
              Pricing
            </a>
            <a
              href="#booking"
              style={{
                background: '#d4a5a5',
                color: '#ffffff',
                padding: '0.75rem 1.75rem',
                borderRadius: '30px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9375rem',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 12px rgba(212, 165, 165, 0.3)',
              }}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #fdfbf7 0%, #f9f3ed 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              fontWeight: 300,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              letterSpacing: '1px',
              color: '#3d3935',
            }}
          >
            Reveal Your
            <br />
            <span style={{ fontWeight: 400, color: '#d4a5a5' }}>Natural Radiance</span>
          </h1>
          <p
            style={{
              fontSize: '1.375rem',
              color: '#6b5f5a',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
              fontWeight: 300,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Premium aesthetic treatments in an elegant, tranquil setting. Where science meets artistry.
          </p>
          <a
            href="#booking"
            style={{
              display: 'inline-block',
              background: '#d4a5a5',
              color: '#ffffff',
              padding: '1.125rem 2.5rem',
              borderRadius: '30px',
              fontWeight: 600,
              fontSize: '1.0625rem',
              textDecoration: 'none',
              letterSpacing: '0.5px',
              fontFamily: 'system-ui, sans-serif',
              boxShadow: '0 4px 16px rgba(212, 165, 165, 0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            Book Your Consultation
          </a>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              textAlign: 'center',
              marginBottom: '3rem',
              letterSpacing: '1px',
            }}
          >
            Transformations
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80"
                alt="Skin treatment result"
                loading="lazy"
                width={600}
                height={400}
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
              <img
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80"
                alt="Facial treatment"
                loading="lazy"
                width={600}
                height={400}
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" style={{ padding: '6rem 2rem', background: '#f9f3ed' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                marginBottom: '1rem',
                letterSpacing: '1px',
              }}
            >
              Our Treatments
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b5f5a', fontWeight: 300, fontFamily: 'system-ui, sans-serif' }}>
              Personalized aesthetic solutions for every skin concern
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'Anti-Aging Facials',
                desc: 'Advanced treatments to reduce fine lines, restore elasticity, and rejuvenate skin.',
                icon: '✨',
              },
              {
                name: 'Chemical Peels',
                desc: 'Professional-grade peels for improved texture, tone, and radiance.',
                icon: '🌸',
              },
              {
                name: 'Microneedling',
                desc: 'Collagen induction therapy for smoother, firmer, and more youthful skin.',
                icon: '💎',
              },
              {
                name: 'Injectable Treatments',
                desc: 'Dermal fillers and neuromodulators for natural-looking enhancement.',
                icon: '💉',
              },
              {
                name: 'Laser Treatments',
                desc: 'IPL and laser therapy for pigmentation, vessels, and skin resurfacing.',
                icon: '⚡',
              },
              {
                name: 'HydraFacial',
                desc: 'Deep cleansing, extraction, and hydration for glowing, healthy skin.',
                icon: '💧',
              },
            ].map((treatment, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  padding: '2.5rem 2rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0e6dc',
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{treatment.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem', letterSpacing: '0.5px', color: '#3d3935' }}>
                  {treatment.name}
                </h3>
                <p style={{ color: '#6b5f5a', lineHeight: 1.7, fontSize: '1rem', fontWeight: 300, fontFamily: 'system-ui, sans-serif' }}>
                  {treatment.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Bio */}
      <section id="specialist" style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
                alt="Dr. Ioana Marinescu"
                loading="lazy"
                width={400}
                height={400}
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto',
                  border: '6px solid #f0e6dc',
                }}
              />
            </div>
            <div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  marginBottom: '1rem',
                  letterSpacing: '1px',
                }}
              >
                Meet Dr. Ioana Marinescu
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#d4a5a5', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'system-ui, sans-serif' }}>
                Aesthetic Medicine Specialist
              </p>
              <p style={{ fontSize: '1.125rem', color: '#6b5f5a', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300, fontFamily: 'system-ui, sans-serif' }}>
                With over 12 years of experience in aesthetic medicine, Dr. Marinescu combines advanced techniques with an artistic eye to deliver natural, beautiful results.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#6b5f5a', lineHeight: 1.8, fontWeight: 300, fontFamily: 'system-ui, sans-serif' }}>
                Board-certified and internationally trained, she specializes in non-surgical facial rejuvenation and advanced skincare treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Accordion */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: '#f9f3ed' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              textAlign: 'center',
              marginBottom: '3rem',
              letterSpacing: '1px',
            }}
          >
            Treatment Pricing
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { name: 'Anti-Aging Facial', price: '€120 - €180', duration: '60-90 min' },
              { name: 'Chemical Peel', price: '€150 - €250', duration: '45-60 min' },
              { name: 'Microneedling', price: '€200 - €350', duration: '60 min' },
              { name: 'Dermal Fillers', price: '€400 - €700', duration: '30-45 min' },
              { name: 'Laser Treatment', price: '€180 - €350', duration: '30-60 min' },
              { name: 'HydraFacial', price: '€160', duration: '60 min' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #f0e6dc',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 2rem',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.25rem', color: '#3d3935' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#6b5f5a', fontFamily: 'system-ui, sans-serif', fontWeight: 300 }}>
                      {item.duration}
                    </p>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#d4a5a5', fontFamily: 'system-ui, sans-serif' }}>
                    {item.price}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section id="gallery" style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 300,
                marginBottom: '1rem',
                letterSpacing: '1px',
              }}
            >
              Follow Our Journey
            </h2>
            <a
              href="https://www.instagram.com/advancefortify/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.125rem', color: '#6b5f5a', fontWeight: 300, fontFamily: 'system-ui, sans-serif', textDecoration: 'none' }}
            >
              @advancefortify
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80',
              'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80',
              'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
              'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80',
              'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80',
              'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=400&q=80',
            ].map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  width={400}
                  height={400}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" style={{ padding: '6rem 2rem', background: '#d4a5a5', color: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              marginBottom: '1.5rem',
              letterSpacing: '1px',
            }}
          >
            Book Your Consultation
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', fontWeight: 300, opacity: 0.95, fontFamily: 'system-ui, sans-serif' }}>
            Begin your journey to radiant skin. Complimentary skin analysis with every consultation.
          </p>
          <form
            style={{
              background: '#ffffff',
              padding: '3rem',
              borderRadius: '20px',
              color: '#3d3935',
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid #f0e6dc',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
                placeholder="Full Name"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid #f0e6dc',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
                placeholder="Email"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="tel"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid #f0e6dc',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
                placeholder="Phone Number"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <select
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid #f0e6dc',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                <option>Treatment Interest</option>
                <option>Anti-Aging Facial</option>
                <option>Chemical Peel</option>
                <option>Microneedling</option>
                <option>Injectable Treatments</option>
                <option>Laser Treatment</option>
                <option>HydraFacial</option>
                <option>General Consultation</option>
              </select>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <input
                type="date"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid #f0e6dc',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontFamily: 'system-ui, sans-serif',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#d4a5a5',
                color: '#ffffff',
                padding: '1.125rem',
                borderRadius: '30px',
                border: 'none',
                fontWeight: 600,
                fontSize: '1.125rem',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                fontFamily: 'system-ui, sans-serif',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
              }}
            >
              Request Consultation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#3d3935', color: '#f0e6dc', padding: '4rem 2rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1rem', color: '#d4a5a5', letterSpacing: '2px' }}>
            Lumina
          </div>
          <p style={{ marginBottom: '2rem', fontWeight: 300, fontFamily: 'system-ui, sans-serif' }}>
            Skin & Aesthetics Clinic
          </p>
          <div style={{ marginBottom: '2rem', fontFamily: 'system-ui, sans-serif', fontWeight: 300 }}>
            <p>Strada Nicolae Bălcescu 15, București</p>
            <p>Phone: +40 21 456 7890 | Email: contact@luminaskin.ro</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <a href="https://www.instagram.com/advancefortify/" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a5a5', textDecoration: 'none', fontSize: '1.5rem' }}>
              📷
            </a>
            <a href="https://www.facebook.com/advancefortify" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a5a5', textDecoration: 'none', fontSize: '1.5rem' }}>
              📘
            </a>
            <a href="https://www.linkedin.com/in/gabriel-lung-" target="_blank" rel="noopener noreferrer" style={{ color: '#d4a5a5', textDecoration: 'none', fontSize: '1.5rem' }}>
              💼
            </a>
          </div>
          <p style={{ fontSize: '0.875rem', opacity: 0.6, fontFamily: 'system-ui, sans-serif' }}>
            © {new Date().getFullYear()} Lumina Skin & Aesthetics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
