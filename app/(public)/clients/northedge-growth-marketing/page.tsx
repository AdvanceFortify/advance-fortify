'use client';

export default function NorthEdgeGrowthMarketing() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)', color: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <nav
        style={{
          background: 'rgba(15, 15, 35, 0.95)',
          borderBottom: '1px solid rgba(124, 58, 237, 0.3)',
          padding: '1.25rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
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
          <div style={{ fontSize: '1.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.5px' }}>
            NORTHEDGE
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#services" style={{ color: '#e0e7ff', fontWeight: 600, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Services
            </a>
            <a href="#cases" style={{ color: '#e0e7ff', fontWeight: 600, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Case Studies
            </a>
            <a href="#process" style={{ color: '#e0e7ff', fontWeight: 600, textDecoration: 'none', fontSize: '0.9375rem' }}>
              Process
            </a>
            <a
              href="#contact"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
                color: '#ffffff',
                padding: '0.75rem 1.75rem',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.9375rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                fontWeight: 900,
                marginBottom: '1.5rem',
                lineHeight: 1,
                letterSpacing: '-3px',
                background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Growth That
              <br />
              Scales
            </h1>
            <p
              style={{
                fontSize: '1.5rem',
                color: '#c7d2fe',
                marginBottom: '3rem',
                maxWidth: '700px',
                margin: '0 auto 3rem',
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              We turn marketing spend into measurable revenue. Data-driven strategies, performance optimization, and real results.
            </p>
            <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', marginTop: '4rem' }}>
              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  3.2x
                </div>
                <p style={{ color: '#a5b4fc', fontWeight: 600, fontSize: '1rem', marginTop: '0.5rem' }}>Average ROAS</p>
              </div>
              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  €4.2M
                </div>
                <p style={{ color: '#a5b4fc', fontWeight: 600, fontSize: '1rem', marginTop: '0.5rem' }}>Revenue Generated</p>
              </div>
              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  42+
                </div>
                <p style={{ color: '#a5b4fc', fontWeight: 600, fontSize: '1rem', marginTop: '0.5rem' }}>Clients Scaled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" style={{ padding: '6rem 2rem', background: 'rgba(0, 0, 0, 0.3)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}
          >
            Case Studies
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                client: 'TechFlow SaaS',
                industry: 'B2B Software',
                results: ['280% increase in qualified leads', '€850K revenue in 6 months', '45% reduction in CAC'],
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
              },
              {
                client: 'FitGear Apparel',
                industry: 'E-commerce',
                results: ['4.1x ROAS on paid ads', '320% growth in online sales', '180K new customers'],
                img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
              },
              {
                client: 'UrbanHome Realty',
                industry: 'Real Estate',
                results: ['150+ qualified buyer leads/month', '€2.1M in closed deals', '68% conversion rate increase'],
                img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
              },
            ].map((study, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <img
                  src={study.img}
                  alt={study.client}
                  loading="lazy"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '0.875rem', color: '#06b6d4', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    {study.industry}
                  </p>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem' }}>
                    {study.client}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {study.results.map((result, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#c7d2fe', fontWeight: 600 }}>
                        <span style={{ color: '#7c3aed', fontSize: '1.25rem' }}>▸</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '4rem',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}
          >
            Our Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'SEO & Content',
                desc: 'Dominate search rankings with data-driven SEO strategies and high-converting content.',
                icon: '🔍',
              },
              {
                name: 'Paid Advertising',
                desc: 'Google Ads, Meta, LinkedIn campaigns optimized for maximum ROI and scale.',
                icon: '🎯',
              },
              {
                name: 'Landing Pages',
                desc: 'High-converting landing pages designed, built, and optimized for performance.',
                icon: '🚀',
              },
              {
                name: 'Conversion Optimization',
                desc: 'A/B testing, funnel analysis, and UX improvements to maximize conversions.',
                icon: '📊',
              },
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>
                  {service.name}
                </h3>
                <p style={{ color: '#c7d2fe', lineHeight: 1.7, fontSize: '1.0625rem', fontWeight: 500 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ padding: '6rem 2rem', background: 'rgba(0, 0, 0, 0.3)' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
            {[
              { step: '01', title: 'Audit & Strategy', desc: 'Deep dive into your current performance and competitive landscape.' },
              { step: '02', title: 'Campaign Build', desc: 'Design and deploy optimized campaigns across channels.' },
              { step: '03', title: 'Test & Scale', desc: 'Continuous optimization and scaling of winning strategies.' },
              { step: '04', title: 'Report & Iterate', desc: 'Transparent reporting and data-driven iteration.' },
            ].map((phase, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem',
                  }}
                >
                  {phase.step}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.75rem' }}>
                  {phase.title}
                </h3>
                <p style={{ color: '#c7d2fe', lineHeight: 1.7, fontWeight: 500 }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '20px',
              padding: '4rem 3rem',
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📥</div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                marginBottom: '1.5rem',
                letterSpacing: '-1px',
              }}
            >
              Free Growth Playbook
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#c7d2fe', marginBottom: '2.5rem', fontWeight: 500 }}>
              Download our 27-page guide on scaling DTC brands with paid ads. Real strategies, real numbers.
            </p>
            <form
              style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: '1 1 250px',
                  padding: '1rem 1.5rem',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: 'rgba(15, 15, 35, 0.8)',
                  color: '#ffffff',
                  fontWeight: 500,
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
                  color: '#ffffff',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
                }}
              >
                Download Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(0, 0, 0, 0.3)' }}>
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
            What Clients Say
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'David Chen',
                title: 'CEO, TechFlow SaaS',
                text: 'NorthEdge transformed our lead generation. We went from 20 qualified leads per month to over 200.',
              },
              {
                name: 'Laura Georgescu',
                title: 'Marketing Director, FitGear',
                text: 'Their paid ads strategy is phenomenal. We scaled from €50K to €300K/month in revenue in under 6 months.',
              },
              {
                name: 'Marcus Ionescu',
                title: 'Founder, UrbanHome Realty',
                text: 'Data-driven, transparent, and results-focused. Best marketing partner we have ever worked with.',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  padding: '2.5rem',
                  borderRadius: '16px',
                }}
              >
                <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem', color: '#c7d2fe', fontWeight: 500 }}>
                  "{testimonial.text}"
                </p>
                <p style={{ fontWeight: 900, fontSize: '1.125rem' }}>
                  {testimonial.name}
                </p>
                <p style={{ color: '#a5b4fc', fontWeight: 600, fontSize: '0.9375rem' }}>{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
            }}
          >
            Ready to Scale?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#c7d2fe', marginBottom: '3rem', fontWeight: 500 }}>
            Let us build a growth strategy that delivers real results.
          </p>
          <form
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              padding: '3rem',
              borderRadius: '20px',
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: 'rgba(15, 15, 35, 0.8)',
                  color: '#ffffff',
                  fontWeight: 500,
                }}
                placeholder="Your Name"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: 'rgba(15, 15, 35, 0.8)',
                  color: '#ffffff',
                  fontWeight: 500,
                }}
                placeholder="Email"
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: 'rgba(15, 15, 35, 0.8)',
                  color: '#ffffff',
                  fontWeight: 500,
                }}
                placeholder="Website URL"
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <textarea
                rows={4}
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  background: 'rgba(15, 15, 35, 0.8)',
                  color: '#ffffff',
                  fontWeight: 500,
                  resize: 'vertical',
                }}
                placeholder="Tell us about your growth goals..."
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
                color: '#ffffff',
                padding: '1.125rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 900,
                fontSize: '1.125rem',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(124, 58, 237, 0.4)',
              }}
            >
              Get Your Free Strategy Call
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '3rem 2rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(124, 58, 237, 0.2)' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          NORTHEDGE
        </div>
        <p style={{ color: '#a5b4fc', marginBottom: '2rem', fontWeight: 500 }}>
          Performance marketing that scales
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <a href="https://www.instagram.com/advancefortify/" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'none', fontSize: '1.5rem' }}>
            📷
          </a>
          <a href="https://www.facebook.com/advancefortify" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'none', fontSize: '1.5rem' }}>
            📘
          </a>
          <a href="https://www.linkedin.com/in/gabriel-lung-" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'none', fontSize: '1.5rem' }}>
            💼
          </a>
        </div>
        <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} NorthEdge Growth Marketing. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
