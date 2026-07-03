import Spotlight from "@/components/Spotlight";
import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const { email, name } = portfolioData;

  return (
    <>
      <Spotlight />

      {/* Mobile header — hanya muncul di mobile */}
      <div className="lg:hidden px-8 pt-16 pb-8">
        <h1 className="text-4xl font-semibold text-slate-white tracking-tight leading-tight mb-2">
          {name}
        </h1>
        <p className="text-base text-slate-light mb-3">{portfolioData.title}</p>
        <p className="text-sm text-slate leading-relaxed">{portfolioData.heroDesc}</p>
      </div>

      {/* Main wrapper */}
      <div className="relative z-10 flex min-h-screen max-w-[1280px] mx-auto px-6 lg:px-16">

        {/* Left sidebar — hanya desktop, fixed tidak ikut scroll */}
        <div className="hidden lg:block w-[360px] shrink-0">
          <Sidebar />
        </div>

        {/* Right scrollable content */}
<main className="flex-1 pt-8 lg:pt-24 pb-28 lg:pl-20 min-w-0">
  <About />
  <Experience />
  
  <div className="mb-20">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-slate-lighter font-semibold hover:text-teal transition-colors duration-300 group"
    >
      View Full Résumé
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </a>
  </div>
  <Projects />
</main>
      </div>

      {/* Fixed right email — desktop only */}
      <div className="hidden lg:flex fixed bottom-0 right-10 flex-col items-center gap-5 z-10">
        <a
          href={`mailto:${email}`}
          className="font-mono text-[0.68rem] text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300 writing-vertical tracking-[0.15em]"
        >
          {email}
        </a>
        <span className="block w-px h-24 bg-slate" />
      </div>
    </>
  );
}
