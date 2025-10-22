'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Render the wallet button only on the client to avoid hydration mismatches
const WalletMultiButton = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export function SolanaConnect() {
  return <WalletMultiButton />;
}

export function EvmConnect() {
  const open = () => (window as any)?.web3Modal?.open?.();
  const enabled = !!(window as any)?.web3Modal;

  return (
    <button
      onClick={open}
      disabled={!enabled}
      className="rounded-xl px-4 py-2 bg-black text-white hover:opacity-90 disabled:opacity-40"
      title={enabled ? 'Connect EVM Wallet' : 'Set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID to enable'}
      type="button"
    >
      Connect EVM Wallet
    </button>
  );
}
