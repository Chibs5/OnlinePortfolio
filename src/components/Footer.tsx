import { profile } from '@/data/profile';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-navy-800 pt-8 pb-10 text-sm text-ink-400">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono">
          Built by {profile.name} · React, Vite &amp; Tailwind · Deployed on Netlify
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
              <Github size={18} />
            </a>
          </li>
          <li>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
              <Linkedin size={18} />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent">
              <Mail size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
