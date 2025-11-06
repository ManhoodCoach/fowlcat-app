"use client";

import dynamic from "next/dynamic";
import ClientPortal from "@/components/ClientPortal";
import Tickers from "@/components/common/Tickers";

const WalletMultiButton = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function StakingPage() {
  return (
    <main>
      <header className="w-full max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight">FOWLCAT Rewards</h1>
        <WalletMultiButton className="!bg-black !text-yellow-400 !rounded-2xl !px-4 !py-2" />
      </header>

      <Tickers />

      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <ClientPortal />
      </div>
    </main>
  );
}
