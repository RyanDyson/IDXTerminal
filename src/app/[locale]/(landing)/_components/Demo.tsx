import { Dialog, DialogTrigger } from "~/components/ui/dialog";
import { useTranslations } from "next-intl";
import { DemoDialog } from "./DemoDialog";

type props = {
  label: string;
};

const DemoButton = (props: props) => {
  return (
    <div className="h-full w-fit rounded-full bg-stone-50 px-4 py-2 text-sm font-bold text-stone-950 transition-colors hover:bg-stone-200 active:bg-stone-400">
      {props.label}
    </div>
  );
};

export const Demo = () => {
  const t = useTranslations("DemoRequest");
  const translations = {
    title: t("title"),
    description: t("description"),
    givenName: t("givenName"),
    givenNamePlaceholder: t("givenNamePlaceholder"),
    surname: t("surname"),
    surnamePlaceholder: t("surnamePlaceholder"),
    businessEmail: t("businessEmail"),
    businessEmailPlaceholder: t("businessEmailPlaceholder"),
    teamSize: t("teamSize"),
    teamSizeOptions: t("teamSizeOptions"),
    lookingFor: t("lookingFor"),
    lookingForPlaceholder: t("lookingForPlaceholder"),
    submit: t("submit"),
    confirmation: t("confirmation"),
  };

  const tLabel = useTranslations("Navigation");
  const buttonLabel = tLabel("demo");

  return (
    <Dialog>
      <DialogTrigger>
        <DemoButton label={buttonLabel} />
      </DialogTrigger>
      <DemoDialog translation={translations} />
    </Dialog>
  );
};
