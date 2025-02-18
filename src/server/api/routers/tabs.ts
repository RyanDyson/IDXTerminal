import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export function tabs() {
  return createTRPCRouter({
    createTab: publicProcedure
      .input(
        z.object({
          dashboardId: z.string(),
          name: z.string(),
        }),
      )
      .mutation(async ({ input, ctx }) => {
        await ctx.db.tabs.create({
          data: {
            dashboardId: input.dashboardId,
            name: input.name,
          },
        });
      }),
  });
}
