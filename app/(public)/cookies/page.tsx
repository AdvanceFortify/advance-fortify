'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function CookiesPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const isRO = language === 'ro';

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
            {t.legal.cookies.title}
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted)',
            }}
          >
            {t.legal.cookies.lastUpdated}: {new Date().toLocaleDateString(language === 'ro' ? 'ro-RO' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <div
              className="card"
              style={{
                padding: '3rem',
                marginBottom: '2rem',
              }}
            >
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                {t.legal.cookies.whatAreCookies}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {isRO
                  ? 'Cookie-urile sunt fișiere text mici stocate pe dispozitivul dvs. când vizitați un site web. Ele ne ajută să vă oferim o experiență mai bună și să înțelegem cum utilizați site-ul nostru.'
                  : 'Cookies are small text files stored on your device when you visit a website. They help us provide you with a better experience and understand how you use our website.'}
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: '3rem',
                marginBottom: '2rem',
              }}
            >
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                {t.legal.cookies.howWeUse}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                {isRO
                  ? 'Folosim cookie-uri pentru: funcționalitatea esențială a site-ului (necesare), analiza traficului și comportamentului utilizatorilor (analytics cu consimțământul dvs.).'
                  : 'We use cookies for: essential website functionality (necessary), traffic and user behavior analysis (analytics with your consent).'}
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: '3rem',
                marginBottom: '2rem',
              }}
            >
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                {t.legal.cookies.cookieTypes}
              </h2>
              <div
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                <p style={{ marginBottom: '1rem', fontWeight: 600 }}>
                  {isRO ? '1. Cookie-uri Necesare' : '1. Necessary Cookies'}
                </p>
                <p style={{ marginBottom: '1.5rem', paddingLeft: '1rem' }}>
                  {isRO
                    ? 'Acestea sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate. Ele includ preferințele de limbă și setările de consimțământ pentru cookie-uri.'
                    : 'These are essential for the website to function and cannot be disabled. They include language preferences and cookie consent settings.'}
                </p>
                <p style={{ marginBottom: '1rem', fontWeight: 600 }}>
                  {isRO ? '2. Cookie-uri de Analiză' : '2. Analytics Cookies'}
                </p>
                <p style={{ paddingLeft: '1rem' }}>
                  {isRO
                    ? 'Folosim Google Analytics (GA4) pentru a înțelege cum utilizați site-ul. Aceste cookie-uri sunt activate doar cu consimțământul dvs. explicit. Puteți retrage consimțământul oricând prin setările cookie-urilor.'
                    : 'We use Google Analytics (GA4) to understand how you use the website. These cookies are only activated with your explicit consent. You can withdraw consent at any time through cookie settings.'}
                </p>
              </div>
            </div>

            <div
              className="card"
              style={{
                padding: '3rem',
                marginBottom: '2rem',
              }}
            >
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                {t.legal.cookies.managingCookies}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {isRO
                  ? 'Puteți gestiona preferințele cookie-urilor prin bannerul de consimțământ care apare la prima vizită sau prin setările browserului dvs. Rețineți că dezactivarea cookie-urilor necesare poate afecta funcționalitatea site-ului.'
                  : 'You can manage cookie preferences through the consent banner that appears on your first visit or through your browser settings. Note that disabling necessary cookies may affect website functionality.'}
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: '3rem',
              }}
            >
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  color: 'var(--accent-1)',
                }}
              >
                {t.legal.cookies.thirdParty}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {isRO
                  ? 'Folosim Google Analytics (GA4) ca serviciu de analiză terță parte. Google Analytics folosește propriile cookie-uri conform politicii lor de confidențialitate. Nu folosim în prezent Meta Pixel sau Google Ads, dar dacă vom adăuga aceste servicii în viitor, vă vom informa și vă vom cere consimțământul.'
                  : 'We use Google Analytics (GA4) as a third-party analytics service. Google Analytics uses its own cookies according to their privacy policy. We do not currently use Meta Pixel or Google Ads, but if we add these services in the future, we will inform you and request your consent.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
