import { DisplayFont } from "./DisplayFont";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const heroNav = [
  { label: "Product", href: "/" },
  { label: "Features", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "About", href: "/" },
];

export const Navbar = () => {
  return (
    <div className="fixed z-50 flex h-min w-screen justify-center p-4">
      <div className="flex items-center justify-center space-x-6 divide-x divide-stone-600 rounded-full border-2 border-stone-800 bg-stone-900/70 px-4 py-2 text-stone-50 backdrop-blur-lg">
        {/* <DisplayFont className="ps-4 text-3xl">IDXTerminal</DisplayFont> */}
        <div className="jusitfy-between flex h-full space-x-4">
          {heroNav.map((nav, index) => (
            <Link
              href={nav.href}
              key={index}
              className="rounded-full p-2 leading-none transition-colors duration-100 hover:text-stone-300 active:bg-stone-50 active:text-stone-950"
            >
              {nav.label}
            </Link>
          ))}
        </div>
        <div className="jusitfy-between m-0 flex h-full space-x-2">
          <Button
            className="ms-8 mt-0 rounded-full px-4 py-2 font-bold"
            variant="secondary"
          >
            Request a demo
          </Button>
          <Button
            className="ms-8 mt-0 rounded-full px-4 py-2 font-bold"
            variant="secondary"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
