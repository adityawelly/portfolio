export const portfolioData = {
  // ── Identity ─────────────────────────────────────────────────
  name:      "Aditya Welly",
  title:     "SAP ABAP Developer",
  email:     "wellyadit@gmail.com",
  heroDesc:  "I build efficient, scalable solutions for enterprise business processes.",

  // ── Sidebar nav ──────────────────────────────────────────────
  sections: [
    { key: "about",      label: "About" },
    { key: "experience", label: "Experience" },
    { key: "projects",   label: "Project" },
    { key: "article",    label: "Article" },
  ],

  // ── Social links ─────────────────────────────────────────────
  socials: [
    { name: "GitHub",    url: "https://github.com/adityawelly" },
    { name: "LinkedIn",  url: "https://linkedin.com/in/adityawelly" },
    { name: "Instagram", url: "https://instagram.com/adityawelly" },
  ],

  // ── About ────────────────────────────────────────────────────
about: [
  `I am a SAP ABAP Developer with a background in full-stack web development and HR analytics. I take pride in building efficient, scalable solutions that align with business requirements and deliver real impact across enterprise systems.`,
  `Currently, I'm working at <a href="https://www.muliaindustrindo.com" target="_blank" rel="noopener noreferrer" class="text-slate-lighter font-semibold hover:text-teal transition-colors">PT Mulia Industrindo Tbk</a>, where I develop, enhance, and support SAP applications using ABAP. I work closely with functional teams across SD, MM, and FI modules to ensure system performance and stability.`,
  `Previously, I've worked across different domains — from web development at <a href="https://www.magnasolusi.com" target="_blank" rel="noopener noreferrer" class="text-slate-lighter font-semibold hover:text-teal transition-colors">PT Magna Solusi Indonesia</a>, HR analytics at <a href="https://www.inacofood.com" target="_blank" rel="noopener noreferrer" class="text-slate-lighter font-semibold hover:text-teal transition-colors">PT Niramas Utama Tbk</a>, to software engineering internship at <a href="https://www.indonesian-aerospace.com" target="_blank" rel="noopener noreferrer" class="text-slate-lighter font-semibold hover:text-teal transition-colors">PT Dirgantara Indonesia</a>. These experiences shaped how I think about building products that are both technically sound and business-driven.`,
  `Outside of work, I enjoy exploring new technologies, gaming, and continuously leveling up my skills in the SAP ecosystem.`,
],

  // ── Experience ───────────────────────────────────────────────
 experiences: [
  {
    company: "PT Mulia Industrindo Tbk",
    role: "SAP ABAP Developer",
    period: "Feb 2024 — Present",
    url: "https://www.muliaindustrindo.com",
    subRoles: [
      { title: "Web Developer", period: "Mar 2024 — Feb 2026" },
    ],
    desc: "Responsible for developing, enhancing, and supporting SAP applications using ABAP to align with business requirements. Develop custom reports, forms, and enhancements (User Exit / BADI), perform debugging and issue analysis, support functional teams in SD/MM/FI modules, and optimize existing programs for performance and stability.",
    tech: ["ABAP", "SAP S/4HANA", "PHP", "JavaScript", "Software Development", "MySQL", "Code Igniter", "Fiori", "Project Management", "Tableau"],
  },
  {
    company: "PT Niramas Utama Tbk",
    role: "HR Analytics",
    period: "Jun 2022 — Mar 2024",
    url: "https://www.inacofood.com",
    subRoles: [],
    desc: "Developed and maintained web applications to streamline HR processes. Built interactive dashboards and reports using Excel, Power BI, and other BI tools to track HR metrics such as attrition, recruitment, and performance. Automated HR reporting processes, reducing manual work and improving accuracy.",
    tech: ["PHP", "JavaScript", "Laravel", "Power BI", "Excel", "MySQL"],
  },
  {
    company: "Magna Solusi Indonesia",
    role: "Full Stack Developer",
    period: "Nov 2020 — Jun 2022",
    url: "https://www.magnasolusi.com",
    subRoles: [
      { title: "Junior Full Stack Developer", period: "Nov 2020 — Nov 2021" },
    ],
    desc: "Designed, developed, and maintained end-to-end web applications using JavaScript, PHP and Ms. SQL Server/MySQL. Built scalable, responsive, and secure applications for clients across multiple industries. Collaborated with cross-functional teams including designers, project managers, and QA engineers.",
    tech: ["PHP", "JavaScript", "MySQL", "Microsoft SQL Server"],
  },
  {
    company: "PT Dirgantara Indonesia",
    role: "Software Engineer Intern",
    period: "Jun 2019 — Aug 2019",
    url: "https://www.indonesian-aerospace.com",
    subRoles: [],
    desc: "Developed 3D flight animation simulations for the KAI KF-21 Boramae aircraft using FlightGear. Collaborated with engineers and designers to ensure animations accurately represented aircraft mechanics and flight dynamics. Assisted in coding scripts and algorithms to simulate realistic aircraft movement.",
    tech: ["C++", "Systems Engineering", "FlightGear"],
  },
],

  // ── Projects ─────────────────────────────────────────────────
  projects: [
  {
    name: "Portfolio Website",
    url: "https://adityawelly.com",
    image: "/projects/portfolio.png",
    desc: "Personal portfolio website built with Next.js and Tailwind CSS.",
    stats: "",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "YaloSpark Company Profile",
    url: "https://yalospark.vercel.app",
    image: "/projects/yalospark.png",
    desc: "Company profile website for YaloSpark, built to showcase the company's services and information.",
    stats: "",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Artos",
    url: "",
    image: "/projects/artos.png",
    desc: "Mobile app for personal finance tracking, built with React Native and Expo.",
    stats: "",
    tech: ["React Native", "Expo", "TypeScript"],
  },
],

  // ── Project Archive ──────────────────────────────────────────
  projectArchive: [
    {
      year: "2026",
      title: "Dompetku",
      url: "",
      desc: "Small personal finance tracking app for me and my partner, built with Next.js, Tailwind CSS, and TypeScript, with Supabase as the database.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
      stars: "",
    },
  ],
};
