import { Section } from './Section';
import { Reveal } from './motion/Reveal';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <Section id="projects" num="03" title="Featured Projects">
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={Math.min(i * 0.06, 0.24)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
