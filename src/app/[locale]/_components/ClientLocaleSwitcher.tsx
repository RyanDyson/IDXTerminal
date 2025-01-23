"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { IoGlobe } from "react-icons/io5";
import { DisplayFont } from "./DisplayFont";
import { useParams } from "next/navigation";
import { Locale, usePathname, useRouter } from "~/i18n/routing";
import { useTransition } from "react";
import { type LocaleTranslation } from "~/i18n/translations/LocaleSwticher";

type props = {
  translation: LocaleTranslation;
};

export function ClientLocaleSwitcher(props: props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

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

  console.log(pathname, params);

  return (
    <Dialog>
      <DialogTrigger>
        <IoGlobe size={30} className="text-stone-50" />
      </DialogTrigger>
      <DialogContent className="flex flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>
            <DisplayFont className="text-3xl">Language</DisplayFont>
          </DialogTitle>
        </DialogHeader>
        <Select onValueChange={onSelectChange} disabled={isPending}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent className="w-[180px]">
            <SelectItem value="en">{props.translation.en}</SelectItem>
            <SelectItem value="id">{props.translation.id}</SelectItem>
          </SelectContent>
        </Select>
      </DialogContent>
    </Dialog>
  );
}
