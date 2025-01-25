import { Login } from "./Login";
import { Demo } from "./Demo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Navbar = () => {
  const t = useTranslations("Navigation");
  const translation = {
    product: t("product"),
    features: t("features"),
    pricing: t("pricing"),
    about: t("about"),
  };

  const heroNav = [
    { label: translation.product, href: "/#Product" },
    { label: translation.features, href: "/#Features" },
    { label: translation.pricing, href: "/" },
    { label: translation.about, href: "/" },
  ];

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
        <div className="jusitfy-between m-0 flex h-full space-x-2 ps-8">
          <Demo />
          <Login />
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};
