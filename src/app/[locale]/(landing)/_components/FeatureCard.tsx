"use client";

import { DisplayFont } from "./DisplayFont";
import {
  IoNewspaper,
  IoColorPalette,
  IoPodium,
  IoApps,
  IoChatbox,
  IoAnalytics,
} from "react-icons/io5";
import { CustomCard } from "~/components/ui/CustomCard";
import { useRef, useEffect } from "react";

export function FeatureCard() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardsContainer = cardsRef.current;
    const cards = cardsContainer?.getElementsByClassName("card");

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (cardsContainer && cards) {
        for (const card of cards) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    if (cardsContainer) {
      cardsContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const featuresList = [
    {
      icon: <IoNewspaper size={30} className="stroke-stone-400" />,
      title: "Keep Up",
      label: "with the latest news",
    },
    {
      icon: <IoColorPalette size={30} className="text-stone-50" />,
      title: "Customize",
      label: "your own stock dashboard",
    },
    {
      icon: <IoApps size={30} className="text-stone-50" />,
      title: "Seamless",
      label: "Integration with other apps, like TradingView",
    },
    {
      icon: <IoPodium size={30} className="stroke-stone-400" />,
      title: "Accurate",
      label: "real-time stock market data",
    },
    {
      icon: <IoChatbox size={30} className="text-stone-50" />,
      title: "Connect",
      label: "With other traders",
    },
    {
      icon: <IoAnalytics size={30} className="text-stone-50" />,
      title: "Analyse",
      label: "with our cutting-edge AI and powertools",
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
        className="cards flex w-fit max-w-[916px] flex-col flex-wrap items-center justify-center gap-1 rounded-xl bg-stone-900 p-1 md:flex-row"
      >
        {featuresList.map((feature, index) => (
          <CustomCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
