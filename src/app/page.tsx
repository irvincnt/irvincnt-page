"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Globe,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      education: "Educación",
    },
    hero: {
      greeting: "Hola, soy",
      title: "Sr Frontend Developer",
      subtitle: "Construyo experiencias web excepcionales",
      description:
        "Más de 8 años de experiencia como Desarrollador de Software. Lideré el desarrollo Frontend en Kapitalizer, logrando entregables más completos en cada sprint, un 25% en rendimiento web y una automatización de trabajos para diferentes equipos dentro de la compañía.",
    },
    experience: {
      title: "Experiencia",
      present: "Presente",
    },
    skills: {
      title: "Habilidades",
    },
    projects: {
      title: "Proyectos",
    },
    education: {
      title: "Educación",
      degree: "Ingeniería en Sistemas Computacionales",
    },
    footer: "Diseñado y construido por Irvin Contreras",
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Sr Frontend Developer",
      subtitle: "I build exceptional web experiences",
      description:
        "Over 8 years of experience as a Software Developer. Led Frontend development at Kapitalizer, achieving more complete deliverables in each sprint, 25% improvement in web performance, and work automation for different teams within the company.",
    },
    experience: {
      title: "Experience",
      present: "Present",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projects",
    },
    education: {
      title: "Education",
      degree: "Computer Systems Engineering",
    },
    footer: "Designed & Built by Irvin Contreras",
  },
};

const experiences = {
  es: [
    {
      company: "Kapitalizer",
      role: "Sr Frontend Developer",
      period: "Jul 2022 — Sep 2025",
      achievements: [
        "Diseñé y desarrollé una plataforma web para la gestión de créditos, centralizando información crítica para diferentes departamentos",
        "Desarrollé un módulo audit log que ayudó a frenar el desvío de dinero en la empresa",
        "Reduje el tiempo de respuesta de solicitudes de préstamo de 2 semanas a 2 días mediante automatización",
        "Optimicé landing pages mejorando el performance en un 25% y reduciendo tiempos de despliegue",
      ],
      tech: ["NextJS", "NestJS", "TypeScript", "PostgreSQL", "AWS", "Vercel"],
    },
    {
      company: "Sngular",
      role: "Frontend Developer",
      period: "Sep 2019 — Jun 2022",
      achievements: [
        "Desarrollé flujo completo responsive para solicitud de tarjetas de crédito",
        "Implementé componente de obtención de datos de hardware del dispositivo",
        "Desarrollé solución de geolocalización para validaciones en aprobación de créditos",
        "Implementé taggeo de eventos en Google Analytics",
      ],
      tech: ["React", "Redux", "JavaScript", "Sass", "Google Analytics"],
    },
    {
      company: "Commonsense People",
      role: "Desarrollador Frontend",
      period: "Mar 2018 — Sep 2019",
      achievements: [
        "Construí frontend completo de ecommerce incluyendo catálogo y flujo de compra",
        "Desarrollé administrador de procesos con integraciones de Facebook y Google Calendar",
        "Implementé integración de Twilio con proyecto interno Kamino (CCDS)",
        "Desarrollé algoritmo de validación y procesamiento de ranking de leads",
      ],
      tech: ["React", "JavaScript", "Twilio", "Zendesk API", "Facebook API"],
    },
    {
      company: "We are the robots",
      role: "Desarrollador Frontend",
      period: "Sep 2016 — Sep 2017",
      achievements: [
        "Desarrollé plataforma e-learning completa incluyendo detalle de carrera",
        "Construí plataforma de administración con Single Sign-On",
      ],
      tech: ["React", "JavaScript", "SSO"],
    },
  ],
  en: [
    {
      company: "Kapitalizer",
      role: "Sr Frontend Developer",
      period: "Jul 2022 — Sep 2025",
      achievements: [
        "Designed and developed a web platform for credit management, centralizing critical information for different departments",
        "Developed an audit log module that helped prevent money misappropriation in the company",
        "Reduced loan application response time from 2 weeks to 2 days through automation",
        "Optimized landing pages improving performance by 25% and reducing deployment times",
      ],
      tech: ["NextJS", "NestJS", "TypeScript", "PostgreSQL", "AWS", "Vercel"],
    },
    {
      company: "Sngular",
      role: "Frontend Developer",
      period: "Sep 2019 — Jun 2022",
      achievements: [
        "Developed complete responsive flow for credit card applications",
        "Implemented component for obtaining device hardware data",
        "Developed geolocation solution for credit approval validations",
        "Implemented event tagging in Google Analytics",
      ],
      tech: ["React", "Redux", "JavaScript", "Sass", "Google Analytics"],
    },
    {
      company: "Commonsense People",
      role: "Frontend Developer",
      period: "Mar 2018 — Sep 2019",
      achievements: [
        "Built complete ecommerce frontend including catalog and purchase flow",
        "Developed process manager with Facebook and Google Calendar integrations",
        "Implemented Twilio integration with internal Kamino project (CCDS)",
        "Developed algorithm for lead ranking validation and processing",
      ],
      tech: ["React", "JavaScript", "Twilio", "Zendesk API", "Facebook API"],
    },
    {
      company: "We are the robots",
      role: "Frontend Developer",
      period: "Sep 2016 — Sep 2017",
      achievements: [
        "Developed complete e-learning platform including career details",
        "Built administration platform with Single Sign-On",
      ],
      tech: ["React", "JavaScript", "SSO"],
    },
  ],
};

