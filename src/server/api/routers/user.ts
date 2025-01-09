import { z } from "zod";
import { scrypt } from "crypto";
import { promisify } from "util";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const scryptAsync = promisify(scrypt);

export const userRouter = createTRPCRouter({
  getUserForAuth: privateProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      if (!input.password) {
        return null;
      }

      const user = await ctx.db.user.findFirst({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        return null;
      }

      const [salt, hashedPassword] = user.password.split(":");

      if (!salt) {
        return null;
      }

      const derivedKey = (await scryptAsync(
        input.password,
        salt,
        64,
      )) as Buffer;

      if (hashedPassword !== derivedKey.toString("hex")) {
        return null;
      }

      return user;
    }),
});
