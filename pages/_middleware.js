import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  const country = req.headers.get("x-vercel-ip-country");
  if (country) {
    res.cookie("country", country);
  }
  return res;
}
