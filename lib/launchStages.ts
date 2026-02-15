/**
 * 5-Stage Launch System — shared data for home, pricing, and services.
 * Tailored for US product founders (Capitalism.com / Ryan-style clients).
 */

export const STAGE_IDS = ['stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5'] as const;
export type StageId = (typeof STAGE_IDS)[number];

export const STAGE_OPTIONS_FORM = [
  { value: 'stage-1', label: 'Stage 1 — Validation Landing Page' },
  { value: 'stage-2', label: 'Stage 2 — Traffic & Testing' },
  { value: 'stage-3', label: 'Stage 3 — Brand Website' },
  { value: 'stage-4', label: 'Stage 4 — Content & Ads Engine' },
  { value: 'stage-5', label: 'Stage 5 — Scale & Automation' },
  { value: 'not-sure', label: 'Not sure — advise me' },
] as const;

export interface LaunchStage {
  id: StageId | 'not-sure';
  number: number;
  title: string;
  whoFor: string;
  deliverables: string[];
  delivery: string;
  price: string;
  priceNote?: string;
  cta: string;
}

export const LAUNCH_STAGES: LaunchStage[] = [
  {
    id: 'stage-1',
    number: 1,
    title: 'Validation Landing Page',
    whoFor: 'Founders validating an idea or pre-launch product',
    deliverables: [
      'High-converting landing page',
      'Conversion-focused copy',
      'Email capture (Brevo / Klaviyo / Supabase)',
      'Basic analytics',
      '1 revision',
    ],
    delivery: '7–10 days',
    price: '$800–$1,200',
    cta: 'Start Stage 1',
  },
  {
    id: 'stage-2',
    number: 2,
    title: 'Traffic & Testing',
    whoFor: 'Founders ready to test demand with paid traffic',
    deliverables: [
      'Meta/Google ads setup',
      '10 AI creatives',
      'A/B test plan',
      'Tracking & attribution',
      'Weekly report',
    ],
    delivery: '14 days test sprint',
    price: '$1,200–$2,000',
    priceNote: '+ ad spend',
    cta: 'Run a Test Sprint',
  },
  {
    id: 'stage-3',
    number: 3,
    title: 'Brand Website',
    whoFor: 'Founders scaling with a full brand presence',
    deliverables: [
      'Multi-page website',
      'SEO basics',
      'Performance optimization',
      'CMS/blog (optional)',
      '2 revisions',
    ],
    delivery: '21–30 days',
    price: '$2,000–$4,000',
    cta: 'Build the Website',
  },
  {
    id: 'stage-4',
    number: 4,
    title: 'Content & Ads Engine',
    whoFor: 'Founders scaling acquisition with content and retargeting',
    deliverables: [
      'AI video ads (10–20)',
      'Retargeting setup',
      'Email sequence (5–7 emails)',
      'Landing optimization',
    ],
    delivery: '30 days',
    price: '$1,500–$3,000',
    cta: 'Launch the Engine',
  },
  {
    id: 'stage-5',
    number: 5,
    title: 'Scale & Automation',
    whoFor: 'Founders ready for ongoing optimization and growth',
    deliverables: [
      'CRO (conversion rate optimization)',
      'Analytics dashboard',
      'Automation flows',
      'Monthly optimization',
    ],
    delivery: 'Ongoing (monthly)',
    price: 'Custom',
    priceNote: 'from $1,000/mo',
    cta: 'Talk Scaling',
  },
];

/** Fragment for proposal form scroll target on home */
export const REQUEST_PROPOSAL_ID = 'request-proposal';

/** Base path for contact page with stage query */
export function contactUrlWithStage(stage: string): string {
  return `/contact?stage=${encodeURIComponent(stage)}`;
}

/** Home page hash + query for scrolling to form with stage preselected */
export function homeProposalUrl(stage: string): string {
  return `/?stage=${encodeURIComponent(stage)}#${REQUEST_PROPOSAL_ID}`;
}
