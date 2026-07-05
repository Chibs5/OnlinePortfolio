export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  // Impact-focused bullets, reframed in software-engineering language (playbook §3)
  points: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'QA & IT Support Specialist',
    company: 'Reeluka Investments LTD',
    location: 'Ndola',
    start: 'Sep 2025',
    end: 'Present',
    points: [
      'Own quality assurance and stability of an enterprise ERP across HR, Payroll, Finance, Procurement, and CRM modules.',
      'Design, execute, and document structured test cases validating integrated workflows against functional and technical requirements.',
      'Track, analyse, and escalate defects with reproducible reports, driving timely resolutions with dev and implementation teams.',
      'Automate repetitive test processes and use SQL data validation to protect data integrity and reporting accuracy.',
    ],
    tags: ['QA / Testing', 'ERP', 'SQL', 'UAT', 'Defect tracking'],
  },
  {
    role: 'IT Technician Intern',
    company: 'National Prosecution Authority',
    location: 'Lusaka',
    start: 'Aug 2025',
    end: 'Aug 2025',
    points: [
      'Built custom in-house applications on self-hosted Linux servers, owning the full lifecycle from requirements to maintenance.',
      'Monitored organisational website performance and security, maintaining 99%+ uptime.',
      'Resolved hardware, software, and network connectivity issues to keep downtime minimal.',
    ],
    tags: ['Linux', 'Web apps', 'Security', 'IT Support'],
  },
  {
    role: 'Software Developer (Part-Time)',
    company: 'TechSpotDev',
    location: 'Remote (US EST)',
    start: 'Jun 2025',
    end: 'Jul 2025',
    points: [
      'Delivered full-cycle software development assignments to client spec on daily/weekly review cycles across US Eastern hours.',
      'Worked under NDA on confidential projects, keeping all code and details proprietary to the client.',
      'Maintained tight communication and time management to meet agreed deadlines and quality expectations.',
    ],
    tags: ['Remote', 'Full-cycle dev', 'Client delivery'],
  },
  {
    role: 'Digitization Assistant',
    company: 'Daproim Africa (PACRA)',
    location: 'Lusaka',
    start: 'Jan 2025',
    end: 'May 2025',
    points: [
      'Digitised and indexed physical records with high accuracy against strict quality standards.',
      'Performed quality-control checks on scanned files, resolving issues and escalating complex cases.',
    ],
    tags: ['Data quality', 'QC', 'Process'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Nilandi Web Services',
    location: 'Lusaka (Hybrid)',
    start: 'Jul 2024',
    end: 'Oct 2024',
    points: [
      'Contributed across the full web development lifecycle, front-end and back-end, on multiple client projects.',
      'Built and enhanced sites with HTML, CSS, and WordPress — customising themes, plugins, and CMS to client needs.',
      'Shipped features that improved responsiveness and accessibility, lifting user engagement; fixed cross-browser bugs.',
    ],
    tags: ['HTML/CSS', 'WordPress', 'UX', 'Cross-browser'],
  },
  {
    role: 'IT Support Technician Intern',
    company: 'ZESCO Limited',
    location: 'Kitwe',
    start: 'Feb 2024',
    end: 'May 2024',
    points: [
      'First point of contact for end-user IT support, ensuring business continuity for critical Business Information Systems.',
      'Diagnosed and resolved application, email, and network issues; empowered users with step-by-step guidance.',
      'Installed, configured, and maintained hardware in compliance with internal IT and licensing policies.',
    ],
    tags: ['IT Support', 'Troubleshooting', 'BIS'],
  },
];
