export interface RealProject {
  name: string;
  slug: string;
  industry: string;
  location: string;
  tagline: string;
  description: string;
  metric: string;
  tags: string[];
  results: { metric: string; label: string }[];
  timeframe: string;
  features: { title: string; description: string; icon: string }[];
  deliverables: { name: string; items: string[] }[];
  theme: {
    accentColor: string;
    accentColorRGB: string;
    secondaryColor: string;
    gradientStart: string;
    gradientEnd: string;
    buttonBg: string;
    buttonHoverBg: string;
    borderColor: string;
    glowColor: string;
    headingWeight: number;
  };
  heroStyle: 'centered' | 'split' | 'editorial';
}

export const realProjects: RealProject[] = [
  {
    name: 'BrightSmile Dental Clinic',
    slug: 'brightsmile-dental',
    industry: 'Dental / Healthcare',
    location: 'Cluj-Napoca',
    tagline: 'Your Smile, Our Priority',
    description: 'Modern dental care with a focus on patient comfort, cutting-edge technology, and comprehensive oral health solutions.',
    metric: '+42% patient bookings',
    tags: ['Website', 'SEO', 'Local Ads'],
    heroStyle: 'split',
    timeframe: '6 months',
    theme: {
      accentColor: 'rgba(100, 200, 255, 1)',
      accentColorRGB: '100, 200, 255',
      secondaryColor: 'rgba(140, 220, 255, 1)',
      gradientStart: 'rgba(100, 200, 255, 0.2)',
      gradientEnd: 'rgba(140, 220, 255, 0.1)',
      buttonBg: 'linear-gradient(135deg, rgba(100, 200, 255, 1) 0%, rgba(140, 220, 255, 1) 100%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(140, 220, 255, 1) 0%, rgba(100, 200, 255, 1) 100%)',
      borderColor: 'rgba(100, 200, 255, 0.3)',
      glowColor: 'rgba(100, 200, 255, 0.2)',
      headingWeight: 800,
    },
    features: [
      { title: 'General Dentistry', description: 'Comprehensive dental exams, cleanings, fillings, and preventive care for the whole family.', icon: '🦷' },
      { title: 'Cosmetic Treatments', description: 'Teeth whitening, veneers, and smile makeovers to boost your confidence.', icon: '✨' },
      { title: 'Advanced Technology', description: 'Digital X-rays, 3D imaging, and painless procedures with modern equipment.', icon: '🔬' },
      { title: 'Emergency Care', description: 'Same-day appointments for urgent dental issues with compassionate care.', icon: '🚨' },
    ],
    results: [
      { metric: '+42%', label: 'Patient Bookings' },
      { metric: '+38%', label: 'Online Appointments' },
      { metric: '4.9/5', label: 'Patient Satisfaction' },
      { metric: '+28%', label: 'New Patient Inquiries' },
    ],
    deliverables: [
      { name: 'Website', items: ['Responsive design', 'Online booking system', 'Service showcase', 'Team profiles', 'Patient testimonials'] },
      { name: 'SEO & Marketing', items: ['Local SEO optimization', 'Google My Business', 'Content marketing', 'Social media setup'] },
      { name: 'Technical', items: ['HIPAA-compliant forms', 'Fast page speed', 'Mobile optimization', 'Analytics integration'] },
    ],
  },
  {
    name: 'UrbanNest Realty',
    slug: 'urbannest-realty',
    industry: 'Real Estate',
    location: 'Bucharest',
    tagline: 'Find Your Perfect Nest',
    description: 'Premier real estate agency specializing in urban properties, luxury apartments, and investment opportunities across Bucharest.',
    metric: '+35% qualified leads',
    tags: ['Landing Page', 'CRM Integration'],
    heroStyle: 'centered',
    timeframe: '8 months',
    theme: {
      accentColor: 'rgba(255, 140, 80, 1)',
      accentColorRGB: '255, 140, 80',
      secondaryColor: 'rgba(255, 160, 100, 1)',
      gradientStart: 'rgba(255, 140, 80, 0.2)',
      gradientEnd: 'rgba(255, 160, 100, 0.1)',
      buttonBg: 'linear-gradient(135deg, rgba(255, 140, 80, 1) 0%, rgba(255, 160, 100, 1) 100%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(255, 160, 100, 1) 0%, rgba(255, 140, 80, 1) 100%)',
      borderColor: 'rgba(255, 140, 80, 0.3)',
      glowColor: 'rgba(255, 140, 80, 0.2)',
      headingWeight: 700,
    },
    features: [
      { title: 'Property Listings', description: 'Curated selection of apartments, houses, and commercial spaces with detailed information and virtual tours.', icon: '🏢' },
      { title: 'Investment Consulting', description: 'Expert guidance on property investment strategies and market analysis.', icon: '📊' },
      { title: 'Buyer Services', description: 'Personalized property search, negotiation support, and transaction management.', icon: '🤝' },
      { title: 'Seller Support', description: 'Professional photography, staging advice, and marketing strategies to sell faster.', icon: '📸' },
    ],
    results: [
      { metric: '+35%', label: 'Qualified Leads' },
      { metric: '+48%', label: 'Property Inquiries' },
      { metric: '22 days', label: 'Avg. Time to Close' },
      { metric: '+60%', label: 'Website Traffic' },
    ],
    deliverables: [
      { name: 'Website', items: ['Property search filters', 'Interactive map view', 'Virtual tour integration', 'Lead capture forms', 'Agent profiles'] },
      { name: 'CRM Integration', items: ['Automated lead routing', 'Email follow-up sequences', 'Client dashboard', 'Performance tracking'] },
      { name: 'Marketing', items: ['Google Ads campaigns', 'Facebook lead ads', 'Email marketing', 'Content strategy'] },
    ],
  },
  {
    name: 'PeakPhysio Therapy',
    slug: 'peakphysio-therapy',
    industry: 'Physiotherapy / Medical',
    location: 'Timișoara',
    tagline: 'Move Better, Feel Better',
    description: 'Expert physiotherapy and rehabilitation services for sports injuries, chronic pain, and post-surgery recovery.',
    metric: '+18% online bookings',
    tags: ['Website', 'Booking System'],
    heroStyle: 'editorial',
    timeframe: '5 months',
    theme: {
      accentColor: 'rgba(120, 220, 150, 1)',
      accentColorRGB: '120, 220, 150',
      secondaryColor: 'rgba(140, 230, 170, 1)',
      gradientStart: 'rgba(120, 220, 150, 0.2)',
      gradientEnd: 'rgba(140, 230, 170, 0.1)',
      buttonBg: 'linear-gradient(135deg, rgba(120, 220, 150, 1) 0%, rgba(140, 230, 170, 1) 100%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(140, 230, 170, 1) 0%, rgba(120, 220, 150, 1) 100%)',
      borderColor: 'rgba(120, 220, 150, 0.3)',
      glowColor: 'rgba(120, 220, 150, 0.2)',
      headingWeight: 700,
    },
    features: [
      { title: 'Sports Rehabilitation', description: 'Specialized treatment for athletes recovering from injuries and optimizing performance.', icon: '⚽' },
      { title: 'Pain Management', description: 'Evidence-based therapies for chronic pain, back pain, and joint conditions.', icon: '💆' },
      { title: 'Post-Surgery Care', description: 'Comprehensive rehabilitation programs to restore mobility and strength after surgery.', icon: '🩺' },
      { title: 'Preventive Programs', description: 'Injury prevention, posture correction, and wellness assessments.', icon: '🏃' },
    ],
    results: [
      { metric: '+18%', label: 'Online Bookings' },
      { metric: '+32%', label: 'New Patient Referrals' },
      { metric: '95%', label: 'Treatment Success Rate' },
      { metric: '+24%', label: 'Revenue Growth' },
    ],
    deliverables: [
      { name: 'Website', items: ['Service pages with video demos', 'Online booking integration', 'Patient education blog', 'Therapist profiles', 'Insurance information'] },
      { name: 'Booking System', items: ['Real-time availability', 'Automated reminders', 'Patient portal', 'Treatment history'] },
      { name: 'Local SEO', items: ['Google Business optimization', 'Local directory listings', 'Review management', 'Location-based targeting'] },
    ],
  },
  {
    name: 'Casa Verde Bistro',
    slug: 'casaverde-bistro',
    industry: 'Restaurant',
    location: 'Brașov',
    tagline: 'Fresh Flavors, Warm Atmosphere',
    description: 'Farm-to-table dining experience featuring seasonal Romanian cuisine, craft beverages, and a cozy mountain-inspired ambiance.',
    metric: '+28% reservations',
    tags: ['Website', 'Menu Showcase', 'SEO'],
    heroStyle: 'centered',
    timeframe: '4 months',
    theme: {
      accentColor: 'rgba(140, 180, 100, 1)',
      accentColorRGB: '140, 180, 100',
      secondaryColor: 'rgba(160, 200, 120, 1)',
      gradientStart: 'rgba(140, 180, 100, 0.2)',
      gradientEnd: 'rgba(160, 200, 120, 0.1)',
      buttonBg: 'linear-gradient(135deg, rgba(140, 180, 100, 1) 0%, rgba(160, 200, 120, 1) 100%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(160, 200, 120, 1) 0%, rgba(140, 180, 100, 1) 100%)',
      borderColor: 'rgba(140, 180, 100, 0.3)',
      glowColor: 'rgba(140, 180, 100, 0.2)',
      headingWeight: 700,
    },
    features: [
      { title: 'Seasonal Menu', description: 'Rotating dishes featuring local ingredients and traditional recipes with modern twists.', icon: '🍽️' },
      { title: 'Private Events', description: 'Intimate dining spaces for celebrations, business meetings, and special occasions.', icon: '🎉' },
      { title: 'Craft Beverages', description: 'Curated wine selection, local craft beers, and signature cocktails.', icon: '🍷' },
      { title: 'Outdoor Terrace', description: 'Mountain-view seating for al fresco dining in spring and summer.', icon: '🌿' },
    ],
    results: [
      { metric: '+28%', label: 'Reservations' },
      { metric: '+42%', label: 'Online Orders' },
      { metric: '4.8/5', label: 'Customer Rating' },
      { metric: '+35%', label: 'Weekend Bookings' },
    ],
    deliverables: [
      { name: 'Website', items: ['Interactive menu with photos', 'Online reservation system', 'Events calendar', 'Photo gallery', 'Chef story section'] },
      { name: 'Menu Showcase', items: ['Professional food photography', 'Dietary filters (vegan, gluten-free)', 'Seasonal highlights', 'Pairing suggestions'] },
      { name: 'Marketing', items: ['Instagram strategy', 'Google My Business', 'Email campaigns', 'Local food blogger outreach'] },
    ],
  },
  {
    name: 'NorthEdge Marketing',
    slug: 'northedge-marketing',
    industry: 'Marketing Agency',
    location: 'London',
    tagline: 'Data-Driven Growth Strategies',
    description: 'Performance marketing agency specializing in lead generation, conversion optimization, and ROI-focused campaigns for B2B and SaaS companies.',
    metric: '-31% cost per acquisition',
    tags: ['Landing Page', 'Lead Gen', 'Analytics'],
    heroStyle: 'split',
    timeframe: '9 months',
    theme: {
      accentColor: 'rgba(100, 120, 200, 1)',
      accentColorRGB: '100, 120, 200',
      secondaryColor: 'rgba(120, 140, 220, 1)',
      gradientStart: 'rgba(100, 120, 200, 0.2)',
      gradientEnd: 'rgba(120, 140, 220, 0.1)',
      buttonBg: 'linear-gradient(135deg, rgba(100, 120, 200, 1) 0%, rgba(120, 140, 220, 1) 100%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(120, 140, 220, 1) 0%, rgba(100, 120, 200, 1) 100%)',
      borderColor: 'rgba(100, 120, 200, 0.3)',
      glowColor: 'rgba(100, 120, 200, 0.2)',
      headingWeight: 900,
    },
    features: [
      { title: 'Paid Advertising', description: 'Google Ads, LinkedIn, and Facebook campaigns optimized for maximum ROI and lead quality.', icon: '📢' },
      { title: 'Conversion Rate Optimization', description: 'Landing page testing, funnel analysis, and UX improvements to increase conversions.', icon: '📈' },
      { title: 'Marketing Analytics', description: 'Custom dashboards, attribution modeling, and actionable insights from your data.', icon: '📊' },
      { title: 'Content Strategy', description: 'SEO-driven content, thought leadership, and demand generation content calendars.', icon: '✍️' },
    ],
    results: [
      { metric: '-31%', label: 'Cost Per Acquisition' },
      { metric: '+58%', label: 'Qualified Leads' },
      { metric: '3.2x', label: 'ROAS (Return on Ad Spend)' },
      { metric: '+45%', label: 'Conversion Rate' },
    ],
    deliverables: [
      { name: 'Landing Page', items: ['High-conversion design', 'Multi-step lead forms', 'Case study showcase', 'Service package selector', 'Client testimonials'] },
      { name: 'Lead Generation', items: ['Lead magnet funnels', 'Email automation', 'Retargeting campaigns', 'CRM integration'] },
      { name: 'Analytics', items: ['Custom tracking setup', 'Performance dashboard', 'A/B testing framework', 'Monthly reporting'] },
    ],
  },
  {
    name: 'Solara Skincare',
    slug: 'solara-skincare',
    industry: 'E-commerce Beauty',
    location: 'Los Angeles',
    tagline: 'Radiant Skin, Naturally',
    description: 'Clean beauty brand offering vegan, cruelty-free skincare products formulated with plant-based ingredients and sustainable packaging.',
    metric: '+52% conversion rate',
    tags: ['E-commerce', 'Product Pages', 'Ads'],
    heroStyle: 'centered',
    timeframe: '7 months',
    theme: {
      accentColor: 'rgba(255, 180, 200, 1)',
      accentColorRGB: '255, 180, 200',
      secondaryColor: 'rgba(255, 200, 220, 1)',
      gradientStart: 'rgba(255, 180, 200, 0.2)',
      gradientEnd: 'rgba(255, 200, 220, 0.1)',
      buttonBg: 'linear-gradient(135deg, rgba(255, 180, 200, 1) 0%, rgba(255, 200, 220, 1) 100%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(255, 200, 220, 1) 0%, rgba(255, 180, 200, 1) 100%)',
      borderColor: 'rgba(255, 180, 200, 0.3)',
      glowColor: 'rgba(255, 180, 200, 0.2)',
      headingWeight: 600,
    },
    features: [
      { title: 'Clean Ingredients', description: 'All products are vegan, cruelty-free, and free from parabens, sulfates, and artificial fragrances.', icon: '🌸' },
      { title: 'Personalized Routines', description: 'Take our skin quiz to discover the perfect routine for your skin type and concerns.', icon: '✨' },
      { title: 'Sustainable Packaging', description: 'Eco-friendly materials, refillable containers, and carbon-neutral shipping.', icon: '♻️' },
      { title: 'Expert Guidance', description: 'Free consultations with licensed estheticians and comprehensive skincare education.', icon: '💆' },
    ],
    results: [
      { metric: '+52%', label: 'Conversion Rate' },
      { metric: '+68%', label: 'Average Order Value' },
      { metric: '38%', label: 'Repeat Purchase Rate' },
      { metric: '+85%', label: 'Mobile Sales' },
    ],
    deliverables: [
      { name: 'E-commerce Site', items: ['Product catalog with filters', 'Skin quiz tool', 'Subscription options', 'Customer reviews', 'Wishlist and cart'] },
      { name: 'Product Pages', items: ['Lifestyle photography', 'Ingredient breakdowns', 'Usage instructions', 'Before/after galleries', 'Bundle recommendations'] },
      { name: 'Advertising', items: ['Instagram Shopping setup', 'Facebook Ads campaigns', 'Influencer partnerships', 'Email marketing automation'] },
    ],
  },
];
