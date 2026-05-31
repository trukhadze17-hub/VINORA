
export default function VinCheckPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-xl w-full">
        <h1 className="text-5xl font-bold mb-6">
          VIN Intelligence
        </h1>

        <input
          placeholder="Enter VIN Number"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4"
        />

        <button className="w-full mt-4 bg-blue-600 p-4 rounded-xl">
          Analyze VIN
        </button>
      </div>
    </main>
  );
}
