import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";
import { api } from "~/trpc/server";

export async function GET() {
  console.log("access");
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  if (!user || !user.primaryEmailAddress || !user.username) {
    return new NextResponse(
      "User doesn't exist / User is not correctly onboarded",
      { status: 401 },
    );
  }

  let dbUser = await api.user.getUserByEmail({
    email: user.primaryEmailAddress.emailAddress,
  });

  if (!dbUser) {
    dbUser = await api.user.createUser({
      clerkId: user.id,
      email: user.primaryEmailAddress.emailAddress,
      username: user.username,
    });
  }

  return new NextResponse(null, {
    status: 302,
    headers: {
      location: `/dashboard`,
    },
  });
}
