import { Dialog, DialogTrigger, DialogContent } from "~/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";

export function AddBlocks() {
  return (
    <Dialog>
      <DialogTrigger>
        <FaPlus size={10} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg"></DialogContent>
    </Dialog>
  );
}
