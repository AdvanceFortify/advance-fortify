'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { getTranslation } from '@/lib/translations';
import { trackEvent } from '@/lib/analytics';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const whatsappMessage = language === 'en'
    ? 'Hello! I\'d like to get in touch about your services.'
    : 'Bună! Aș dori să iau legătura despre serviciile voastre.';

  const emailSubject = language === 'en'
    ? 'Contact Request from Advance Fortify Website'
    : 'Cerere de Contact de pe Site-ul Advance Fortify';

  const emailBody = language === 'en'
    ? 'Hello,\n\nI would like to discuss:\n\n'
    : 'Bună,\n\nAș dori să discut despre:\n\n';

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('Submitting form...');
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          serviceInterest: 'General inquiry (Contact page)',
          stage: 'Unknown',
          phone: '',
          companyWebsite: '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      trackEvent('contact_form_submit');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section
        style={{
          padding: '8rem 0 4rem',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 50%, var(--accent-2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.contact.title}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section
        style={{
          padding: '4rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            <a
              href={`https://wa.me/40748979607?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                textAlign: 'center',
                padding: '2.5rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease',
              }}
              onClick={() => trackEvent('whatsapp_click', { method: 'whatsapp' })}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ fontSize: '3rem', lineHeight: 1 }}>💬</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--accent-1)',
                  margin: 0,
                }}
              >
                {t.contact.whatsapp}
              </h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>+40 748 979 607</p>
            </a>

            <a
              href={`mailto:admin@advancefortify.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              className="card"
              style={{
                textAlign: 'center',
                padding: '2.5rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease',
              }}
              onClick={() => trackEvent('email_click', { method: 'email' })}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ fontSize: '3rem', lineHeight: 1 }}>✉️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--accent-1)',
                  margin: 0,
                }}
              >
                {t.contact.email}
              </h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>admin@advancefortify.com</p>
            </a>

            <a
              href="https://t.me/+40748979607"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                textAlign: 'center',
                padding: '2.5rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ fontSize: '3rem', lineHeight: 1 }}>✈️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--accent-1)',
                  margin: 0,
                }}
              >
                {t.contact.telegram}
              </h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>+40 748 979 607</p>
            </a>
          </div>

          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="card"
              style={{
                padding: '2.5rem',
              }}
            >
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  marginBottom: '2rem',
                  color: 'var(--accent-1)',
                  textAlign: 'center',
                }}
              >
                Send us a Message
              </h2>

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
                  {error && (
                    <div
                      style={{
                        padding: '1rem',
                        marginBottom: '1.5rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '0.5rem',
                        color: '#ef4444',
                        fontSize: '0.9375rem',
                        textAlign: 'center',
                      }}
                    >
                      {error}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      className="form-input"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.name}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className="form-input"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.email}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.message}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      marginTop: '1rem',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSubmitting
                      ? (language === 'en' ? 'Sending...' : 'Se trimite...')
                      : t.contact.form.submit}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
