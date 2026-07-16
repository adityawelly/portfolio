import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";

export default function Article() {
  const articles = getAllArticles();

  return (
    <section id="article" className="mb-10 scroll-mt-20">
      <p className="sm:hidden font-mono text-[0.72rem] text-slate tracking-[0.15em] uppercase mb-6 font-semibold">
        Article
      </p>
      <div className="flex flex-col gap-4">
        {articles.map(a => (
          <Link
            key={a.slug}
            href={`/article/${a.slug}`}
            className="group flex flex-col sm:grid sm:grid-cols-[160px_1fr] sm:gap-10 gap-3 rounded-lg p-4 -mx-4 hover:bg-navy-light/40 transition-all duration-300 no-underline"
          >
            <div className="w-full sm:w-[160px] aspect-video rounded border border-slate/20 overflow-hidden shrink-0">
              <Image
                src={a.image}
                alt={a.title}
                width={160}
                height={90}
                className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div>
              <div className="font-mono text-[0.68rem] text-slate tracking-widest uppercase mb-1">
                {a.year}
              </div>
              <h3 className="text-base font-medium text-slate-lighter group-hover:text-teal flex items-center gap-2 transition-colors duration-300">
                {a.title}
                <svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
