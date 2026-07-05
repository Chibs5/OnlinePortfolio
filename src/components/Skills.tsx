import { Section } from './Section';
import { Reveal } from './motion/Reveal';
import { skillGroups, tierLegend, type Tier } from '@/data/skills';

const tierDot: Record<Tier, string> = {
  Proficient: 'bg-accent',
  Working: 'bg-accent/60',
  Familiar: 'bg-navy-600',
};

export function Skills() {
  return (
    <Section id="skills" num="04" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={Math.min(i * 0.05, 0.2)}>
            <div className="h-full rounded-lg border border-navy-700 bg-navy-800/40 p-5">
              <h3 className="mono mb-4 text-sm uppercase tracking-widest text-accent">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 text-sm">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${tierDot[skill.tier]}`}
                      aria-hidden
                    />
                    <span className="text-ink-200">{skill.name}</span>
                    <span className="mono ml-auto text-xs text-ink-400">{skill.tier}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <ul className="mono mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-400">
          {tierLegend.map(({ tier, label }) => (
            <li key={tier} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${tierDot[tier]}`} aria-hidden />
              <span className="text-ink-300">{tier}</span> — {label}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
