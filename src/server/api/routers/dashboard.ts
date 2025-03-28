import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const dashboardRouter = createTRPCRouter({
  createDashboard: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        name: z.string(),
        equity: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      return ctx.db.dashboard.create({
        data: {
          notification: 0,
          userId: input.userId,
          name: input.name,
          equity: input.equity,
          accountId: "default-account-id", // Replace with appropriate logic to set accountId
        },
      });
    }),
  getDashboardsByUserId: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return ctx.db.dashboard.findMany({
        where: {
          userId: input.userId,
        },
      });
    }),
  displayDashboard: publicProcedure
    .input(
      z.object({
        dashBoardId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return ctx.db.dashboard.findUnique({
        where: {
          id: input.dashBoardId,
        },
        select: {
          Tabs: true,
        },
      });
    }),

  deleteDashboard: publicProcedure
    .input(
      z.object({
        dashboardId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      return ctx.db.dashboard.delete({
        where: {
          id: input.dashboardId,
        },
      });
    }),

  isDashboardOwner: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        dashboardId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const dashboard = await ctx.db.dashboard.findUnique({
        where: {
          id: input.dashboardId,
        },
      });

      if (!dashboard) {
        return false;
      }

      return dashboard.userId === input.userId;
    }),
});
