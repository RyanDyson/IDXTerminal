"use client";

import Image from "next/image";
import { DisplayFont } from "~/app/[locale]/(landing)/_components/DisplayFont";
import transparentWhite from "~/../public/logo/transparent-white.png";
import { useSidebar } from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";

export function NavLogo() {
  const { open } = useSidebar();

  return (
    <div
      className={cn(
        "flex w-full items-center space-x-2 text-white",
        open ? "justify-between p-2" : "justify-center p-0 pt-2",
      )}
    >
      <Image height={25} src={transparentWhite} alt="logo" unoptimized />
      {open && (
        <DisplayFont className="text-lg">
          <span className="italic">IDX</span>Terminal
        </DisplayFont>
      )}
    </div>
  );
}
