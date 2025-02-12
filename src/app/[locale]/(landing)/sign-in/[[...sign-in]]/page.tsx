import { useTranslations } from "next-intl";
import { SignInForm } from "./SignInForm";

export default function SignUpPage() {
  const t = useTranslations("Login");
  const translations = {
    title: t("title"),
    description: t("description"),
    email: t("email"),
    password: t("password"),
    question: t("question"),
    cta: t("cta"),
    submit: t("submit"),
    reset: t("reset"),
    resetButton: t("resetButton"),
  };

  return <SignInForm translation={translations} />;
}
