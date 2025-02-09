import { DM_Sans } from "next/font/google";
import { type Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "IDXTerminal",
  description: "Indonesia's premiere stock exchange terminal",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const dm = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "en" | "id" };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={dm.className}>
      <body>
        <ClerkProvider>
          <TRPCReactProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
