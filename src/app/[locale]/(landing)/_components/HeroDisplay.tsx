import { DisplayFont } from "./DisplayFont";
import { MacbookScroll } from "~/components/ui/macbook-scroll";
import { Spotlight } from "~/components/ui/spotlight";
import { Button } from "~/components/ui/button";
import placeHolder from "~/../public/placeholder.png";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const DisplayText = async (props: props) => {
  const user = await currentUser();
  const { translation } = props;

  return (
    <div className="flex flex-col items-center justify-center text-stone-50 md:block">
      <DisplayFont className="text-4xl md:text-6xl lg:text-7xl">
        <span className="italic">IDX</span>Terminal
      </DisplayFont>
      <p className="mt-4 text-sm md:text-base lg:text-lg">
        {translation.subtitle}
      </p>
      <Link href={user ? "/dashboard" : "/sign-in"}>
        <Button className="mt-6 rounded-full px-6 py-2 font-bold" size={"lg"}>
          {user ? "Go to Your Dashboard" : translation.cta}
        </Button>
      </Link>
    </div>
  );
};

type props = {
  translation: {
    title: string;
    subtitle: string;
    cta: string;
  };
};

export const HeroDisplay = () => {
  const t = useTranslations("Hero");
  const translation = {
    title: t("title"),
    subtitle: t("subtitle"),
    cta: t("cta"),
  };

  return (
    <div
      id="Product"
      className="bg-grid-white/[0.02] block h-max w-screen overflow-hidden bg-stone-950/[0.96] antialiased md:relative"
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-30 hidden md:block">
        <MacbookScroll
          title={<DisplayText translation={translation} />}
          src={placeHolder}
        />
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-8 px-8 pt-20 md:hidden">
        <Image src={placeHolder} alt="placeholder" className="rounded-lg" />
        <DisplayText translation={translation} />
      </div>
      <div className="absolute bottom-0 z-40 hidden h-64 w-screen bg-gradient-to-b from-transparent to-stone-950/100 md:block" />
    </div>
  );
};
