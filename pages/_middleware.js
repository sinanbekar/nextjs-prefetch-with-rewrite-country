import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // https://nextjs.org/docs/api-reference/next/server#nextrequest
  // eq to req.headers.get('x-vercel-ip-country')
  const country = req.geo.country ?? "US"; // default

  if (pathname.startsWith(`/country`)) {
    return new NextResponse(null, { status: 404 });
  }

  if (pathname.startsWith("/with-rewrite")) {
    url.pathname = `/country/${country}${pathname}`;
    return NextResponse.rewrite(url);
  }
}
