import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import Image from "next/image";
import placeholder from "~/../public/placeholder.png";

type featuresItemProps = {
  title: string;
  icon: React.ReactNode;
  label: string;
  image?: string;
  cursorPosition?: { x: number; y: number };
};

export const CustomCard = ({
  title,
  icon,
  label,
  image,
}: featuresItemProps) => {
  const imageSrc = image ?? placeholder;

  return (
    <div className="card relative w-full items-end lg:h-[250px] lg:w-[300px]">
      <div className="card-content relative z-20 flex flex-row items-end justify-between space-x-2 bg-stone-900 p-8 text-stone-50">
        <Image
          src={imageSrc}
          alt="card"
          className="absolute left-0 top-0 z-10 h-full w-full rounded-lg object-cover opacity-0 transition-opacity hover:opacity-100"
        />
        <div className="relative z-30 max-w-48">
          <DisplayFont className="text-2xl font-bold text-white">
            {title}
          </DisplayFont>
          <p className="text-sm text-white">{label}</p>
        </div>
        {icon}
      </div>
    </div>
  );
};
