import { type Stock } from "../../types/tempSahamList";
import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";

type props = {
  item: Stock;
};

export function SecuritiesItem({ item }: props) {
  return (
    <div className="flex items-center justify-between rounded-md bg-stone-900 px-4 py-2 hover:bg-stone-700">
      <div className="flex items-center gap-x-4">
        <DisplayFont className="w-24 text-lg font-medium">
          {item.Code}
        </DisplayFont>
        <p className="text-sm font-medium text-stone-100">{item.Name}</p>
      </div>
      <div className="flex items-center">
        <p className="text-xs text-stone-200">{item.AdjustedOpenPrice}</p>
        <p className="ml-2 text-xs text-stone-200">{item.LastDate}</p>
      </div>
    </div>
  );
}
