import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="mb-28 scroll-mt-20">
	<p className="sm:hidden font-mono text-[0.72rem] text-slate tracking-[0.15em] uppercase mb-6 font-semibold">
  About
</p>
      <div className="space-y-4">
        {about.map((p, i) => (
          <p
            key={i}
            className="text-[15.72px] leading-relaxed text-slate"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>
    </section>
  );
}
