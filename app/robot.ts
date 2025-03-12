export async function GET() {
    return new Response(
      `User-agent: *
  Disallow: /cgi-bin/
  Allow: /
  Sitemap: https://rangautiles.com/sitemap.xml`,
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
  }
  