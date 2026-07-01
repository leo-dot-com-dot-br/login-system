import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  if (!req.auth) return Response.redirect(new URL("/login", req.nextUrl));
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
