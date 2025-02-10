import { ThemeProvider } from "~/components/themeprovider";
import { SidebarProvider } from "~/components/ui/sidebar";
import { Navbar } from "./_components/Navbar";
import { NavbarInset } from "./_components/NavbarInset";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SignedIn>
      <SidebarProvider>
        <Navbar />
        <NavbarInset>{children}</NavbarInset>
      </SidebarProvider>
    </SignedIn>
  );
}
