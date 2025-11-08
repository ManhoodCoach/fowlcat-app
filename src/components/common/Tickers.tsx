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
