import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, role, problem, approach, solution, impact, stack, liveUrl, repoUrl } =
    project;

  return (
    <article className="group rounded-xl border border-transparent p-4 transition-colors hover:border-navy-700 hover:bg-navy-800/50 sm:p-6">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink-100">{name}</h3>
          <div className="flex shrink-0 items-center gap-3 pt-1">
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} source code`}
                className="text-ink-400 hover:text-accent"
              >
                <Github size={19} />
              </a>
            ) : null}
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} live demo`}
                className="text-ink-400 hover:text-accent"
              >
                <ExternalLink size={19} />
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-1 text-sm text-ink-300">{tagline}</p>

        {role ? (
          <p className="mono mt-2 text-xs text-ink-400">
            My role — <span className="text-accent">{role}</span>
          </p>
        ) : null}

        <dl className="mt-4 space-y-2.5 text-sm leading-relaxed">
          {(
            [
              ['Problem', problem],
              ['Approach', approach],
              ['Solution', solution],
              ['Impact', impact],
            ] as const
          ).map(([label, text]) => (
            <div key={label} className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-3">
              <dt className="mono text-xs uppercase tracking-wider text-accent">{label}</dt>
              <dd className={label === 'Impact' ? 'text-ink-100' : 'text-ink-300'}>{text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <li
              key={s}
              className="mono rounded-full bg-navy-700/70 px-2.5 py-1 text-xs text-ink-200"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
