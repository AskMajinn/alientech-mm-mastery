export async function GET() {
  const siteUrl = 'https://mm-mastery.com';
  
  return new Response(`User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
