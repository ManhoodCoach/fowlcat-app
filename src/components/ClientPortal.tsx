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
mkdir -p src/components/common
cat > src/components/common/Tickers.tsx << 'TSX'
"use client";

const items = [
  { label: "Price", value: "$FOWLCAT • live soon" },
  { label: "Chain", value: "Solana" },
  { label: "Points", value: "No emissions • Time-weighted" },
  { label: "Portal", value: "app.fowlcat.com/staking" },
];

export default function Tickers() {
  return (
    <div className="w-full overflow-hidden border-y border-black/10 bg-white/30">
      <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap py-2 text-sm font-semibold">
        {items.map((it, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2">
            <span className="opacity-60">{it.label}:</span>
            <span>{it.value}</span>
            <span className="opacity-20">•</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
