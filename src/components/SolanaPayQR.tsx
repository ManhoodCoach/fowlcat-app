'use client';

import React, { useEffect, useRef, useState } from 'react';
import { encodeURL } from '@solana/pay';
import { PublicKey } from '@solana/web3.js';
import QRCode from 'qrcode';
import BigNumber from 'bignumber.js';

export default function SolanaPayQR() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    const recipientStr = process.env.NEXT_PUBLIC_TREASURY_SOL;
    const splStr = process.env.NEXT_PUBLIC_FOWLCAT_MINT;

    if (!recipientStr || !splStr) {
      setMsg('Set NEXT_PUBLIC_TREASURY_SOL and NEXT_PUBLIC_FOWLCAT_MINT in .env.local');
      return;
    }

    try {
      const recipient = new PublicKey(recipientStr);
      const splToken = new PublicKey(splStr);
      const amount = new BigNumber('285000');

      const url = encodeURL({
        recipient,
        amount,
        splToken,
        label: 'FOWLCAT Checkout',
        message: 'Thank you for supporting the Clawmunity!',
      });

      if (canvasRef.current) {
        QRCode.toCanvas(canvasRef.current, url.toString(), { width: 240 }, (err) => {
          if (err) setMsg(`QR error: ${err.message}`);
        });
      }

      setMsg(undefined);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : typeof e === 'string' ? e : 'unknown error';
      setMsg(`Invalid public key(s): ${message}`);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <canvas ref={canvasRef} />
      <p className="text-sm opacity-70">
        {msg ?? 'Scan with Phantom to pay 285,000 $FOWLCAT'}
      </p>
    </div>
  );
}
