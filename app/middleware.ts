import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 打印每次请求的详细信息
  console.log("Middleware triggered for URL:", request.nextUrl.href);
  console.log("Full request URL:", request.url);
  console.log("Pathname:", request.nextUrl.pathname);

  if (request.nextUrl.href.includes("dashboard")) {
    console.log("dashboard requesting - MATCHED!");
    console.log("Request headers:", Object.fromEntries(request.headers));

    const response = NextResponse.next();

    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, TRACE, OPTIONS, CONNECT"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // 匹配所有路径
};
