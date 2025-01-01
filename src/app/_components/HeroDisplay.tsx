import { DisplayFont } from "./DisplayFont";
import { MacbookScroll } from "~/components/ui/macbook-scroll";
import { Button } from "~/components/ui/button";

const DisplayText = () => {
  return (
    <div className="text-stone-50">
      <DisplayFont className="text-6xl">IDXTerminal</DisplayFont>
      <p className="text-sm">
        Indonesia&apos;s Premier AI-powered Trading Terminal
      </p>
      <Button
        className="mt-4 rounded-full px-4 py-2 font-bold"
        variant="secondary"
        size={"sm"}
      >
        Start for free
      </Button>
    </div>
  );
};

export const HeroDisplay = () => {
  return (
    <div className="h-max w-screen overflow-x-hidden overflow-y-hidden">
      <MacbookScroll title={<DisplayText />} />
    </div>
  );
};
