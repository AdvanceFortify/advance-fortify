'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const PROPOSAL_HREF = '/#request-proposal';

// ----- Data types -----
type AccordionDetail = { title: string; body: string };
type Variant = {
  name: string;
  price: string;
  delivery?: string;
  includes: string[];
  accordionDetails: AccordionDetail[];
};
type StageData = {
  id: string;
  number: number;
  title: string;
  goal: string;
  delivery: string;
  startingAt: string;
  variants: [Variant, Variant];
};

// ----- Stages data -----
const STAGES: StageData[] = [
  {
    id: 'stage-1',
    number: 1,
    title: 'Validation Landing',
    goal: 'Validate demand with a focused landing page',
    delivery: '1–2 days (A) / 1–4 days (B)',
    startingAt: '$250',
    variants: [
      {
        name: 'Starter Validation',
        price: 'Starting at $250',
        delivery: '1–2 days',
        includes: [
          'High-converting landing page (mobile-first)',
          'Email capture form',
          'Basic analytics',
          '1 revision',
        ],
        accordionDetails: [
          {
            title: 'High-converting landing page (mobile-first)',
            body: 'A single page designed to turn visitors into leads. Mobile-first means it’s built for phones first, then scaled up — where most traffic comes from.',
          },
          {
            title: 'Email capture form',
            body: 'A form that collects emails so you can follow up with leads. We wire it to a provider (e.g. Brevo, Klaviyo) so you own the list.',
          },
          {
            title: 'Basic analytics',
            body: 'We add simple tracking (e.g. page views, form submissions) so you can see how the page performs without complexity.',
          },
          {
            title: '1 revision',
            body: 'One round of changes after the first draft (copy, layout, or visuals) so the page matches your vision before launch.',
          },
        ],
      },
      {
        name: 'Advanced Validation',
        price: 'Starting at $500',
        delivery: '1–4 days',
        includes: [
          'Everything in Starter',
          'Logo creation',
          'Domain setup + DNS',
          'Google Analytics full setup',
          'Conversion tracking',
          'Email system integration',
          '2 revisions',
        ],
        accordionDetails: [
          {
            title: 'Logo creation',
            body: 'A simple, on-brand logo so your validation page looks like a real product, not a placeholder.',
          },
          {
            title: 'Domain setup + DNS',
            body: 'We connect your domain to the page and configure DNS so visitors see your real URL (e.g. yourapp.com).',
          },
          {
            title: 'Google Analytics full setup',
            body: 'Full GA4 setup so you can see traffic sources, behavior, and conversions in one place.',
          },
          {
            title: 'Conversion tracking',
            body: 'Events and goals configured so you know exactly when someone signs up or takes the key action.',
          },
          {
            title: 'Email system integration',
            body: 'Your form is connected to your email tool (e.g. Brevo, Klaviyo) with proper tags so you can automate follow-up.',
          },
          {
            title: '2 revisions',
            body: 'Two rounds of changes so you can refine messaging and layout based on feedback before you drive traffic.',
          },
        ],
      },
    ],
  },
  {
    id: 'stage-2',
    number: 2,
    title: 'Traffic & Testing (21 Days)',
    goal: 'Test demand with paid traffic and data',
    delivery: '21-day testing period',
    startingAt: '$500',
    variants: [
      {
        name: 'Variant A',
        price: 'Starting at $500',
        includes: [
          '21-day testing period',
          'Weekly report',
          'Meta Ads setup',
          'Audience research + targeting',
          '3 ad creatives',
          'Conversion tracking validation',
        ],
        accordionDetails: [
          {
            title: 'Metrics we use (CTR, CPC, CPA, conversion rate)',
            body: 'CTR = click-through rate (how many people click your ad). CPC = cost per click. CPA = cost per acquisition (e.g. per signup). Conversion rate = % of visitors who complete the goal. We use these to decide what’s working.',
          },
          {
            title: 'What the weekly report contains',
            body: 'Spend, impressions, clicks, conversions, and top-performing creatives. We summarize what to double down on and what to pause.',
          },
          {
            title: 'Decision point',
            body: 'After 21 days we review the data together: scale what works, refine the offer, or pivot — no long-term commitment until you see results.',
          },
        ],
      },
      {
        name: 'Variant B',
        price: 'Starting at $1,000',
        includes: [
          'Everything in A',
          'Google Ads setup',
          '6–10 AI creatives (images + short video cutdowns)',
          'A/B testing (headlines / angles / creatives)',
          'Retargeting',
          'Funnel adjustments during testing',
          'Weekly detailed report',
        ],
        accordionDetails: [
          {
            title: 'Metrics we use (CTR, CPC, CPA, conversion rate)',
            body: 'CTR = click-through rate. CPC = cost per click. CPA = cost per acquisition. Conversion rate = % who complete the goal. We track these across Meta and Google to compare channels.',
          },
          {
            title: 'What the weekly report contains',
            body: 'Channel breakdown (Meta vs Google), creative performance, A/B test results, and recommendations. More detail so you can see exactly where to invest.',
          },
          {
            title: 'Decision point',
            body: 'After 21 days we decide: scale the winning channel, rebalance budget, or refine the funnel. You get a clear recommendation and next steps.',
          },
        ],
      },
    ],
  },
  {
    id: 'stage-3',
    number: 3,
    title: 'Build the Brand (Website)',
    goal: 'Launch your full brand presence online',
    delivery: 'Varies by scope',
    startingAt: '$1,500',
    variants: [
      {
        name: 'Service Website',
        price: 'Starting at $1,500',
        includes: [
          'Home / About / Services / Contact',
          'Lead forms + CTA flow',
          'Mobile-first, speed optimization',
          'Basic SEO structure (titles, meta, schema basics)',
          'Analytics + tracking',
          'Optional blog setup',
        ],
        accordionDetails: [
          {
            title: 'Service site vs sales site',
            body: 'A service website is for businesses that sell time or expertise (consulting, agencies, coaches). It focuses on trust, credibility, and lead capture — not product catalog or checkout.',
          },
        ],
      },
      {
        name: 'Sales Website',
        price: 'Starting at $3,000',
        includes: [
          'Everything in Service Website',
          'Sales funnel pages',
          'Product pages / collections if needed',
          'Checkout integration (Shopify / Woo / Stripe)',
          'Email automations',
          'Conversion optimization elements',
          'Advanced SEO foundations',
        ],
        accordionDetails: [
          {
            title: 'Service site vs sales site',
            body: 'A sales website is for selling products or high-ticket offers. It includes product/offer pages, checkout, and often email automations to nurture and convert. We integrate with your preferred commerce stack.',
          },
        ],
      },
    ],
  },
  {
    id: 'stage-4',
    number: 4,
    title: 'Growth Engine',
    goal: 'Ongoing acquisition and visibility',
    delivery: 'Monthly',
    startingAt: '$1,000/mo',
    variants: [
      {
        name: 'Organic Growth',
        price: 'Starting at $1,000/mo',
        includes: [
          'Keyword map',
          'On-page optimization',
          'Content plan',
          'Technical SEO monitoring',
          'Monthly report',
        ],
        accordionDetails: [
          {
            title: 'What we deliver monthly',
            body: 'Ongoing SEO and content work so you rank for terms that drive leads. We track rankings, traffic, and conversions and report each month.',
          },
        ],
      },
      {
        name: 'Paid + AI Growth',
        price: 'Starting at $2,000/mo',
        includes: [
          'Everything in Organic',
          'AI video ads',
          'Retargeting + scaling',
          '10–20 creatives/month',
          'Funnel + email upgrades',
          'Monthly deep report',
        ],
        accordionDetails: [
          {
            title: 'What “AI video ads” means',
            body: 'Short-form video creatives (e.g. for Meta/Google) produced with AI-assisted tools — fast to iterate, cost-effective, and optimized for performance.',
          },
          {
            title: 'What the monthly deep report includes',
            body: 'Full funnel metrics: traffic, ad performance, email engagement, conversions, and revenue impact. We recommend where to scale or adjust.',
          },
        ],
      },
    ],
  },
  {
    id: 'stage-5',
    number: 5,
    title: 'Scale & Optimize',
    goal: 'Convert and retain at scale',
    delivery: 'Monthly',
    startingAt: '$1,500/mo',
    variants: [
      {
        name: 'CRO & Optimization',
        price: 'Starting at $1,500/mo',
        includes: [
          'Heatmaps + session insights',
          'Landing iterations',
          'Offer / copy improvements',
          'A/B testing plan + results',
        ],
        accordionDetails: [
          {
            title: 'What CRO is',
            body: 'Conversion Rate Optimization: we use data (heatmaps, session recordings, tests) to improve how many visitors take the action you care about — sign up, buy, or book.',
          },
        ],
      },
      {
        name: 'Full Scale System',
        price: 'Starting at $3,000/mo',
        includes: [
          'Everything in CRO',
          'Advanced tracking dashboard',
          'CRM automation + segmentation',
          'Revenue reporting',
          'Scaling strategy + monthly planning',
        ],
        accordionDetails: [
          {
            title: 'Dashboards and automation',
            body: 'A single dashboard (e.g. Looker Studio or custom) that shows revenue, funnel health, and key metrics. We also design CRM flows so the right message reaches the right segment at the right time.',
          },
        ],
      },
    ],
  },
];

