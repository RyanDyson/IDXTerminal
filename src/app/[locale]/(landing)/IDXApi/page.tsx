import Link from "next/link";

export default function IDXApi() {
  return (
    <div className="container mx-auto px-4 py-12 pt-32 text-stone-50">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-bold">IDX API</h1>
        <p className="mb-6 text-xl text-stone-300">
          The open-source API for seamless data integration in your TypeScript &
          JavaScript applications.
        </p>
        <Link href="#getting-started">
          <button className="rounded bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-stone-800 p-6">
          <h3 className="mb-2 text-2xl font-semibold">Easy Integration</h3>
          <p className="text-stone-400">
            Simple setup process to get you up and running in minutes.
          </p>
        </div>
        <div className="rounded-lg bg-stone-800 p-6">
          <h3 className="mb-2 text-2xl font-semibold">TypeScript First</h3>
          <p className="text-stone-400">
            Built with TypeScript for robust type safety and developer
            experience.
          </p>
        </div>
        <div className="rounded-lg bg-stone-800 p-6">
          <h3 className="mb-2 text-2xl font-semibold">Open Source</h3>
          <p className="text-stone-400">
            Community-driven, transparent, and free to use. Contribute on
            GitHub!
          </p>
        </div>
      </section>

      {/* Getting Started/Usage Section */}
      <section id="getting-started" className="mb-16">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Get Started Quickly
        </h2>
        <div className="rounded-lg bg-stone-900 p-6">
          <pre className="overflow-x-auto rounded bg-stone-950 p-4 text-sm text-stone-300">
            <code>
              {`// Installation
npm install idx-api

// Example Usage (TypeScript)
import { IDXClient } from 'idx-api';

const client = new IDXClient({ apiKey: 'YOUR_API_KEY' });

async function fetchData() {
  const data = await client.getData({ /* options */ });
  console.log(data);
}

fetchData();`}
            </code>
          </pre>
          <p className="mt-4 text-stone-400">
            Check out the full documentation for more examples and advanced
            usage. {/* Add link to docs later */}
          </p>
        </div>
      </section>

      {/* Community/Contribute Section */}
      <section className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Join the Community</h2>
        <p className="mb-6 text-lg text-stone-300">
          IDX API is open source! Report issues, suggest features, or contribute
          code on GitHub.
        </p>
        <a
          href="YOUR_GITHUB_REPO_LINK" // <-- Replace with your actual repo link
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-green-600 px-6 py-2 font-semibold text-white transition hover:bg-green-700"
        >
          Contribute on GitHub
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-stone-700 pt-8 text-center text-stone-500">
        <p>&copy; {new Date().getFullYear()} IDX API. All rights reserved.</p>
        {/* Add other links like Docs, Privacy Policy, etc. */}
      </footer>
    </div>
  );
}
