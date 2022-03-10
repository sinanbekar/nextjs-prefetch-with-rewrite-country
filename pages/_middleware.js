import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  res.cookie("country", req.headers.get("x-vercel-ip-country"));
  return res;
}
