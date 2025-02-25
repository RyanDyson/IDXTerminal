"use client";

import { type Tabs } from "@prisma/client";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { AddTabs } from "./AddTabs";
import { useEffect } from "react";
type Props = {
  tabs: Tabs[];
  dashboardId: string;
};

export function TabList({ tabs, dashboardId }: Props) {
  const [tabList, setTabs] = useState(tabs);

  useEffect(() => {
    setTabs(tabs);
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
