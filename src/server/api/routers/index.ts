import { router, publicProcedure } from "~/server/trpc";

export const exampleRouter = router({
  hello: publicProcedure.query(({ ctx }) => {
    return {
      greeting: `hello! ${ctx.auth?.userId}`,
    };
  }),
});
