import { Navbar } from "./_components/Navbar";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hidden md:block">
      <Navbar />
      {children}
    </div>
  );
}
