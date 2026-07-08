import { Head } from 'vite-react-ssg';
import { profile } from '@/data/profile';

const title = `${profile.name} — Software Engineer with a QA & IT-support background`;
const description =
  'Chibwe Musendeka is a software engineer in Ndola, Zambia who builds reliable software across the stack, works comfortably across a range of programming languages and frameworks, and brings a QA and IT-support background. See projects, experience, and skills.';
const ogImage = `${profile.siteUrl}/og-image.png`;

// JSON-LD structured data (playbook §4): Person + WebSite
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: profile.name,
      url: profile.siteUrl,
      jobTitle: 'Software Engineer',
      email: `mailto:${profile.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ndola',
        addressCountry: 'ZM',
      },
      sameAs: [profile.socials.github, profile.socials.linkedin],
      knowsAbout: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'React', 'Node.js', 'Quality Assurance', 'IT Support'],
    },
    {
      '@type': 'WebSite',
      name: `${profile.name} — Portfolio`,
      url: profile.siteUrl,
    },
  ],
};

export function SEO() {
  return (
    <Head>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={profile.siteUrl} />
      <meta name="author" content={profile.name} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={profile.siteUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={profile.name} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
