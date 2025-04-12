"use client";

import { useState } from "react";
import { type Block } from "@prisma/client";
import { WidthProvider, Responsive, type Layout } from "react-grid-layout";
import { blockTypes } from "@prisma/client";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { FaX } from "react-icons/fa6";
import { getBlocks } from "./getBlocks";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { AddBlocks } from "./AddBlocks";
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
  tabId: string;
};

const initialLayout: Block[] = [
  {
    id: "1",
    type: blockTypes.Clock,
    equity: "AADI",
    tabId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    text: "",
    layout: { i: "1", x: 0, y: 0, w: 5, h: 5 },
  },
  {
    id: "2",
    type: blockTypes.TickerGlance,
    equity: "AADI",
    tabId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    text: "",
    layout: { i: "2", x: 6, y: 0, w: 5, h: 4 },
  },
  {
    id: "3",
    type: blockTypes.TickerGraph,
    equity: "AADI",
    tabId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    text: "",
    layout: { i: "3", x: 0, y: 6, w: 5, h: 8 },
  },
];

export function ResponsiveGridLayout({ blocks, tabId }: props) {
  const [layout, setLayout] = useState(initialLayout);
  console.log(blocks);

  return (
    <div className="relative h-full w-full overflow-y-scroll rounded-md bg-stone-900">
      <Rgl
        className="layout h-full max-h-full w-full"
        layouts={{
          lg: layout.map((block) => block.layout as unknown as Layout),
        }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        margin={[10, 10]}
        containerPadding={[10, 10]}
        draggableHandle=".react-grid-dragHandle"
        onLayoutChange={(newLayout) =>
          setLayout(
            newLayout.map((item, index) => ({
              id: layout[index]?.id ?? (layout.length + 1).toString(),
              type: layout[index]?.type ?? blockTypes.Clock,
              equity: layout[index]?.equity ?? "",
              tabId: layout[index]?.tabId ?? "1",
              createdAt: layout[index]?.createdAt ?? new Date(),
              updatedAt: new Date(),
              text: "",
              layout: {
                i: item.i,
                x: item.x,
                y: item.y,
                w: item.w,
                h: item.h,
              },
            })),
          )
        }
      >
        {layout.map((block) => (
          <div
            key={(block.layout as unknown as Layout)?.i}
            className="flex w-full flex-col items-center rounded-md bg-stone-800 p-1"
          >
            <BlockWrapper>{getBlocks({ block })}</BlockWrapper>
          </div>
        ))}
      </Rgl>
      <AddBlocks addNewBlock={() => AddBlocks} tabId={tabId} />
    </div>
  );
}
