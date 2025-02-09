import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "~/i18n/routing";
import { ClientLocaleSwitcher } from "./ClientLocaleSwitcher";
import { NavLocaleSwticher } from "../../dashboard/_components/_navbarComponents/NavLocaleSwitcher";

type Props = {
  dashboard: boolean;
};

export function LocaleSwitcher(props: Props) {
  const { dashboard } = props;

  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const translation = {
    label: t("label"),
    en: t("en"),
    id: t("id"),
  };
  const clientComponent = dashboard ? (
    <NavLocaleSwticher locale={locale as Locale} translation={translation} />
  ) : (
    <ClientLocaleSwitcher locale={locale as Locale} translation={translation} />
  );

  return clientComponent;
}
