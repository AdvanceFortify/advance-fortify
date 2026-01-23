'use client';

import DemoLandingShell from '@/components/DemoLandingShell';
import { useState, useEffect } from 'react';

export default function DemoEcomDropPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <DemoLandingShell
        title="HyperFlex Pro™"
        subtitle="The revolutionary wireless earbuds that sold out in 48 hours. Limited drop — don't miss your chance to experience studio-grade audio at an unbeatable price."
        primaryCTA="Pre-Order Now"
        secondaryCTA="Watch Review"
        services={[
          {
            title: 'Active Noise Cancellation',
            description: 'Industry-leading ANC blocks 99% of ambient noise for pure listening.',
            icon: '🎧',
          },
          {
            title: '40-Hour Battery',
            description: 'All-day power with fast charging. 10 minutes = 5 hours playback.',
            icon: '🔋',
          },
          {
            title: 'Studio Sound',
            description: 'Engineered by Grammy-winning producers for perfect audio balance.',
            icon: '🎵',
          },
          {
            title: 'Water Resistant',
            description: 'IPX7 rating means worry-free workouts and all-weather usage.',
            icon: '💧',
          },
        ]}
        results={[
          {
            percentage: '50K+',
            caption: 'Units sold in the first drop — next batch limited',
          },
          {
            percentage: '4.8★',
            caption: '12,000+ verified customer reviews',
          },
        ]}
        themeAccent="green"
      />

      {/* Countdown Timer */}
      <section
        style={{
          padding: '4rem 0',
          background: 'rgba(100, 255, 150, 0.05)',
          borderTop: '1px solid rgba(100, 255, 150, 0.2)',
          borderBottom: '1px solid rgba(100, 255, 150, 0.2)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'rgba(100, 255, 150, 1)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Limited Time Offer
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--text)',
              }}
            >
              Pre-Order Ends In:
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  background: 'rgba(100, 255, 150, 0.1)',
                  border: '2px solid rgba(100, 255, 150, 0.3)',
                  borderRadius: '16px',
                  minWidth: '120px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'rgba(100, 255, 150, 1)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {String(item.value).padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Hype Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            What Makes It Special?
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
            Engineered for perfection, designed to impress.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { label: 'Premium Materials', desc: 'Aerospace-grade aluminum & soft-touch silicone' },
              { label: 'Smart Touch Controls', desc: 'Intuitive gestures for calls, music & voice assistant' },
              { label: 'Dual Microphones', desc: 'Crystal-clear calls even in noisy environments' },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: '2.5rem',
                  background: 'rgba(100, 255, 150, 0.05)',
                  border: '1px solid rgba(100, 255, 150, 0.2)',
                  borderRadius: '20px',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'rgba(100, 255, 150, 1)',
                  }}
                >
                  {feature.label}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Strip */}
      <section
        style={{
          padding: '6rem 0',
          background: 'rgba(255, 255, 255, 0.02)',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Real Customers, Real Reviews
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              fontSize: '1.125rem',
              marginBottom: '4rem',
            }}
          >
            Join thousands of happy customers worldwide
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { name: 'Sarah M.', review: "Best earbuds I've ever owned. Worth every penny!", stars: 5 },
              { name: 'Mike T.', review: "Sound quality is insane. Battery lasts forever.", stars: 5 },
              { name: 'Jessica L.', review: "Game changer for my workouts. Never falling out!", stars: 5 },
              { name: 'David K.', review: "Finally, earbuds that actually fit comfortably.", stars: 5 },
            ].map((review, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  background: 'rgba(100, 255, 150, 0.03)',
                  border: '1px solid rgba(100, 255, 150, 0.15)',
                  borderRadius: '16px',
                }}
              >
                <div style={{ color: 'rgba(100, 255, 150, 1)', marginBottom: '0.75rem' }}>
                  {'★'.repeat(review.stars)}
                </div>
                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}
                >
                  "{review.review}"
                </p>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}
                >
                  {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
