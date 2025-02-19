"use client";

import { useEffect, useState } from "react";
import { type TRPCError } from "@trpc/server";
import { IoNotifications } from "react-icons/io5";
import { DisplayFont } from "../../(landing)/_components/DisplayFont";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { useInView } from "react-intersection-observer";

interface NotificationProps<T> {
  data: T[];
  isInitialLoading?: boolean;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
  error?: TRPCError;
  renderItem: (item: T) => React.ReactNode;
  label: {
    heading: string;
    empty: string;
  };
  classes?: {
    container?: string;
    heading?: string;
    listContainer?: string;
    itemContainer?: string;
  };
  components?: {
    empty?: React.ReactNode;
    skeleton?: React.ReactNode;
    errorRender?: React.ReactNode;
  };
  hasNewItems?: boolean;
  onOpenChange?: () => void;
}

export const Notification = <T,>({
  data,
  isInitialLoading,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  error,
  renderItem,
  label,
  classes,
  components,
  onOpenChange,
}: NotificationProps<T>) => {
  const { ref, inView } = useInView();
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  console.log(isButtonActive);

  const handleOpenChange = (open: boolean) => {
    if (!open && isOpen) {
      onOpenChange?.();
    }
    setIsOpen(open);
    setIsButtonActive(open);
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      void fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const { container, heading, listContainer, itemContainer } = classes ?? {};
  const { empty, skeleton, errorRender } = components ?? {};

  const listClassName = cn("flex flex-col px-4", listContainer);
  const itemClassName = cn(
    "py-4 border-b last:border-b-0 border-gray-500/15",
    itemContainer,
  );

  const emptyComponent = empty ?? (
    <div className="flex flex-col items-center justify-center gap-4 py-6">
      <IoNotifications className="text-gray-200" size={112} />
      <DisplayFont className="text-gray-700">{label.empty}</DisplayFont>
    </div>
  );

  const skeletonComponent = skeleton ?? <div className={itemClassName}></div>;

  return (
    <Popover onOpenChange={handleOpenChange}>
      <PopoverTrigger>
        <button>notifs</button>
      </PopoverTrigger>

      <PopoverContent
        className="relative bottom-6 mt-5 flex w-screen items-center justify-center border-none bg-transparent p-0 px-4 shadow-none sm:w-96"
        align="end"
      >
        <div
          className={cn(
            "w-full divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            container,
          )}
        >
          <DisplayFont className={cn("px-4 py-2.5 font-medium", heading)}>
            {label.heading}
          </DisplayFont>

          {isInitialLoading ? (
            <div className={listClassName}>
              {skeletonComponent}
              {skeletonComponent}
              {skeletonComponent}
            </div>
          ) : data.length === 0 ? (
            emptyComponent
          ) : error ? (
            errorRender
          ) : (
            <div className={cn("max-h-[370px]", listClassName)}>
              {data?.map((notif, index) => (
                <div
                  key={index}
                  className={itemClassName}
                  ref={index === data.length - 1 ? ref : undefined}
                >
                  {renderItem(notif)}
                </div>
              ))}
              {isFetchingNextPage && skeletonComponent}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
