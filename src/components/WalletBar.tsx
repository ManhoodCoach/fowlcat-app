'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const WalletMultiButton = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

// type-safe helper for web3Modal on window
type Web3ModalAPI = { open?: () => Promise<void> };
type Web3ModalWindow = Window & { web3Modal?: Web3ModalAPI };

export function SolanaConnect() {
  return <WalletMultiButton />;
}

export function EvmConnect() {
  const open = () => (window as Web3ModalWindow).web3Modal?.open?.();
  const enabled = !!(window as Web3ModalWindow).web3Modal;

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
