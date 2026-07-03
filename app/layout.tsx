import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${portfolioData.name}`,
  description: portfolioData.heroDesc,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-navy text-slate font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
