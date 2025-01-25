import { useLocale, useTranslations } from "next-intl";
import { routing } from "~/i18n/routing";
import { ClientLocaleSwitcher } from "./ClientLocaleSwitcher";

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const translation = {
    en: t("en"),
    id: t("id"),
  };
  return <ClientLocaleSwitcher translation={translation} />;
}
