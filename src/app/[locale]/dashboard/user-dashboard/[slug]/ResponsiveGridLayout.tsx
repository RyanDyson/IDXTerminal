"use client";

import { useState } from "react";
import { type Block } from "@prisma/client";
import { WidthProvider, Responsive } from "react-grid-layout";
import { blockTypes } from "@prisma/client";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { Button } from "~/components/ui/button";
import { FaX } from "react-icons/fa6";
import { getBlocks } from "./useBlocks";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Rgl = WidthProvider(Responsive);

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

type props = {
  blocks: Block[];
};

type LayoutItem = {
  layout: {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  data: Block;
};

const initialLayout: LayoutItem[] = [
  {
    layout: { i: "1", x: 0, y: 0, w: 5, h: 5 },
    data: {
      id: "1",
      type: blockTypes.Clock,
      equity: "AADI",
      tabId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    layout: { i: "2", x: 6, y: 0, w: 5, h: 4 },
    data: {
      id: "2",
      type: blockTypes.TickerGlance,
      equity: "AADI",
      tabId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    layout: { i: "3", x: 0, y: 6, w: 5, h: 8 },
    data: {
      id: "3",
      type: blockTypes.TickerGraph,
      equity: "AADI",
      tabId: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];

export function ResponsiveGridLayout({ blocks }: props) {
  const [layout, setLayout] = useState(initialLayout);
  console.log(blocks);

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
        type: blockTypes.TickerGlance,
        equity: "NewEquity",
        dashboardId: "NewDashboardId",
        tabId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };
    setLayout([...layout, newBlock]);
  };

  return (
    <div className="h-full w-full overflow-y-scroll rounded-md bg-stone-900">
      <Rgl
        className="layout h-full max-h-full w-full"
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
                type: blockTypes.Clock,
                equity: "",
                dashboardId: "",
                tabId: layout[index]?.data.tabId ?? "1",
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
      </Rgl>
      <Button
        onClick={() => addNewBlock()}
        className="fixed bottom-8 right-12 flex h-8 w-8 items-center justify-center rounded-full p-2"
      ></Button>
    </div>
  );
}
