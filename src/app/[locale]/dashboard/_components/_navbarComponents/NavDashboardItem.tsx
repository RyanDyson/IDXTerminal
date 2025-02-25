"use client";

import { type Dashboard } from "@prisma/client";
import { Link } from "~/i18n/routing";

type DashBoardItemProps = {
  dashboard: Dashboard;
};

export const DashBoardItem = (props: DashBoardItemProps) => {
  const { name, equity, notification, id } = props.dashboard;

  return (
    <Link
      href={"/dashboard/user-dashboard/" + id}
      className="flex w-full items-center justify-between space-x-2 bg-stone-900 p-2 px-2 text-xs text-white transition-colors hover:bg-stone-800"
    >
      <p>{name}</p>
      <div className="flex items-center space-x-2">
        <p className="rounded-full bg-stone-50 px-2 py-0.5 text-stone-950">
          {equity}
        </p>
        <p className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-700 bg-blue-50 p-1 text-center text-sm font-bold text-blue-700">
          {notification}
        </p>
      </div>
    </Link>
  );
};
