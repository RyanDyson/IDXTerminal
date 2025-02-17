"use client";

import { FaSearch } from "react-icons/fa";
import { cn } from "~/lib/utils";
import { useSidebar } from "~/components/ui/sidebar";

type Props = {
  className?: string;
  placeHolder?: string;
};

export function NavSearch(props: Props) {
  const { open } = useSidebar();

  return (
    <div className={cn(props.className, "relative flex w-full justify-center")}>
      {open ? (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-white" size={10} />
          </div>
          <input
            aria-label="Search"
            className="hidden w-full rounded-md border bg-stone-950 stroke-stone-700 py-1 pl-10 pr-3 leading-5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:block sm:text-sm"
            placeholder={props.placeHolder ?? "Search"}
            type="search"
          />
        </>
      ) : (
        <FaSearch
          className="rounded-sm text-white transition-colors hover:bg-stone-800"
          size={10}
        />
      )}
    </div>
  );
}
