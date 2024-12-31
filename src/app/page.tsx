import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { DisplayFont } from "~/app/_components/DisplayFont";
import { HeroDisplay } from "./_components/HeroDisplay";
import { Footer } from "./_components/Footer";
import Link from "next/link";

const heroNav = [
  { label: "Product", href: "/" },
  { label: "Features", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "About", href: "/" },
];

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="min-h-screen bg-gradient-to-b from-stone-950 to-stone-800 p-4 text-white">
        <div className="flex min-h-20 items-center justify-between space-y-4 rounded-lg border-2 border-stone-800 bg-stone-900 p-4">
          <DisplayFont className="ps-4 text-3xl">IDXTerminal</DisplayFont>
          <div className="jusitfy-between flex h-min items-center space-x-4">
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
        </div>
        <HeroDisplay />
        <Footer />
      </main>
    </HydrateClient>
  );
}
