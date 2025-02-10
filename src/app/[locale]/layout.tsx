import { DM_Sans } from "next/font/google";
import { type Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "~/components/themeprovider";

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

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "id" }>;
}) {
  const params = await props.params;

  const { children } = props;

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
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </NextIntlClientProvider>
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
