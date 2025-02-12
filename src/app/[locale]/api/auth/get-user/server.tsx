"use server";

import { api } from "~/trpc/server";
import { auth } from "@clerk/nextjs/server";

export async function getUser() {
  const user = await auth();
  if (!user) {
    return null;
  }
  if (!user.userId) {
    return null;
  }

  const dbUser = await api.user.getUserByClerkId({ clerkId: user.userId });

  return dbUser;
}
