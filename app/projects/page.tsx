import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function ProjectArchivePage() {
  const { projectArchive } = portfolioData;

  return (
    <div className="relative z-10 max-w-[900px] mx-auto px-6 py-16 lg:py-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-slate hover:text-teal transition-colors duration-300 mb-10 no-underline"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 7L7 17M7 17V7h10" />
        </svg>
        Back
      </Link>

      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-white tracking-tight leading-tight mb-10">
        Project Archive
      </h1>

      <div className="flex flex-col">
        {projectArchive.map((p, i) => (
          <a
            key={i}
            href={p.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[64px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-start gap-4 py-5 border-b border-slate/10 no-underline hover:bg-navy-light/40 transition-colors duration-300 px-4 -mx-4 rounded-lg"
          >
            <span className="font-mono text-[0.72rem] text-slate pt-1">{p.year}</span>
            <div>
              <h3 className="text-base font-medium text-slate-lighter group-hover:text-teal transition-colors duration-300 mb-1">
                {p.title}
              </h3>
              <p className="text-[0.85rem] text-slate leading-relaxed mb-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="font-mono text-[0.68rem] text-teal bg-teal/10 border border-teal/20 px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {p.stars && (
              <span className="font-mono text-[0.72rem] text-slate-light whitespace-nowrap pt-1">★ {p.stars}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
