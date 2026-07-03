<<<<<<< HEAD
# Portfolio Next.js + Tailwind CSS

## Struktur Project

```
portfolio-tailwind/
├── app/
│   ├── globals.css         ← Tailwind directives + font import
│   ├── layout.tsx          ← root layout + metadata
│   └── page.tsx            ← halaman utama
├── components/
│   ├── Spotlight.tsx       ← efek cahaya mengikuti kursor
│   ├── Sidebar.tsx         ← sidebar kiri dengan active nav
│   ├── SocialIcon.tsx      ← ikon social media
│   └── sections/
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── Contact.tsx
├── data/
│   └── portfolio.ts        ← ⭐ SEMUA DATA DI SINI
├── tailwind.config.ts      ← warna custom (navy, teal, slate)
├── postcss.config.js
├── package.json
└── tsconfig.json
```

## Cara Instalasi

### 1. Buat project Next.js + Tailwind

```bash
npx create-next-app@latest portfolio --typescript --tailwind --no-eslint --src-dir=false --app --no-import-alias
cd portfolio
```

### 2. Salin semua file dari ZIP ini ke dalam folder project
(timpa file yang sudah ada)

### 3. Jalankan

```bash
npm run dev
```

Buka: **http://localhost:3000**

---

## Kustomisasi

Edit **`data/portfolio.ts`** untuk mengubah semua konten.

Untuk mengubah warna, edit **`tailwind.config.ts`**:
- `navy.DEFAULT` — warna background utama
- `teal.DEFAULT` — warna aksen utama
- `slate.*` — berbagai warna teks

## Deploy ke Vercel (gratis)

Push ke GitHub, lalu connect di **vercel.com** — otomatis deploy!

Atau via CLI:
```bash
npx vercel
```
=======
# portfolio
A responsive and modern portfolio website built to showcase my software development skills, professional projects, and tech expertise
>>>>>>> 0130052eda289b32971a90e2a8c94bed1dbf663e
