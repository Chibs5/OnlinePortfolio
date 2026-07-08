export const profile = {
  name: 'Chibwe Musendeka',
  // Playbook §1: specific role headline, not "passionate developer"
  headline: 'Software Engineer with a QA & IT-support backbone',
  // One-line value proposition
  tagline:
    'I build reliable software across the stack and because I came up through QA and IT support, I know how to test, debug, and support it in production.',
  location: 'Ndola, Zambia',
  email: 'chibwemusendeka@gmail.com',
  phone: '+260 967 528 035',

  // TODO(Chibwe): replace with your real profile URLs
  socials: {
    github: 'https://github.com/Chibs5',
    linkedin: 'https://www.linkedin.com/in/chibwe-musendeka-25aa0220a',
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
  "I'm a software engineer based in Ndola, Zambia. I enjoy building reliable software across the stack and picking the right language for the problem. I work comfortably with a number of programming languages and frameworks, and I'm always willing to learn more. Because I came up through QA and IT support, I don't just ship features, I make sure they actually work in production.",
  "That background is deliberate. Testing enterprise ERP systems, reproducing and documenting defects, and supporting real end-users taught me to write code that's testable, observable, and reliable. I read a feature as much through how it can break as how it should work.",
  "I care about clean, maintainable code, thorough testing, and solving real problems for real users, and I'm always broadening the tools and languages I reach for. Take a look at what I've built below.",
];

// Short list rendered under the About text
export const coreTech = [
  'JavaScript / TypeScript',
  'Python',
  'Java',
  'PHP',
  'React',
  'Node.js',
  'MySQL',
  'Git & GitHub',
];
