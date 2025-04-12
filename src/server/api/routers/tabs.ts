import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { d } from "node_modules/@clerk/elements/dist/step-z-Bm-lcH.mjs";

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
  editTab: publicProcedure
    .input(
      z.object({
        dashboradId: z.string(),
        tabId: z.string(),
        newName: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.tabs.update({
        where: { id: input.tabId },
        data: { name: input.newName },
      });
    }),
  orderTab: publicProcedure
    .input(
      z.object({
        dashboardId: z.string(),
        tabId: z.string(),
        order: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.tabs.update({
        where: {
          id: input.tabId,
        },
        data: {
          order: input.order,
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
  deleteTab: publicProcedure
    .input(z.object({ tabId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.db.tabs.delete({
        where: { id: input.tabId },
      });
    }),
  countTabs: publicProcedure
    .input(
      z.object({
        dashboardId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return ctx.db.tabs.count({
        where: {
          dashboardId: input.dashboardId,
        },
      });
    }),
});
