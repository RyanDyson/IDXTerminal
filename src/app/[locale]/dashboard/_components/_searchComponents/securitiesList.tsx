import { SecuritiesItem } from "./securitiesItem";
import { type Stock, tempData } from "../../types/tempSahamList";
import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import { NavSearch } from "../_navbarComponents/NavSearchBar";

export function SecuritiesList() {
  const { data } = tempData;

  return (
    <div className="max-w-screen mb-16 flex h-[600px] max-h-screen w-[1000px] flex-col gap-y-2 overflow-y-scroll bg-stone-800 px-4 py-2">
      <div>
        <DisplayFont className="text-2xl">Equities</DisplayFont>
        <p className="text-sm">
          Click an item to create a new dashboard around the equity
        </p>
      </div>
      <NavSearch className="max-w-full" placeHolder="Search for an equity" />

      <div className="mt-2 flex flex-col gap-y-1">
        {data.map((item: Stock, index: number) => (
          <SecuritiesItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
