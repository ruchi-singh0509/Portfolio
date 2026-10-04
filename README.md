# Ruchi Singh — Developer Portfolio

A Next.js portfolio presenting full-stack and mobile engineering work, with a muted ivory, navy, and sage design.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Use `npm run lint` and `npm run build` to validate changes. Use `npm run start` to preview the production build.

## Editing

- `data/portfolio.js`: experience, projects, skills, credentials, resume URL, and Vidur website/store links.
- `components/Portfolio.jsx`: page sections, navigation, and contact interactions.
- `components/Icon.jsx`: inline monochrome SVG icons.
- `app/globals.css`: typography, colors, spacing, and responsive layouts.
- `public/Resume_Ruchi_Singh.pdf`: current resume.
- `app/icon.svg`: RS initials favicon.
- `app/layout.js`: page metadata.

The site uses a text wordmark and no profile photograph. Contact options include email, copying the email address, phone, LinkedIn, and GitHub. Vidur includes links to the product website, Google Play, and the App Store.

Navigation indicates the visible section. On mobile, the menu uses vertical links and closes on outside click or Escape. Vidur engineering highlights expand to show implementation details.

## Review notes

See `PORTFOLIO_REVIEW.md` for content decisions and next improvements, and `ASSET_CLEANUP.md` for the full list of removed unused assets and obsolete components.
