"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { IoGlobe } from "react-icons/io5";
import { useParams } from "next/navigation";
import { Locale, usePathname, useRouter } from "~/i18n/routing";
import { useTransition } from "react";
import { type LocaleTranslation } from "~/i18n/translations/LocaleSwticher";

type props = {
  translation: LocaleTranslation;
  locale: Locale;
};

export function NavLocaleSwticher(props: props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const localeString =
    props.locale == "en" ? props.translation.en : props.translation.id;

  function onSelectChange(value: string) {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select onValueChange={onSelectChange} disabled={isPending}>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            <div className="flex items-center justify-between">
              <IoGlobe /> <span className="ps-2">{localeString}</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectItem value="en">{props.translation.en}</SelectItem>
        <SelectItem value="id">{props.translation.id}</SelectItem>
      </SelectContent>
    </Select>
  );
}
