import { ResponsiveGridLayout } from "./ResponsiveGridLayout";
import { TabList } from "./TabList";
import { api } from "~/trpc/server";
import { currentUser } from "@clerk/nextjs/server";
import { Skeleton } from "~/components/ui/skeleton";
import { redirect } from "~/i18n/routing";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const clerkUser = await currentUser();
  if (clerkUser == null) {
    redirect({ href: "/sign-in", locale: "en" });
  }
  const user = await api.user.getUserByClerkId({
    clerkId: clerkUser?.id ?? "",
  });
  const dashboardId = (await params).slug;

  if (!user) {
    console.log("user error");
    return <Skeleton className="w-f ull flex h-full flex-col space-y-2 px-4" />;
  }

  if (!dashboardId) {
    console.log("dashboard error", dashboardId);
    return (
      <div className="flex h-full w-full flex-col space-y-2 px-4">
        <Skeleton />
      </div>
    );
  }

  const show = await api.dashboard.isDashboardOwner({
    userId: user.id,
    dashboardId: dashboardId,
  });

  if (!show) {
    console.log("owner error");
    return (
      <div className="flex h-full w-full flex-col space-y-2 px-4">
        ACCESS DENIED. You are not the owner of this dashboard
      </div>
    );
  }

  const dashboardTabs = await api.tabs.getTabsByDashboardId({ dashboardId });
  console.log(dashboardTabs);

  return (
    <div className="flex h-full w-full flex-col space-y-2 px-4">
      <TabList tabs={dashboardTabs} dashboardId={dashboardId} />
      <div className="h-full w-full flex-grow overflow-y-scroll rounded-md bg-stone-900">
        <ResponsiveGridLayout blocks={[]} />
      </div>
    </div>
  );
}
