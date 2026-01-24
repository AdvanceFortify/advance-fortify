'use client';

import Link from 'next/link';

export default function NorthEdgeMarketing() {
  const brandColor = '#6478C8';
  const darkBlue = '#1E2847';

  return (
    <div style={{ background: '#F8F9FC', color: '#1E2847' }}>
      {/* Case Study Label */}
      <div
        style={{
          background: 'rgba(100, 120, 200, 0.1)',
          borderBottom: '1px solid rgba(100, 120, 200, 0.2)',
          padding: '0.75rem 1rem',
          textAlign: 'center',
          fontSize: '0.8125rem',
          color: brandColor,
          fontWeight: 600,
        }}
      >
        Case Study Preview — Client Work Sample
      </div>

      {/* Hero - Bold Agency Style */}
      <section
        style={{
          padding: '6rem 1.5rem 5rem',
          background: `linear-gradient(135deg, ${darkBlue} 0%, #2A3658 100%)`,
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: `radial-gradient(circle, rgba(100, 120, 200, 0.3) 0%, transparent 70%)`,
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              background: 'rgba(100, 120, 200, 0.2)',
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: brandColor,
              marginBottom: '2rem',
              border: '1px solid rgba(100, 120, 200, 0.3)',
            }}
          >
            PERFORMANCE MARKETING AGENCY
          </div>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Data-Driven
            <br />
            Growth Strategies
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '3rem',
              maxWidth: '700px',
              lineHeight: 1.5,
              opacity: 0.9,
            }}
          >
            We help B2B and SaaS companies achieve measurable growth through ROI-focused campaigns and conversion optimization.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#services"
              style={{
                padding: '1.125rem 2.5rem',
                background: brandColor,
                color: '#FFFFFF',
                fontSize: '1.125rem',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(100, 120, 200, 0.4)',
              }}
            >
              Our Services
            </a>
            <a
              href="#results"
              style={{
                padding: '1.125rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: '8px',
                textDecoration: 'none',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              View Results
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '4rem 1.5rem', background: '#FFFFFF' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            textAlign: 'center',
          }}
        >
          {[
            { value: '3.2x', label: 'Average ROAS' },
            { value: '-31%', label: 'Avg. CPA Reduction' },
            { value: '50+', label: 'Active Clients' },
            { value: '£12M+', label: 'Ad Spend Managed' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: brandColor, marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '1rem', color: '#666', fontWeight: 600 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '5rem 1.5rem', background: '#F8F9FC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              marginBottom: '1rem',
              color: darkBlue,
            }}
          >
            What We Do
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#555', marginBottom: '3rem', maxWidth: '700px' }}>
            Full-service performance marketing tailored for ambitious B2B and SaaS brands
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
                icon: '📢',
                title: 'Paid Advertising',
                desc: 'Google Ads, LinkedIn, and Facebook campaigns optimized for lead quality and ROI.',
                deliverables: ['Campaign setup', 'A/B testing', 'Budget optimization', 'Monthly reporting'],
              },
              {
                icon: '📈',
                title: 'Conversion Rate Optimization',
                desc: 'Landing page testing, funnel analysis, and UX improvements.',
                deliverables: ['Heatmap analysis', 'Split testing', 'User research', 'Design iterations'],
              },
              {
                icon: '📊',
                title: 'Marketing Analytics',
                desc: 'Custom dashboards, attribution modeling, and actionable insights.',
                deliverables: ['GA4 setup', 'Custom dashboards', 'Attribution model', 'Weekly reports'],
              },
              {
                icon: '✍️',
                title: 'Content Strategy',
                desc: 'SEO-driven content and demand generation campaigns.',
                deliverables: ['Content calendar', 'SEO optimization', 'Blog posts', 'Lead magnets'],
              },
            ].map((service, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '2px solid rgba(100, 120, 200, 0.1)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: darkBlue }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {service.desc}
                </p>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: '#666',
                    borderTop: '1px solid rgba(100, 120, 200, 0.1)',
                    paddingTop: '1rem',
                  }}
                >
                  <div style={{ fontWeight: 700, color: brandColor, marginBottom: '0.5rem' }}>Includes:</div>
                  <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                    {service.deliverables.map((item, j) => (
                      <li key={j} style={{ marginBottom: '0.25rem' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Results */}
      <section id="results" style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkBlue,
            }}
          >
            Client Success Stories
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                company: 'TechFlow SaaS',
                industry: 'B2B Software',
                challenge: 'High cost per acquisition and low conversion rates',
                results: [
                  { metric: '-42%', label: 'Cost Per Lead' },
                  { metric: '+68%', label: 'Conversion Rate' },
                  { metric: '4.1x', label: 'ROAS' },
                ],
              },
              {
                company: 'DataSync Solutions',
                industry: 'Enterprise Analytics',
                challenge: 'Needed to scale lead generation without increasing budget',
                results: [
                  { metric: '+120%', label: 'Qualified Leads' },
                  { metric: '-28%', label: 'CPA' },
                  { metric: '£850K', label: 'Pipeline Generated' },
                ],
              },
            ].map((caseStudy, i) => (
              <div
                key={i}
                style={{
                  padding: '3rem',
                  background: '#F8F9FC',
                  borderRadius: '16px',
                  border: '2px solid rgba(100, 120, 200, 0.15)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      padding: '0.375rem 0.875rem',
                      background: brandColor,
                      color: '#FFFFFF',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      borderRadius: '6px',
                    }}
                  >
                    {caseStudy.industry}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem', color: darkBlue }}>
                  {caseStudy.company}
                </h3>
                <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem', lineHeight: 1.6 }}>
                  <strong>Challenge:</strong> {caseStudy.challenge}
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '2rem',
                  }}
                >
                  {caseStudy.results.map((result, j) => (
                    <div key={j}>
                      <div style={{ fontSize: '2.25rem', fontWeight: 900, color: brandColor, marginBottom: '0.25rem' }}>
                        {result.metric}
                      </div>
                      <div style={{ fontSize: '0.9375rem', color: '#666' }}>{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8F9FC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '1rem',
              color: darkBlue,
            }}
          >
            Service Packages
          </h2>
          <p style={{ textAlign: 'center', color: '#555', fontSize: '1.125rem', marginBottom: '3rem' }}>
            Flexible options to match your growth goals
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
                name: 'Growth Starter',
                price: '£2,500/mo',
                features: [
                  'Single channel (Google or LinkedIn)',
                  'Landing page optimization',
                  'Monthly reporting',
                  'Email support',
                ],
              },
              {
                name: 'Scale Up',
                price: '£5,000/mo',
                features: [
                  'Multi-channel campaigns',
                  'A/B testing & CRO',
                  'Custom analytics dashboard',
                  'Bi-weekly strategy calls',
                ],
                featured: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: [
                  'Full-service marketing',
                  'Dedicated account team',
                  'Advanced attribution',
                  'Priority support',
                ],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: pkg.featured ? `3px solid ${brandColor}` : '2px solid rgba(100, 120, 200, 0.15)',
                  position: 'relative',
                }}
              >
                {pkg.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '0.375rem 1rem',
                      background: brandColor,
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      borderRadius: '50px',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: darkBlue }}>
                  {pkg.name}
                </h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: brandColor, marginBottom: '2rem' }}>
                  {pkg.price}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {pkg.features.map((feature, j) => (
                    <li
                      key={j}
                      style={{
                        padding: '0.75rem 0',
                        color: '#555',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        borderTop: j === 0 ? 'none' : '1px solid rgba(100, 120, 200, 0.1)',
                      }}
                    >
                      <span style={{ color: brandColor, fontSize: '1.25rem' }}>✓</span>
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
      <section style={{ padding: '5rem 1.5rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '3rem',
              color: darkBlue,
            }}
          >
            Client Testimonials
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
                name: 'Sarah Mitchell',
                role: 'VP Marketing, CloudSync',
                text: 'NorthEdge transformed our lead generation. The team is strategic, responsive, and delivers real results.',
              },
              {
                name: 'James Carter',
                role: 'CEO, MetricsPro',
                text: "Best marketing investment we've made. Our pipeline has tripled and cost per acquisition is down significantly.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem',
                  background: '#F8F9FC',
                  borderRadius: '16px',
                  border: '2px solid rgba(100, 120, 200, 0.15)',
                }}
              >
                <div style={{ color: brandColor, fontSize: '1.5rem', marginBottom: '1.25rem' }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </p>
                <div style={{ fontWeight: 700, color: darkBlue, marginBottom: '0.25rem' }}>{testimonial.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#999' }}>{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: `linear-gradient(135deg, ${darkBlue} 0%, #2A3658 100%)`,
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              marginBottom: '1rem',
            }}
          >
            Ready to Scale Your Growth?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            Let's discuss how we can help you achieve measurable results.
          </p>
          <Link
            href="/contact?project=northedge-marketing"
            style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              background: brandColor,
              color: '#FFFFFF',
              fontSize: '1.25rem',
              fontWeight: 700,
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(100, 120, 200, 0.4)',
            }}
          >
            Get Free Strategy Call →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: darkBlue, color: '#FFFFFF', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>NorthEdge Marketing</h3>
          <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
            85 Great Portland Street, London, W1W 7LT
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <a href="tel:+442012345678" style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}>
              📞 +44 20 1234 5678
            </a>
            {' | '}
            <a
              href="mailto:hello@northedge.agency"
              style={{ color: brandColor, textDecoration: 'none', fontWeight: 600 }}
            >
              📧 hello@northedge.agency
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
