"use client";

import { useSidebar } from "~/components/ui/sidebar";
import { SidebarGroup, SidebarGroupLabel } from "~/components/ui/sidebar";
import { DashBoardItem } from "./NavDashboardItem";
import { NavAddDashboard } from "./NavAddDashboard";
import { type User, Dashboard } from "@prisma/client";
import { IoList } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

type props = {
  user: User | null;
  dashboards: Dashboard[];
};

export function NavDashboardList({ user, dashboards }: props) {
  const [dashboardsList, setDashboards] = useState<Dashboard[]>(dashboards);
  const { open, setOpen } = useSidebar();

  useEffect(() => {
    setDashboards(dashboards);
    console.log("Dashboards updated:", dashboards);
  }, [dashboards]);

  return (
    <SidebarGroup>
      {open ? (
        <>
          <SidebarGroupLabel className="w-full justify-between">
            <p>Dashboards</p>
            <NavAddDashboard user={user} />
          </SidebarGroupLabel>
          <div className="flex w-full flex-col items-center space-y-2 rounded-md bg-stone-950 p-2 text-sm text-white">
            {dashboards.map((item, index) => (
              <DashBoardItem key={index} dashboard={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex w-full justify-center">
          <IoList
            className="cursor-pointer rounded-sm text-white transition-colors hover:bg-stone-800"
            size={12}
            onClick={() => setOpen(true)}
          />
        </div>
      )}
    </SidebarGroup>
  );
}
