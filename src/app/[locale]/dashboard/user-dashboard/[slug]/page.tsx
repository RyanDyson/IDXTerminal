import { ResponsiveGridLayout } from "./components/ResponsiveGridLayout";
import { TabList } from "./components/TabList";
import { currentUser } from "@clerk/nextjs/server";
import { Skeleton } from "~/components/ui/skeleton";
import { redirect } from "~/i18n/routing";
import { api } from "~/trpc/server";

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
    return <Skeleton className="w-f ull flex h-full flex-col space-y-2 px-4" />;
  }

  if (!dashboardId) {
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
    return (
      <div className="flex h-full w-full flex-col space-y-2 px-4">
        ACCESS DENIED. You are not the owner of this dashboard
      </div>
    );
  }
  const dashboardData = await api.dashboard.displayDashboard({
    dashBoardId: dashboardId,
  });

  return (
    <div className="flex h-full w-full flex-col space-y-2 px-4">
      <TabList dashboardId={dashboardId} />
      <div className="h-full w-full flex-grow overflow-y-scroll rounded-md bg-stone-900">
        <ResponsiveGridLayout
          blocks={dashboardData?.Tabs.flatMap((tab) => tab.blocks) ?? []}
          tabId={dashboardData?.Tabs[0]?.id ?? ""}
        />
      </div>
    </div>
  );
}
