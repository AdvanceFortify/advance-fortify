'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function TermsPage() {
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
            {t.legal.terms.title}
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted)',
            }}
          >
            {t.legal.terms.lastUpdated}: {new Date().toLocaleDateString(language === 'ro' ? 'ro-RO' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                {t.legal.terms.acceptance}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {isRO
                  ? 'Prin accesarea și utilizarea site-ului nostru, acceptați acești termeni și condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.'
                  : 'By accessing and using our website, you accept these terms and conditions. If you do not agree, please do not use the website.'}
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
                {t.legal.terms.services}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: '1.8',
                  marginBottom: '1rem',
                }}
              >
                {isRO
                  ? 'Advance Fortify SRL oferă servicii de design web, pagini de destinație, SEO și marketing digital. Prețurile și detaliile serviciilor sunt comunicate individual pentru fiecare proiect.'
                  : 'Advance Fortify SRL provides web design, landing pages, SEO, and digital marketing services. Prices and service details are communicated individually for each project.'}
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
                {t.legal.terms.userObligations}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                {isRO
                  ? 'Vă angajați să utilizați site-ul în mod legal, să nu transmiteți conținut dăunător sau ilegal și să respectați drepturile de proprietate intelectuală. Nu puteți copia, modifica sau distribui conținutul site-ului fără permisiunea noastră scrisă.'
                  : 'You agree to use the website legally, not to transmit harmful or illegal content, and to respect intellectual property rights. You may not copy, modify, or distribute the website content without our written permission.'}
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
                {t.legal.terms.intellectualProperty}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {isRO
                  ? 'Toate drepturile de proprietate intelectuală asupra conținutului site-ului (text, imagini, logo-uri, design) aparțin Advance Fortify SRL sau licențiatorilor săi. Conținutul creat pentru clienți în cadrul proiectelor rămâne proprietatea clientului după finalizarea și plata proiectului.'
                  : 'All intellectual property rights to the website content (text, images, logos, design) belong to Advance Fortify SRL or its licensors. Content created for clients as part of projects remains the property of the client after project completion and payment.'}
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
                {t.legal.terms.limitation}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {isRO
                  ? 'Advance Fortify SRL nu este răspunzător pentru daune indirecte, accidentale sau consecvente rezultate din utilizarea sau imposibilitatea utilizării site-ului sau serviciilor noastre. Răspunderea noastră este limitată la valoarea plății primite pentru serviciul specific.'
                  : 'Advance Fortify SRL is not liable for indirect, incidental, or consequential damages resulting from the use or inability to use our website or services. Our liability is limited to the value of payment received for the specific service.'}
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
                {t.legal.terms.changes}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {isRO
                  ? 'Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor fi publicate pe această pagină. Utilizarea continuă a site-ului după modificări constituie acceptarea noilor termeni.'
                  : 'We reserve the right to modify these terms at any time. Changes will be published on this page. Continued use of the website after changes constitutes acceptance of the new terms.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
