import { type TemplateType } from "../../types/tempTemplateList";
import Image from "next/image";
import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";

type Props = {
  item: TemplateType;
};

export const TemplateItem = (props: Props) => {
  const { item } = props;

  return (
    <div className="px-1">
      <div className="flex flex-col justify-between gap-y-2 rounded-md bg-stone-900 p-2 hover:bg-stone-700">
        <Image
          className="max-h-32 w-full rounded-md object-cover"
          src={item.image}
          alt={item.title}
        />
        <DisplayFont className="text-xl">{item.title}</DisplayFont>
        <p className="text-sm text-stone-300">{item.subtitle}</p>
      </div>
    </div>
  );
};
