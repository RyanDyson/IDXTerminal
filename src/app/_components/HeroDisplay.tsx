import { DisplayFont } from "./DisplayFont";
export const HeroDisplay = () => {
  return (
    <div className="flex h-screen w-full flex-col items-end justify-center p-8">
      <DisplayFont className="ps-4 text-5xl">IDXTerminal</DisplayFont>
      <p>Indonesia's premier trading terminal</p>
    </div>
  );
};
