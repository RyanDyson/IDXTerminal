import { DM_Sans } from "next/font/google";
import { type Metadata } from "next";
import { Navbar } from "./_components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { TRPCReactProvider } from "~/trpc/react";

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
        <TRPCReactProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
