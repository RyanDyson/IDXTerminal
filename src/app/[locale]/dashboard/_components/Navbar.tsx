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
import { currentUser } from "@clerk/nextjs/server";

export async function Navbar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const user = await currentUser();

  return (
    <Sidebar collapsible="icon" className="dark text-white" {...props}>
      <div className="flex h-screen w-full flex-col justify-between bg-stone-900">
        <SidebarHeader>
          <NavLogo />
        </SidebarHeader>
        <SidebarContent className="p-2">
          <NavMainGroup />
          <NavDashboardList />
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
