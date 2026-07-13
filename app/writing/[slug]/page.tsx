import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { getAllWritings, getWritingBySlug } from "@/lib/writings";

export function generateStaticParams() {
  return getAllWritings().map(w => ({ slug: w.slug }));
}

export default function WritingPage({ params }: { params: { slug: string } }) {
  const writing = getWritingBySlug(params.slug);
  if (!writing) notFound();

  return (
    <div className="relative z-10 max-w-[720px] mx-auto px-6 py-16 lg:py-24">
      <Link
        href="/#writing"
        className="inline-flex items-center gap-2 text-sm text-slate hover:text-teal transition-colors duration-300 mb-10 no-underline"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 7L7 17M7 17V7h10" />
        </svg>
        Back
      </Link>

      <div className="font-mono text-[0.72rem] text-slate tracking-[0.15em] uppercase mb-4">
        {writing.year}
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-white tracking-tight leading-tight mb-8">
        {writing.title}
      </h1>

      <div className="w-full aspect-video rounded-lg border border-slate/20 overflow-hidden mb-10">
        <Image
          src={writing.image}
          alt={writing.title}
          width={720}
          height={405}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="prose-writing">
        <ReactMarkdown>{writing.content}</ReactMarkdown>
      </div>
    </div>
  );
}
