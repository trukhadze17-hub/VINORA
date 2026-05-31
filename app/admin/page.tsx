
export default function AdminPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        VINORA Super Admin
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {[
          "Users",
          "VIN Reports",
          "Revenue",
          "AI Requests",
          "Live Auctions",
          "Pending Orders",
          "Subscriptions",
          "Repair Estimates"
        ].map((item) => (
          <div
            key={item}
            className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800"
          >
            <h2 className="text-zinc-400">{item}</h2>
            <p className="text-3xl font-bold mt-4">0</p>
          </div>
        ))}
      </div>
    </main>
  );
}
