import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { blockTypes } from "@prisma/client";

export const blocksRouter = createTRPCRouter({
  createBlock: publicProcedure
    .input(
      z.object({
        tabId: z.string(),
        type: z.nativeEnum(blockTypes),
        equity: z.string(),
        layout: z.object({
          i: z.string(),
          x: z.number(),
          y: z.number(),
          w: z.number(),
          h: z.number(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.block.create({
        data: {
          tabId: input.tabId,
          type: input.type,
          equity: input.equity,
          layout: input.layout,
        },
      });
    }),
  updateBlock: publicProcedure
    .input(
      z.object({
        blockId: z.string(),
        newLayout: z.object({
          i: z.string(),
          x: z.number(),
          y: z.number(),
          w: z.number(),
          h: z.number(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.block.update({
        where: { id: input.blockId },
        data: {
          layout: input.newLayout,
        },
      });
    }),
  deleteBlock: publicProcedure
    .input(
      z.object({
        blockId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.block.delete({
        where: {
          id: input.blockId,
        },
      });
    }),

  getBlockTypes: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.blockTypes.findMany();
  }),
});
