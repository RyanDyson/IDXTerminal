"use client";

import {
  useSidebar,
  SidebarGroup,
  SidebarGroupLabel,
} from "~/components/ui/sidebar";

export function NavDashboardList() {
  const { open } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
      <div className="flex w-full flex-col items-center space-y-2 text-sm text-white">
        <div className="flex w-full items-center space-x-2 text-white">
          <span>Dashboard</span>
        </div>
        <div className="flex w-full items-center space-x-2 text-white">
          <span>Dashboard</span>
        </div>
        <div className="flex w-full items-center space-x-2 text-white">
          <span>Dashboard</span>
        </div>
        <div className="flex w-full items-center space-x-2 text-white">
          <span>Dashboard</span>
        </div>
      </div>
    </SidebarGroup>
  );
}
