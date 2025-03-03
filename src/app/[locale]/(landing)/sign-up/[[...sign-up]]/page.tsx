import { useTranslations } from "next-intl";
import { SignUpForm } from "./SignUpForm";

export default function SignUpPage() {
  const t = useTranslations("Signup");
  const translations = {
    title: t("title"),
    description: t("description"),
    name: t("name"),
    email: t("email"),
    password: t("password"),
    question: t("question"),
    cta: t("cta"),
    submit: t("submit"),
  };

  return <SignUpForm translation={translations} />;
}
