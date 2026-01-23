'use client';

import DemoLandingShell from '@/components/DemoLandingShell';
import { useState } from 'react';

export default function DemoBoldStudioPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <DemoLandingShell
        title="Bold Creative Studio"
        subtitle="Award-winning digital experiences that push boundaries. We partner with ambitious brands to create unforgettable campaigns that drive results and demand attention."
        primaryCTA="Start a Project"
        secondaryCTA="View Showreel"
        services={[
          {
            title: 'Brand Strategy',
            description: 'Data-driven positioning and identity systems that resonate with your audience.',
            icon: '🎯',
          },
          {
            title: 'Web Design',
            description: 'Stunning, conversion-optimized websites built on cutting-edge frameworks.',
            icon: '💻',
          },
          {
            title: 'Motion Graphics',
            description: 'Eye-catching animations and explainer videos that tell your story.',
            icon: '🎬',
          },
          {
            title: 'Marketing',
            description: 'Full-funnel campaigns from concept to execution to measurable growth.',
            icon: '📈',
          },
        ]}
        results={[
          {
            percentage: '180%',
            caption: 'Average conversion rate increase for our clients',
          },
          {
            percentage: '15+',
            caption: 'Industry awards won by our creative team',
          },
        ]}
        themeAccent="purple"
      />

      {/* Interactive Feature Cards with Motion */}
      <section style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            What We Do Best
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              fontSize: '1.125rem',
              marginBottom: '4rem',
              maxWidth: '600px',
              margin: '0 auto 4rem',
            }}
          >
            Pushing creative boundaries with every project
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
                title: 'Brand Transformation',
                description: 'Complete visual identity overhauls that position you as an industry leader.',
                icon: '✨',
                color: 'rgba(150, 100, 255, 0.3)',
              },
              {
                title: 'Digital Products',
                description: 'Apps and platforms designed for delight. UX that converts.',
                icon: '📱',
                color: 'rgba(100, 150, 255, 0.3)',
              },
              {
                title: 'Content Production',
                description: 'From concept to post-production. Photography, video, and everything between.',
                icon: '🎥',
                color: 'rgba(212, 175, 55, 0.3)',
              },
            ].map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  padding: '3rem',
                  background:
                    hoveredCard === index
                      ? 'rgba(150, 100, 255, 0.1)'
                      : 'rgba(255, 255, 255, 0.03)',
                  border:
                    hoveredCard === index
                      ? '2px solid rgba(150, 100, 255, 0.5)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredCard === index ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                  cursor: 'pointer',
                }}
              >
                {/* Animated background glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: hoveredCard === index ? '150%' : '0%',
                    height: hoveredCard === index ? '150%' : '0%',
                    background: `radial-gradient(circle, ${feature.color} 0%, transparent 70%)`,
                    opacity: hoveredCard === index ? 0.6 : 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                  }}
                />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      fontSize: '3rem',
                      marginBottom: '1.5rem',
                      transform: hoveredCard === index ? 'scale(1.2) rotate(10deg)' : 'scale(1) rotate(0deg)',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'inline-block',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      color: 'var(--text)',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--muted)',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bold Stats Section with Motion */}
      <section
        style={{
          padding: '6rem 0',
          background: 'rgba(150, 100, 255, 0.05)',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '3rem',
              textAlign: 'center',
            }}
          >
            {[
              { number: '250+', label: 'Projects Delivered' },
              { number: '50+', label: 'Global Clients' },
              { number: '12yr', label: 'In Business' },
              { number: '$2.5B', label: 'Revenue Generated' },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, rgba(150, 100, 255, 1) 0%, rgba(212, 175, 55, 1) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'var(--muted)',
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Process Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '4rem',
              textAlign: 'center',
            }}
          >
            Our Process
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              position: 'relative',
            }}
          >
            {[
              { step: '01', title: 'Discovery', desc: 'Deep-dive into your brand, audience, and goals' },
              { step: '02', title: 'Strategy', desc: 'Data-driven approach to creative direction' },
              { step: '03', title: 'Design', desc: 'Iterative design with constant feedback loops' },
              { step: '04', title: 'Deliver', desc: 'Launch, measure, optimize, and scale' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem',
                  background: 'rgba(150, 100, 255, 0.03)',
                  border: '1px solid rgba(150, 100, 255, 0.2)',
                  borderRadius: '20px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'rgba(150, 100, 255, 0.3)',
                    marginBottom: '1rem',
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text)',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
