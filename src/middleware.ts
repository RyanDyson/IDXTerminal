import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { clerkMiddleware } from "@clerk/nextjs/server";
import type { NextRequest, NextFetchEvent } from "next/server";

const clerk = clerkMiddleware();
const intlMiddleware = createMiddleware(routing);

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  await clerk(req, ev);
  return intlMiddleware(req);
};

export const config = {
  matcher: [
    "/",
    "/(id|en)/:path*",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
