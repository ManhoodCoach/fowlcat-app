'use client';

import React, { useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export default function JupiterPluginSwap() {
  const wallet = useWallet();
  const outMint = process.env.NEXT_PUBLIC_FOWLCAT_MINT || '';

  useEffect(() => {
    if (!outMint) return;

    const init = () => {
      if (!window.Jupiter) return;
      window.Jupiter.init({
        displayMode: 'integrated',
        integratedTargetId: 'jup-plugin',
        formProps: {
          initialOutputMint: outMint,
          // fixedMint: outMint, // uncomment to hard-lock to FOWLCAT
        },
        enableWalletPassthrough: true,
        passthroughWalletContextState: wallet,
        onRequestConnectWallet: async () => {
          try { await wallet.connect?.(); } catch {}
        },
      });
    };

    if (window.Jupiter) {
      init();
    } else {
      const t = setInterval(() => {
        if (window.Jupiter) {
          clearInterval(t);
          init();
        }
      }, 100);
      return () => clearInterval(t);
    }
  }, [wallet, outMint]);

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border">
      <div id="jup-plugin" style={{ height: '100%' }} />
    </div>
  );
}
