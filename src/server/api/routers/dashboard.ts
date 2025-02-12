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
          blocks: true,
        },
      });
    }),
});
