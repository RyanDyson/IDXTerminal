import "~/styles/globals.css";
import { DM_Sans } from "next/font/google";
import { type Metadata } from "next";
import { Navbar } from "./_components/Navbar";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={dm.style}>
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
