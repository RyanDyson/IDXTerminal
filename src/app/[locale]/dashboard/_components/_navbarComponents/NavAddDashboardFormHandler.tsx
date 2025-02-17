"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { NavAddDashboardForm } from "./NavAddDashboardForm";
import { type User } from "@prisma/client";

type Props = {
  user: User | null;
};

export function NavAddDashboardFormHandler({ user }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mutation = api.dashboard.createDashboard.useMutation();

  const onSubmit = async (data: {
    name: string;
    equity: string;
    userId: string;
  }) => {
    setIsSubmitting(true);
    try {
      await mutation.mutateAsync({
        userId: data.userId,
        name: data.name,
        equity: data.equity,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NavAddDashboardForm
      onSubmit={onSubmit}
      user={user}
      isSubmitting={isSubmitting}
    />
  );
}
