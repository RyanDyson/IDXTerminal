import { ThemeProvider } from "~/components/themeprovider";
import { SidebarProvider } from "~/components/ui/sidebar";
import { Navbar } from "./_components/Navbar";
import { NavbarInset } from "./_components/NavbarInset";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