const TIMELINE_STEPS = [
  { range: 'Days 1–4', label: 'Stage 1', desc: 'Validation Landing' },
  { range: 'Days 5–25', label: 'Stage 2', desc: '21 days testing' },
  { range: 'Days 26–45', label: 'Stage 3', desc: 'Build the Brand' },
  { range: 'Days 46–60', label: 'Stage 4', desc: 'Growth Engine' },
  { range: 'Ongoing', label: 'Stage 5', desc: 'Scale & Optimize' },
];

const PLATFORM_OPTIONS = [
  {
    id: 'nextjs',
    name: 'Next.js',
    tag: 'Fastest + Premium',
    desc: 'Best for custom UX and performance. Ecommerce requires extra setup.',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    tag: 'Flexible + Content',
    desc: 'Best for content-heavy sites and easy client edits.',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    tag: 'Best for Selling',
    desc: 'Best for checkout, inventory, and ecommerce apps.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Do I need to commit to all stages?',
    a: 'No. Every stage is modular. You can start with Stage 1 only, add Stage 2 when you’re ready to test traffic, or book the full build path. You only pay for what you need, when you need it.',
  },
  {
    q: 'What platform should I choose?',
    a: 'We recommend based on your goals: if you sell products now → Shopify; if you need a service site with lots of content → WordPress; if you want premium custom UX and speed → Next.js. We’ll guide you in the strategy call.',
  },
  {
    q: 'What do you need from me to start Stage 1?',
    a: 'Your offer or product idea, any examples of landing pages or brands you like, and a clear goal (e.g. “collect 100 emails”). We’ll handle the rest.',
  },
  {
    q: 'How do revisions work?',
    a: 'A revision is one round of changes (copy, layout, or visuals) after you review the first draft. We’ll agree on scope up front so there’s no confusion.',
  },
  {
    q: 'What happens after the 21-day test?',
    a: 'We review results together: scale what works (more budget, more creatives), refine the offer or funnel, or pivot. No long-term commitment — you decide the next step based on data.',
  },
];

