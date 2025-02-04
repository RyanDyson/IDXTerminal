"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { NavSearch } from "./_navbarComponents/NavSearchBar";
import { useState } from "react";
import { BlocksList } from "./_searchComponents/blocksList";
import { SecuritiesList } from "./_searchComponents/securitiesList";
import { TemplateList } from "./_searchComponents/templateList";
import { DisplayFont } from "../../(landing)/_components/DisplayFont";
import { cn } from "~/lib/utils";

const tabs = [
  {
    label: "Blocks",
    tab: <BlocksList />,
  },
  {
    label: "Securities",
    tab: <SecuritiesList />,
  },
  {
    label: "Templates",
    tab: <TemplateList />,
  },
];

export function SearchDialog() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Dialog>
      <DialogTrigger>
        <NavSearch />
      </DialogTrigger>
      <DialogContent className="flex max-w-min flex-col gap-y-0 space-y-0">
        <DialogHeader className="flex w-full flex-col items-center">
          <DialogTitle>
            <DisplayFont className="text-2xl">Search</DisplayFont>
          </DialogTitle>
          <div className="flex w-full justify-around space-x-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={cn(
                  "w-full rounded-t-md bg-stone-900 px-4 py-1 text-sm text-white",
                  activeTab === index &&
                    "border-2 border-b-0 border-stone-600 bg-stone-800",
                )}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </DialogHeader>
        {tabs[activeTab]?.tab}
      </DialogContent>
    </Dialog>
  );
}
