import { SEO } from './components/SEO';
import { Spotlight } from './components/Spotlight';
import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <SEO />
      <Spotlight />

      {/* Skip link for keyboard/screen-reader users */}
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
      >
        Skip to projects
      </a>

      <div id="top" className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar />
          <main id="content" className="w-full pt-12 lg:w-[54%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
