import { ThemeProvider } from "~/components/themeprovider";
import { SidebarProvider } from "~/components/ui/sidebar";
import { Navbar } from "./_components/Navbar";
import { NavbarInset } from "./_components/NavbarInset";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { redirect } from "~/i18n/routing";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedOut>{redirect({ href: "/sign-in", locale: "en" })}</SignedOut>
      <SignedIn>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <Navbar />
            <NavbarInset>{children}</NavbarInset>
          </SidebarProvider>
        </ThemeProvider>
      </SignedIn>
    </>
  );
}
