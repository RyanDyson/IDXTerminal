import { DisplayFont } from "./DisplayFont";
import { MacbookScroll } from "~/components/ui/macbook-scroll";
import { Spotlight } from "~/components/ui/spotlight";
import { Button } from "~/components/ui/button";
import placeHolder from "~/../public/placeholder.png";
import { useTranslations } from "next-intl";

const DisplayText = () => {
  const t = useTranslations("Hero");

  return (
    <div className="text-stone-50">
      <DisplayFont className="text-6xl">
        <span className="italic">IDX</span>Terminal
      </DisplayFont>
      <p className="text-sm">{t("subtitle")}</p>
      <Button
        className="mt-4 rounded-full px-4 py-2 font-bold"
        variant="secondary"
        size={"sm"}
      >
        {t("cta")}
      </Button>
    </div>
  );
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
        <MacbookScroll title={<DisplayText />} src={placeHolder} />
      </div>
      <div className="absolute bottom-0 z-40 h-64 w-screen bg-gradient-to-b from-transparent to-stone-950/100" />
    </div>
  );
};
