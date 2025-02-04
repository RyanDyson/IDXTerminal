"use client";

import { type BlockType } from "../../types/tempBlockList";
import { Checkbox } from "~/components/ui/checkbox";
import { useState } from "react";

type Props = {
  item: BlockType;
  index: number;
  onSelect: (isSelected: boolean) => void;
};

export function BlockItem(props: Props) {
  const { index, item, onSelect } = props;
  const idnString = index.toString();
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected((prev) => {
      const newState = !prev;
      onSelect(newState);
      return newState;
    });
  };

  return (
    <label
      htmlFor={idnString}
      className="flex w-full items-center justify-between gap-x-6 rounded-md bg-stone-900 px-4 py-2 hover:bg-stone-700"
    >
      <div className="flex items-center gap-x-4">
        <Checkbox id={idnString} checked={isSelected} onClick={handleSelect} />
        <p>{item.title}</p>
      </div>
      <div className="max-w-72">
        <p className="text-wrap text-right text-sm text-stone-300">
          {item.subtitle}
        </p>
      </div>
    </label>
  );
}
