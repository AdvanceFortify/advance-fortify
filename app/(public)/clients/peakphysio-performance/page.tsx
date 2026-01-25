'use client';

export default function PeakPhysioPerformance() {
  return (
    <div style={{ background: '#ffffff', color: '#0f1419', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      {/* Navigation */}
      <nav
        style={{
          background: '#ffffff',
          borderBottom: '2px solid #0a5c3e',
          padding: '1rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', background: '#0a5c3e', borderRadius: '50%' }}></div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0a5c3e', letterSpacing: '-0.5px' }}>
              PEAKPHYSIO
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#programs" style={{ color: '#0f1419', fontWeight: 700, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Programs
            </a>
            <a href="#process" style={{ color: '#0f1419', fontWeight: 700, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Our Process
            </a>
            <a href="#team" style={{ color: '#0f1419', fontWeight: 700, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Team
            </a>
            <a href="#pricing" style={{ color: '#0f1419', fontWeight: 700, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Pricing
            </a>
            <a
              href="#booking"
              style={{
                background: '#0a5c3e',
                color: '#ffffff',
                padding: '0.75rem 1.75rem',
                borderRadius: '4px',
                fontWeight: 800,
                textDecoration: 'none',
                fontSize: '0.9375rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(10, 92, 62, 0.3)',
              }}
            >
              Book Session
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a5c3e 0%, #0e7d51 100%)',
          padding: '5rem 2rem',
          color: '#ffffff',
        }}
      >
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 900,
                  marginBottom: '1.5rem',
                  lineHeight: 1,
                  letterSpacing: '-2px',
                }}
              >
                Return Stronger.
                <br />
                Move Better.
              </h1>
              <p
                style={{
                  fontSize: '1.375rem',
                  marginBottom: '2.5rem',
                  lineHeight: 1.6,
                  opacity: 0.95,
                  fontWeight: 500,
                }}
              >
                Expert sports physiotherapy and performance training. Get back in the game faster and perform at your peak.
              </p>
              <a
                href="#booking"
                style={{
                  display: 'inline-block',
                  background: '#ffffff',
                  color: '#0a5c3e',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '4px',
                  fontWeight: 900,
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                Start Your Recovery
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Athlete training"
                loading="eager"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" style={{ padding: '6rem 2rem', background: '#f8faf9' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 900,
                marginBottom: '1rem',
                letterSpacing: '-1px',
              }}
            >
              Our Programs
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#4a5568', fontWeight: 500 }}>
              Tailored treatment plans for every athlete
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'Injury Recovery',
                desc: 'Comprehensive rehabilitation programs designed to accelerate healing and prevent re-injury.',
                icon: '💪',
                features: ['Manual Therapy', 'Progressive Loading', 'Movement Analysis'],
              },
              {
                name: 'Mobility & Flexibility',
                desc: 'Enhance range of motion, reduce stiffness, and improve functional movement patterns.',
                icon: '🤸',
                features: ['Stretching Protocols', 'Joint Mobilization', 'Flexibility Training'],
              },
              {
                name: 'Sports Performance',
                desc: 'Optimize athletic performance with targeted strength, conditioning, and injury prevention.',
                icon: '🏃',
                features: ['Performance Testing', 'Strength Training', 'Sport-Specific Drills'],
              },
            ].map((program, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  padding: '2.5rem',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{program.icon}</div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: '#0a5c3e' }}>
                  {program.name}
                </h3>
                <p style={{ fontSize: '1.0625rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 500 }}>
                  {program.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {program.features.map((feature, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#2d3748', fontWeight: 600 }}>
                      <span style={{ color: '#0a5c3e', fontSize: '1.25rem' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}
          >
            Athlete Success Stories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                name: 'Cristian Lungu',
                sport: 'Marathon Runner',
                text: 'After a serious knee injury, I thought my running career was over. PeakPhysio got me back to marathons in 4 months.',
              },
              {
                name: 'Ana Stoica',
                sport: 'Professional Volleyball',
                text: 'The team here understands athletes. Their performance program took my game to the next level.',
              },
              {
                name: 'Mihai Radu',
                sport: 'CrossFit Competitor',
                text: 'Recovered from a shoulder injury faster than expected. Their approach is evidence-based and effective.',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  background: '#f8faf9',
                  padding: '2.5rem',
                  borderRadius: '8px',
                  borderLeft: '4px solid #0a5c3e',
                }}
              >
                <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem', color: '#2d3748', fontWeight: 500 }}>
                  "{testimonial.text}"
                </p>
                <p style={{ fontWeight: 900, color: '#0a5c3e', fontSize: '1.125rem' }}>
                  {testimonial.name}
                </p>
                <p style={{ color: '#718096', fontWeight: 600, fontSize: '0.9375rem' }}>{testimonial.sport}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" style={{ padding: '6rem 2rem', background: '#0f1419', color: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}
          >
            Our Process
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive evaluation of your injury, movement patterns, and goals.' },
              { step: '02', title: 'Treatment Plan', desc: 'Customized program designed specifically for your condition and objectives.' },
              { step: '03', title: 'Active Recovery', desc: 'Hands-on treatment combined with progressive exercise and mobility work.' },
              { step: '04', title: 'Return to Sport', desc: 'Sport-specific training to ensure safe return and peak performance.' },
            ].map((phase, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '2rem',
                  alignItems: 'start',
                  paddingBottom: '3rem',
                  borderBottom: i < 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '4rem',
                    fontWeight: 900,
                    color: '#0a5c3e',
                    lineHeight: 1,
                  }}
                >
                  {phase.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                    {phase.title}
                  </h3>
                  <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7, fontWeight: 500 }}>
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: '#f8faf9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 900,
                marginBottom: '1rem',
                letterSpacing: '-1px',
              }}
            >
              Pricing Packages
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#4a5568', fontWeight: 500 }}>
              Flexible options to fit your needs
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'Single Session',
                price: '€85',
                features: ['60-minute assessment & treatment', 'Personalized exercise plan', 'Progress tracking'],
                cta: 'Book Session',
              },
              {
                name: 'Recovery Package',
                price: '€400',
                features: ['5 sessions', 'Comprehensive treatment plan', 'Email support', '10% savings'],
                cta: 'Get Started',
                popular: true,
              },
              {
                name: 'Performance Package',
                price: '€750',
                features: ['10 sessions', 'Full injury prevention program', 'Nutrition guidance', 'Priority booking'],
                cta: 'Optimize Performance',
              },
            ].map((tier, i) => (
              <div
                key={i}
                style={{
                  background: tier.popular ? '#0a5c3e' : '#ffffff',
                  color: tier.popular ? '#ffffff' : '#0f1419',
                  padding: '3rem 2rem',
                  borderRadius: '8px',
                  border: tier.popular ? 'none' : '2px solid #e2e8f0',
                  position: 'relative',
                  transform: tier.popular ? 'scale(1.05)' : 'none',
                  boxShadow: tier.popular ? '0 8px 32px rgba(10, 92, 62, 0.3)' : 'none',
                }}
              >
                {tier.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#ffffff',
                      color: '#0a5c3e',
                      padding: '0.5rem 1.5rem',
                      borderRadius: '20px',
                      fontWeight: 900,
                      fontSize: '0.875rem',
                      letterSpacing: '1px',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                  {tier.name}
                </h3>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem', lineHeight: 1 }}>
                  {tier.price}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {tier.features.map((feature, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}>
                      <span style={{ fontSize: '1.25rem' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  style={{
                    display: 'block',
                    background: tier.popular ? '#ffffff' : '#0a5c3e',
                    color: tier.popular ? '#0a5c3e' : '#ffffff',
                    padding: '1rem 2rem',
                    borderRadius: '4px',
                    fontWeight: 900,
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}
          >
            Our Specialists
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {[
              {
                name: 'Dr. Alina Negrescu',
                title: 'Lead Physiotherapist',
                creds: 'DPT, CSCS',
                img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
              },
              {
                name: 'Bogdan Marinescu',
                title: 'Sports Performance',
                creds: 'MSc, NSCA-CPT',
                img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
              },
            ].map((member, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  width={400}
                  height={400}
                  style={{
                    width: '220px',
                    height: '220px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    margin: '0 auto 1.5rem',
                    border: '4px solid #0a5c3e',
                  }}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>
                  {member.name}
                </h3>
                <p style={{ color: '#0a5c3e', fontWeight: 700, marginBottom: '0.25rem' }}>{member.title}</p>
                <p style={{ color: '#718096', fontWeight: 600, fontSize: '0.9375rem' }}>{member.creds}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" style={{ padding: '6rem 2rem', background: '#0a5c3e', color: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}
          >
            Book Your Appointment
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9, fontWeight: 500 }}>
            Take the first step toward recovery and peak performance.
          </p>
          <form
            style={{
              background: '#ffffff',
              padding: '3rem',
              borderRadius: '8px',
              color: '#0f1419',
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9375rem' }}>
                Full Name
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
                placeholder="Your name"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9375rem' }}>
                Email
              </label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
                placeholder="your@email.com"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9375rem' }}>
                Phone
              </label>
              <input
                type="tel"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
                placeholder="+40 7XX XXX XXX"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9375rem' }}>
                Program Interest
              </label>
              <select
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              >
                <option>Injury Recovery</option>
                <option>Mobility & Flexibility</option>
                <option>Sports Performance</option>
                <option>General Assessment</option>
              </select>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9375rem' }}>
                Preferred Date
              </label>
              <input
                type="date"
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 500,
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#0a5c3e',
                color: '#ffffff',
                padding: '1.125rem',
                borderRadius: '4px',
                fontWeight: 900,
                fontSize: '1.125rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(10, 92, 62, 0.3)',
              }}
            >
              Request Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f1419', color: '#ffffff', padding: '3rem 2rem 2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ width: '40px', height: '40px', background: '#0a5c3e', borderRadius: '50%' }}></div>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0a5c3e' }}>PEAKPHYSIO</div>
        </div>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem', fontWeight: 500 }}>
          Sports physiotherapy & performance optimization
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <a href="https://www.instagram.com/advancefortify/" target="_blank" rel="noopener noreferrer" style={{ color: '#0a5c3e', textDecoration: 'none', fontSize: '1.5rem' }}>
            📷
          </a>
          <a href="https://www.facebook.com/advancefortify" target="_blank" rel="noopener noreferrer" style={{ color: '#0a5c3e', textDecoration: 'none', fontSize: '1.5rem' }}>
            📘
          </a>
          <a href="https://www.linkedin.com/in/gabriel-lung-" target="_blank" rel="noopener noreferrer" style={{ color: '#0a5c3e', textDecoration: 'none', fontSize: '1.5rem' }}>
            💼
          </a>
        </div>
        <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} PeakPhysio Performance. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
