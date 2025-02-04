import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import { NavSearch } from "../_navbarComponents/NavSearchBar";
import { tempTemplateList } from "../../types/tempTemplateList";
import { TemplateItem } from "./templateItem";

export function TemplateList() {
  return (
    <div className="max-w-screen mb-16 flex h-[600px] max-h-screen w-[1000px] flex-col gap-y-2 overflow-y-scroll bg-stone-800 px-4 py-2">
      <div>
        <DisplayFont className="text-2xl">Templates</DisplayFont>
        <p className="text-sm">Pick from our templates to get started</p>
      </div>
      <NavSearch className="max-w-full" placeHolder="Search for a template" />

      <div className="mt-2 flex flex-wrap gap-y-2">
        {tempTemplateList.data.map((item, index) => (
          <div key={index} className="w-1/2">
            <TemplateItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
