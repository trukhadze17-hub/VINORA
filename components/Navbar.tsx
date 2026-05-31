
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">
          VINORA
        </h1>

        <div className="flex gap-6 text-zinc-300">
          <a href="/">Home</a>
          <a href="/vin-check">VIN Check</a>
          <a href="/ai-chat">AI Chat</a>
          <a href="/admin">Admin</a>
        </div>
      </div>
    </nav>
  );
}