const projects = {
  es: [
    {
      title: "Plataforma de Gestión Eclesiástica",
      description:
        "Plataforma web completa para gestión de devocionales, eventos y actividades para iglesia cristiana. Incluye sistema de autenticación, gestión de usuarios y calendario de eventos.",
      tech: ["NextJS", "NestJS", "PostgreSQL", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Blog Devocional",
      description:
        "Blog personal optimizado para SEO donde publico devocionales cristianos. Implementado con generación estática para máximo rendimiento.",
      tech: ["NextJS", "React", "Tailwind", "MDX"],
      link: "#",
    },
  ],
  en: [
    {
      title: "Church Management Platform",
      description:
        "Complete web platform for managing devotionals, events and activities for a Christian church. Includes authentication system, user management and event calendar.",
      tech: ["NextJS", "NestJS", "PostgreSQL", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Devotional Blog",
      description:
        "SEO-optimized personal blog where I publish Christian devotionals. Implemented with static generation for maximum performance.",
      tech: ["NextJS", "React", "Tailwind", "MDX"],
      link: "#",
    },
  ],
};

const skills = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL", "NoSQL"],
  frameworks: ["NextJS", "NestJS", "React", "NodeJS", "LitElement", "Polymer2"],
  databases: ["MongoDB", "PostgreSQL", "MySQL"],
  technologies: [
    "Redux",
    "React Query",
    "Tailwind",
    "Sass",
    "Shadcn",
    "APIs",
    "Hooks",
  ],
  tools: [
    "Git",
    "GitHub",
    "Bitbucket",
    "Figma",
    "Jira",
    "AWS",
    "Vercel",
    "NPM",
  ],
  practices: ["Agile", "Scrum", "SOLID", "TDD"],
};

export default function Portfolio() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [activeSection, setActiveSection] = useState("about");
  const t = translations[lang];
  const exp = experiences[lang];
  const proj = projects[lang];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "skills",
        "projects",
        "education",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Irvin Giovanni Contreras García</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {t.hero.title}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">{t.hero.subtitle}</p>

              {/* Navigation */}
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  {[
                    "about",
                    "experience",
                    "skills",
                    "projects",
                    "education",
                  ].map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className={`group flex items-center py-3 ${activeSection === section ? "active" : ""}`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all ${
                            activeSection === section
                              ? "w-16 bg-slate-200"
                              : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                          }`}
                        ></span>
                        <span
                          className={`nav-text text-xs font-bold uppercase tracking-widest ${
                            activeSection === section
                              ? "text-slate-200"
                              : "text-slate-500 group-hover:text-slate-200"
                          }`}
                        >
                          {t.nav[section as keyof typeof t.nav]}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links & Language Toggle */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/irvincnt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/irvincnt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/irvincnt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:irvincnt93@gmail.com"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:5612695199"
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="ml-2 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-xs font-bold uppercase">
                  {lang === "es" ? "EN" : "ES"}
                </span>
              </button>
            </div>
          </header>

          {/* Right Column - Scrollable Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.nav.about}
                </h2>
              </div>
              <div>
                <p className="mb-4 leading-relaxed">{t.hero.description}</p>
                <p className="mb-4 leading-relaxed">
                  {lang === "es"
                    ? "Mi enfoque principal en estos días es construir productos accesibles e inclusivos, así como experiencias digitales en Kapitalizer. También disfruto escribir sobre desarrollo web y compartir conocimientos con la comunidad."
                    : "My main focus these days is building accessible and inclusive products and digital experiences at Kapitalizer. I also enjoy writing about web development and sharing knowledge with the community."}
                </p>
                <p className="leading-relaxed">
                  {lang === "es"
                    ? "Cuando no estoy programando, generalmente estoy escalando, jugando tenis, pasando tiempo con mi esposa y dos gatos, o buscando semillas de Korok."
                    : "When I'm not coding, I'm usually climbing, playing tennis, hanging out with my wife and two cats, or searching for Korok seeds."}
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.experience.title}
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  {exp.map((job, idx) => (
                    <li key={idx} className="mb-12">
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
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex gap-2">
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

            {/* Skills Section */}
            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.skills.title}
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-200 mb-3">
                    {lang === "es" ? "Lenguajes" : "Languages"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
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
                    {skills.frameworks.map((skill) => (
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
                    {skills.databases.map((skill) => (
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
                    {skills.technologies.map((skill) => (
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
                    {skills.tools.map((skill) => (
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
                    {skills.practices.map((skill) => (
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

            {/* Projects Section */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.projects.title}
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {proj.map((project, idx) => (
                    <li key={idx} className="mb-12">
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
                                <span>
                                  {project.title}
                                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                </span>
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

            {/* Education Section */}
            <section
              id="education"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.education.title}
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
                          <span>{t.education.degree}</span>
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

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                {t.footer}{" "}
                {lang === "es"
                  ? "Inspirado en el diseño de Brittany Chiang. Construido con"
                  : "Inspired by Brittany Chiang's design. Built with"}{" "}
                <a
                  href="https://nextjs.org/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Next.js
                </a>{" "}
                {lang === "es" ? "y" : "and"}{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Tailwind CSS
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
