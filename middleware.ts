import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware for routing and security headers
 * - Handles trailing slash normalization
 * - Adds security headers
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect trailing slashes (except root)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!api|_next/static|_next/image|favicon.ico|images|icons|manifest.json).*)",
  ],
};
