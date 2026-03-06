/**
 * 5-Stage Launch System — shared data for home, pricing, and services.
 * Tailored for US product founders (Capitalism.com / Ryan-style clients).
 */

export const STAGE_IDS = ['stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5'] as const;
export type StageId = (typeof STAGE_IDS)[number];

export const STAGE_OPTIONS_FORM = [
  { value: 'stage-1', label: 'Stage 1: Validation & The First 100' },
  { value: 'stage-2', label: 'Stage 2: Traffic & Data Testing' },
  { value: 'stage-3', label: 'Stage 3: The Launch Store & Reviews' },
  { value: 'stage-4', label: 'Stage 4: 25 Sales/Day Engine' },
  { value: 'stage-5', label: 'Stage 5: The Road to $1M' },
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
    title: 'Stage 1: Validation & The First 100',
    whoFor: 'Technical foundation for Steps 1 & 2. Validating The Person and capturing the first 100 emails.',
    deliverables: [
      'High-converting Landing Page',
      'Klaviyo Welcome Flow Setup',
      'Meta/Google Pixel Integration',
      'Lead Capture Analytics',
    ],
    delivery: '7–10 days',
    price: '$800–$1,200',
    cta: 'Start Stage 1',
  },
  {
    id: 'stage-2',
    number: 2,
    title: 'Stage 2: Traffic & Data Testing',
    whoFor: 'Test your offer before ordering heavy inventory. Pure data validation.',
    deliverables: [
      'Meta/Google Ads Setup',
      '10 AI Ad Creatives',
      'A/B Testing (Copy & Audiences)',
      'Exact CPA & Lead Cost Reporting',
    ],
    delivery: '14 days test sprint',
    price: '$1,200–$2,000',
    priceNote: '+ ad spend',
    cta: 'Run a Test Sprint',
  },
  {
    id: 'stage-3',
    number: 3,
    title: 'Stage 3: The Launch Store & Reviews',
    whoFor: 'Infrastructure for Steps 3 & 4. Your main Shopify store optimized for conversions and automated review collection.',
    deliverables: [
      'Multi-page Shopify Store',
      'Loox/Okendo Review Integration',
      'Automated Post-Purchase Email Flow',
      'Page Speed & SEO Basics',
    ],
    delivery: '21–30 days',
    price: '$2,000–$4,000',
    cta: 'Build the Website',
  },
  {
    id: 'stage-4',
    number: 4,
    title: 'Stage 4: 25 Sales/Day Engine',
    whoFor: 'Building the automated machine for Step 5. Consistent traffic acquisition and email retention.',
    deliverables: [
      'AI Video Ads (10–20)',
      'Advanced Retargeting Setup',
      'Klaviyo Upsell & Abandonment (5-7 emails)',
      'Continuous Landing Page CRO',
    ],
    delivery: '30 days',
    price: '$1,500–$3,000',
    cta: 'Launch the Engine',
  },
  {
    id: 'stage-5',
    number: 5,
    title: 'Stage 5: The Road to $1M',
    whoFor: 'Technical execution for Steps 6-8. Affiliate infrastructure, advanced CRO, and multi-product scaling.',
    deliverables: [
      'Ambassador/Affiliate Tech Setup',
      'Custom Analytics Dashboard (LTV/CAC)',
      'Monthly CRO & Speed Optimization',
      'Product Launch Automation',
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
