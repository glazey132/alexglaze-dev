import { NextResponse } from 'next/server';

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://alexglaze.dev/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

export const dynamic = 'force-dynamic';
