import { type Block } from "@prisma/client";
import { Clock } from "./_blocks/Clock";
import { TickerGraph } from "./_blocks/TickerGraph";
import { TickerGlance } from "./_blocks/TickerGlance";

type Props = {
  block: Block;
};

export function getBlocks({ block }: Props) {
  //returns the appropriate blocks
  switch (block.type) {
    case "Clock":
      return <Clock />;
    case "TickerGlance":
      return <TickerGlance />;
    case "TickerGraph":
      return <TickerGraph />;
    default:
  }
}
