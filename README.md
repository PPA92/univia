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
npm run start
npm run check:static
```

`check:static` expects the production server at `http://127.0.0.1:3000`. Set `STATIC_CHECK_URL` when using another local port. The build statically prerenders the seven requested pages, `robots.txt`, and `sitemap.xml`.

## Configuration

Review `app/config.ts` before launch:

- Set `NEXT_PUBLIC_SITE_URL` to the final public origin.
- Set `contactConfig.whatsappNumber` and `contactConfig.email` only when those channels are ready.
- Add approved office address, business hours, phone display value, or Facebook URL only when supplied by the UNIVIA team.
- Replace the `travelPhotos` library records with UNIVIA-owned or licensed photography when available.

Empty contact values stay absent from the visible interface and keep forms non-actionable. The forms prepare URL-encoded WhatsApp or email inquiries in the browser. They do not submit to a backend and do not complete a booking.

## Brand assets and image credits

The official SVGs supplied in `svgs/` are copied byte-for-byte into `public/brand/` under stable names for the header, footer, mark, and favicon. Keep `svgs/` as the source-of-truth folder.

The current photo catalog uses Unsplash URLs as clearly configured stand-ins. Each photo record includes its subject, source, stand-in status, source label, and credit URL. The footer discloses the stand-in material and opens the source list. Replace each record with owned or approved travel photography before launch, and retain the applicable licence evidence.

## Scope

This repository is a static frontend. It has no API route, database, authentication, payment integration, airline booking engine, or external deployment automation. External Vercel resources are not changed by the project.
