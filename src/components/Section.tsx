import type { ReactNode } from 'react';
import { Reveal } from './motion/Reveal';

interface SectionProps {
  id: string;
  num: string; // e.g. "01"
  title: string;
  children: ReactNode;
}

export function Section({ id, num, title, children }: SectionProps) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-24 py-16 first:pt-10 lg:py-24">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-4 text-2xl font-semibold text-ink-100">
          <span className="section-num">{num}.</span>
          {title}
          <span className="ml-2 hidden h-px flex-1 bg-navy-700 sm:block" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
