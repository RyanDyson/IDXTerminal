import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";

export function EmptyDashboard() {
  return (
    <div>
      <DisplayFont className="text-xl">
        Welcome to your <span className="italic">IDX</span>Terminal Dashboard
      </DisplayFont>
      <p>to get started</p>
      <div className="flex flex-col items-center justify-between space-x-4">
        <p>Add a block to your dashboard</p>
      </div>
    </div>
  );
}
