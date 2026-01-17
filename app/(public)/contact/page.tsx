'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappMessage = language === 'en'
    ? 'Hello! I\'d like to get in touch about your services.'
    : 'Bună! Aș dori să iau legătura despre serviciile voastre.';

  const emailSubject = language === 'en'
    ? 'Contact Request from Advance Fortify Website'
    : 'Cerere de Contact de pe Site-ul Advance Fortify';

  const emailBody = language === 'en'
    ? 'Hello,\n\nI would like to discuss:\n\n'
    : 'Bună,\n\nAș dori să discut despre:\n\n';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
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
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%)',
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
              }}
            >
              <div style={{ fontSize: '3rem' }}>💬</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--gold)',
                }}
              >
                {t.contact.whatsapp}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>+40 748 979 607</p>
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
              }}
            >
              <div style={{ fontSize: '3rem' }}>✉️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--gold)',
                }}
              >
                {t.contact.email}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>admin@advancefortify.com</p>
            </a>

            <div
              className="card"
              style={{
                textAlign: 'center',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                opacity: 0.6,
              }}
            >
              <div style={{ fontSize: '3rem' }}>✈️</div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--gold)',
                }}
              >
                {t.contact.telegram}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>Coming soon</p>
            </div>
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
                  color: 'var(--gold)',
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
                    color: 'var(--gold)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                  }}
                >
                  {t.home.cta.success}
                </div>
              ) : (
                <>
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
                    style={{
                      width: '100%',
                      marginTop: '1rem',
                    }}
                  >
                    {t.contact.form.submit}
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
