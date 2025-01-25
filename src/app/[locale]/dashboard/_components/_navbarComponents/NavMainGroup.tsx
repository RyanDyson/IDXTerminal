import { SidebarGroup, SidebarGroupLabel } from "~/components/ui/sidebar";
import { NavSearch } from "./NavSearchBar";

export function NavMainGroup() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <NavSearch />
    </SidebarGroup>
  );
}
