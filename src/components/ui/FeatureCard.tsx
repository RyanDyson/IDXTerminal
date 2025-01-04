"use client";

import { DisplayFont } from "~/app/_components/DisplayFont";
import { IoCompassOutline, IoLockClosed } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { CustomCard } from "./CustomCard";

import { useRef, useEffect } from "react";

type featuresItemProps = {
  title: string;
  icon: React.ReactNode;
  label: string;
  image?: string;
  cursorPosition?: { x: number; y: number };
};

const FeaturesItem = ({ title, icon, label, image }: featuresItemProps) => {
  const imageSrc = image ?? { background: `bg-url(${image})` };

  return (
    <div className="card w-full items-end lg:h-[250px] lg:w-[300px]">
      <div className="card-content flex flex-row items-end justify-between space-x-2 bg-stone-900 p-8 text-stone-50">
        <div>
          <DisplayFont className="text-2xl font-bold text-white">
            {title}
          </DisplayFont>
          <p className="text-white">{label}</p>
        </div>
        {icon}
      </div>
    </div>
  );
};

export function FeatureCard() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef?.current?.getElementsByClassName("card");

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (cardsRef.current && cards) {
        for (const card of cards) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    if (cardsRef.current) {
      cardsRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const featuresList = [
    {
      icon: <IoCompassOutline size={30} className="stroke-stone-400" />,
      title: "Keep Up",
      label: "with the latest news",
    },
    {
      icon: <IoLockClosed size={30} className="text-stone-400" />,
      title: "Customize",
      label: "your own stock dashboard",
    },
    {
      icon: <TbMessageCircle size={30} className="text-stone-400" />,
      title: "Seamless",
      label: "Intergration with other apps, like TradingView",
    },
    {
      icon: <IoCompassOutline size={30} className="stroke-stone-400" />,
      title: "Keep Up",
      label: "with the latest news",
    },
    {
      icon: <IoLockClosed size={30} className="text-stone-400" />,
      title: "Customize",
      label: "your own stock dashboard",
    },
    {
      icon: <TbMessageCircle size={30} className="text-stone-400" />,
      title: "Seamless",
      label: "voice & video chats",
    },
  ];

  return (
    <div
      id="Features"
      className="mt-12 flex flex-col items-center rounded-none bg-stone-950 px-14 py-12 text-stone-50 backdrop-blur-md md:rounded-xl lg:justify-between"
    >
      <DisplayFont className="flex justify-center break-words pb-8 text-center text-4xl md:items-center lg:justify-normal lg:text-left">
        Our Features
      </DisplayFont>
      <div
        ref={cardsRef}
        className="cards flex w-full max-w-[916px] flex-col flex-wrap items-center justify-center gap-1 rounded-xl bg-stone-900 p-1 md:flex-row"
      >
        {featuresList.map((feature, index) => (
          <FeaturesItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
