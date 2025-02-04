import { FaSearch } from "react-icons/fa";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
  placeHolder?: string;
};

export function NavSearch(props: Props) {
  return (
    <div className={cn(props.className, "relative w-full")}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="text-white" size={10} />
      </div>
      <input
        aria-label="Search"
        className="block w-full rounded-md border bg-stone-950 stroke-stone-700 py-1 pl-10 pr-3 leading-5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
        placeholder={props.placeHolder ?? "Search"}
        type="search"
      />
    </div>
  );
}
