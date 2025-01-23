import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Define the structure of your messages
interface Messages {
  default: Record<string, string>;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Type guard for locale
  if (!locale || !routing.locales.includes(locale as "en" | "id")) {
    locale = routing.defaultLocale;
  }

  // Explicitly type the import
  const moduleMessages = (await import(
    `../../types/messages/${locale}.json`
  )) as Messages;

  return {
    locale,
    messages: moduleMessages.default,
  };
});
