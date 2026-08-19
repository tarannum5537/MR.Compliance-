# Mr. Compliance Website

The official Mr. Compliance marketing website — a dark, editorial single-page site with a
custom GSAP cursor and scroll animations.

## Tech Stack

- React 18
- Vite
- SCSS (Sass)
- GSAP (animations + custom cursor)
- React Router (Home / Blog / Blog details)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/`.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

`vercel.json` already rewrites all routes to `index.html` so `/blog/:slug` works on refresh.

## Environment Variables

Copy `.env.example` to `.env` and fill in the values you need. Only variables that start
with `VITE_` are readable in the browser — never put a secret key in one of them.

| Variable                  | Used for                                              |
| ------------------------- | ----------------------------------------------------- |
| `VITE_SANITY_PROJECT_ID`  | Future Sanity CMS project id (public)                  |
| `VITE_SANITY_DATASET`     | Sanity dataset name, usually `production`              |
| `VITE_SANITY_API_VERSION` | Sanity API version date                                |
| `VITE_CONTACT_API_URL`    | Endpoint the contact form posts to (`/api/contact`)    |

Secret keys (for example a Resend API key) belong in Vercel's **server-side** environment
variables and should only be read inside a serverless function — never in `src/`.

## Project Structure

```
src/
├── assets/          images, icons and fonts used by the site
├── components/      one folder per section (JSX + its own SCSS)
│   ├── Navbar/      sticky navigation
│   ├── Hero/        headline, typewriter line, status panel
│   ├── TrustBar/    statistics strip
│   ├── About/       "Why Mr. Compliance" section
│   ├── Services/    expanding services list
│   ├── Process/     4-step roadmap
│   ├── CaseStudies/ case study cards
│   ├── Testimonials/ quote slider
│   ├── Careers/     hiring callout
│   ├── Contact/     final CTA
│   ├── Footer/      site footer
│   └── Cursor/      custom GSAP desktop cursor
├── pages/           routed pages (Home, Blog, BlogDetails)
├── services/        data + API helpers (sanity.js, api.js)
├── styles/          shared SCSS variables and mixins (_tokens.scss)
├── App.jsx          routes + shared layout
├── main.jsx         React entry point
└── index.scss       global styles only (reset, body, scrollbar)
```

### How to edit a section

Every section is self-contained. To change the Hero, open:

- `src/components/Hero/Hero.jsx` — content, markup and its GSAP animation
- `src/components/Hero/Hero.scss` — layout, typography, spacing, responsive rules

Repeated content (services, case studies, testimonials, process steps, nav links) lives in
a simple array at the top of each component file — edit the array, the UI updates.

### Shared design tokens

Colors, spacing and typography mixins live in `src/styles/_tokens.scss` and are imported
by each section stylesheet with `@use "../../styles/tokens" as *;`.

## Blog & CMS

`src/services/sanity.js` currently returns a small local array of posts so `/blog` works
immediately. When you connect Sanity, replace the two functions in that file with real
fetch calls — the Blog pages need no changes.
