import { Section } from './Section';
import { Reveal } from './motion/Reveal';
import { aboutParagraphs, coreTech } from '@/data/profile';

export function About() {
  return (
    <Section id="about" num="01" title="About">
      <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="space-y-4 leading-relaxed text-ink-300">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} as="div" delay={i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}

          <Reveal>
            <div className="pt-2">
              <p className="mono mb-3 text-sm uppercase tracking-widest text-ink-400">
                Core tech I reach for
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-200">
                {coreTech.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-accent">▸</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Headshot — playbook: a professional headshot boosts credibility.
            TODO(Chibwe): drop headshot.webp into /public and it appears here. */}
        <Reveal>
          <figure className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-44">
            <div className="group relative">
              <img
                src="/headshot.jpg"
                alt="Chibwe Musendeka"
                loading="lazy"
                width={176}
                height={176}
                className="relative z-10 aspect-square w-full rounded-lg object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                onError={(e) => {
                  // Graceful placeholder until a real headshot is added
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden aspect-square w-full items-center justify-center rounded-lg border border-dashed border-navy-600 bg-navy-800 text-center text-xs text-ink-400">
                Add /public/headshot.jpg
              </div>
              <span className="absolute inset-0 z-0 translate-x-3 translate-y-3 rounded-lg border border-accent/60" />
            </div>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
