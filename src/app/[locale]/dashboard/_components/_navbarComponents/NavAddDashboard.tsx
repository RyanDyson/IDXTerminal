"use client";

import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from "~/components/ui/dialog";
import { api } from "~/trpc/react";
import { FaPlus } from "react-icons/fa6";
import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import { NavAddDashboardForm } from "./NavAddDashboardForm";

import { type User } from "@prisma/client";

type Props = {
  user: User | null;
};

export function NavAddDashboard(props: Props) {
  const mutation = api.dashboard.createDashboard.useMutation();

  const handleSubmit = async (data: {
    name: string;
    equity: string;
    userId: string;
  }) => {
    await mutation.mutateAsync(data);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <FaPlus size={10} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>
            <DisplayFont className="text-3xl">Add Dashboard</DisplayFont>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-2">
          <NavAddDashboardForm user={props.user} handleSubmit={handleSubmit} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
