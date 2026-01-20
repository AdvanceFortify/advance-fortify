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
    projectType: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end only for now
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', projectType: '' });
      setSubmitted(false);
    }, 3000);
  };

  const projectTypes = [
    'Web Design',
    'Landing Page',
    'SEO',
    'Digital Marketing',
    'Full Package',
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
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}
          >
            {t.home.cta.title}
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              marginBottom: '3rem',
              fontSize: '1.125rem',
            }}
          >
            {t.home.cta.subtitle}
          </p>

          <form
            onSubmit={handleSubmit}
            className="card"
            style={{
              padding: '2.5rem',
            }}
          >
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
                  <label htmlFor="name" className="form-label">
                    {t.home.cta.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.home.cta.name}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-1)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    {t.home.cta.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.home.cta.email}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-1)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectType" className="form-label" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    {t.home.cta.projectType}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="form-select"
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-1)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">{t.home.cta.projectType}</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
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
        </div>
      </div>
    </section>
  );
}
