export const profile = {
  name: 'Chibwe Musendeka',
  // Playbook §1: specific role headline, not "passionate developer"
  headline: 'Full-Stack Developer with a QA & IT-support backbone',
  // One-line value proposition
  tagline:
    'I build fast, accessible web apps with React — and because I came up through QA and IT support, I know how to test, debug, and support them in production.',
  location: 'Ndola, Zambia',
  email: 'chibwemusendeka@gmail.com',
  phone: '+260 967 528 035',

  // TODO(Chibwe): replace with your real profile URLs
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-handle',
  },

  // TODO(Chibwe): drop your résumé PDF into /public/resume.pdf
  resumeUrl: '/resume.pdf',

  // Deployed site URL — used for canonical + Open Graph tags.
  // TODO(Chibwe): update once you have a custom domain (e.g. https://chibwe.dev)
  siteUrl: 'https://chibwe-musendeka.netlify.app',
} as const;

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

// About section — first person, ~120 words, ends implicitly with a CTA (playbook p.6)
export const aboutParagraphs = [
  "I'm a full-stack web developer based in Ndola, Zambia. I build fast, accessible web applications with React, Vite, and Tailwind — and because I came up through QA and IT support, I don't just ship features, I make sure they actually work in production.",
  "That background is deliberate. Testing enterprise ERP systems, reproducing and documenting defects, and supporting real end-users taught me to write code that's testable, observable, and reliable. I read a feature as much through how it can break as how it should work.",
  "Recently I built Next Transit, a smart bus-booking platform, and a business site for MWASUE Investment LTD. I care about clean code, thorough testing, and solving real problems for real users.",
];

// Short list rendered under the About text
export const coreTech = [
  'React',
  'JavaScript / TypeScript',
  'Node.js',
  'Python',
  'PHP',
  'MySQL',
  'Tailwind CSS',
  'Git & GitHub',
];
