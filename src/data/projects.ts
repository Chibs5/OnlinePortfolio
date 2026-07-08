export interface Project {
  name: string;
  tagline: string; // one-line snapshot: what it is + who it's for
  role?: string; // my contribution, when I wasn't the sole builder (e.g. QA)
  problem: string;
  approach: string;
  solution: string;
  impact: string;
  stack: string[];
  image?: string; // path under /public — screenshots added later
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

// Playbook §6: Problem -> Approach -> Solution -> Impact. Lead with Next Transit.
export const projects: Project[] = [
  {
    name: 'Next Transit',
    tagline: 'A smart bus-booking platform with real-time seat availability and contactless ticketing.',
    problem:
      'Manual bus-ticket booking was error-prone and offered no real-time seat availability, leading to double-bookings and slow, cash-only queues.',
    approach:
      'Designed a mobile-first booking flow around real-time availability and contactless ticketing, integrating secure payment gateways for mobile money and bank cards.',
    solution:
      'Delivered an integrated booking system with live route information, seamless seat selection, and multi-channel digital payments.',
    impact:
      'Achieved 90% accuracy in contactless ticketing and enabled 95%+ of users to complete payments seamlessly via mobile money or card.',
    stack: ['React', 'Real-time data', 'Payment gateways', 'Mobile money'],
    image: '/projects/next-transit.webp',
    // TODO(Chibwe): add live demo + repo URLs (or mark demo as "source only")
    liveUrl: '',
    repoUrl: '',
    featured: true,
  },
  {
    name: 'MWASUE Investment LTD',
    tagline: 'A responsive brand-and-contact site for a Copperbelt catering company.',
    problem:
      'A growing catering business with a 70+ event client base had no digital presence to showcase services or capture quote requests.',
    approach:
      'Worked directly with the founder to translate brand identity into a fast, responsive site, with EmailJS handling quote requests without a backend.',
    solution:
      'Built a complete responsive site with animated sections, service portfolios, team profiles, WhatsApp integration, and a validated contact form.',
    impact:
      'Delivered the full project lifecycle from planning to deployment, giving the business a professional digital presence and a direct client-enquiry channel.',
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'React Router'],
    image: '/projects/mwasue.webp',
    liveUrl: 'https://mwasue.netlify.app/',
    // TODO(Chibwe): add GitHub repo URL
    repoUrl: '',
    featured: true,
  },
  {
    name: 'WorkCom Connect (WCFB ERP)',
    tagline:
      'A live enterprise ERP platform unifying HR, Payroll, Finance, Procurement, and CRM.',
    role: 'QA & IT Support Specialist',
    problem:
      'This integrated ERP needed rigorous validation and reliable support before and after go-live to protect data integrity across every business module.',
    approach:
      'Authored structured test cases and scenarios across integrated workflows, coordinated UAT sessions, and validated reports with SQL data checks.',
    solution:
      'Delivered end-to-end QA and post-go-live support: tracked and documented defects with clear reproduction steps and severity, and drove them to resolution with the dev team.',
    impact:
      'Improved system reliability and user satisfaction, and streamlined workflows by surfacing and escalating defects before they reached end-users.',
    stack: ['QA / Testing', 'Test cases', 'UAT', 'SQL', 'Defect tracking'],
    image: '/projects/wcfb-erp.webp',
    featured: false,
  },
];
