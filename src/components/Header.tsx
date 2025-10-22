"use client";

import { Github, Linkedin, Mail, Phone, Globe, Instagram } from "lucide-react";
import type { Lang, Translations } from "@/lib/content";
import GlitchText from "./GlitchText";

type HeaderProps = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations[Lang];
  sections: readonly string[];
  activeSection: string;
  onJump: (id: string) => void;
};

export default function Header({
  lang,
  setLang,
  t,
  sections,
  activeSection,
  onJump,
}: HeaderProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 relative z-10">
      <div>
        
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={true}
          className=''
        >
          Irvin Giovanni Contreras García
        </GlitchText>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {t.hero.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{t.hero.subtitle}</p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => onJump(section)}
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
  );
}
