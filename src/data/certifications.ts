export interface Certification {
  name: string;
  issuer: string;
  status: string;
  // TODO(Chibwe): add credential verification URLs where you have them
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Meta Database Engineer Professional Certificate',
    issuer: 'Meta · Coursera',
    status: 'In progress',
  },
  {
    name: 'Google IT Support Professional Certificate',
    issuer: 'Google · Coursera',
    status: 'In progress',
  },
  {
    name: 'Google IT Automation with Python Professional Certificate',
    issuer: 'Google · Coursera',
    status: 'In progress',
  },
];

export interface EducationItem {
  qualification: string;
  institution: string;
  location: string;
  date: string;
}

export const education: EducationItem[] = [
  {
    qualification: 'Bachelor of Software Engineering',
    institution: 'Zambia University College of Technology',
    location: 'Ndola',
    date: 'Oct 2024',
  },
];
