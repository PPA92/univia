const baseUrl = (process.env.STATIC_CHECK_URL ?? 'http://127.0.0.1:3000').replace(/\/$/, '');
const expectedOrigin = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://univia.example').origin;
const routes = ['/', '/about', '/air-tickets', '/destinations', '/services', '/faq', '/contact'];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function hasMeta(html, selector, attribute = 'content') {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`<meta\\s+[^>]*${escaped}[^>]*${attribute}="[^"]+"`, 'i').test(html);
}

function hasLink(html, rel, expectedPath) {
  const match = html.match(new RegExp(`<link\\s+[^>]*rel="${rel}"[^>]*href="([^"]+)"`, 'i'));
  if (!match) return false;
  return new URL(match[1], baseUrl).pathname === expectedPath;
}

async function pageFor(path, expectDocument = false) {
  const response = await fetch(`${baseUrl}${path}`);
  assert(response.ok, `${path}: expected 200, received ${response.status}`);
  const body = await response.text();
  if (expectDocument) assert(body.includes('<html'), `${path}: expected an HTML document`);
  return body;
}

for (const route of routes) {
  const html = await pageFor(route, true);
  assert(/<title>[^<]+<\/title>/i.test(html), `${route}: missing title`);
  assert(hasMeta(html, 'name="description"'), `${route}: missing description`);
  assert(hasLink(html, 'canonical', route), `${route}: canonical does not resolve to ${route}`);
  assert(hasMeta(html, 'property="og:title"'), `${route}: missing Open Graph title`);
  assert(hasMeta(html, 'property="og:description"'), `${route}: missing Open Graph description`);
  assert(hasMeta(html, 'property="og:image"'), `${route}: missing Open Graph image`);
  assert(hasMeta(html, 'name="twitter:card"'), `${route}: missing Twitter card`);
  assert(hasMeta(html, 'name="twitter:title"'), `${route}: missing Twitter title`);
  assert(hasMeta(html, 'name="twitter:description"'), `${route}: missing Twitter description`);
  assert(hasMeta(html, 'name="twitter:image"'), `${route}: missing Twitter image`);
}

const sitemap = await pageFor('/sitemap.xml');
for (const route of routes) {
  const expected = route === '/' ? `<loc>${expectedOrigin}/</loc>` : `<loc>${expectedOrigin}${route}</loc>`;
  assert(sitemap.includes(expected), `sitemap.xml: missing ${route}`);
}

const robots = await pageFor('/robots.txt');
assert(/sitemap\.xml/i.test(robots), 'robots.txt: missing sitemap reference');
console.log(`Static route and SEO checks passed for ${routes.length} routes, sitemap.xml, and robots.txt.`);
