import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLE_DIR = path.join(process.cwd(), "content/article");

export type ArticleMeta = {
  slug: string;
  title: string;
  year: string;
  image: string;
  desc: string;
};

export type Article = ArticleMeta & { content: string };

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(ARTICLE_DIR).filter(f => f.endsWith(".md"));

  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(ARTICLE_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        year: data.year as string,
        image: data.image as string,
        desc: data.desc as string,
      };
    })
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLE_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    year: data.year as string,
    image: data.image as string,
    desc: data.desc as string,
    content,
  };
}
