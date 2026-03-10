# Portfolio — Principal Design Systems

A Next.js portfolio for a Principal-level Product Designer specializing in design systems. Built with design tokens, a 12-column grid, and a system-inspired minimal visual direction.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS** with custom design tokens (space, type scale, colors)
- **Deploy:** Vercel (recommended)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push to GitHub and import the repo in [Vercel](https://vercel.com).
2. No extra config required; Next.js is detected automatically.
3. Add `resume.pdf` to the `public` folder for the Resume download link.

## Content

- **Home:** Hero, proof strip, featured work (Aura, Agent/Landing), themes, writing teaser.
- **About:** Intro, design philosophy, leadership, differentiation, writing link.
- **Work:** Case study list and individual pages (Aura, Agent/Landing, placeholder).
- **Writing:** Intro and “Coming soon” (add posts as needed).
- **Resume:** Summary, experience, skills; PDF download.
- **Contact:** Email and short line; add Calendly if desired.

Replace `hello@example.com` on the Contact page with your email.

## Notes

- **Agentation (local dev):** The annotation toolbar is available when running `npm run dev`. It’s in devDependencies and loaded only on the client via `AgentationLoader` (dynamic import with ssr: false), so the server never bundles it. For MCP/agent sync, see [agentation.dev/install](https://agentation.dev/install).
