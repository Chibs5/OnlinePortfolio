import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';
import { profile, navItems } from '@/data/profile';

/** Tracks which section is in view to highlight the matching nav link. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const socialLinks = [
  { href: profile.socials.github, label: 'GitHub', Icon: Github },
  { href: profile.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
  { href: profile.resumeUrl, label: 'Résumé', Icon: FileText },
];

export function Sidebar() {
  const active = useActiveSection(navItems.map((n) => n.id));

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:max-w-md lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a href="#top" className="group inline-block">
          <h1 className="text-4xl font-bold tracking-tight text-ink-100 sm:text-5xl">
            {profile.name}
          </h1>
        </a>
        <h2 className="mt-3 text-lg font-medium text-ink-200">{profile.headline}</h2>
        <p className="mt-4 max-w-xs leading-relaxed text-ink-400">
          {profile.tagline}
        </p>

        <p className="mono mt-5 flex items-center gap-2 text-sm text-ink-400">
          <MapPin size={15} strokeWidth={1.75} className="text-accent" />
          {profile.location}
        </p>

        {/* Primary CTAs */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-navy-600 px-5 py-2.5 text-sm font-semibold text-ink-200 transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        {/* In-page nav — desktop only (playbook: Chiang-style static left nav) */}
        <nav className="mt-16 hidden lg:block" aria-label="In-page">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-3 py-1"
                  >
                    <span
                      className={`h-px transition-all duration-200 ${
                        isActive
                          ? 'w-14 bg-accent'
                          : 'w-8 bg-navy-600 group-hover:w-14 group-hover:bg-ink-300'
                      }`}
                    />
                    <span
                      className={`mono text-sm uppercase tracking-widest transition-colors ${
                        isActive
                          ? 'text-ink-100'
                          : 'text-ink-400 group-hover:text-ink-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social rail */}
      <ul className="mt-8 flex items-center gap-5 lg:mt-0">
        {socialLinks.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="block text-ink-400 transition-colors hover:text-accent"
            >
              <Icon size={22} strokeWidth={1.75} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
