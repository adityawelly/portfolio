import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="mb-10 scroll-mt-20">
      <p className="sm:hidden font-mono text-[0.72rem] text-slate tracking-[0.15em] uppercase mb-6 font-semibold">
        Project
      </p>
      <div className="flex flex-col gap-12">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:grid sm:grid-cols-[160px_1fr] gap-6 rounded-lg p-4 -mx-4 hover:bg-navy-light/40 transition-all duration-300 no-underline"
          >
            {/* Thumbnail */}
            <div className="w-full sm:w-[160px] aspect-video rounded border border-slate/20 overflow-hidden shrink-0">
              <Image
                src={p.image}
                alt={p.name}
                width={160}
                height={90}
                className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Konten */}
            <div>
              <h3 className="text-base font-medium text-slate-lighter group-hover:text-teal flex items-center gap-2 mb-2 transition-colors duration-300">
                {p.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </h3>
              <p className="text-[0.88rem] leading-relaxed text-slate mb-3">{p.desc}</p>
              {p.stats && (
                <p className="text-[0.82rem] text-slate-light mb-3">⭐ {p.stats}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
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