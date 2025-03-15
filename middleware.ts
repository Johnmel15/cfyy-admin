import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Allow requests if it's a public path or the user has a valid token
  if (pathname === "/login" || token) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to the login page
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/appointments/:path*", "/careers/:path*", "/users/:path*"],
};
