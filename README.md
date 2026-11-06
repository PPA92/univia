# UNIVIA travel inquiry frontend

UNIVIA is a static Next.js App Router frontend for Univia Co.,Ltd. It presents domestic and international flight inquiry flows, destination ideas, travel services, FAQs, and configurable contact channels. It does not claim live availability, live pricing, booking completion, airline partnerships, offices, awards, registration details, customer statistics, or service guarantees.

## Local setup

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
STATIC_CHECK_URL=http://127.0.0.1:3100 npm run check:static
```

`check:static` expects the production server at `http://127.0.0.1:3000` by default. Set `STATIC_CHECK_URL` when using another local port. It checks 200 responses, canonical URLs, title/description, Open Graph and Twitter tags for all seven routes, plus every sitemap entry and the robots sitemap reference. The build statically prerenders the seven requested pages, `robots.txt`, and `sitemap.xml`.

For visual QA, serve the production result over HTTP and run the installed Design Taste checks one route at a time at 1440, 1024, 820, 768, and 390. Use `consistency.mjs`, `assets/layout/check.mjs`, `shoot.mjs`, and `perf.mjs` without `file://` or `--no-stress`. Browser flow coverage should exercise destination prefill, invalid and valid forms, configured URL generation, language switching, keyboard menu behavior, and reduced motion. A headless browser runner is required for those interaction checks.

## Configuration

Review `app/config.ts` before launch:

- Set `NEXT_PUBLIC_SITE_URL` to the final public origin.
- Set `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_CONTACT_EMAIL` only when those channels are ready.
- Add approved `NEXT_PUBLIC_OFFICE_ADDRESS`, `NEXT_PUBLIC_BUSINESS_HOURS`, `NEXT_PUBLIC_PHONE_DISPLAY`, or `NEXT_PUBLIC_FACEBOOK_URL` values only when supplied by the UNIVIA team.
- Replace the `travelPhotos` library records with UNIVIA-owned or licensed photography when available.

Empty contact values stay absent from the visible interface and keep forms non-actionable. The forms prepare URL-encoded WhatsApp or email inquiries in the browser. They do not submit to a backend and do not complete a booking.

## Brand assets and image credits

The official SVGs supplied in `svgs/` are copied byte-for-byte into `public/brand/` under stable names for the header, footer, mark, and favicon. Keep `svgs/` as the source-of-truth folder.

The current photo catalog uses Unsplash URLs as clearly configured stand-ins. Each photo record includes its subject, source, stand-in status, source label, and credit URL. The footer discloses the stand-in material and opens the source list. Replace each record with owned or approved travel photography before launch, and retain the applicable licence evidence.

## Scope

This repository is a static frontend. It has no API route, database, authentication, payment integration, airline booking engine, or external deployment automation. External Vercel resources are not changed by the project.
