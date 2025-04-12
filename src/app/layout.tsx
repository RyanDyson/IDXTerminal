"use client";

import { type ReactNode } from "react";
import "~/styles/globals.css";
import { useState } from "react";
import { FaX } from "react-icons/fa6";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="sticky left-0 top-0 z-50 flex h-12 w-screen items-center justify-center bg-blue-800/70 px-4 px-8">
          <div className="relative flex w-full items-center justify-center">
            <span>IDXTerminal is still under development</span>
            <div className="absolute right-0 cursor-pointer">
              <button onClick={() => setIsOpen(false)}>
                <FaX />
              </button>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
