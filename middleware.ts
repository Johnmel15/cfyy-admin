import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  console.log("✅ Middleware is running for:", req.nextUrl.pathname);

  const token = await getToken({ req });
  console.log("🔹 Token received:", token);

  if (req.nextUrl.pathname === "/login" || token) {
    return NextResponse.next();
  }

  console.log("🚫 Redirecting to login...");
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/settings", "/appointments", "/careers", "/users"],
};
