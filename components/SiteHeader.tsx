'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { getTranslation } from '@/lib/translations';

export default function SiteHeader() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (socialRef.current && !socialRef.current.contains(event.target as Node)) {
        setIsSocialOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/pricing', label: t.nav.pricing },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'TikTok', href: '#', icon: '🎵' },
  ];

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: isScrolled
          ? 'rgba(10, 4, 30, 0.85)'
          : 'rgba(10, 4, 30, 0.5)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: `1px solid ${isScrolled ? 'var(--accent-1)' : 'var(--border)'}`,
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
        <Link 
          href="/" 
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            filter: 'drop-shadow(0 0 6px rgba(255, 191, 0, 0.18))',
          }}
        >
          Advance Fortify
        </Link>

        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                transition: 'color 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-1)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link.label}
            </Link>
          ))}

          <div ref={socialRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setIsSocialOpen(!isSocialOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem',
              }}
              aria-expanded={isSocialOpen}
              aria-haspopup="true"
            >
              {t.nav.social} <span style={{ fontSize: '0.75rem' }}>▼</span>
            </button>

            {isSocialOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '0.5rem',
                  background: 'var(--panel)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-glow)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  minWidth: '150px',
                  boxShadow: 'var(--shadow-glow-strong)',
                }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      borderRadius: '0.375rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--surface)';
                      e.currentTarget.style.color = 'var(--accent-1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--muted)';
                    }}
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <LanguageSwitch />
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            style={{
              width: '24px',
              height: '2px',
              background: 'var(--accent-1)',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              width: '24px',
              height: '2px',
              background: 'var(--accent-1)',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: '24px',
              height: '2px',
              background: 'var(--accent-1)',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
            }}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="mobile-nav"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem 1.5rem',
            borderTop: '1px solid var(--border-glow)',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: 'var(--text-secondary)',
                fontWeight: 500,
                padding: '0.75rem 0',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: '0.75rem 0', borderTop: '1px solid var(--border-glow)', marginTop: '0.5rem' }}>
            <div style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              {t.nav.social}
            </div>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem 0',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                }}
              >
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          <div style={{ padding: '0.75rem 0', borderTop: '1px solid var(--border-glow)', marginTop: '0.5rem' }}>
            <LanguageSwitch />
          </div>
        </nav>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <button
        onClick={() => setLanguage('en')}
        style={{
          padding: '0.375rem 0.75rem',
          background: language === 'en' ? 'var(--surface)' : 'transparent',
          border: `1px solid ${language === 'en' ? 'var(--accent-1)' : 'var(--border)'}`,
          borderRadius: '0.375rem',
          color: language === 'en' ? 'var(--accent-1)' : 'var(--muted)',
          fontWeight: 600,
          fontSize: '0.875rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ro')}
        style={{
          padding: '0.375rem 0.75rem',
          background: language === 'ro' ? 'var(--surface)' : 'transparent',
          border: `1px solid ${language === 'ro' ? 'var(--accent-1)' : 'var(--border)'}`,
          borderRadius: '0.375rem',
          color: language === 'ro' ? 'var(--accent-1)' : 'var(--muted)',
          fontWeight: 600,
          fontSize: '0.875rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        aria-label="Switch to Romanian"
      >
        RO
      </button>
    </div>
  );
}
