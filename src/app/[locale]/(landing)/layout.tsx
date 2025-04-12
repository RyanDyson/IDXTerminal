import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
