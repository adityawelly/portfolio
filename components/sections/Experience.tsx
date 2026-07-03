"use client";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experiences } = portfolioData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="mb-10 scroll-mt-20">
	<p className="sm:hidden font-mono text-[0.72rem] text-slate tracking-[0.15em] uppercase mb-6 font-semibold">
  Experience
</p>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <a
            key={i}
            href={exp.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
className={`flex flex-col gap-2 sm:grid sm:grid-cols-[160px_1fr] sm:gap-10 rounded-lg p-4 -mx-4 transition-all duration-300 no-underline
  ${hoveredIndex === i ? "bg-navy-light/40" : ""}
  ${hoveredIndex !== null && hoveredIndex !== i ? "opacity-40" : "opacity-100"}
`}
          >
<div className="font-mono text-[0.68rem] text-slate tracking-widest uppercase sm:pt-1 whitespace-nowrap">
  {exp.period}
</div>
            <div>
              <h3 className={`text-base font-medium mb-1 flex items-center gap-2 transition-colors duration-300 ${hoveredIndex === i ? "text-teal" : "text-slate-lighter"}`}>
                {exp.role} · {exp.company}
                <svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className={`transition-transform duration-300 ${hoveredIndex === i ? "-translate-y-1 translate-x-1" : ""}`}
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </h3>
              {exp.subRoles && exp.subRoles.map((r, j) => (
                <p key={j} className="text-sm text-slate mb-0.5">
                  {r.title}
                  <span className="text-slate/50 font-mono text-[0.68rem] ml-2">{r.period}</span>
                </p>
              ))}
              <p className="text-[0.88rem] leading-relaxed text-slate mt-3 mb-4">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="font-mono text-[0.72rem] text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}