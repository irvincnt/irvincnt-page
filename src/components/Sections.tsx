import type { Lang, ExperienceItem, ProjectItem } from "@/lib/content";

type AboutProps = {
  lang: Lang;
  description: string;
  title: string;
};

export function About({ lang, description, title }: AboutProps) {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {title}
        </h2>
      </div>
      <div>
        <p className="mb-4 leading-relaxed">{description}</p>
        <p className="mb-4 leading-relaxed">
          {lang === "es"
            ? "Mi enfoque principal en estos días es construir productos accesibles e inclusivos, así como experiencias digitales en Kapitalizer. También disfruto escribir sobre desarrollo web y compartir conocimientos con la comunidad."
            : "My main focus these days is building accessible and inclusive products and digital experiences at Kapitalizer. I also enjoy writing about web development and sharing knowledge with the community."}
        </p>
        <p className="leading-relaxed">
          {lang === "es"
            ? "Cuando no estoy programando, generalmente estoy escalando, jugando tenis, pasando tiempo con mi esposa e hija, o aprendiendo un idioma en Duolingo."
            : "When I'm not coding, I'm usually climbing, playing tennis, hanging out with my wife and daughter, or learning a language on Duolingo."}
        </p>
      </div>
    </section>
  );
}

type ExperienceProps = {
  title: string;
  items: ExperienceItem[];
};

export function Experience({ title, items }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {title}
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {items.map((job) => (
            <li key={`${job.company}-${job.role}`} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {job.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {job.role} · {job.company}
                        </span>
                      </span>
                    </div>
                  </h3>
                  <ul className="mt-2 text-sm leading-normal space-y-2">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2">
                        <span className="text-teal-300 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {job.tech.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

type SkillsProps = {
  title: string;
  groups: Record<string, string[]>;
  lang: Lang;
};

export function Skills({ title, groups, lang }: SkillsProps) {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {title}
        </h2>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-200 mb-3">
            {lang === "es" ? "Lenguajes" : "Languages"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {groups.languages.map((skill) => (
              <span
                key={skill}
                className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-200 mb-3">
            Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {groups.frameworks.map((skill) => (
              <span
                key={skill}
                className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-200 mb-3">
            {lang === "es" ? "Bases de Datos" : "Databases"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {groups.databases.map((skill) => (
              <span
                key={skill}
                className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-200 mb-3">
            {lang === "es" ? "Tecnologías Web" : "Web Technologies"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {groups.technologies.map((skill) => (
              <span
                key={skill}
                className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-200 mb-3">
            {lang === "es" ? "Herramientas" : "Tools"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {groups.tools.map((skill) => (
              <span
                key={skill}
                className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-200 mb-3">
            {lang === "es" ? "Prácticas" : "Practices"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {groups.practices.map((skill) => (
              <span
                key={skill}
                className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border-0"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ProjectsProps = {
  title: string;
  items: ProjectItem[];
};

export function Projects({ title, items }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {title}
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {items.map((project) => (
            <li key={project.title} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{project.title}</span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.tech.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Education({
  title,
  degree,
}: {
  title: string;
  degree: string;
}) {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {title}
        </h2>
      </div>
      <div>
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            2011 — 2015
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div>
                <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base">
                  <span>{degree}</span>
                </span>
              </div>
            </h3>
            <p className="mt-2 text-sm leading-normal">
              Instituto Tecnológico de Iztapalapa I
            </p>
            <p className="text-sm text-slate-500">CDMX, México</p>
          </div>
        </div>
      </div>
    </section>
  );
}
