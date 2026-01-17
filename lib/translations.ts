export type Language = 'en' | 'ro';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      social: 'Social',
    },
    footer: {
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms',
      cookiePolicy: 'Cookie Policy',
      disclaimer: 'Disclaimer',
      romania: 'Romania',
      usa: 'USA',
      contact: 'Contact',
      followUs: 'Follow Us',
    },
    home: {
      hero: {
        headline: 'Transform Your Digital Presence',
        subheadline: 'Premium web design, SEO, and marketing solutions that drive real results',
        ctaConsultation: 'Get a Free Consultation',
        ctaPortfolio: 'View Portfolio',
        trust: '150+ Projects • 4.9/5',
      },
      services: {
        title: 'Our Services',
        webDesign: {
          title: 'Web Design',
          description: 'Custom websites built for speed and conversions',
        },
        landingPages: {
          title: 'Landing Pages',
          description: 'High-converting pages that turn visitors into customers',
        },
        seo: {
          title: 'Advanced SEO',
          description: 'Rank higher and drive organic traffic to your business',
        },
        marketing: {
          title: 'Digital Marketing',
          description: 'Strategic campaigns that maximize your ROI',
        },
      },
      results: {
        title: 'Results That Matter',
        leads: '+83% Leads',
        cpa: '-45% CPA',
        cta: 'View Portfolio',
      },
      cta: {
        title: 'Ready to Get Started?',
        subtitle: 'Get a custom quote for your project',
        name: 'Name',
        email: 'Email',
        projectType: 'Project Type',
        submit: 'Get Offer',
        success: 'Thank you! We\'ll be in touch soon.',
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Choose your preferred way to contact us',
      whatsapp: 'WhatsApp',
      email: 'Email',
      telegram: 'Telegram',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
    },
    pricing: {
      title: 'Pricing Plans',
      subtitle: 'Choose the plan that fits your needs',
      launch: {
        name: 'Launch',
        description: 'Perfect for startups and small businesses',
        cta: 'Request Quote',
      },
      growth: {
        name: 'Growth',
        description: 'Ideal for growing businesses',
        cta: 'Request Quote',
        popular: 'Most Popular',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Custom solutions for large organizations',
        cta: 'Request Quote',
      },
    },
  },
  ro: {
    nav: {
      home: 'Acasă',
      services: 'Servicii',
      portfolio: 'Portofoliu',
      pricing: 'Prețuri',
      about: 'Despre',
      contact: 'Contact',
      social: 'Social',
    },
    footer: {
      legal: 'Legal',
      privacyPolicy: 'Politica de Confidențialitate',
      terms: 'Termeni',
      cookiePolicy: 'Politica de Cookie-uri',
      disclaimer: 'Disclaimer',
      romania: 'România',
      usa: 'SUA',
      contact: 'Contact',
      followUs: 'Urmărește-ne',
    },
    home: {
      hero: {
        headline: 'Transformă Prezența Ta Digitală',
        subheadline: 'Soluții premium de design web, SEO și marketing care aduc rezultate reale',
        ctaConsultation: 'Obține Consultație Gratuită',
        ctaPortfolio: 'Vezi Portofoliu',
        trust: '150+ Proiecte • 4.9/5',
      },
      services: {
        title: 'Serviciile Noastre',
        webDesign: {
          title: 'Design Web',
          description: 'Site-uri personalizate construite pentru viteză și conversii',
        },
        landingPages: {
          title: 'Pagini de Destinație',
          description: 'Pagini cu conversii ridicate care transformă vizitatori în clienți',
        },
        seo: {
          title: 'SEO Avansat',
          description: 'Clasează-te mai sus și atrage trafic organic către afacerea ta',
        },
        marketing: {
          title: 'Marketing Digital',
          description: 'Campanii strategice care maximizează ROI-ul tău',
        },
      },
      results: {
        title: 'Rezultate Care Contează',
        leads: '+83% Lead-uri',
        cpa: '-45% CPA',
        cta: 'Vezi Portofoliu',
      },
      cta: {
        title: 'Gata să Începi?',
        subtitle: 'Obține o ofertă personalizată pentru proiectul tău',
        name: 'Nume',
        email: 'Email',
        projectType: 'Tip Proiect',
        submit: 'Obține Ofertă',
        success: 'Mulțumim! Vom lua legătura în curând.',
      },
    },
    contact: {
      title: 'Ia Legătura',
      subtitle: 'Alege modul preferat de a ne contacta',
      whatsapp: 'WhatsApp',
      email: 'Email',
      telegram: 'Telegram',
      form: {
        name: 'Nume',
        email: 'Email',
        message: 'Mesaj',
        submit: 'Trimite Mesaj',
      },
    },
    pricing: {
      title: 'Planuri de Prețuri',
      subtitle: 'Alege planul care se potrivește nevoilor tale',
      launch: {
        name: 'Lansare',
        description: 'Perfect pentru startup-uri și afaceri mici',
        cta: 'Cere Ofertă',
      },
      growth: {
        name: 'Creștere',
        description: 'Ideal pentru afaceri în creștere',
        cta: 'Cere Ofertă',
        popular: 'Cel Mai Popular',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Soluții personalizate pentru organizații mari',
        cta: 'Cere Ofertă',
      },
    },
  },
} as const;

export function getTranslation(lang: Language) {
  return translations[lang];
}

export function getDefaultLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('language') as Language | null;
  return stored && (stored === 'en' || stored === 'ro') ? stored : 'en';
}
