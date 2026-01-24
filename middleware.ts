import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /portfolio to /templates
  if (pathname === '/portfolio') {
    return NextResponse.redirect(new URL('/templates', request.url));
  }

  // Redirect /portofoliu (Romanian) to /templates
  if (pathname === '/portofoliu') {
    return NextResponse.redirect(new URL('/templates', request.url));
  }

  // Redirect /portfolio/demos to /templates/landing-page-concepts
  if (pathname === '/portfolio/demos') {
    return NextResponse.redirect(new URL('/templates/landing-page-concepts', request.url));
  }

  // Redirect /portfolio/real to /templates (removed client work section)
  if (pathname.startsWith('/portfolio/real')) {
    return NextResponse.redirect(new URL('/templates', request.url));
  }

  // Redirect individual demo pages to landing templates
  if (pathname.startsWith('/portfolio/demo-')) {
    const slug = pathname.replace('/portfolio/', '');
    return NextResponse.redirect(new URL(`/templates/landing/${slug}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portfolio/:path*', '/portofoliu/:path*'],
};
