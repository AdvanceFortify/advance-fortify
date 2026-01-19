'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const isRO = language === 'ro';

  const companyInfo = {
    name: 'Advance Fortify SRL',
    country: 'Romania',
    address: 'Jud. Cluj, Mun. Turda, Str. Poiana, Nr. 27g',
    cui: '53265670',
    tradeRegister: 'J2026002094009',
    mainCAEN: '6210',
    email: 'admin@advancefortify.com',
    phone: '+40748979607',
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
            {t.legal.privacyPolicy.title}
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted)',
            }}
          >
            {t.legal.privacyPolicy.lastUpdated}: {new Date().toLocaleDateString(language === 'ro' ? 'ro-RO' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                {t.legal.privacyPolicy.companyInfo}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                <strong>{companyInfo.name}</strong><br />
                {companyInfo.address}<br />
                {isRO ? 'România' : 'Romania'}<br />
                {isRO ? 'CUI' : 'Tax ID'}: {companyInfo.cui}<br />
                {isRO ? 'Nr. Înreg. Comerț' : 'Trade Register'}: {companyInfo.tradeRegister}<br />
                {isRO ? 'CAEN Principal' : 'Main CAEN'}: {companyInfo.mainCAEN}
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
                {t.legal.privacyPolicy.dataCollection}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                {isRO
                  ? 'Colectăm date personale când utilizați formularul nostru de contact, când ne contactați direct sau când navigați pe site-ul nostru. Datele colectate pot include: nume, adresă de email, număr de telefon, mesaje și informații despre utilizarea site-ului (prin cookie-uri și tehnologii similare).'
                  : 'We collect personal data when you use our contact form, contact us directly, or browse our website. Data collected may include: name, email address, phone number, messages, and website usage information (through cookies and similar technologies).'}
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
                {t.legal.privacyPolicy.dataUsage}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                {isRO
                  ? 'Folosim datele dvs. pentru a răspunde la solicitările dvs., pentru a vă oferi serviciile noastre (design web, pagini de destinație, SEO, marketing digital), pentru a îmbunătăți site-ul nostru și pentru a vă trimite comunicări relevante (doar cu consimțământul dvs.).'
                  : 'We use your data to respond to your inquiries, provide our services (web design, landing pages, SEO, digital marketing), improve our website, and send you relevant communications (only with your consent).'}
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
                {t.legal.privacyPolicy.dataSharing}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                {isRO
                  ? 'Nu vindem datele dvs. către terți. Putem partaja date cu furnizori de servicii de încredere (de exemplu, servicii de hosting, Google Analytics cu consimțământul dvs.) care ne ajută să operăm site-ul și să vă oferim serviciile. Toți partenerii noștri sunt obligați să protejeze datele dvs. conform GDPR.'
                  : 'We do not sell your data to third parties. We may share data with trusted service providers (e.g., hosting services, Google Analytics with your consent) who help us operate the website and provide our services. All our partners are required to protect your data in accordance with GDPR.'}
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
                {t.legal.privacyPolicy.yourRights}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}
              >
                {isRO
                  ? 'Conform GDPR, aveți dreptul la: acces la datele dvs., rectificare, ștergere, restricționare procesării, portabilitate a datelor, opoziție și retragerea consimțământului. Pentru a exercita aceste drepturi, contactați-ne la admin@advancefortify.com.'
                  : 'Under GDPR, you have the right to: access your data, rectification, erasure, restriction of processing, data portability, objection, and withdrawal of consent. To exercise these rights, contact us at admin@advancefortify.com.'}
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
                {t.legal.privacyPolicy.contact}
              </h2>
              <p
                style={{
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                {isRO
                  ? 'Pentru întrebări despre această politică de confidențialitate, contactați-ne:'
                  : 'For questions about this privacy policy, contact us:'}
                <br />
                <a
                  href={`mailto:${companyInfo.email}`}
                  style={{
                    color: 'var(--accent-1)',
                    textDecoration: 'none',
                  }}
                >
                  {companyInfo.email}
                </a>
                <br />
                <a
                  href={`tel:${companyInfo.phone}`}
                  style={{
                    color: 'var(--accent-1)',
                    textDecoration: 'none',
                  }}
                >
                  {companyInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
