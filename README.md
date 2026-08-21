# Mr.Compliance - Website

Marketing website for Mr.Compliance built with **React + Vite + React Router DOM + SCSS**
(with GSAP used for the scroll reveal animations).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

Other commands:

```bash
npm run build     # production build into /dist
npm run preview   # preview the production build
```

## Project structure

```
mr-compliance/
├── public/              # favicon, robots.txt, sitemap.xml
├── src/
│   ├── assets/
│   │   ├── images/      # logo + case study images
│   │   └── logos/       # client logos used in the marquee
│   ├── components/      # shared UI (Navbar, Footer, Hero, common/…)
│   ├── data/
│   │   ├── services.js       # all 18 services (categories, SEO, cards)
│   │   ├── servicePages.js   # detail-page content used by services.js
│   │   └── caseStudies.js    # case study content
│   ├── hooks/           # useReveal (GSAP scroll reveals), useSeo
│   ├── pages/           # one folder per page
│   ├── routes/AppRoutes.jsx  # every route in one file
│   ├── styles/_tokens.scss   # SCSS colour/spacing variables
│   ├── global.scss      # reset, tokens, typography, shared page blocks
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── vercel.json          # SPA rewrite so direct URLs / refresh work
```

Component-specific styles live next to the component (e.g.
`components/Navbar/Navbar.scss`). Global styles live in `src/global.scss`.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about-us` | About |
| `/services` | Services (grouped by category) |
| `/services/:slug` | Service detail (one reusable page) |
| `/case-study` | Case studies |
| `/study/:slug` | Case study detail |
| `/partners` | Partners |
| `/contact-us` | Contact |
| `/scrut`, `/vanta`, `/drata` | Platform accelerator pages |

### Service URLs

`/services/soc2`, `/services/iso-27001`, `/services/pci-dss`, `/services/hipaa`,
`/services/nist-cmmc`, `/services/gdpr-privacy`, `/services/cloud-security`,
`/services/vulnerability-management`, `/services/penetration-testing`,
`/services/security-assessments`, `/services/incident-readiness`,
`/services/risk-management`, `/services/vendor-risk`,
`/services/security-questionnaires`, `/services/policy-control-management`,
`/services/continuous-compliance`, `/services/vciso`,
`/services/security-program-management`

## Editing content

* **Services** - edit `src/data/services.js` (short description, SEO title/description,
  category) and `src/data/servicePages.js` (detail-page sections). Adding a service to the
  array automatically creates its card and its `/services/<slug>` page.
* **Case studies** - edit `src/data/caseStudies.js`.
* **Footer offices / contact details** - edit `src/components/Footer/Footer.jsx`.
* **Booking link** - `BOOKING_URL` in `src/components/Navbar/Navbar.jsx`.

## SEO

* Per-page title, meta description, canonical and Open Graph tags are set by the
  `useSeo` hook (`src/hooks/useSeo.js`), called at the top of each page.
* `public/sitemap.xml` lists every public page (home, services, service details,
  case studies, partners, contact and platform pages) using
  `https://www.mrcompliance.co/`.
* `public/robots.txt` allows all crawlers.

## Deploying

Any static host works. On Vercel: import the repo, framework **Vite**,
build command `npm run build`, output `dist`. `vercel.json` already rewrites all
paths to `index.html` so deep links and refreshes work.