const NAV_SECTIONS = [
  { id: 'stages', label: 'Stages' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'bundle', label: 'Bundle' },
  { id: 'faq', label: 'FAQ' },
] as const;

function StageCard({
  stage,
  openAccordion,
  setOpenAccordion,
}: {
  stage: StageData;
  openAccordion: string | null;
  setOpenAccordion: (fn: (prev: string | null) => string | null) => void;
}) {
  const isOpen = openAccordion === stage.id;
  return (
    <article className={`sv-stage-card card ${isOpen ? 'sv-stage-card-active' : ''}`}>
      <div className="sv-stage-header">
        <div className="sv-stage-header-glow" aria-hidden="true" />
        <span className="sv-stage-badge">Stage {stage.number}</span>
        <h3 className="sv-stage-title">{stage.title}</h3>
      </div>
      <div className="sv-stage-meta">
        <div className="sv-stage-meta-item">
          <span className="sv-stage-meta-label">Goal</span>
          <span className="sv-stage-meta-value">{stage.goal}</span>
        </div>
        <div className="sv-stage-meta-item">
          <span className="sv-stage-meta-label">Delivery</span>
          <span className="sv-stage-meta-value">{stage.delivery}</span>
        </div>
        <div className="sv-stage-meta-item">
          <span className="sv-stage-meta-label">Starting at</span>
          <span className="sv-stage-meta-value sv-stage-price">{stage.startingAt}</span>
        </div>
      </div>
      <div className="sv-stage-variants">
        {stage.variants.map((variant, vIdx) => (
          <div key={vIdx} className="sv-variant">
            <div className="sv-variant-head">
              <span className="sv-variant-name">{variant.name}</span>
              <span className="sv-variant-price">{variant.price}</span>
              {variant.delivery != null && (
                <span className="sv-variant-delivery">{variant.delivery}</span>
              )}
            </div>
            <ul className="sv-variant-includes">
              {variant.includes.map((inc, i) => (
                <li key={i}>{inc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="sv-stage-accordion-wrap">
        <button
          type="button"
          className="sv-accordion-trigger"
          aria-expanded={openAccordion === stage.id}
          aria-controls={`${stage.id}-details`}
          onClick={() => setOpenAccordion((prev) => (prev === stage.id ? null : stage.id))}
        >
          See Stage Details
        </button>
        <div
          id={`${stage.id}-details`}
          className={`sv-accordion-panel ${openAccordion === stage.id ? 'sv-accordion-open' : ''}`}
          role="region"
          aria-hidden={openAccordion !== stage.id}
        >
          <div className="sv-accordion-inner">
            {stage.variants.map((variant, vIdx) => (
              <div key={vIdx} className="sv-accordion-variant">
                <h4 className="sv-accordion-variant-title">{variant.name}</h4>
                {variant.accordionDetails.map((detail, dIdx) => (
                  <div key={dIdx} className="sv-accordion-detail">
                    <strong>{detail.title}.</strong> {detail.body}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesClient() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('stages');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute('id');
          if (id) setActiveSection(id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sv-page">
      {/* Sticky mini-nav — desktop only */}
      <nav className="sv-nav" aria-label="Page sections">
        <div className="sv-container">
          <div className="sv-nav-inner">
            {NAV_SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`sv-nav-link ${activeSection === id ? 'sv-nav-link-active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="sv-hero">
        <div className="sv-container">
          <p className="sv-hero-kicker">The 5-Stage Launch System</p>
          <h1 className="sv-hero-title">The 5-Stage Launch System</h1>
          <p className="sv-hero-subtitle">
            Start lean. Validate fast. Scale with confidence. Every stage is modular — you only pay for what you need, when you need it.
          </p>
          <div className="sv-hero-ctas">
            <button type="button" className="btn btn-primary" onClick={() => scrollTo('stages')}>
              Explore Stages
            </button>
            <Link href={PROPOSAL_HREF} className="btn btn-secondary">
              Get a Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="sv-section sv-timeline">
        <div className="sv-container">
          <h2 className="sv-section-title">60-Day Launch Plan</h2>
          <ul className="sv-timeline-list">
            {TIMELINE_STEPS.map((step, i) => (
              <li key={step.range} className="sv-timeline-item">
                <span className="sv-timeline-range">{step.range}</span>
                <span className="sv-timeline-label">{step.label}</span>
                <span className="sv-timeline-desc">{step.desc}</span>
              </li>
            ))}
          </ul>
          <p className="sv-timeline-note">
            This roadmap is adaptable — we build based on data, not guesses.
          </p>
        </div>
      </section>

      {/* Stages */}
      <section id="stages" className="sv-section sv-stages">
        <div className="sv-stages-grid-bg" aria-hidden="true" />
        <div className="sv-container sv-stages-container">
          <h2 className="sv-section-title">Stages</h2>
          <div className="sv-stages-grid">
            {STAGES.map((stage) => (
              <StageCard
                key={stage.id}
                stage={stage}
                openAccordion={openAccordion}
                setOpenAccordion={setOpenAccordion}
              />
            ))}
          </div>
        </div>

        {/* Platform Chooser — between Stage 2 and Stage 3 */}
        <div id="platform-chooser" className="sv-platform-wrap">
          <div className="sv-container">
            <h2 className="sv-section-title">Choose Your Build Platform</h2>
            <p className="sv-platform-subtitle">
              We’ll recommend the best option based on your product, speed, and budget. Same process — different foundation.
            </p>
            <div className="sv-platform-grid">
              {PLATFORM_OPTIONS.map((opt) => (
                <div key={opt.id} className="sv-platform-card card">
                  <span className="sv-platform-tag">{opt.tag}</span>
                  <h3 className="sv-platform-name">{opt.name}</h3>
                  <p className="sv-platform-desc">{opt.desc}</p>
                </div>
              ))}
            </div>
            <div className="sv-platform-cheat">
              <p className="sv-platform-cheat-title">Quick decision guide</p>
              <ul>
                <li>If you sell products now → Shopify</li>
                <li>If you need a service site + content → WordPress</li>
                <li>If you want premium custom + speed → Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle */}
      <section id="bundle" className="sv-section sv-bundle">
        <div className="sv-container">
          <h2 className="sv-section-title">Full Launch Bundle</h2>
          <p className="sv-bundle-text">
            Stage 1 + Stage 2 + Stage 3 — Save 10% when you book the full build path.
          </p>
          <div className="sv-bundle-ctas">
            <Link href={PROPOSAL_HREF} className="btn btn-primary">
              Get Bundle Pricing
            </Link>
            <Link href={PROPOSAL_HREF} className="btn btn-secondary">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="sv-section sv-faq">
        <div className="sv-container">
          <h2 className="sv-section-title">FAQ</h2>
          <dl className="sv-faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="sv-faq-item">
                <dt className="sv-faq-q">{item.q}</dt>
                <dd className="sv-faq-a">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <style jsx global>{`
        .sv-page {
          --sv-gold: var(--accent-1);
          --sv-muted: var(--muted);
          --sv-muted2: var(--muted-2);
          --sv-border: var(--border);
          --sv-bg: var(--bg-0);
          --sv-surface: var(--surface);
        }

        .sv-container {
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 1.25rem;
        }
        @media (min-width: 768px) {
          .sv-container {
            padding: 0 2rem;
          }
        }

        .sv-section-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: var(--text);
          margin-bottom: 2.5rem;
          letter-spacing: -0.02em;
        }
        .sv-section-title::before,
        .sv-section-title::after {
          content: '';
          display: inline-block;
          width: 56px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent);
          margin: 0 1rem;
          vertical-align: middle;
        }

        /* Sticky nav */
        .sv-nav {
          display: none;
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--surface);
          border-bottom: 1px solid var(--sv-border);
          padding: 0.75rem 0;
        }
        @media (min-width: 768px) {
          .sv-nav {
            display: block;
          }
        }
        .sv-nav-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }
        .sv-nav-link {
          background: none;
          border: none;
          color: var(--sv-muted2);
          font-size: 0.9375rem;
          font-weight: 500;
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
        }
        .sv-nav-link:hover {
          color: var(--sv-gold);
        }
        .sv-nav-link-active {
          color: var(--sv-gold);
          background: rgba(212, 175, 55, 0.1);
        }

        /* Hero */
        .sv-hero {
          padding: 4rem 0 3rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          .sv-hero {
            padding: 5rem 0 4rem;
          }
        }
        .sv-hero-kicker {
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--sv-gold);
          margin-bottom: 0.75rem;
        }
        .sv-hero-title {
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 700;
          color: var(--text);
          line-height: 1.15;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }
        .sv-hero-subtitle {
          font-size: 1.125rem;
          color: var(--sv-muted);
          max-width: 680px;
          margin: 0 auto 2rem;
          line-height: 1.75;
        }
        .sv-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .sv-hero-ctas .btn {
          text-decoration: none;
        }

        /* Timeline */
        .sv-timeline {
          padding: 6.5rem 0;
          border-top: 1px solid var(--sv-border);
        }
        .sv-timeline-list {
          list-style: none;
          max-width: 520px;
          margin: 0 auto 1.5rem;
        }
        .sv-timeline-item {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0.75rem 1rem;
          align-items: center;
          padding: 0.875rem 0;
          border-bottom: 1px solid var(--sv-border);
          font-size: 1.125rem;
        }
        .sv-timeline-item:last-child {
          border-bottom: none;
        }
        .sv-timeline-range {
          font-weight: 600;
          color: var(--sv-gold);
        }
        .sv-timeline-label {
          color: var(--text);
          font-weight: 600;
        }
        .sv-timeline-desc {
          color: var(--sv-muted2);
        }
        .sv-timeline-note {
          text-align: center;
          font-size: 1rem;
          color: var(--sv-muted2);
          font-style: italic;
        }

        /* Stages grid */
        .sv-stages {
          position: relative;
          padding: 8rem 0;
          isolation: isolate;
        }
        .sv-stages-grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 215, 0, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.04) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .sv-stages-container {
          position: relative;
          z-index: 1;
          max-width: 1360px;
        }
        .sv-stages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 48px;
          row-gap: 7.5rem;
        }
        @media (max-width: 819px) {
          .sv-stages-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
            row-gap: 5rem;
          }
        }
        @media (min-width: 1100px) {
          .sv-stages-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 48px;
            row-gap: 7.5rem;
          }
          .sv-stage-card:nth-child(4) {
            grid-column: 2;
          }
          .sv-stage-card:nth-child(5) {
            grid-column: 3;
          }
        }
        .sv-stage-card {
          padding: 48px 40px;
          border-radius: 20px;
          background: rgba(15, 18, 28, 0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 215, 0, 0.15);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .sv-stage-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 215, 0, 0.2), 0 12px 36px rgba(255, 215, 0, 0.08);
          border-color: rgba(255, 215, 0, 0.28);
        }
        .sv-stage-card-active {
          border-color: rgba(255, 215, 0, 0.22);
          box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.15), 0 8px 24px rgba(255, 215, 0, 0.04);
        }
        .sv-stage-card-active:hover {
          box-shadow: 0 24px 56px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 215, 0, 0.28), 0 12px 36px rgba(255, 215, 0, 0.08);
        }
        .sv-stage-header {
          position: relative;
          margin-bottom: 1.75rem;
        }
        .sv-stage-header-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 120%;
          background: radial-gradient(
            ellipse 70% 60% at 50% 50%,
            rgba(255, 215, 0, 0.08) 0%,
            rgba(255, 215, 0, 0.02) 50%,
            transparent 75%
          );
          pointer-events: none;
          z-index: 0;
        }
        .sv-stage-badge {
          position: relative;
          z-index: 1;
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--sv-gold);
          margin-bottom: 0.5rem;
        }
        .sv-stage-title {
          position: relative;
          z-index: 1;
          font-size: clamp(2rem, 3vw, 2.75rem);
          font-weight: 600;
          color: var(--text);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .sv-stage-meta {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.75rem 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid var(--sv-border);
          font-size: 1rem;
        }
        .sv-stage-meta-label {
          display: block;
          color: var(--sv-muted2);
          margin-bottom: 0.3rem;
          font-size: 0.9375rem;
        }
        .sv-stage-meta-value {
          color: var(--text);
          font-weight: 500;
          font-size: 1rem;
        }
        .sv-stage-meta-item:first-child .sv-stage-meta-value {
          font-size: 1.25rem;
        }
        .sv-stage-price {
          color: var(--sv-gold);
          font-weight: 700;
          font-size: 1.5rem;
        }
        .sv-stage-variants {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .sv-variant {
          padding: 1.5rem 1.25rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 0.625rem;
          border: 1px solid var(--sv-border);
        }
        .sv-variant-head {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem 1rem;
          margin-bottom: 1rem;
        }
        .sv-variant-name {
          font-weight: 600;
          color: var(--text);
          font-size: 1.125rem;
        }
        .sv-variant-price {
          color: var(--sv-gold);
          font-weight: 700;
          font-size: 1.5rem;
        }
        .sv-variant-delivery {
          font-size: 1.0625rem;
          color: var(--sv-muted2);
        }
        .sv-variant-includes {
          margin: 0;
          padding-left: 1.5rem;
          font-size: 1.125rem;
          color: var(--sv-muted);
          line-height: 1.8;
        }
        .sv-variant-includes li {
          margin-bottom: 0.5rem;
        }

        /* Accordion */
        .sv-stage-accordion-wrap {
          position: relative;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          padding-left: 0;
          border-top: 1px solid var(--sv-border);
        }
        .sv-stage-card-active .sv-stage-accordion-wrap {
          padding-left: 14px;
          border-left: 3px solid rgba(255, 215, 0, 0.5);
        }
        .sv-accordion-trigger {
          width: 100%;
          text-align: left;
          background: none;
          border: 1px solid var(--sv-border);
          color: var(--sv-gold);
          font-size: 1rem;
          font-weight: 600;
          padding: 18px 24px;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .sv-accordion-trigger:hover {
          background: rgba(212, 175, 55, 0.08);
          border-color: rgba(212, 175, 55, 0.3);
        }
        .sv-accordion-panel {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out;
        }
        .sv-accordion-panel.sv-accordion-open {
          max-height: 1400px;
          opacity: 1;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in;
        }
        .sv-accordion-inner {
          padding: 1.5rem 0 0;
          font-size: 1.125rem;
          color: var(--sv-muted);
          line-height: 1.75;
        }
        .sv-accordion-variant {
          margin-bottom: 1.5rem;
        }
        .sv-accordion-variant:last-child {
          margin-bottom: 0;
        }
        .sv-accordion-variant-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        .sv-accordion-detail {
          margin-bottom: 0.75rem;
        }
        .sv-accordion-detail strong {
          color: var(--text);
        }

        /* Platform chooser */
        .sv-platform-wrap {
          padding: 6.5rem 0;
          border-top: 1px solid rgba(212, 175, 55, 0.12);
        }
        .sv-platform-subtitle {
          text-align: center;
          color: var(--sv-muted);
          max-width: 600px;
          margin: -0.25rem auto 2.5rem;
          font-size: 1.125rem;
          line-height: 1.7;
        }
        .sv-platform-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        @media (min-width: 640px) {
          .sv-platform-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .sv-platform-card {
          padding: 2rem 1.5rem;
          text-align: center;
        }
        .sv-platform-tag {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--sv-gold);
          display: block;
          margin-bottom: 0.5rem;
        }
        .sv-platform-name {
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        .sv-platform-desc {
          font-size: 1.125rem;
          color: var(--sv-muted);
          line-height: 1.65;
        }
        .sv-platform-cheat {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--sv-border);
          border-radius: 0.75rem;
          padding: 1.5rem 1.75rem;
          max-width: 440px;
          margin: 0 auto;
        }
        .sv-platform-cheat-title {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--sv-gold);
          margin-bottom: 0.5rem;
        }
        .sv-platform-cheat ul {
          margin: 0;
          padding-left: 1.25rem;
          font-size: 1.0625rem;
          color: var(--sv-muted);
          line-height: 1.75;
        }

        /* Bundle */
        .sv-bundle {
          padding: 6.5rem 0;
          border-top: 1px solid rgba(212, 175, 55, 0.12);
          text-align: center;
        }
        .sv-bundle-text {
          font-size: 1.125rem;
          color: var(--sv-muted);
          max-width: 560px;
          margin: 0 auto 2rem;
          line-height: 1.75;
        }
        .sv-bundle-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .sv-bundle-ctas .btn {
          text-decoration: none;
        }

        /* FAQ */
        .sv-faq {
          padding: 6.5rem 0 7rem;
          border-top: 1px solid rgba(212, 175, 55, 0.12);
        }
        .sv-faq-list {
          max-width: 720px;
          margin: 0 auto;
        }
        .sv-faq-item {
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--sv-border);
        }
        .sv-faq-item:last-child {
          border-bottom: none;
        }
        .sv-faq-q {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        .sv-faq-a {
          font-size: 1.125rem;
          color: var(--sv-muted);
          line-height: 1.75;
          margin: 0;
        }

        @media (max-width: 767px) {
          .sv-stages-grid {
            gap: 4rem;
          }
          .sv-section-title {
            font-size: clamp(1.75rem, 5vw, 2.25rem);
          }
          .sv-stage-card {
            padding: 36px 28px;
          }
          .sv-stage-title {
            font-size: clamp(1.75rem, 4.5vw, 2rem);
          }
          .sv-stage-meta-item:first-child .sv-stage-meta-value {
            font-size: 1.125rem;
          }
          .sv-stage-meta-value {
            font-size: 0.9375rem;
          }
          .sv-stage-price {
            font-size: 1.25rem;
          }
          .sv-variant-includes {
            font-size: 1rem;
            line-height: 1.75;
          }
          .sv-stage-card-active .sv-stage-accordion-wrap {
            padding-left: 10px;
            border-left-width: 2px;
          }
          .sv-accordion-trigger {
            font-size: 0.9375rem;
            padding: 14px 20px;
          }
          .sv-timeline,
          .sv-platform-wrap,
          .sv-bundle,
          .sv-faq {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          .sv-faq {
            padding-bottom: 5rem;
          }
        }
      `}</style>
    </div>
  );
}
