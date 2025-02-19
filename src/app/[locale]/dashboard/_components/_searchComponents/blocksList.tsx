"use Client";

import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import { NavSearch } from "../_navbarComponents/NavSearchBar";
import { Button } from "~/components/ui/button";
import { tempBlockList } from "../../types/tempBlockList";
import { BlockItem } from "./blockItem";
import { useState } from "react";
import { useCallback } from "react";

export function BlocksList() {
  const { data } = tempBlockList;
  const [numSelected, setNumSelected] = useState<number>(0);

  const handleSelect = useCallback((isSelected: boolean) => {
    setNumSelected((prev) => (isSelected ? prev + 0.5 : prev - 0.5));
  }, []);

  return (
    <div className="max-w-screen mb-16 flex h-[600px] max-h-screen w-[1000px] flex-col gap-y-2 overflow-y-scroll bg-stone-800 px-4 py-2">
      <div>
        <DisplayFont className="text-2xl">Blocks</DisplayFont>
        <p className="text-sm">Add a block to your dashboard</p>
      </div>
      <NavSearch className="max-w-full" placeHolder="Search for a block" />
      <div className="flex gap-x-2">
        <div className="h-full w-48">
          <DisplayFont className="text-lg">Categories</DisplayFont>
          <DisplayFont className="text-lg">Filter</DisplayFont>
        </div>
        <div className="mt-2 flex w-full flex-col gap-y-1">
          {data.map((item, index) => (
            <BlockItem
              key={index}
              index={index}
              item={item}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <div className="fixed bottom-10 right-10 flex items-center justify-center gap-x-2 rounded-md border bg-stone-700 p-2 ps-4">
        <p className="text-sm">{numSelected} selected</p>
        <Button variant={"secondary"}>Add to dashboard 1</Button>
      </div>
    </div>
  );
}
