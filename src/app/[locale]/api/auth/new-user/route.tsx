import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";
import { api } from "~/trpc/server";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return new NextResponse(
      "User doesn't exist / User is not correctly onboarded",
      { status: 401 },
    );
  }
  if (!user.primaryEmailAddress) {
    return new NextResponse("User doesn't have an email address", {
      status: 401,
    });
  }
  if (!user.username) {
    return new NextResponse("User doesn't have a username", { status: 401 });
  }

  let dbUser = await api.user.getUserByEmail({
    email: user.primaryEmailAddress.emailAddress,
  });

  if (!dbUser) {
    dbUser = await api.user.createUser({
      clerkId: user.id,
      email: user.primaryEmailAddress.emailAddress,
      username: user.username,
      imageUrl: user.imageUrl,
    });
  }

  return new NextResponse(null, {
    status: 302,
    headers: {
      location: `/dashboard`,
    },
  });
}
