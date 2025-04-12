"use client";

import { Login } from "./Login";
import { Demo } from "./Demo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { DisplayFont } from "./DisplayFont";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="fixed z-40 flex h-min w-screen justify-center p-4">
      <div className="flex w-full items-center justify-center space-x-6 rounded-lg border-2 border-stone-800 bg-stone-900/70 px-4 py-2 text-stone-50 backdrop-blur-lg md:w-fit md:divide-x md:divide-stone-600 md:rounded-full">
        <div className="jusitfy-between hidden h-full space-x-2 md:flex md:space-x-4">
          {heroNav.map((nav, index) => (
            <Link
              href={nav.href}
              key={index}
              className="flex items-center justify-center rounded-full p-2 leading-none transition-colors duration-100 hover:text-stone-300 active:bg-stone-50 active:text-stone-950"
            >
              {nav.label}
            </Link>
          ))}
        </div>
        <div className="jusitfy-between m-0 hidden h-full space-x-2 ps-8 md:flex">
          <Demo />
          <Login />
          <LocaleSwitcher dashboard={false} />
        </div>
        <div className="ms-0 flex w-full flex-col md:hidden">
          <div className="flex w-full items-center justify-between">
            <DisplayFont className="text-2xl text-stone-50">
              <span className="italic">IDX</span>Terminal
            </DisplayFont>
            <div className="flex items-center gap-x-4">
              <button onClick={() => setIsOpen(!isOpen)}>
                <FaBars className="text-stone-50" size={24} />
              </button>
              <LocaleSwitcher dashboard={false} />
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{ marginLeft: 0 }}
          >
            <div className="mb-4 mt-4 flex w-full flex-col justify-end gap-y-2 border-t border-stone-600 pt-4">
              {heroNav.map((nav, index) => (
                <Link
                  href={nav.href}
                  key={index}
                  className="rounded-full p-2 leading-none transition-colors duration-100 hover:text-stone-300 active:bg-stone-50 active:text-stone-950"
                >
                  {nav.label}
                </Link>
              ))}
              <Demo />
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
