"use client";

import {
  useSidebar,
  SidebarGroup,
  SidebarGroupLabel,
} from "~/components/ui/sidebar";
import { FaPlus } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { useState } from "react";

type DashBoardItemProps = {
  title: string;
  equity: string;
  notif: number;
};

const DashBoardItem = (props: DashBoardItemProps) => {
  const { title, equity, notif } = props;

  return (
    <div className="flex w-full items-center justify-between space-x-2 rounded-sm border border-stone-600 bg-stone-900 p-2 text-xs text-white">
      <p>{title}</p>
      <div className="flex items-center space-x-2">
        <p className="rounded-full bg-stone-50 px-2 py-0.5 text-stone-950">
          {equity}
        </p>
        <p className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-700 bg-blue-50 p-1 text-center text-sm font-bold text-blue-700">
          {notif}
        </p>
      </div>
    </div>
  );
};

export function NavDashboardList() {
  const tempData = {
    data: [
      { title: "Dashboard 1", equity: "AAPL", notif: 3 },
      { title: "Dashboard 2", equity: "TSLA", notif: 2 },
      { title: "Dashboard 3", equity: "GOOGL", notif: 1 },
    ],
  };

  const [dashboards, setDashboards] = useState(tempData);
  const { open } = useSidebar();

  const handleAdd = () => {
    setDashboards((prev) => ({
      data: [
        ...prev.data,
        { title: "Your Dashboard", equity: "N/A", notif: 0 },
      ],
    }));
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="w-full justify-between">
        <p>Dashboards</p>
        <FaPlus
          size={3}
          className="cursor-pointer"
          onClick={() => handleAdd()}
        />
      </SidebarGroupLabel>
      <div className="flex w-full flex-col items-center space-y-2 rounded-md bg-stone-950 p-2 text-sm text-white">
        {dashboards.data.map((item, index) => (
          <DashBoardItem key={index} {...item} />
        ))}
      </div>
    </SidebarGroup>
  );
}
