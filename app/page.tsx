
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl font-bold tracking-tight">
          VINORA
        </h1>

        <p className="mt-6 text-2xl text-zinc-400 max-w-2xl">
          AI-powered vehicle intelligence platform for auctions,
          VIN decoding, repair estimation and import analytics.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-blue-600 px-8 py-4 rounded-2xl">
            Start VIN Scan
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl">
            AI Damage Analyzer
          </button>
        </div>
      </section>
    </main>
  );
}
