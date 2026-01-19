'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
};

const COOKIE_CONSENT_KEY = 'advance-fortify-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'advance-fortify-cookie-preferences';

export function getCookieConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as CookiePreferences;
  } catch {
    return null;
  }
}

export function hasCookieConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) !== null;
}

export function setCookieConsent(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
  // Dispatch event for GA4 component to listen
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: preferences }));
}

export default function CookieConsent() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const isRO = language === 'ro';
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    if (!hasCookieConsent()) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
    };
    setCookieConsent(allAccepted);
    setIsVisible(false);
  };

  const handleReject = () => {
    const rejected: CookiePreferences = {
      necessary: true,
      analytics: false,
    };
    setCookieConsent(rejected);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    setCookieConsent(preferences);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'var(--bg-1)',
        borderTop: '2px solid var(--accent-1)',
        padding: '1.5rem',
        zIndex: 10000,
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {!showCustomize ? (
            <>
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text)',
                  }}
                >
                  {isRO ? 'Cookie-uri și Confidențialitate' : 'Cookies & Privacy'}
                </h3>
                <p
                  style={{
                    color: 'var(--muted)',
                    lineHeight: 1.6,
                    fontSize: '0.9375rem',
                  }}
                >
                  {isRO
                    ? 'Folosim cookie-uri pentru a îmbunătăți experiența dvs. și pentru analiză. Cookie-urile necesare sunt întotdeauna active. Puteți accepta toate, respinge toate sau personaliza preferințele.'
                    : 'We use cookies to improve your experience and for analytics. Necessary cookies are always active. You can accept all, reject all, or customize your preferences.'}
                  {' '}
                  <a
                    href="/cookies"
                    style={{
                      color: 'var(--accent-1)',
                      textDecoration: 'underline',
                    }}
                  >
                    {isRO ? 'Aflați mai multe' : 'Learn more'}
                  </a>
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <button
                  onClick={handleAcceptAll}
                  className="btn btn-primary"
                  style={{
                    fontSize: '0.9375rem',
                    padding: '0.75rem 1.5rem',
                  }}
                >
                  {isRO ? 'Acceptă Tot' : 'Accept All'}
                </button>
                <button
                  onClick={handleReject}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.9375rem',
                    padding: '0.75rem 1.5rem',
                  }}
                >
                  {isRO ? 'Respinge Tot' : 'Reject All'}
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.9375rem',
                    padding: '0.75rem 1.5rem',
                  }}
                >
                  {isRO ? 'Personalizează' : 'Customize'}
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text)',
                  }}
                >
                  {isRO ? 'Personalizează Cookie-urile' : 'Customize Cookies'}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      background: 'var(--surface)',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: 'var(--text)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {isRO ? 'Cookie-uri Necesare' : 'Necessary Cookies'}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--muted)',
                        }}
                      >
                        {isRO
                          ? 'Acestea sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.'
                          : 'These are essential for the website to function and cannot be disabled.'}
                      </div>
                    </div>
                    <div
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--surface-2)',
                        borderRadius: '0.375rem',
                        color: 'var(--muted)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                      }}
                    >
                      {isRO ? 'Întotdeauna activ' : 'Always on'}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      background: 'var(--surface)',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: 'var(--text)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {isRO ? 'Cookie-uri de Analiză (Google Analytics)' : 'Analytics Cookies (Google Analytics)'}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--muted)',
                        }}
                      >
                        {isRO
                          ? 'Ne ajută să înțelegem cum utilizați site-ul pentru a-l îmbunătăți.'
                          : 'Helps us understand how you use the website to improve it.'}
                      </div>
                    </div>
                    <label
                      style={{
                        position: 'relative',
                        display: 'inline-block',
                        width: '50px',
                        height: '26px',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        style={{
                          opacity: 0,
                          width: 0,
                          height: 0,
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          cursor: 'pointer',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: preferences.analytics ? 'var(--accent-1)' : 'var(--surface-2)',
                          borderRadius: '26px',
                          transition: '0.3s',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            content: '""',
                            height: '20px',
                            width: '20px',
                            left: '3px',
                            bottom: '3px',
                            background: 'white',
                            borderRadius: '50%',
                            transition: '0.3s',
                            transform: preferences.analytics ? 'translateX(24px)' : 'translateX(0)',
                          }}
                        />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <button
                  onClick={handleSavePreferences}
                  className="btn btn-primary"
                  style={{
                    fontSize: '0.9375rem',
                    padding: '0.75rem 1.5rem',
                  }}
                >
                  {isRO ? 'Salvează Preferințele' : 'Save Preferences'}
                </button>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.9375rem',
                    padding: '0.75rem 1.5rem',
                  }}
                >
                  {isRO ? 'Înapoi' : 'Back'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
