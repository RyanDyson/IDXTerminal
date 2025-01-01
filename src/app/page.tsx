import { api, HydrateClient } from "~/trpc/server";
import { HeroDisplay } from "./_components/HeroDisplay";
import { Footer } from "./_components/Footer";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="w-screen bg-gradient-to-b from-stone-950 to-stone-800 text-white">
        <HeroDisplay />
        <Footer />
      </main>
    </HydrateClient>
  );
}
