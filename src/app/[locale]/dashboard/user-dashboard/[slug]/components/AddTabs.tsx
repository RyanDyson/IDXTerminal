"use client";

import { set, z } from "zod";
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
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { FaTrash, FaSave, FaSpinner } from "react-icons/fa";
import { type Tabs } from "@prisma/client";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ReactGridLayout, { type Layout } from "react-grid-layout";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string(),
  dashboardId: z.string(),
});

type FormData = z.infer<typeof formSchema>;

type Props = {
  dashboardId: string;
};

export function AddTabs({ dashboardId }: Props) {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isEditing, setIsEdting] = useState<boolean>(false);
  const [tabList, setTabs] = useState<Tabs[]>([]);
  const [countTab, setCountTab] = useState<number>(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dashboardId: dashboardId,
    },
  });

  const {
    data: tabs,
    refetch,
    isLoading,
  } = api.tabs.getTabsByDashboardId.useQuery({
    dashboardId: dashboardId,
  });

  const deleteTab = api.tabs.deleteTab.useMutation();
  const createTab = api.tabs.createTab.useMutation();
  // const editTab = api.tabs.editTab.useMutation();
  const orderTab = api.tabs.orderTab.useMutation();

  useEffect(() => {
    const orderedTabs = tabs?.sort((a, b) => a.order - b.order);
    if (orderedTabs) {
      setCountTab(orderedTabs.length);
      setTabs(orderedTabs);
    }
  }, [tabs, setTabs]);

  const onSubmit = async (data: FormData) => {
    setIsAdding(true);
    try {
      if (countTab > 100) {
        toast("You can only create 100 tabs.");
        return;
      }
      await createTab.mutateAsync(data);
      toast("Tab created successfully.");
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false);
      form.reset();
      await refetch();
      setCountTab((prev) => prev + 1);
    }
  };

  const handleEdit = () => {
    setIsEdting(!isEditing);
  };

  const handleDelete = async (tabId: string) => {
    await deleteTab.mutateAsync({ tabId: tabId });
    setCountTab((prev) => prev - 1);
    await refetch();
  };

  const handleLayoutChange = (layout: Layout[]) => {
    // Update the tab order based on the new layout
    const updatedTabs = layout.map((item, index) => {
      const tab = tabList.find((t) => t.id === item.i);
      orderTab.mutate({
        tabId: item.i,
        order: index,
        dashboardId: dashboardId,
      });
      return { ...tab, order: index };
    });

    setTabs(updatedTabs as Tabs[]);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <FaPlus size={20} className="cursor-pointer items-end" />
      </DialogTrigger>
      <DialogContent className="flex w-full max-w-max flex-col justify-between space-y-2 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>
            <DisplayFont className="text-3xl">Manage Tabs</DisplayFont>
          </DialogTitle>
        </DialogHeader>
        <div className="flex w-full gap-x-8">
          <div className="flex w-full min-w-[400px] flex-col gap-y-2">
            <div className="mt-4 flex w-full items-center justify-between">
              <p className="text-lg font-bold">Edit Tabs</p>
              <FaEdit
                size={16}
                onClick={() => handleEdit()}
                className="cursor-pointer transition-colors duration-150 hover:text-stone-400"
              />
            </div>
            <ReactGridLayout
              className="layout flex w-full flex-col gap-y-1 rounded-md p-0"
              cols={1}
              rowHeight={30}
              width={400}
              compactType="vertical"
              preventCollision={false}
              layout={tabList.map((tab, index) => ({
                i: tab.id,
                x: 0,
                y: index,
                w: 1,
                h: 1,
              }))}
              onLayoutChange={handleLayoutChange}
              isDraggable={isEditing}
              isResizable={false}
              draggableHandle=".react-grid-dragHandle"
            >
              {tabList?.map((tab) => {
                return (
                  <div
                    key={tab.id}
                    className="flex w-full items-center justify-between rounded-md bg-stone-800 p-2"
                  >
                    <div className="relative flex items-center gap-x-2 transition-all duration-300">
                      <BsGrid3X2GapFill
                        size={16}
                        className={`react-grid-dragHandle cursor-pointer text-stone-500 transition-opacity duration-300 hover:text-stone-200 ${
                          isEditing ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <p
                        className={`absolute truncate text-nowrap transition-all duration-300 ${isEditing ? "left-6" : "left-0"}`}
                      >
                        {tab.name}
                      </p>
                    </div>
                    {isEditing && (
                      <div className="flex items-center gap-x-2">
                        <FaTrash
                          size={16}
                          className="cursor-pointer text-stone-500 transition-colors duration-150 hover:text-stone-50"
                          onClick={() => handleDelete(tab.id)}
                        />
                        <FaSave size={16} className="text-stone-500" />
                      </div>
                    )}
                  </div>
                );
              })}
            </ReactGridLayout>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) =>
                onSubmit({ ...data, dashboardId: dashboardId }),
              )}
              className="flex w-full flex-col gap-y-2 pt-4"
            >
              <h2 className="text-lg font-bold">Add Tabs</h2>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tab name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your tab name here..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-4 w-min self-end"
                disabled={isAdding}
              >
                {isAdding ? (
                  <FaSpinner className="animate-spin text-white" />
                ) : (
                  "Add"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
