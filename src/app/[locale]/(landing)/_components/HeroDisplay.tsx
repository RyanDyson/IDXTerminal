import { DisplayFont } from "./DisplayFont";
import { MacbookScroll } from "~/components/ui/macbook-scroll";
import { Spotlight } from "~/components/ui/spotlight";
import { Button } from "~/components/ui/button";
import placeHolder from "~/../public/placeholder.png";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { currentUser } from "@clerk/nextjs/server";

const DisplayText = async (props: props) => {
  const user = await currentUser();
  const { translation } = props;

  return (
    <div className="text-stone-50">
      <DisplayFont className="text-6xl">
        <span className="italic">IDX</span>Terminal
      </DisplayFont>
      <p className="text-sm">{translation.subtitle}</p>
      <Link href={user ? "/dashboard" : "/sign-in"}>
        <Button className="mt-4 rounded-full px-4 py-2 font-bold" size={"sm"}>
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
      className="bg-grid-white/[0.02] relative h-max w-screen overflow-hidden bg-stone-950/[0.96] antialiased"
    >
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-30">
        <MacbookScroll
          title={<DisplayText translation={translation} />}
          src={placeHolder}
        />
      </div>
      <div className="absolute bottom-0 z-40 h-64 w-screen bg-gradient-to-b from-transparent to-stone-950/100" />
    </div>
  );
};
