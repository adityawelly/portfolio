import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WRITING_DIR = path.join(process.cwd(), "content/writing");

export type WritingMeta = {
  slug: string;
  title: string;
  year: string;
  image: string;
  desc: string;
};

export type Writing = WritingMeta & { content: string };

export function getAllWritings(): WritingMeta[] {
  const files = fs.readdirSync(WRITING_DIR).filter(f => f.endsWith(".md"));

  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(WRITING_DIR, filename), "utf8");
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

export function getWritingBySlug(slug: string): Writing | null {
  const filePath = path.join(WRITING_DIR, `${slug}.md`);
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
