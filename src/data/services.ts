export interface Service {
  slug: string;
  title: string;
  category: 'graphic-design' | 'websites-funnels';
  short: string;
  bullets: string[];
  outcomes: string[];
  faqs: { question: string; answer: string; }[];
}

export const services: Service[] = [
  // Graphic Design Services
  {
    slug: 'logo-branding',
    title: 'Logo & Brand Identity Design',
    category: 'graphic-design',
    short: 'Create a memorable brand identity with professional logo design and complete brand guidelines.',
    bullets: [
      'Custom logo design with 3 initial concepts',
      'Complete brand guidelines document',
      'Color palette and typography selection',
      'Business card and letterhead design',
      'Vector files (AI, EPS) and web formats (PNG, SVG)',
      'Unlimited revisions until perfect'
    ],
    outcomes: [
      'Professional brand identity that stands out',
      'Consistent visual messaging across all materials',
      'Increased brand recognition and trust',
      'Files ready for print and digital use'
    ],
    faqs: [
      {
        question: 'How long does logo design take?',
        answer: 'Typically 5-7 business days from initial consultation to final files. Rush delivery available for urgent projects.'
      },
      {
        question: 'What file formats do I receive?',
        answer: 'You\'ll receive vector files (AI, EPS), high-resolution PNGs, SVGs for web, and a brand guidelines PDF.'
      },
      {
        question: 'Do you offer trademark research?',
        answer: 'We provide basic trademark screening, but recommend professional trademark search for comprehensive protection.'
      }
    ]
  },
  {
    slug: 'flyers-social',
    title: 'Flyers & Social Media Graphics',
    category: 'graphic-design',
    short: 'Eye-catching marketing materials and social media graphics that get your message noticed.',
    bullets: [
      'Custom flyer and poster designs',
      'Social media post templates (Instagram, Facebook, LinkedIn)',
      'Story templates and highlight covers',
      'Print-ready and web-optimized versions',
      'Multiple size variations included',
      'Source files for future edits'
    ],
    outcomes: [
      'Higher engagement on social media',
      'Professional marketing materials for events',
      'Consistent brand presence across platforms',
      'Templates for ongoing content creation'
    ],
    faqs: [
      {
        question: 'What social media platforms do you design for?',
        answer: 'We create graphics for Instagram, Facebook, LinkedIn, Twitter, and any custom dimensions you need.'
      },
      {
        question: 'Can I get templates for future use?',
        answer: 'Yes! We provide editable templates so you can create consistent content using your brand elements.'
      },
      {
        question: 'Do you handle printing?',
        answer: 'We provide print-ready files with bleed and trim marks. We can recommend trusted print partners if needed.'
      }
    ]
  },
  {
    slug: 'business-cards-print',
    title: 'Business Cards & Print Materials',
    category: 'graphic-design',
    short: 'Professional print materials that make lasting impressions and reinforce your brand.',
    bullets: [
      'Custom business card design',
      'Brochure and catalog layouts',
      'Trade show banners and signage',
      'Print-ready files with bleeds',
      'Paper and finish recommendations',
      'Bulk printing coordination available'
    ],
    outcomes: [
      'Professional first impressions at networking events',
      'High-quality marketing collateral for sales',
      'Cohesive brand experience across all touchpoints',
      'Print materials that drive action'
    ],
    faqs: [
      {
        question: 'What print specifications do you follow?',
        answer: 'We design to industry standards with proper bleeds, safe zones, and color profiles (CMYK for print).'
      },
      {
        question: 'Can you coordinate printing services?',
        answer: 'Yes! We work with trusted print partners and can manage the entire process from design to delivery.'
      },
      {
        question: 'What paper options do you recommend?',
        answer: 'We\'ll recommend paper weights, finishes, and specialty options based on your budget and brand image.'
      }
    ]
  },

  // Websites & Funnels Services
  {
    slug: 'astro-website-build',
    title: 'Custom Astro Website Development',
    category: 'websites-funnels',
    short: 'Fast, modern websites built with Astro for optimal performance and SEO.',
    bullets: [
      'Custom Astro website development',
      'Mobile-responsive design',
      'SEO optimization built-in',
      'Lightning-fast page loads',
      'Contact forms and lead capture',
      'Google Analytics integration'
    ],
    outcomes: [
      'Professional online presence that converts',
      'Top search engine rankings',
      'Fast loading speeds that retain visitors',
      'Mobile-friendly experience for all users'
    ],
    faqs: [
      {
        question: 'Why choose Astro over WordPress?',
        answer: 'Astro sites are faster, more secure, and have better SEO out of the box. No plugins needed for basic functionality.'
      },
      {
        question: 'How long does website development take?',
        answer: 'Simple sites: 1-2 weeks. Complex sites with custom features: 3-4 weeks. Timeline depends on content readiness.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes! We offer maintenance packages for updates, security, and performance optimization.'
      }
    ]
  },
  {
    slug: 'hosting-domain-setup',
    title: 'Website Hosting & Domain Setup',
    category: 'websites-funnels',
    short: 'Complete hosting solution with domain registration, SSL, and performance optimization.',
    bullets: [
      'Domain registration and setup',
      'Fast, reliable hosting infrastructure',
      'SSL certificate installation',
      'Email accounts setup',
      'Backup and security monitoring',
      '99.9% uptime guarantee'
    ],
    outcomes: [
      'Reliable website performance 24/7',
      'Professional email addresses',
      'Secure, encrypted connections',
      'Peace of mind with automated backups'
    ],
    faqs: [
      {
        question: 'What hosting infrastructure do you use?',
        answer: 'We use enterprise-grade cloud hosting with global CDN for optimal performance worldwide.'
      },
      {
        question: 'Is domain registration included?',
        answer: 'Domain registration can be included in hosting packages. We handle all technical setup and configuration.'
      },
      {
        question: 'What kind of support do you provide?',
        answer: 'We provide technical support for hosting issues, with response times under 24 hours for urgent matters.'
      }
    ]
  },
  {
    slug: 'simple-lead-funnel',
    title: 'Simple Lead Generation Funnels',
    category: 'websites-funnels',
    short: 'Convert visitors into leads with optimized landing pages and automated follow-up sequences.',
    bullets: [
      'High-converting landing page design',
      'Lead magnet creation and delivery',
      'Email automation setup',
      'Thank you pages and sequences',
      'Analytics and conversion tracking',
      'A/B testing and optimization'
    ],
    outcomes: [
      'Higher conversion rates from website traffic',
      'Automated lead nurturing sequences',
      'Clear ROI tracking and reporting',
      'Scalable lead generation system'
    ],
    faqs: [
      {
        question: 'What email platforms do you integrate with?',
        answer: 'We work with popular platforms like Mailchimp, ConvertKit, and ActiveCampaign for seamless integration.'
      },
      {
        question: 'How do you optimize conversion rates?',
        answer: 'We use proven design principles, compelling copy, and A/B testing to continuously improve performance.'
      },
      {
        question: 'Can you create lead magnets?',
        answer: 'Yes! We design PDFs, checklists, templates, and other valuable resources to attract quality leads.'
      }
    ]
  }
];
