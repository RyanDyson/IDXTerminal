"use client";

import { useState } from "react";
import { cn } from "~/lib/utils";
import { Responsive, WidthProvider } from "react-grid-layout";
import { FaPlus } from "react-icons/fa6";
import { Button } from "~/components/ui/button";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { FaX } from "react-icons/fa6";
import { getBlocks } from "./dashboard/[[...dashboard]]/useBlocks";
import { type Block } from "@prisma/client";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const initialLayout = [
  {
    layout: { i: "1", x: 0, y: 0, w: 5, h: 5 },
    data: {
      id: "1",
      name: "Clock",
      type: "Clock",
      equity: "AADI",
      dashboardId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    layout: { i: "2", x: 6, y: 0, w: 5, h: 4 },
    data: {
      id: "2",
      name: "TickerGlance",
      type: "TickerGlance",
      equity: "AADI",
      dashboardId: "2",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    layout: { i: "3", x: 0, y: 6, w: 5, h: 8 },
    data: {
      id: "3",
      name: "TickerGlance",
      type: "TickerGraph",
      equity: "AADI",
      dashboardId: "3",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];

type Props = {
  children: React.ReactNode;
};

const BlockWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="react-grid-dragHandle flex w-full cursor-grab justify-between p-2 transition-colors hover:bg-stone-950/15">
        <BsGrid3X2GapFill size={10} className="h-full text-white" />
        <FaX size={10} className="cursor-pointer text-white" />
      </div>
      <div className="flex h-full w-full items-center justify-center self-start p-4">
        {children}
      </div>
    </>
  );
};

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const tempTabs = [
    {
      id: "1",
      name: "Overview",
      current: true,
    },
    {
      id: "2",
      name: "Financials",
      current: false,
    },
    {
      id: "3",
      name: "Technical Analysis",
      current: false,
    },
    {
      id: "4",
      name: "Comparison Analysis",
      current: false,
    },
    {
      id: "5",
      name: "Ownership",
      current: false,
    },
    {
      id: "6",
      name: "Estimates",
      current: false,
    },
  ];

  const [tabs, setTabs] = useState(tempTabs);

  const [layout, setLayout] = useState(initialLayout);

  const addNewBlock = () => {
    const newBlock = {
      layout: {
        i: (layout.length + 1).toString(),
        x: (layout.length * 2) % 12,
        y: Infinity, // places it at the bottom
        w: 2,
        h: 2,
      },
      data: {
        id: (layout.length + 1).toString(),
        name: "NewBlock",
        dashboardId: "1",
        type: "NewType",
        equity: "NewEquity",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };
    setLayout([...layout, newBlock]);
  };

  const TabButton = ({ tab }: { tab: (typeof tempTabs)[number] }) => {
    return (
      <div>
        <button
          onClick={() => {
            setTabs(
              tabs.map((item) => {
                if (item.id === tab.id) {
                  return { ...item, current: true };
                } else {
                  return { ...item, current: false };
                }
              }),
            );
          }}
          className={cn(
            "flex h-full w-full items-center justify-center rounded-full px-4 py-2 text-sm transition-colors hover:bg-stone-800",
            tab.current ? "bg-stone-800" : "bg-stone-600",
          )}
        >
          {tab.name}
        </button>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full flex-col space-y-2 px-4">
      <div className="flex w-full items-center justify-start space-x-2 rounded-full bg-stone-900 stroke-stone-600 stroke-2 p-2">
        {tabs.map((item, idx) => (
          <TabButton tab={item} key={idx} />
        ))}
        <FaPlus size={20} className="cursor-pointer items-end" />
      </div>
      <div className="h-full w-full overflow-y-scroll rounded-md bg-stone-900">
        <ResponsiveGridLayout
          className="layout h-full w-full"
          layouts={{ lg: layout.map((block) => block.layout) }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          margin={[10, 10]}
          containerPadding={[10, 10]}
          draggableHandle=".react-grid-dragHandle"
          onLayoutChange={(newLayout) =>
            setLayout(
              newLayout.map((item, index) => ({
                layout: item,
                data: layout[index]?.data ?? {
                  id: "",
                  name: "",
                  type: "",
                  equity: "",
                  dashboardId: "",
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              })),
            )
          }
        >
          {layout.map((block) => (
            <div
              key={block.layout.i}
              className="flex w-full flex-col items-center rounded-md bg-stone-800 p-1"
            >
              <BlockWrapper>{getBlocks({ block: block.data })}</BlockWrapper>
            </div>
          ))}
        </ResponsiveGridLayout>
        <Button
          onClick={() => addNewBlock()}
          className="fixed bottom-8 right-12 flex h-8 w-8 items-center justify-center rounded-full p-2"
        >
          <FaPlus size={10} className="cursor-pointer" />
        </Button>
      </div>
    </div>
  );
}
