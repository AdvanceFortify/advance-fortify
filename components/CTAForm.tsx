'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function CTAForm() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappMessage = language === 'en'
    ? 'Hello! I\'d like to get a free consultation.'
    : 'Bună! Aș dori să obțin o consultație gratuită.';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end only for now - could integrate with contact handler later
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', serviceInterest: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const serviceOptions = [
    'Landing Page',
    'SEO',
    'Integrations/Klaviyo',
    'Rebuild',
  ];

  return (
    <section
      style={{
        padding: '6rem 0',
        background: 'transparent',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <div className="section-title">
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                marginBottom: '1rem',
                color: 'var(--text)',
              }}
            >
              {t.home.cta.title}
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: 'var(--muted)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              {t.home.cta.subtitle}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="cta-form-premium"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '1.25rem',
              padding: '3rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle glow effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent-1), transparent)',
                opacity: 0.5,
              }}
            />

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  color: 'var(--accent-1)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                }}
              >
                {t.home.cta.success}
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="cta-name" className="form-label">
                    {t.home.cta.name}
                  </label>
                  <input
                    type="text"
                    id="cta-name"
                    name="name"
                    className="form-input"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.home.cta.name}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cta-email" className="form-label">
                    {t.home.cta.email}
                  </label>
                  <input
                    type="email"
                    id="cta-email"
                    name="email"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.home.cta.email}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cta-phone" className="form-label">
                    {t.home.cta.phone}
                  </label>
                  <input
                    type="tel"
                    id="cta-phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.home.cta.phone}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cta-service" className="form-label">
                    {t.home.cta.serviceInterest}
                  </label>
                  <select
                    id="cta-service"
                    name="serviceInterest"
                    className="form-select"
                    required
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  >
                    <option value="">{t.home.cta.serviceInterest}</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cta-message" className="form-label">
                    {t.home.cta.message}
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    className="form-textarea"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.home.cta.message}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    marginTop: '1rem',
                  }}
                >
                  {t.home.cta.submit}
                </button>
              </>
            )}
          </form>

          {/* Quick contact buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            <a
              href={`https://wa.me/40748979607?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
              }}
            >
              <span>💬</span>
              {t.home.cta.whatsapp}
            </a>
            <a
              href="https://t.me/+40748979607"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
              }}
            >
              <span>✈️</span>
              {t.home.cta.telegram}
            </a>
            <a
              href="mailto:admin@advancefortify.com"
              className="btn btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
              }}
            >
              <span>✉️</span>
              {t.home.cta.emailContact}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-form-premium {
          transition: all 0.3s ease;
        }

        .cta-form-premium:hover {
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </section>
  );
}
