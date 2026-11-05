const baseUrl = process.env.STATIC_CHECK_URL ?? 'http://127.0.0.1:3000';
const routes = ['/', '/about', '/air-tickets', '/destinations', '/services', '/faq', '/contact'];
const required = (html, pattern, label, route) => { if (!pattern.test(html)) throw new Error(`${route}: missing ${label}`); };
const htmlFor = async (route) => { const response = await fetch(`${baseUrl}${route}`); if (!response.ok) throw new Error(`${route}: expected 200, received ${response.status}`); return response.text(); };
for (const route of routes) {
  const html = await htmlFor(route);
  required(html, /<title>[^<]+<\/title>/i, 'title', route);
  required(html, /<meta name="description" content="[^"]+"/i, 'description', route);
  required(html, /<link rel="canonical" href="[^"]+"/i, 'canonical', route);
  required(html, /<meta property="og:title" content="[^"]+"/i, 'Open Graph title', route);
  required(html, /<meta property="og:description" content="[^"]+"/i, 'Open Graph description', route);
  required(html, /<meta name="twitter:title" content="[^"]+"/i, 'Twitter title', route);
  required(html, /<meta name="twitter:description" content="[^"]+"/i, 'Twitter description', route);
}
const sitemap = await htmlFor('/sitemap.xml');
for (const route of routes) required(sitemap, route === '/' ? /<loc>[^<]*\/<\/loc>/ : new RegExp(`<loc>[^<]*${route}<\\/loc>`), `sitemap route ${route}`, '/sitemap.xml');
const robots = await htmlFor('/robots.txt');
required(robots, /sitemap\.xml/i, 'sitemap reference', '/robots.txt');
console.log(`Static route and SEO checks passed for ${routes.length} routes, sitemap.xml, and robots.txt.`);
