import { SidebarGroup, SidebarGroupLabel } from "~/components/ui/sidebar";
import { SearchDialog } from "../SearchDialog";

export function NavMainGroup() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Tools</SidebarGroupLabel>
      <SearchDialog />
    </SidebarGroup>
  );
}
