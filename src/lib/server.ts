import { betterAuth } from "better-auth";
import { magicLink } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { api } from "~/trpc/server";

const prisma = new PrismaClient();
export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }, request) => {
        await api.user.createUser({
          email: email,
        });
      },
    }),
  ],
});

export type Session = typeof auth.$Infer.Session;
