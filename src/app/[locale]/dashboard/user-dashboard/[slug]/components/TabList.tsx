"use client";

import { type Tabs } from "@prisma/client";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { AddTabs } from "./AddTabs";
import { useEffect } from "react";
import { api } from "~/trpc/react";

type Props = {
  dashboardId: string;
};

export function TabList({ dashboardId }: Props) {
  const [tabList, setTabs] = useState<Tabs[]>([]);
  const { data: tabs, refetch } = api.tabs.getTabsByDashboardId.useQuery({
    dashboardId: dashboardId,
  });

  useEffect(() => {
    const sortedTabs = tabs?.sort((a, b) => a.order - b.order);
    setTabs(sortedTabs ?? []);
  }, [tabs]);

  const TabButton = ({ tab }: { tab: (typeof tabList)[number] }) => {
    const tabWithCurrent = { ...tab, current: false };

    return (
      <div>
        <button
          onClick={() => {
            setTabs(
              tabList.map((item) => {
                if (item.id === tab.id) {
                  return { ...item, current: true };
                } else {
                  return { ...item, current: false };
                }
              }),
            );
          }}
          className={cn(
            "flex h-full w-full items-center justify-center rounded-full px-4 py-2 text-sm transition-colors hover:bg-stone-800",
            tabWithCurrent.current ? "bg-stone-800" : "bg-stone-600",
          )}
        >
          {tab.name}
        </button>
      </div>
    );
  };

  return (
    <div className="flex w-full items-center justify-start space-x-2 rounded-full bg-stone-900 stroke-stone-600 stroke-2 p-2">
      {tabList.map((item, idx) => (
        <TabButton tab={item} key={idx} />
      ))}
      <AddTabs dashboardId={dashboardId} />
    </div>
  );
}
