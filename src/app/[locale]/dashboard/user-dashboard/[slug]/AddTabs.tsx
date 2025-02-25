"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "~/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";
import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import { api } from "~/trpc/react";

const formSchema = z.object({
  name: z.string(),
  dashboardId: z.string(),
});

type FormData = z.infer<typeof formSchema>;

type Props = {
  dashboardId: string;
};

export function AddTabs({ dashboardId }: Props) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dashboardId: dashboardId,
    },
  });

  const createTab = api.tabs.createTab.useMutation();
  const onSubmit = (data: FormData) => {
    createTab.mutate(data);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <FaPlus size={20} className="cursor-pointer items-end" />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>
            <DisplayFont className="text-3xl">Manage Tabs</DisplayFont>
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) =>
                onSubmit({ ...data, dashboardId: dashboardId }),
              )}
            >
              <h2>Add Tabs</h2>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tab name</FormLabel>
                    <FormControl>
                      <Input placeholder="Dashboard name" {...field} />
                    </FormControl>
                    <FormDescription>This can be changed later</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4 w-min self-end">
                Add
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
