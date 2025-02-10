"use client";

import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

type ButtonProps = {
  label: string;
};

const LoginButton = (props: ButtonProps) => {
  const { isSignedIn, user } = useUser();

  return (
    <>
      {isSignedIn ? (
        <Link href={"/dashboard"}>
          <div className="rounded-full bg-stone-50 px-4 py-2 text-sm font-bold text-stone-950 transition-colors hover:bg-stone-200 active:bg-stone-400">
            Dashboard
          </div>
        </Link>
      ) : (
        <Link href={"/sign-in"}>
          <div className="rounded-full bg-stone-50 px-4 py-2 text-sm font-bold text-stone-950 transition-colors hover:bg-stone-200 active:bg-stone-400">
            {props.label}
          </div>
        </Link>
      )}
    </>
  );
};

export const Login = () => {
  const t = useTranslations("Login");
  const translations = {
    title: t("title"),
  };

  return <LoginButton label={translations.title} />;
};
