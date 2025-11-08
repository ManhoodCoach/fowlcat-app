export default function ClientPortal() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="rounded-3xl bg-white/70 backdrop-blur shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-extrabold mb-1">Stake & Earn</h2>
        <p className="text-sm opacity-80 mb-6">
          Connect your wallet and stake FOWLCAT to earn Points (no emissions).
        </p>

        <div className="flex gap-3">
          <button
            className="rounded-2xl px-6 py-3 font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[.99] transition"
          >
            Stake
          </button>
          <button
            className="rounded-2xl px-6 py-3 font-bold border border-black/20 bg-white"
          >
            Unstake
          </button>
        </div>

        <p className="text-xs opacity-70 mt-4">
          Demo UI — we’ll wire your Anchor program or off-chain points next.
        </p>
      </div>
    </section>
  );
}
