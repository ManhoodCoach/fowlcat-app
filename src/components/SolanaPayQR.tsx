"use client";

import React, { useEffect, useRef, useState } from "react";
import { encodeURL } from "@solana/pay";
import QRCode from "qrcode";
import BigNumber from "bignumber.js";
import { TREASURY, FOWLCAT_MINT } from "@/zeus/constants";

export default function SolanaPayQR() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [msg, setMsg] = useState<string>();

  useEffect(() => {
    try {
      // Amount is in SPL token units (not lamports). Adjust as needed.
      const amount = new BigNumber("285000");

      const url = encodeURL({
        recipient: TREASURY,
        amount,
        splToken: FOWLCAT_MINT,
        label: "FOWLCAT Checkout",
        message: "Thank you for supporting the Clawmunity!",
      });

      const canvas = canvasRef.current;
      if (!canvas) return;

      QRCode.toCanvas(canvas, url.toString(), { width: 240 }, (err) => {
        if (err) setMsg(`QR error: ${err.message}`);
        else setMsg(undefined);
      });
    } catch (e: unknown) {
      const message =
        e instanceof Error ? e.message : typeof e === "string" ? e : "unknown error";
      setMsg(`QR setup error: ${message}`);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <canvas ref={canvasRef} />
      <p className="text-sm opacity-70">
        {msg ?? "Scan with Phantom to pay 285,000 $FOWLCAT"}
      </p>
    </div>
  );
}
