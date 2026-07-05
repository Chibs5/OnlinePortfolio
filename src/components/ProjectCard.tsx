import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, problem, approach, solution, impact, stack, image, liveUrl, repoUrl } =
    project;

  return (
    <article className="group grid gap-6 rounded-xl border border-transparent p-4 transition-colors hover:border-navy-700 hover:bg-navy-800/50 sm:grid-cols-[220px_1fr] sm:gap-7 sm:p-6">
      {/* Screenshot / GIF (playbook: each project needs a visual) */}
      <div className="relative overflow-hidden rounded-lg border border-navy-700">
        <img
          src={image}
          alt={`${name} screenshot`}
          loading="lazy"
          width={440}
          height={280}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = 'none';
            el.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden aspect-[16/10] w-full items-center justify-center bg-navy-800 p-4 text-center text-xs text-ink-400">
          Add {image}
        </div>
      </div>

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
