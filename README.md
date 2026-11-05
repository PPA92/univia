# UNIVIA premium frontend

Frontend-only Next.js App Router site for Univia Co.,Ltd. It includes responsive pages for travel, tickets, destinations, services, FAQ and contact inquiry flows.

## Setup

```bash
npm install
npm run dev
```

Validate with `npm run typecheck`, `npm run lint`, and `npm run build`. Deploy the repository to Vercel with the standard Next.js preset.

## Configuration

Replace the clearly marked placeholder WhatsApp number (`95000000000`), email, business hours, and `example.com` values in `app/components.tsx`, `app/layout.tsx`, `app/contact/page.tsx`, `app/sitemap.ts`, and `app/robots.ts`. Update brand variables in `app/globals.css` and Tailwind colors in `tailwind.config.ts`. Image URLs currently use Unsplash source URLs and should be reviewed for licensing and replaced with approved assets before production.

The forms only generate WhatsApp links. There is no backend, booking engine, live pricing, payment, authentication, or database.
