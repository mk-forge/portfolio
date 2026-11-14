export const prerender = true;

let pages = [
  { path: '', priority: '1.0' },
  { path: '/projects', priority: '0.8' },
  { path: '/contact', priority: '0.6' }
];

export function GET() {
  let urls = pages.map(page => 
    `<url><loc>https://portfolio.mk-forge.workers.dev${page.path}</loc><priority>${page.priority}</priority></url>`
  ).join('');
  
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}