import { DisplayFont } from "./DisplayFont";

export const About = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-stone-950 px-4 py-12 text-white md:px-8">
      <div className="w-full max-w-7xl">
        <DisplayFont className="mb-8 text-center text-3xl md:text-4xl">
          About IDXTerminal
        </DisplayFont>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-stone-300">
              IDXTerminal is dedicated to democratizing access to the Indonesian
              stock market by providing professional-grade trading tools and
              market insights to investors of all levels.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="text-stone-300">
              We envision a future where every investor has equal access to
              market data and analysis tools, enabling them to make informed
              investment decisions in the Indonesian capital market.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Real-time Data</h3>
            <p className="text-stone-300">
              Access live market data from the Indonesia Stock Exchange (IDX)
              with minimal latency.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Advanced Analysis</h3>
            <p className="text-stone-300">
              Leverage our suite of technical analysis tools and AI-powered
              insights.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Community Driven</h3>
            <p className="text-stone-300">
              Join a growing community of traders sharing insights and
              strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
