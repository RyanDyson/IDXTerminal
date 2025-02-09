import { DisplayFont } from "../(landing)/_components/DisplayFont";
import { HydrateClient } from "~/trpc/server";

export default function DashboardLandingPage() {
  return (
    <HydrateClient>
      <main>
        <div className="flex h-full flex-col items-center justify-center space-y-2 p-8">
          <DisplayFont className="text-3xl">Welcome to IDXTerminal</DisplayFont>
          <span>to get started</span>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex h-full w-64 cursor-pointer justify-center rounded-md bg-stone-50 p-4 text-center text-stone-950 transition-colors hover:bg-stone-300">
              <p>create a dashboard from one of our templates</p>
            </div>
            <div className="flex h-full w-64 cursor-pointer justify-center rounded-md bg-stone-50 p-4 text-center text-stone-950 transition-colors hover:bg-stone-300">
              <p>create a dashboard from an equity</p>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
