# UNIVIA premium travel frontend

UNIVIA is a frontend-only Next.js App Router site for Univia Co.,Ltd. It presents domestic and international airline-ticket inquiry flows, destination ideas, travel services, FAQs, and configurable contact channels. It does not claim live availability, live pricing, booking completion, airline partnerships, offices, awards, registration details, customer statistics, or service guarantees.

## Local setup

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The production validation commands are:

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` statically prerenders the seven pages, `robots.txt`, and `sitemap.xml`. There is no automated test suite in this project.

## Configuration checklist

Before launch, review `app/config.ts` and replace every visible placeholder:

- `NEXT_PUBLIC_SITE_URL`, or the fallback `https://univia.example`.
- WhatsApp number and display phone number.
- Email address, office address, business hours, and optional Facebook URL.
- Brand description and any approved company copy.
- Hero, page, destination, service, and social-share assets in `app/config.ts` and `app/data.ts`.

Unknown company information stays in one configuration module. Do not add claims that have not been supplied and approved. The English/Myanmar UI copy is centralized in `app/i18n.ts`; static destination, service, FAQ, benefit, promo, and placeholder-testimonial records are in `app/data.ts`.

The temporary SVG assets are `public/logo-light.svg`, `public/logo-dark.svg`, `public/favicon.svg`, `public/footer-pattern.svg`, and `public/social-share.svg`. Replace them with approved brand assets when available. No airline marks are included.

## Images and licensing

The starter visual set uses stable Unsplash image URLs and the existing `next.config.mjs` allowlist. Check the license and attribution requirements for every image before production, retain evidence of permission where required, and replace imagery with owned or approved assets when possible. Add a new remote host to `next.config.mjs` only after reviewing its licensing and image delivery behavior. Use `next/image` for content imagery and meaningful alt text for non-decorative images.

## Inquiry and contact behavior

The flight form validates route, dates, passenger count, and class in the browser. It creates a formatted, URL-encoded WhatsApp inquiry using the configured number and opens the generated link. It does not check availability, calculate pricing, complete a booking, or send data to a UNIVIA backend.

The contact form validates name, email, and message, then exposes WhatsApp and `mailto:` links. Both actions open the visitor's configured external channel. No form submission endpoint, API route, database, authentication, payment, or booking engine exists.

The language switcher changes the shared client-rendered navigation, forms, cards, FAQ disclosure, and localized page copy between English and Myanmar. The site uses keyboard-visible focus states, responsive navigation, semantic form labels, and reduced-motion CSS behavior.

## Vercel deployment

1. Push or connect the repository to the intended Vercel project through your normal team workflow.
2. Import it as a Next.js project with the default build command, or set `npm run build` explicitly.
3. Add `NEXT_PUBLIC_SITE_URL` in Vercel Project Settings for the preview/production environment as appropriate. Use the final public HTTPS origin for production.
4. Deploy a Preview first and inspect all routes, metadata, image loading, language switching, generated links, and narrow layouts.
5. Promote only an approved build to Production. Update the configured public URL and approved contact/assets before launch.

This repository does not create or change external Vercel resources. Vercel Hobby is restricted to personal, non-commercial use. A public commercial Univia website must use an appropriate commercial Vercel plan and comply with its current terms.

## Scope

The project is a static frontend. Keep future work within the approved frontend scope unless a separate backend, booking, payment, or data-processing design is reviewed and authorized.
