export type Lang = "es" | "en";

export const translations = {
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
    },
    about: {
      description_one: "Más de 8 años de experiencia como Desarrollador de Software. Lideré el desarrollo Frontend en Kapitalizer, logrando entregables más completos en cada sprint, un 25% en rendimiento web y una automatización de trabajos para diferentes equipos dentro de la compañía.",
      description_two: "Mi enfoque principal en estos días es construir productos accesibles y funcionales, así como experiencias digitales.",
      description_three: "Cuando no estoy programando, generalmente estoy viendo series, tomando fotografías, pasando tiempo con mi esposa e hija o aprendiendo un idioma en Duolingo.",
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
    },
    about: {
      description_one: "Over 8 years of experience as a Software Developer. Led Frontend development at Kapitalizer, achieving more complete deliverables in each sprint, 25% improvement in web performance, and work automation for different teams within the company.",
      description_two: "My main focus these days is building accessible and functional products and digital experiences.",
      description_three: "When I'm not coding, I'm usually watching series, taking photos, hanging out with my wife and daughter or learning a language on Duolingo.",
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
} as const;

export type Translations = typeof translations;

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  tech: string[];
};

export const experiences: Record<Lang, ExperienceItem[]> = {
  es: [
    {
      company: "Kapitalizer",
      role: "Sr Frontend Developer",
      period: "Jul 2022 — Sep 2025",
      achievements: [
        "Diseño y desarrollo de una plataforma web para la gestión de créditos, el propósito fue centralizar la información de cada crédito visualizando toda la información importante para una gestión puntual y actualizada para los diferentes departamentos.",
        "Desarrollé un módulo audit log que ayudó a registrar las acciones y procesos de cada usuario dentro de la empresa, ayudó a frenar el desvío de dinero en la empresa.",
        "Participé en la planeación, diseño y desarrollo para la automatización en la solicitud de un préstamo, se eliminaron varios procesos manuales e integramos automatización que ayudó a reducir el tiempo de respuesta de 2 semanas a 2 días.",
        "Planifiqué y actualicé una plataforma web para agregar validaciones y candados por rol a nivel páginas, componentes y funciones.",
        "Desarrollé un flujo onboarding multiempresa que ayudó a canalizar los leads registrados de acuerdo al tipo de préstamo solicitado por el usuario.",
        "Optimicé diferentes landing page de la empresa ayudando en el performance y tiempos de despliegue.",
        "Implementé un conjunto de métodos y prácticas para escribir, mantener y optimizar código de alta calidad.",

      ],
      tech: ["NextJS", "React", "TypeScript", "Strapi", "AWS", "Tailwind"],
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
        "Design and development of a web platform for loan management. The purpose was to centralize the information for each loan, displaying all the important information for timely and up-to-date management across different departments.",
        "I developed an audit log module that helped record the actions and processes of each user within the company, helping to prevent misappropriation of funds within the company.",
        "I participated in the planning, design, and development of a loan application automation process. Several manual processes were eliminated and we integrated automation, which helped reduce the response time from two weeks to two days.",
        "I planned and updated a web platform to add role-based validations and locks at the page, component, and function levels.",
        "I developed a multi-company onboarding flow that helped channel registered leads according to the type of loan requested by the user.",
        "I optimized various landing pages across the company, helping with performance and deployment times.",
        "I implemented a set of methods and practices to write, maintain, and optimize high-quality code.",
      ],
      tech: ["NextJS", "React", "Vite", "React Admin", "TypeScript", "Strapi", "AWS", "Tailwind"],
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

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Record<Lang, ProjectItem[]> = {
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

export type Skills = {
  languages: string[];
  librariesandframeworks: string[];
  toolsandplatforms: string[];
};

export const skills: Skills = {
  languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL", "NoSQL"],
  librariesandframeworks: ["React", "NextJS", "NestJS", "NodeJS", "LitElement", "Tailwind", "Redux",
    "ReactQuery",
    "Zustand",
    "Sass",
    "Shadcn",
    "APIs",
    "Hooks" ],
  toolsandplatforms: ["Git", "GitHub", "Bitbucket", "Figma", "Jira", "AWS", "Vercel", "NPM", "Docker", "Strapi", "Webpack", "Vite"],
};

export const myContacts = {
  email: 'irvincnt93@gmail.com',
  phone: '5612695199',
  github: 'github.com/irvincnt',
  website: 'irvincnt.com',
  linkedin: 'https://www.linkedin.com/in/irvin-contreras-10273b104/',
  instagram: 'https://www.instagram.com/irvincnt',
  x: 'https://x.com/IrvinCnt',
}
