import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarFooter,
} from "~/components/ui/sidebar";
import { NavUser } from "./_navbarComponents/NavUser";
import React from "react";
import { NavLogo } from "./_navbarComponents/NavLogo";
import { NavDashboardList } from "./_navbarComponents/NavDashboardList";
import { NavMainGroup } from "./_navbarComponents/NavMainGroup";
import { getUser } from "../../api/auth/get-user/server";
import { api } from "~/trpc/server";
import { type Dashboard } from "@prisma/client";

export async function Navbar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const user = await getUser();
  let dashboards: Dashboard[] = [];
  if (user) {
    const data = await api.dashboard.getDashboardsByUserId({ userId: user.id });
    dashboards = data;
  }

  return (
    <Sidebar collapsible="icon" className="dark text-white" {...props}>
      <div className="flex h-screen w-full flex-col justify-between bg-stone-900">
        <SidebarHeader>
          <NavLogo />
        </SidebarHeader>
        <SidebarContent className="p-2">
          <NavMainGroup />
          <NavDashboardList user={user} dashboards={dashboards} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
