"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import {
  About,
  Education,
  Experience,
  Projects,
  Skills,
} from "@/components/Sections";
import {
  translations,
  experiences,
  projects,
  skills,
  type Lang,
} from "@/lib/content";

const sections = [
  "about",
  "experience",
  "skills",
  "projects",
  "education",
] as const;

export default function PortfolioClient() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeSection, setActiveSection] = useState("about");
  const t = translations[lang];
  const exp = experiences[lang];
  const proj = projects[lang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header
            lang={lang}
            setLang={setLang}
            t={t}
            sections={sections as unknown as string[]}
            activeSection={activeSection}
            onJump={scrollToSection}
          />

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About
              about={t.about}
              lang={lang}
              title={t.nav.about}
            />
            <Experience title={t.experience.title} items={exp} />
            <Skills title={t.skills.title} groups={skills} lang={lang} />
            <Projects title={t.projects.title} items={proj} />
            <Education title={t.education.title} degree={t.education.degree} />

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 relative z-10">
              <p>
                {t.footer}
                {lang === "es"
                  ? ". Construido con"
                  : "Built with"}{" "}
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
                , {lang === "es" ? "desplegado en" : "deployed on"} <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">Vercel</a>.
                <a
                  href="https://vercel.com/"
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                   </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
