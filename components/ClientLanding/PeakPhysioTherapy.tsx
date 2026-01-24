'use client';

import Link from 'next/link';

export default function PeakPhysioTherapy() {
  const brandColor = '#78DC96';
  const darkGreen = '#1B4D2F';

  return (
    <div style={{ background: '#F5FBF7', color: '#1A3A2A' }}>
      {/* Case Study Label */}
      <div
        style={{
          background: 'rgba(120, 220, 150, 0.1)',
          borderBottom: '1px solid rgba(120, 220, 150, 0.2)',
          padding: '0.75rem 1rem',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: brandColor,
          fontWeight: 600,
        }}
      >
        Case Study Preview — Client Work Sample
      </div>

      {/* Hero - Editorial Style */}
      <section
        style={{
          padding: '8rem 1.5rem 6rem',
          background: '#FFFFFF',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(120, 220, 150, 0.15)',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: brandColor,
              marginBottom: '2rem',
            }}
          >
            EXPERT PHYSIOTHERAPY & REHABILITATION
          </div>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: darkGreen,
              letterSpacing: '-0.02em',
            }}
          >
            Move Better,
            <br />
            Feel Better
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              color: '#4A6A5A',
              marginBottom: '3rem',
              lineHeight: 1.6,
              maxWidth: '700px',
            }}
          >
            Professional physiotherapy services for sports injuries, chronic pain, and post-surgery recovery in Timișoara.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#booking"
              style={{
                padding: '1.125rem 2.5rem',
                background: brandColor,
                color: '#FFFFFF',
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(120, 220, 150, 0.3)',
              }}
            >
              Book Session
            </a>
            <a
              href="tel:+40256789012"
              style={{
                padding: '1.125rem 2.5rem',
                background: 'transparent',
                color: darkGreen,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: '12px',
                textDecoration: 'none',
                border: `2px solid ${darkGreen}`,
              }}
            >
              📞 0256 789 012
            </a>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section style={{ padding: '0 1.5rem 4rem' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            { icon: '📍', label: 'Address', value: 'Bulevardul Revoluției 5, Timișoara' },
            { icon: '🕐', label: 'Hours', value: 'Mon-Fri: 8AM-8PM, Sat: 9AM-2PM' },
            { icon: '💳', label: 'Insurance', value: 'We accept all major providers' },
          ].map((info, i) => (
            <div
              key={i}
              style={{
                padding: '2rem',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '2px solid rgba(120, 220, 150, 0.2)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{info.icon}</div>
              <div style={{ fontSize: '0.875rem', color: '#999', marginBottom: '0.5rem', fontWeight: 600 }}>
                {info.label}
              </div>
              <div style={{ fontSize: '1rem', color: darkGreen, fontWeight: 600 }}>{info.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              color: darkGreen,
            }}
          >
            Our Treatment Programs
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4A6A5A', marginBottom: '3rem' }}>
            Evidence-based therapies tailored to your recovery goals
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
                icon: '⚽',
                title: 'Sports Rehabilitation',
                desc: 'Get back in the game with specialized treatment for athletes and active individuals.',
                price: 'From 150 RON',
              },
              {
                icon: '💆',
                title: 'Pain Management',
                desc: 'Relief from chronic pain, back issues, and joint conditions through targeted therapy.',
                price: 'From 120 RON',
              },
              {
                icon: '🩺',
                title: 'Post-Surgery Recovery',
                desc: 'Comprehensive rehabilitation programs to restore strength and mobility.',
                price: 'From 180 RON',
              },
              {
                icon: '🏃',
                title: 'Preventive Care',
                desc: 'Injury prevention, posture correction, and wellness assessments.',
                price: 'From 100 RON',
              },
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem',
                  background: '#F5FBF7',
                  borderRadius: '16px',
                  border: '2px solid rgba(120, 220, 150, 0.2)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: darkGreen }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#4A6A5A', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {service.desc}
                </p>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: brandColor }}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section style={{ padding: '5rem 1.5rem', background: '#F5FBF7' }}>
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
            How It Works
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                desc: 'Comprehensive evaluation of your condition, movement patterns, and pain points.',
              },
              {
                step: '02',
                title: 'Personalized Plan',
                desc: 'Custom treatment plan designed specifically for your recovery goals.',
              },
              {
                step: '03',
                title: 'Active Treatment',
                desc: 'Hands-on therapy sessions combined with guided exercises and education.',
              },
              {
                step: '04',
                title: 'Progress Tracking',
                desc: 'Regular assessments to measure improvements and adjust treatment as needed.',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '2rem',
                  alignItems: 'center',
                  padding: '2rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${brandColor} 0%, #8CE6AA 100%)`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: darkGreen }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#4A6A5A', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists */}
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
            Meet Our Therapists
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
                name: 'Dr. Ana Marinescu',
                role: 'Lead Physiotherapist',
                credentials: '15+ years experience, Sports Medicine Specialist',
              },
              {
                name: 'Mihai Popescu',
                role: 'Senior Therapist',
                credentials: 'Orthopedic Rehabilitation Expert',
              },
              {
                name: 'Elena Dumitru',
                role: 'Physiotherapist',
                credentials: 'Pain Management & Manual Therapy',
              },
            ].map((therapist, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#F5FBF7',
                  borderRadius: '16px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(135deg, ${brandColor} 0%, #8CE6AA 100%)`,
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                  }}
                >
                  👨‍⚕️
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: darkGreen }}>
                  {therapist.name}
                </h3>
                <div style={{ fontSize: '1rem', color: brandColor, fontWeight: 600, marginBottom: '0.5rem' }}>
                  {therapist.role}
                </div>
                <p style={{ fontSize: '0.9375rem', color: '#4A6A5A' }}>{therapist.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 1.5rem', background: '#F5FBF7' }}>
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
            Patient Success Stories
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
                name: 'Cristina Vasilescu',
                condition: 'Chronic Back Pain',
                text: "After 3 months of treatment, I'm pain-free and back to running. The team at PeakPhysio is amazing!",
              },
              {
                name: 'Radu Constantinescu',
                condition: 'Sports Injury',
                text: 'Professional care that got me back on the field in record time. Highly recommend!',
              },
              {
                name: 'Ioana Mihailescu',
                condition: 'Post-Surgery Recovery',
                text: 'The personalized treatment plan exceeded my expectations. I recovered faster than my doctor predicted.',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div style={{ color: brandColor, fontSize: '1.5rem', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
                <p
                  style={{
                    color: '#4A6A5A',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  "{testimonial.text}"
                </p>
                <div style={{ fontWeight: 700, color: darkGreen, marginBottom: '0.25rem' }}>
                  {testimonial.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#999' }}>{testimonial.condition}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkGreen,
            }}
          >
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                q: 'Do I need a referral?',
                a: 'No referral needed! You can book directly with us for most treatments.',
              },
              {
                q: 'How long are sessions?',
                a: 'Standard sessions are 45-60 minutes, customized to your treatment plan.',
              },
              {
                q: 'Do you accept insurance?',
                a: 'Yes, we work with all major health insurance providers in Romania.',
              },
              {
                q: 'How many sessions will I need?',
                a: "Treatment length varies by condition. We'll provide an estimate after your initial assessment.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: '#F5FBF7',
                  borderRadius: '16px',
                  border: '2px solid rgba(120, 220, 150, 0.2)',
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: darkGreen }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#4A6A5A', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="booking"
        style={{
          padding: '5rem 1.5rem',
          background: `linear-gradient(135deg, ${brandColor} 0%, #8CE6AA 100%)`,
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
            Start Your Recovery Journey
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.95 }}>
            Book your initial assessment and take the first step toward pain-free movement.
          </p>
          <Link
            href="/contact?project=peakphysio-therapy"
            style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              background: '#FFFFFF',
              color: darkGreen,
              fontSize: '1.25rem',
              fontWeight: 700,
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
            }}
          >
            Book Appointment →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: darkGreen, color: '#FFFFFF', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏃</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>PeakPhysio Therapy</h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
            Bulevardul Revoluției 5, Timișoara, 300054
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <a href="tel:+40256789012" style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}>
              📞 0256 789 012
            </a>
            {' | '}
            <a
              href="mailto:contact@peakphysio.ro"
              style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}
            >
              📧 contact@peakphysio.ro
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
