import { HydrateClient } from "~/trpc/server";
import { HeroDisplay } from "./_components/HeroDisplay";
import { FeatureCard } from "~/components/ui/FeatureCard";
import { Pricing } from "./_components/Pricing";
import { Footer } from "./_components/Footer";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="w-screen gap-0 bg-stone-950 text-white">
        <HeroDisplay />
        <FeatureCard />
        <Pricing />
        <Footer />
      </main>
    </HydrateClient>
  );
}
