"use client";
import { useEffect, useState } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { TREASURY, FOWLCAT_MINT, ZBTC_MINT } from "@/zeus/constants";

type Row = { label: string; value: string; sub?: string };

async function getSol(connection: any, who: PublicKey) {
  const bal = await connection.getBalance(who);
  return (bal / LAMPORTS_PER_SOL).toLocaleString(undefined, { maximumFractionDigits: 4 });
}
async function getSpl(connection: any, owner: PublicKey, mint: PublicKey, fallbackDecimals=9) {
  try {
    const ata = await getAssociatedTokenAddress(mint, owner, true);
    const info = await connection.getTokenAccountBalance(ata);
    const raw = Number(info.value.amount);
    const dp = info.value.decimals ?? fallbackDecimals;
    return (raw / 10**dp).toLocaleString(undefined, { maximumFractionDigits: dp });
  } catch {
    return "0";
  }
}

export default function VaultPage() {
  const { connection } = useConnection();
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    (async () => {
      const [sol, fowl, z] = await Promise.all([
        getSol(connection, TREASURY),
        getSpl(connection, TREASURY, FOWLCAT_MINT, 9),
        getSpl(connection, TREASURY, ZBTC_MINT, 8),
      ]);
      setRows([
        { label: "Treasury (SOL)", value: sol, sub: "Native SOL" },
        { label: "Treasury (FOWLCAT)", value: fowl, sub: "SPL Token" },
        { label: "Treasury (zBTC)", value: z, sub: "Zeus Network SPL" },
      ]);
    })();
  }, [connection]);

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">FOWLCAT Treasury</h1>
      <div className="rounded-xl border p-3 text-xs opacity-80 break-all">
        Address: {TREASURY.toBase58()}
      </div>
      {!rows ? (
        <p>Loading...</p>
      ) : (
        <section className="grid gap-4 sm:grid-cols-3">
          {rows.map((r) => (
            <div key={r.label} className="rounded-2xl border p-4">
              <div className="text-xs opacity-70">{r.label}</div>
              <div className="text-2xl font-semibold">{r.value}</div>
              {r.sub ? <div className="text-xs opacity-60 mt-1">{r.sub}</div> : null}
            </div>
          ))}
        </section>
      )}
      <p className="text-xs opacity-70">
        This page updates from on-chain data. More breakdowns (LP positions, NFTs) can be added.
      </p>
    </main>
  );
}
