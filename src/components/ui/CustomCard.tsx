import { DisplayFont } from "~/app/[locale]/_components/DisplayFont";

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
  const imageSrc = image ?? { background: `bg-url(${image})` };

  return (
    <div className="card w-full items-end lg:h-[250px] lg:w-[300px]">
      <div className="card-content flex flex-row items-end justify-between space-x-2 bg-stone-900 p-8 text-stone-50">
        <div className="max-w-48">
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
