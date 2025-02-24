import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log("Middleware triggered for URL:", request.nextUrl.href);
  console.log("Full request URL:", request.url);
  console.log("Pathname:", request.nextUrl.pathname);
  return NextResponse.next();
}

