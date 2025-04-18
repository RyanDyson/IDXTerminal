import { HydrateClient } from "~/trpc/server";
import { HeroDisplay } from "./_components/HeroDisplay";
import { FeatureCard } from "./_components/FeatureCard";
import { Pricing } from "./_components/Pricing";
import { About } from "./_components/About";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="w-screen bg-stone-950 text-white">
        <HeroDisplay />
        <FeatureCard />
        <Pricing />
        <About />
      </main>
    </HydrateClient>
  );
}
