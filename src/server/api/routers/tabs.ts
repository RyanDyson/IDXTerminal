import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const tabsRouter = createTRPCRouter({
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
  getTabsByDashboardId: publicProcedure
    .input(
      z.object({
        dashboardId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return ctx.db.tabs.findMany({
        where: {
          dashboardId: input.dashboardId,
        },
      });
    }),
});
