import { Section } from './Section';
import { Reveal } from './motion/Reveal';
import { certifications, education } from '@/data/certifications';
import { BadgeCheck, GraduationCap, ArrowUpRight } from 'lucide-react';

export function Certifications() {
  return (
    <Section id="certifications" num="05" title="Certifications & Education">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mono mb-4 flex items-center gap-2 text-sm uppercase tracking-widest text-ink-400">
            <BadgeCheck size={16} className="text-accent" /> Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((cert, i) => (
              <Reveal as="li" key={cert.name} delay={Math.min(i * 0.05, 0.2)}>
                <div className="rounded-lg border border-navy-700 bg-navy-800/40 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium text-ink-100">{cert.name}</p>
                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mono shrink-0 text-xs text-accent hover:underline"
                      >
                        Verify <ArrowUpRight size={12} className="inline" />
                      </a>
                    ) : null}
                  </div>
                  <p className="mono mt-1 text-xs text-ink-400">
                    {cert.issuer} · {cert.status}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mono mb-4 flex items-center gap-2 text-sm uppercase tracking-widest text-ink-400">
            <GraduationCap size={16} className="text-accent" /> Education
          </h3>
          <ul className="space-y-3">
            {education.map((ed, i) => (
              <Reveal as="li" key={ed.qualification} delay={Math.min(i * 0.05, 0.2)}>
                <div className="rounded-lg border border-navy-700 bg-navy-800/40 p-4">
                  <p className="font-medium text-ink-100">{ed.qualification}</p>
                  <p className="mono mt-1 text-xs text-ink-400">
                    {ed.institution} · {ed.location} · {ed.date}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
