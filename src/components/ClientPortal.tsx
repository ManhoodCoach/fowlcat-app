'use client';

import Providers from './Providers';
import { SolanaConnect } from './WalletBar';
import JupiterPluginSwap from './JupiterPluginSwap';
import SolanaPayQR from './SolanaPayQR';

export default function ClientPortal() {
  return (
    <Providers>
      <main className="mx-auto max-w-5xl p-6 space-y-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">FOWLCAT Portal</h1>
          <p className="opacity-80">Connect → Swap → Pay → Mint</p>
          <div className="flex gap-3">
            <SolanaConnect />
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1) Swap into $FOWLCAT</h2>
          <JupiterPluginSwap />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2) Pay with $FOWLCAT (Solana Pay)</h2>
          <SolanaPayQR />
        </section>
      </main>
    </Providers>
  );
}
