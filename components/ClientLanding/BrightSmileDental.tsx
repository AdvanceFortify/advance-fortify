'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BrightSmileDental() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const brandColor = '#64C8FF';
  const darkBlue = '#1A4D6D';

  return (
    <div style={{ background: '#FFFFFF', color: '#1A1A1A' }}>
      {/* Case Study Label */}
      <div
        style={{
          background: 'rgba(100, 200, 255, 0.1)',
          borderBottom: '1px solid rgba(100, 200, 255, 0.2)',
          padding: '0.75rem 1rem',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: brandColor,
          fontWeight: 600,
        }}
      >
        Case Study Preview — Client Work Sample
      </div>

      {/* Hero Section - Clean Medical Style */}
      <section
        style={{
          background: `linear-gradient(135deg, ${brandColor} 0%, #8CD8FF 100%)`,
          padding: '6rem 1.5rem 5rem',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              fontWeight: 300,
            }}
          >
            🦷
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 800,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            BrightSmile Dental Clinic
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: 500,
              opacity: 0.95,
            }}
          >
            Your Smile, Our Priority
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              marginBottom: '2.5rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
            }}
          >
            Modern dental care with a focus on patient comfort and comprehensive oral health solutions.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="#booking"
              style={{
                padding: '1rem 2.5rem',
                background: '#FFFFFF',
                color: darkBlue,
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
              }}
            >
              Book Appointment
            </a>
            <a
              href="tel:+40264123456"
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
                transition: 'all 0.3s ease',
              }}
            >
              📞 0264 123 456
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section
        style={{
          background: '#F8FCFF',
          padding: '2rem 1.5rem',
          borderBottom: '1px solid rgba(100, 200, 255, 0.15)',
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
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Location</div>
            <div style={{ fontSize: '0.9375rem', color: '#666' }}>
              Strada Avram Iancu 47, Cluj-Napoca
            </div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🕐</div>
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Opening Hours</div>
            <div style={{ fontSize: '0.9375rem', color: '#666' }}>Mon-Fri: 9AM - 7PM, Sat: 10AM - 4PM</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⭐</div>
            <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Patient Rating</div>
            <div style={{ fontSize: '0.9375rem', color: '#666' }}>4.9/5 (238 reviews)</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkBlue,
            }}
          >
            Our Dental Services
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
                icon: '🦷',
                title: 'General Dentistry',
                desc: 'Comprehensive dental exams, cleanings, fillings, and preventive care.',
              },
              {
                icon: '✨',
                title: 'Cosmetic Treatments',
                desc: 'Teeth whitening, veneers, and smile makeovers.',
              },
              {
                icon: '🔬',
                title: 'Advanced Technology',
                desc: 'Digital X-rays, 3D imaging, and painless procedures.',
              },
              {
                icon: '🚨',
                title: 'Emergency Care',
                desc: 'Same-day appointments for urgent dental issues.',
              },
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#F8FCFF',
                  borderRadius: '16px',
                  border: '2px solid rgba(100, 200, 255, 0.15)',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3
                  style={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: darkBlue,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8FCFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkBlue,
            }}
          >
            What Our Patients Say
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
                name: 'Maria Popescu',
                text: 'Best dental experience ever! The staff is incredibly caring and the technology they use is impressive. No more dental anxiety!',
                rating: 5,
              },
              {
                name: 'Andrei Ionescu',
                text: 'Finally found a dentist I can trust. Dr. Elena is professional and gentle. Highly recommend for families.',
                rating: 5,
              },
              {
                name: 'Carmen Dumitrescu',
                text: 'The cosmetic work they did on my smile exceeded all expectations. Thank you BrightSmile team!',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div style={{ color: brandColor, fontSize: '1.25rem', marginBottom: '1rem' }}>
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#333',
                    marginBottom: '1rem',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.text}"
                </p>
                <div style={{ fontWeight: 600, color: darkBlue }}>— {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              textAlign: 'center',
              marginBottom: '1rem',
              color: darkBlue,
            }}
          >
            Treatment Packages
          </h2>
          <p style={{ textAlign: 'center', color: '#666', fontSize: '1.125rem', marginBottom: '3rem' }}>
            Transparent pricing with no hidden fees
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { name: 'Routine Checkup', price: '150 RON', includes: ['Full examination', 'Cleaning', 'X-rays'] },
              {
                name: 'Teeth Whitening',
                price: '800 RON',
                includes: ['Professional whitening', 'Take-home kit', 'Follow-up visit'],
              },
              {
                name: 'Smile Makeover',
                price: 'From 3500 RON',
                includes: ['Consultation', 'Custom plan', 'Veneers/implants'],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#F8FCFF',
                  border: `2px solid ${i === 1 ? brandColor : 'rgba(100, 200, 255, 0.15)'}`,
                  borderRadius: '16px',
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: darkBlue }}>
                  {pkg.name}
                </h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: brandColor, marginBottom: '1.5rem' }}>
                  {pkg.price}
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {pkg.includes.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        padding: '0.5rem 0',
                        color: '#555',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: brandColor }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8FCFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkBlue,
            }}
          >
            Frequently Asked Questions
          </h2>
          {[
            {
              q: 'Do you accept insurance?',
              a: 'Yes, we work with most major insurance providers in Romania. Contact us for specific coverage details.',
            },
              {
                q: 'Is the first consultation free?',
                a: "Yes! Your first consultation is complimentary. We'll assess your dental health and discuss treatment options.",
              },
            {
              q: 'Do you offer emergency appointments?',
              a: 'Absolutely. We reserve slots daily for urgent dental issues. Call us immediately if you have a dental emergency.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept cash, card payments, and offer flexible payment plans for major treatments.',
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                marginBottom: '1rem',
                background: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(100, 200, 255, 0.15)',
              }}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  background: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: darkBlue,
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {faq.q}
                <span style={{ color: brandColor, fontSize: '1.5rem' }}>
                  {openFAQ === i ? '−' : '+'}
                </span>
              </button>
              {openFAQ === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', color: '#555', lineHeight: 1.6 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkBlue,
            }}
          >
            Our Modern Facility
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {['Reception Area', 'Treatment Room', 'Waiting Lounge', 'Equipment'].map((label, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: '4/3',
                  background: `linear-gradient(135deg, rgba(100, 200, 255, 0.1) 0%, rgba(140, 220, 255, 0.05) 100%)`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: brandColor,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  border: '2px dashed rgba(100, 200, 255, 0.3)',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="booking"
        style={{
          padding: '5rem 1.5rem',
          background: `linear-gradient(135deg, ${brandColor} 0%, #8CD8FF 100%)`,
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              marginBottom: '1rem',
            }}
          >
            Ready for a Healthier Smile?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            Book your appointment today and experience the BrightSmile difference.
          </p>
          <Link
            href="/contact?project=brightsmile-dental"
            style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              background: '#FFFFFF',
              color: darkBlue,
              fontSize: '1.25rem',
              fontWeight: 700,
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            Schedule Appointment →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: darkBlue,
          color: '#FFFFFF',
          padding: '3rem 1.5rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🦷</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            BrightSmile Dental Clinic
          </h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
            Strada Avram Iancu 47, Cluj-Napoca, 400000
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <a
              href="tel:+40264123456"
              style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}
            >
              📞 0264 123 456
            </a>
            {' | '}
            <a
              href="mailto:contact@brightsmile.ro"
              style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}
            >
              📧 contact@brightsmile.ro
            </a>
          </div>
          <Link
            href="/portfolio/real"
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}
          >
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
