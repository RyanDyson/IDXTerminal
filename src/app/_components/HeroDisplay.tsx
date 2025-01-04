import { DisplayFont } from "./DisplayFont";
import { MacbookScroll } from "~/components/ui/macbook-scroll";
import { Spotlight } from "~/components/ui/spotlight";
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
    <div
      id="Product"
      className="bg-grid-white/[0.02] relative h-max w-screen overflow-hidden bg-stone-950/[0.96] antialiased"
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-30">
        <MacbookScroll title={<DisplayText />} src={""} />
      </div>
      <div className="absolute bottom-0 z-40 h-64 w-screen bg-gradient-to-b from-transparent to-stone-950/100" />
    </div>
  );
};
