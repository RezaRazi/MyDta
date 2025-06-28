import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // اگر مسیر با / شروع شود و locale نداشته باشد، به فارسی هدایت کن
  if (pathname === '/' || !pathname.startsWith('/fa') && !pathname.startsWith('/en') && !pathname.startsWith('/de') && !pathname.startsWith('/el') && !pathname.startsWith('/es') && !pathname.startsWith('/fr') && !pathname.startsWith('/it') && !pathname.startsWith('/ja') && !pathname.startsWith('/nl') && !pathname.startsWith('/pt') && !pathname.startsWith('/sv') && !pathname.startsWith('/zh')) {
    const url = request.nextUrl.clone();
    url.pathname = `/fa${pathname}`;
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}; 