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

const tempUser = {
  name: "John Doe",
  email: "JohnDoe@gmail.com",
  avatar: "https://randomuser.me/api/portraits",
};

export function Navbar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
          <NavUser user={tempUser} />
        </SidebarFooter>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
