import { SidebarGroup, SidebarGroupLabel } from "~/components/ui/sidebar";
import { DashBoardItem } from "./NavDashboardItem";
import { NavAddDashboard } from "./NavAddDashboard";
import { type User } from "@prisma/client";
import { api } from "~/trpc/server";

type props = {
  user: User | null;
};

export async function NavDashboardList(props: props) {
  const { user } = props;

  const dashboards = user
    ? await api.dashboard.getDashboardsByUserId({
        userId: user.id,
      })
    : [];

  // const tempData = {
  //   data: [
  //     { title: "Dashboard 1", equity: "AAPL", notif: 3 },
  //     { title: "Dashboard 2", equity: "TSLA", notif: 2 },
  //     { title: "Dashboard 3", equity: "GOOGL", notif: 1 },
  //   ],
  // };

  // const handleAdd = async () => {
  //   const name = prompt("Name of the dashboard?");
  //   const equity = prompt("Equity?");
  //   if (name && equity) {
  //     await api.dashboard.createDashboard({
  //       userId: dbUser.id,
  //       name,
  //       equity,
  //     });
  //   }
  // };

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="w-full justify-between">
        <p>Dashboards</p>
        {/* <FaPlus
          size={3}
          className="cursor-pointer"
          // onClick={() => handleAdd()}
        /> */}
        <NavAddDashboard user={user} />
      </SidebarGroupLabel>
      <div className="flex w-full flex-col items-center space-y-2 rounded-md bg-stone-950 p-2 text-sm text-white">
        {dashboards.map((item, index) => (
          <DashBoardItem key={index} dashboard={item} />
        ))}
      </div>
    </SidebarGroup>
  );
}
