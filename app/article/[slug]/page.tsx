import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <div className="relative z-10 max-w-[720px] mx-auto px-6 py-16 lg:py-24">
      <Link
        href="/#article"
        className="inline-flex items-center gap-2 text-sm text-slate hover:text-teal transition-colors duration-300 mb-10 no-underline"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 7L7 17M7 17V7h10" />
        </svg>
        Back
      </Link>

      <div className="font-mono text-[0.72rem] text-slate tracking-[0.15em] uppercase mb-4">
        {article.year}
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-white tracking-tight leading-tight mb-8">
        {article.title}
      </h1>

      <div className="w-full aspect-video rounded-lg border border-slate/20 overflow-hidden mb-10">
        <Image
          src={article.image}
          alt={article.title}
          width={720}
          height={405}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="prose-article">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </div>
  );
}
