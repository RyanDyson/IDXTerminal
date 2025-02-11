import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import defaultPreferences from "~/../types/defaultPreferences.json";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        clerkId: z.string(),
        email: z.string().email(),
        username: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          clerkId: input.clerkId,
          email: input.email,
          name: input.username,
          preferences: defaultPreferences,
        },
      });
    }),
  getUserByEmail: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .query(async ({ ctx, input }) =>
      ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      }),
    ),
});
