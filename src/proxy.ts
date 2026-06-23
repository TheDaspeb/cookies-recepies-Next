import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "./app/lib/jwt";

function isProtectedApiRoute(pathname: string) {
  return pathname.startsWith("/api/favorites");
}

function hasValidSession(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return false;
  }

  return verifyToken(token) !== null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = hasValidSession(request);

  if (isProtectedApiRoute(pathname) && !isAuthenticated) {
    return Response.json({ message: "No autorizado" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/favorites/:path*"],
};
