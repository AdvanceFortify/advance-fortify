'use client';

import Link from 'next/link';
import { useState } from 'react';

// Fixed apostrophe issues
export default function BrightSmileDental() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ background: '#ffffff', color: '#2c3e50', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav
        style={{
          background: 'rgba(255, 255, 255, 0.98)',
          borderBottom: '1px solid #e8f4f8',
          padding: '1rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#17a2b8', letterSpacing: '-0.5px' }}>
            BrightSmile
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#services" style={{ color: '#546e7a', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Services
            </a>
            <a href="#doctors" style={{ color: '#546e7a', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Our Doctors
            </a>
            <a href="#testimonials" style={{ color: '#546e7a', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Reviews
            </a>
            <a href="#booking" style={{ color: '#546e7a', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Contact
            </a>
            <a
              href="#booking"
              style={{
                background: '#17a2b8',
                color: '#ffffff',
                padding: '0.625rem 1.5rem',
                borderRadius: '30px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9375rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(23, 162, 184, 0.2)',
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #e8f4f8 0%, #ffffff 100%)',
          padding: '6rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#2c3e50',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Modern Dentistry.
            <br />
            <span style={{ color: '#17a2b8' }}>Gentle Care.</span>
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#546e7a',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
            }}
          >
            State-of-the-art dental treatments in a comfortable, welcoming environment. Your smile is our priority.
          </p>
          <a
            href="#booking"
            style={{
              display: 'inline-block',
              background: '#17a2b8',
              color: '#ffffff',
              padding: '1rem 2.5rem',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(23, 162, 184, 0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            Schedule Appointment
          </a>
        </div>
      </section>

      {/* Before/After Section */}
      <section style={{ padding: '5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: '#2c3e50',
            }}
          >
            Real Results, Real Smiles
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div
              style={{
                background: '#f8fbfc',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80"
                alt="Dental whitening"
                loading="lazy"
                width={600}
                height={400}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#17a2b8' }}>
                  Professional Whitening
                </h3>
                <p style={{ color: '#546e7a', lineHeight: 1.6 }}>
                  Dramatically brighter smile in just one visit with our advanced whitening technology.
                </p>
              </div>
            </div>
            <div
              style={{
                background: '#f8fbfc',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"
                alt="Invisalign treatment"
                loading="lazy"
                width={600}
                height={400}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#17a2b8' }}>
                  Invisalign
                </h3>
                <p style={{ color: '#546e7a', lineHeight: 1.6 }}>
                  Straighten your teeth discreetly with clear aligners. No metal brackets required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" style={{ padding: '5rem 1.5rem', background: '#f8fbfc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: '#2c3e50',
            }}
          >
            Our Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Dental Implants', desc: 'Permanent solution for missing teeth with natural look and feel.', icon: '🦷' },
              { name: 'Teeth Whitening', desc: 'Professional whitening treatments for a brighter, confident smile.', icon: '✨' },
              { name: 'Invisalign', desc: 'Clear aligners for discreet orthodontic treatment.', icon: '😊' },
              { name: 'Emergency Care', desc: '24/7 emergency dental services when you need us most.', icon: '🚨' },
              { name: 'Preventive Care', desc: 'Regular checkups and cleanings to maintain oral health.', icon: '🛡️' },
              { name: 'Cosmetic Dentistry', desc: 'Enhance your smile with veneers, bonding, and more.', icon: '💎' },
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e8f4f8',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#2c3e50' }}>
                  {service.name}
                </h3>
                <p style={{ color: '#546e7a', lineHeight: 1.6, fontSize: '0.9375rem' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Doctors */}
      <section id="doctors" style={{ padding: '5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: '#2c3e50',
            }}
          >
            Meet Our Doctors
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
                alt="Dr. Elena Popescu"
                loading="lazy"
                width={300}
                height={300}
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 1.5rem',
                  border: '4px solid #e8f4f8',
                }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#2c3e50' }}>
                Dr. Elena Popescu
              </h3>
              <p style={{ color: '#17a2b8', fontWeight: 600, marginBottom: '0.75rem' }}>Lead Dentist</p>
              <p style={{ color: '#546e7a', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                15+ years experience in cosmetic and restorative dentistry. Specialized in Invisalign and implants.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
                alt="Dr. Andrei Ionescu"
                loading="lazy"
                width={300}
                height={300}
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 1.5rem',
                  border: '4px solid #e8f4f8',
                }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#2c3e50' }}>
                Dr. Andrei Ionescu
              </h3>
              <p style={{ color: '#17a2b8', fontWeight: 600, marginBottom: '0.75rem' }}>Oral Surgeon</p>
              <p style={{ color: '#546e7a', lineHeight: 1.6, fontSize: '0.9375rem' }}>
                Expert in oral surgery and dental implants with 12+ years of practice. Gentle approach to complex procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '5rem 1.5rem', background: '#f8fbfc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: '#2c3e50',
            }}
          >
            What Our Patients Say
          </h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {[
              {
                name: 'Maria Vladescu',
                text: 'I was terrified of dentists, but the team at BrightSmile made me feel so comfortable. My smile transformation is incredible!',
                rating: 5,
              },
              {
                name: 'Alexandru Matei',
                text: 'Professional, modern, and painless. Best dental experience I have ever had. Highly recommend for anyone needing implants.',
                rating: 5,
              },
              {
                name: 'Ioana Dragomir',
                text: 'The Invisalign treatment exceeded my expectations. Clear communication every step of the way.',
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #e8f4f8',
                }}
              >
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} style={{ color: '#fbbf24', fontSize: '1.25rem' }}>
                      ★
                    </span>
                  ))}
                </div>
                <p style={{ color: '#546e7a', lineHeight: 1.7, marginBottom: '1rem', fontSize: '1rem', fontStyle: 'italic' }}>
                  "{review.text}"
                </p>
                <p style={{ fontWeight: 700, color: '#2c3e50' }}>— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" style={{ padding: '5rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: '#2c3e50',
            }}
          >
            Book Your Appointment
          </h2>
          <p style={{ textAlign: 'center', color: '#546e7a', marginBottom: '3rem', fontSize: '1.125rem' }}>
            Take the first step towards a healthier, brighter smile.
          </p>
          <form
            style={{
              background: '#f8fbfc',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid #e8f4f8',
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2c3e50' }}>
                Full Name
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid #d1e7ed',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: '#ffffff',
                }}
                placeholder="Your name"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2c3e50' }}>
                Email
              </label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid #d1e7ed',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: '#ffffff',
                }}
                placeholder="your@email.com"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2c3e50' }}>
                Phone
              </label>
              <input
                type="tel"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid #d1e7ed',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: '#ffffff',
                }}
                placeholder="+40 7XX XXX XXX"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2c3e50' }}>
                Service
              </label>
              <select
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid #d1e7ed',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: '#ffffff',
                }}
              >
                <option>General Checkup</option>
                <option>Teeth Whitening</option>
                <option>Dental Implants</option>
                <option>Invisalign</option>
                <option>Emergency</option>
              </select>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2c3e50' }}>
                Preferred Date
              </label>
              <input
                type="date"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid #d1e7ed',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: '#ffffff',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#17a2b8',
                color: '#ffffff',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1.125rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(23, 162, 184, 0.3)',
              }}
            >
              Request Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section style={{ padding: '5rem 1.5rem', background: '#f8fbfc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: '#2c3e50' }}>
                Visit Our Clinic
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 600, color: '#17a2b8', marginBottom: '0.5rem' }}>Address</p>
                <p style={{ color: '#546e7a', lineHeight: 1.6 }}>
                  Strada Avram Iancu 23
                  <br />
                  Cluj-Napoca, 400000
                  <br />
                  Romania
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 600, color: '#17a2b8', marginBottom: '0.5rem' }}>Hours</p>
                <p style={{ color: '#546e7a', lineHeight: 1.6 }}>
                  Monday - Friday: 9:00 AM - 7:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed (Emergency only)
                </p>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#17a2b8', marginBottom: '0.5rem' }}>Contact</p>
                <p style={{ color: '#546e7a', lineHeight: 1.6 }}>
                  Phone: +40 264 123 456
                  <br />
                  Email: contact@brightsmile.ro
                </p>
              </div>
            </div>
            <div
              style={{
                background: '#e8f4f8',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p style={{ fontSize: '4rem' }}>📍</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: '#2c3e50',
          color: '#ffffff',
          padding: '3rem 1.5rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#17a2b8' }}>BrightSmile</div>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
            Modern dentistry. Gentle care. Beautiful smiles.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <a href="#services" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Services
            </a>
            <a href="#doctors" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Our Doctors
            </a>
            <a href="#booking" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Book Now
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <a href="https://www.instagram.com/advancefortify/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '1.5rem' }}>
              📷
            </a>
            <a href="https://www.facebook.com/advancefortify" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '1.5rem' }}>
              📘
            </a>
            <a href="https://www.linkedin.com/in/gabriel-lung-" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '1.5rem' }}>
              💼
            </a>
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
