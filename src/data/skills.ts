export type Tier = 'Proficient' | 'Working' | 'Familiar';

export interface SkillGroup {
  category: string;
  skills: { name: string; tier: Tier }[];
}

// Playbook §3: grouped + tiered, honest, scannable — not a 40-item buzzword cloud.
export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', tier: 'Proficient' },
      { name: 'JavaScript', tier: 'Proficient' },
      { name: 'HTML & CSS', tier: 'Proficient' },
      { name: 'Tailwind CSS', tier: 'Working' },
      { name: 'TypeScript', tier: 'Working' },
      { name: 'Framer Motion', tier: 'Working' },
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      { name: 'Python', tier: 'Proficient' },
      { name: 'PHP', tier: 'Working' },
      { name: 'MySQL', tier: 'Proficient' },
      { name: 'Java', tier: 'Working' },
      { name: 'Firebase', tier: 'Working' },
      { name: 'C++', tier: 'Familiar' },
    ],
  },
  {
    category: 'QA & Testing',
    skills: [
      { name: 'Test case design', tier: 'Proficient' },
      { name: 'Defect tracking', tier: 'Proficient' },
      { name: 'UAT coordination', tier: 'Proficient' },
      { name: 'Data validation (SQL)', tier: 'Proficient' },
      { name: 'ERP testing', tier: 'Working' },
    ],
  },
  {
    category: 'Tools & Support',
    skills: [
      { name: 'Git & GitHub', tier: 'Proficient' },
      { name: 'IT Support', tier: 'Proficient' },
      { name: 'Database Administration', tier: 'Working' },
      { name: 'Linux servers', tier: 'Working' },
      { name: 'Tableau', tier: 'Familiar' },
    ],
  },
];

export const tierLegend: { tier: Tier; label: string }[] = [
  { tier: 'Proficient', label: 'Use daily, can discuss deeply' },
  { tier: 'Working', label: 'Comfortable, shipped real work' },
  { tier: 'Familiar', label: 'Hands-on, still growing' },
];
