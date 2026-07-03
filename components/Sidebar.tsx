"use client";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Sidebar() {
  const { name, title, heroDesc, sections, socials } = portfolioData;
  const [active, setActive] = useState("about");

  useEffect(() => {
    const els = sections
      .map(s => document.getElementById(s.key))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  return (
    <aside className="sticky top-0 h-screen flex flex-col justify-between py-24 overflow-hidden">
      <div>
        <h1 className="text-4xl lg:text-5xl font-semibold text-slate-white tracking-tight leading-tight mb-3">
          {name}
        </h1>
        <p className="text-lg text-slate-light mb-4">{title}</p>
        <p className="text-sm text-slate leading-relaxed max-w-[280px]">{heroDesc}</p>

        <ul className="mt-12 flex flex-col gap-1 list-none">
          {sections.map(s => {
            const isActive = active === s.key;
            return (
              <li key={s.key}>
                <a
                  href={`#${s.key}`}
                  className={`group flex items-center gap-4 py-2 no-underline transition-colors duration-300 font-mono text-[0.7rem] uppercase tracking-widest ${
                    isActive ? "text-slate-lighter" : "text-slate hover:text-slate-lighter"
                  }`}
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      isActive ? "w-16 bg-teal" : "w-8 bg-slate group-hover:w-16 group-hover:bg-teal"
                    }`}
                  />
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-5">
        {socials.map(s => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300 flex items-center"
          >
            <SocialIcon name={s.name} />
          </a>
        ))}
      </div>
    </aside>
  );
}
