import { Section } from './Section';
import { Reveal } from './motion/Reveal';
import { experience } from '@/data/experience';
import { profile } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" num="02" title="Experience">
      <ol className="space-y-3">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.start}`} delay={Math.min(i * 0.05, 0.3)}>
            <div className="group grid rounded-lg p-4 transition-colors hover:bg-navy-800/60 sm:grid-cols-[9rem_1fr] sm:gap-5 sm:p-5">
              <p className="mono mb-2 pt-1 text-xs uppercase tracking-wider text-ink-400 sm:mb-0">
                {job.start} — {job.end}
              </p>
              <div>
                <h3 className="font-semibold text-ink-100">
                  {job.role}
                  <span className="text-accent"> · {job.company}</span>
                </h3>
                <p className="mono mt-0.5 text-xs text-ink-400">{job.location}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-300">
                  {job.points.map((pt, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="mono rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-1.5 font-medium text-ink-100 hover:text-accent"
        >
          View full résumé
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </Reveal>
    </Section>
  );
}
