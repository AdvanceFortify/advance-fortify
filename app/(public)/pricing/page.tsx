'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { getTranslation } from '@/lib/translations';
import { trackEvent } from '@/lib/analytics';

export default function PricingPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  // Landing Pages Section
  const landingPagesTiers = [
    {
      name: t.pricing.landingPages.basic.name,
      price: t.pricing.landingPages.basic.price,
      description: t.pricing.landingPages.basic.description,
      cta: t.pricing.landingPages.basic.cta,
      features: t.pricing.landingPages.basic.features,
    },
    {
      name: t.pricing.landingPages.advanced.name,
      price: t.pricing.landingPages.advanced.price,
      description: t.pricing.landingPages.advanced.description,
      cta: t.pricing.landingPages.advanced.cta,
      popular: true,
      features: t.pricing.landingPages.advanced.features,
    },
    {
      name: t.pricing.landingPages.pro.name,
      price: t.pricing.landingPages.pro.price,
      description: t.pricing.landingPages.pro.description,
      cta: t.pricing.landingPages.pro.cta,
      features: t.pricing.landingPages.pro.features,
    },
  ];

  // Websites Section
  const websitesTiers = [
    {
      name: t.pricing.websites.presentation.name,
      price: t.pricing.websites.presentation.price,
      description: t.pricing.websites.presentation.description,
      cta: t.pricing.websites.presentation.cta,
      features: t.pricing.websites.presentation.features,
    },
    {
      name: t.pricing.websites.ecommerce.name,
      price: t.pricing.websites.ecommerce.price,
      description: t.pricing.websites.ecommerce.description,
      cta: t.pricing.websites.ecommerce.cta,
      features: t.pricing.websites.ecommerce.features,
    },
    {
      name: t.pricing.websites.complex.name,
      price: t.pricing.websites.complex.price,
      description: t.pricing.websites.complex.description,
      cta: t.pricing.websites.complex.cta,
      features: t.pricing.websites.complex.features,
    },
  ];

  // Single plan sections
  const maintenancePlan = {
    name: t.pricing.maintenance.plan.name,
    price: t.pricing.maintenance.plan.price,
    priceUnit: t.pricing.maintenance.plan.priceUnit,
    description: t.pricing.maintenance.plan.description,
    cta: t.pricing.maintenance.plan.cta,
    features: t.pricing.maintenance.plan.features,
  };

  const googleAdsPlan = {
    name: t.pricing.googleAds.plan.name,
    price: t.pricing.googleAds.plan.price,
    priceUnit: t.pricing.googleAds.plan.priceUnit,
    description: t.pricing.googleAds.plan.description,
    cta: t.pricing.googleAds.plan.cta,
    note: t.pricing.googleAds.plan.note,
    features: t.pricing.googleAds.plan.features,
  };

  const socialMediaPlan = {
    name: t.pricing.socialMedia.plan.name,
    price: t.pricing.socialMedia.plan.price,
    priceUnit: t.pricing.socialMedia.plan.priceUnit,
    description: t.pricing.socialMedia.plan.description,
    cta: t.pricing.socialMedia.plan.cta,
    features: t.pricing.socialMedia.plan.features,
  };

  const renderPricingCard = (tier: any, index: number) => (
    <div
      key={index}
      className="card"
      style={{
        padding: '2.5rem',
        position: 'relative',
        border: tier.popular ? '2px solid var(--accent-1)' : '1px solid var(--border)',
        boxShadow: tier.popular ? 'var(--shadow-glow-strong)' : 'var(--shadow-glow)',
      }}
    >
      {tier.popular && (
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--accent-1)',
            color: 'var(--bg-0)',
            padding: '0.375rem 1rem',
            borderRadius: '1rem',
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          {t.pricing.landingPages.advanced.popular}
        </div>
      )}
      <h2
        style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: 'var(--accent-1)',
        }}
      >
        {tier.name}
      </h2>
      <div
        style={{
          fontSize: '3rem',
          fontWeight: 800,
          marginBottom: '0.5rem',
          color: 'var(--text)',
          lineHeight: 1,
        }}
      >
        {tier.price}
        {tier.priceUnit && (
          <span style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
            {tier.priceUnit}
          </span>
        )}
      </div>
      <p
        style={{
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          fontSize: '0.9375rem',
        }}
      >
        {tier.description}
      </p>
      <ul
        style={{
          listStyle: 'none',
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {tier.features.map((feature: string, idx: number) => (
          <li
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              color: 'var(--text-secondary)',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: 'var(--accent-1)', marginTop: '0.25rem', fontWeight: 600 }}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {tier.note && (
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {tier.note}
        </p>
      )}
      <Link
        href="/contact"
        className={tier.popular ? 'btn btn-primary' : 'btn btn-secondary'}
        style={{
          width: '100%',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'block',
        }}
        onClick={() => trackEvent('request_quote')}
      >
        {tier.cta}
      </Link>
    </div>
  );

  return (
    <div>
      {/* Page Header */}
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
            {t.pricing.title}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {t.pricing.subtitle}
          </p>
        </div>
      </section>

      {/* Landing Pages Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--text)',
            }}
          >
            {t.pricing.landingPages.sectionTitle}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {landingPagesTiers.map((tier, index) => renderPricingCard(tier, index))}
          </div>
        </div>
      </section>

      {/* Websites Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--text)',
            }}
          >
            {t.pricing.websites.sectionTitle}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {websitesTiers.map((tier, index) => renderPricingCard(tier, index))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--text)',
            }}
          >
            {t.pricing.maintenance.sectionTitle}
          </h2>
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            {renderPricingCard(maintenancePlan, 0)}
          </div>
        </div>
      </section>

      {/* Google Ads Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--text)',
            }}
          >
            {t.pricing.googleAds.sectionTitle}
          </h2>
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            {renderPricingCard(googleAdsPlan, 0)}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--text)',
            }}
          >
            {t.pricing.socialMedia.sectionTitle}
          </h2>
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            {renderPricingCard(socialMediaPlan, 0)}
          </div>
        </div>
      </section>
    </div>
  );
}
