'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function SiteFooter() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const legalLinks = [
    { href: '/privacy-policy', label: t.footer.privacyPolicy },
    { href: '/terms', label: t.footer.terms },
    { href: '/cookies', label: t.footer.cookiePolicy },
    { href: '/disclaimer', label: t.footer.disclaimer },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'TikTok', href: '#', icon: '🎵' },
  ];

  return (
    <footer
      style={{
        background: 'var(--panel)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border-glow)',
        padding: '4rem 0 2rem',
        marginTop: '4rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Legal Links */}
          <div>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--accent-1)',
                marginBottom: '1rem',
              }}
            >
              {t.footer.legal}
            </h3>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Romania Group */}
          <div>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--accent-1)',
                marginBottom: '1rem',
              }}
            >
              {t.footer.romania}
            </h3>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                lineHeight: 1.6,
              }}
            >
              Legal information and policies for Romania operations.
            </p>
          </div>

          {/* USA Group */}
          <div>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--accent-1)',
                marginBottom: '1rem',
              }}
            >
              {t.footer.usa}
            </h3>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                lineHeight: 1.6,
              }}
            >
              Legal information and policies for USA operations.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--accent-1)',
                marginBottom: '1rem',
              }}
            >
              {t.footer.contact}
            </h3>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <li>
                <a
                  href="mailto:admin@advancefortify.com"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  admin@advancefortify.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+40748979607"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  +40 748 979 607
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--accent-1)',
                marginBottom: '1rem',
              }}
            >
              {t.footer.followUs}
            </h3>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '50%',
                    fontSize: '1.25rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--surface-2)';
                    e.currentTarget.style.borderColor = 'var(--accent-1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--surface)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-glow)',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
          }}
        >
          <p>© {new Date().getFullYear()} Advance Fortify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
