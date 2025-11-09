"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState, type ChangeEvent } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Connection, PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddress, getMint } from "@solana/spl-token";
import { ZBTC_MINT, FOWLCAT_MINT, TREASURY } from "@/zeus/constants";
import { buildSplTransferTx } from "@/lib/spl";

type Bal = { ui: string; raw: bigint; decimals: number };

const explorerUrl = (sig: string) => {
  const c = process.env.NEXT_PUBLIC_CLUSTER || "mainnet-beta";
  const base = "https://explorer.solana.com";
  return c === "mainnet-beta" ? `${base}/tx/${sig}` : `${base}/tx/${sig}?cluster=${c}`;
};

async function fetchTokenBalance(
  connection: Connection,
  owner: PublicKey,
  mint: PublicKey,
  fallbackDecimals = 9
): Promise<Bal> {
  try {
    const ata = await getAssociatedTokenAddress(mint, owner, true);
    const info = await connection.getTokenAccountBalance(ata);
    const raw = BigInt(info.value.amount);
    const decimals = info.value.decimals ?? fallbackDecimals;
    const ui = (Number(raw) / 10 ** decimals).toLocaleString(undefined, {
      maximumFractionDigits: decimals,
    });
    return { ui, raw, decimals };
  } catch {
    // Fallback when account doesn't exist
    return { ui: "0", raw: BigInt(0), decimals: fallbackDecimals };
  }
}

function Card({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4 bg-black/20 backdrop-blur-sm">
      <div className="text-xs opacity-70">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
      {sub ? <div className="text-xs opacity-60 mt-1">{sub}</div> : null}
    </div>
  );
}

export default function StakingPage() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const [zbtc, setZbtc] = useState<Bal | null>(null);
  const [fowlcat, setFowlcat] = useState<Bal | null>(null);
  const [decimals, setDecimals] = useState<{ zbtc: number; fowlcat: number } | null>(null);
  const [amt, setAmt] = useState("");
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const [lastSig, setLastSig] = useState<string | null>(null);

  // Fetch mint decimals once
  useEffect(() => {
    (async () => {
      const [mZ, mF] = await Promise.all([
        getMint(connection, ZBTC_MINT),
        getMint(connection, FOWLCAT_MINT),
      ]);
      setDecimals({ zbtc: mZ.decimals, fowlcat: mF.decimals });
    })();
  }, [connection]);

  // Fetch balances when wallet/decimals change
  useEffect(() => {
    if (!publicKey) {
      setZbtc(null);
      setFowlcat(null);
      return;
    }
    (async () => {
      const [zb, fc] = await Promise.all([
        fetchTokenBalance(connection, publicKey, ZBTC_MINT, decimals?.zbtc ?? 8),
        fetchTokenBalance(connection, publicKey, FOWLCAT_MINT, decimals?.fowlcat ?? 9),
      ]);
      setZbtc(zb);
      setFowlcat(fc);
    })();
  }, [publicKey, connection, decimals]);

  const onSoftLock = async () => {
    if (!publicKey || !amt || !agree) return;
    try {
      setBusy(true);
      const dec = decimals?.fowlcat ?? 9;
      const parsed = Number(amt);
      if (!isFinite(parsed) || parsed <= 0) throw new Error("Invalid amount");
      const raw = BigInt(Math.round(parsed * 10 ** dec));

      const tx = await buildSplTransferTx(connection, publicKey, TREASURY, FOWLCAT_MINT, raw);
      const sig = await sendTransaction(tx, connection);
      setLastSig(sig);
      setAmt("");
    } catch (e: unknown) {
      let message = "Unknown error";
      if (e && typeof e === "object" && "message" in e && typeof (e as any).message === "string") {
        message = (e as any).message;
      }
      alert(`Transfer failed: ${message}`);
    } finally {
      setBusy(false);
    }
  };

  const onChangeAmt = (e: ChangeEvent<HTMLInputElement>) => {
    setAmt(e.target.value);
  };

  return (
    <main className="min-h-dvh flex flex-col items-center justify-start sm:justify-center bg-gradient-to-b from-[#0b1b34] to-[#050915] text-white">
      {/* BIG HERO HEADER */}
      <div className="w-full flex flex-col items-center text-center mt-10 sm:mt-16">
        <img
          src="/fowlcat-logo.png"
          alt="FOWLCAT"
          className="h-44 sm:h-44 w-auto drop-shadow-[0_0_40px_rgba(255,255,0,0.9)]"
        />
        <p className="mt-4 text-base sm:text-lg text-yellow-200 tracking-wide">
          Stake • Earn • Rise with the Clawmunity
        </p>
      </div>

      <div className="w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 space-y-8">
        {/* Header with wallet button */}
        <header className="flex items-center justify-end">
          <WalletMultiButton />
        </header>

        {/* Centered hero text */}
        <section className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-semibold">Stake &amp; Earn</h1>
          <p className="text-sm sm:text-base text-white/70">
            Lock FOWLCAT, tap into zBTC yield, and qualify for ecosystem rewards.
          </p>
        </section>

        {/* Last tx banner with explorer link */}
        {lastSig && (
          <div className="rounded-xl border border-yellow-400/40 p-3 text-xs bg-black/30 backdrop-blur-sm">
            <div className="opacity-70 mb-1">Last action</div>
            <a
              className="underline break-all"
              href={explorerUrl(lastSig)}
              target="_blank"
              rel="noreferrer"
            >
              View on Solana Explorer: {lastSig}
            </a>
          </div>
        )}

        {!publicKey ? (
          <p className="text-center text-sm text-white/70">
            Connect your wallet to view balances, swap into $FOWLCAT, and lock to the treasury.
          </p>
        ) : (
          <>
            {/* Balances */}
            <section className="grid gap-4 sm:grid-cols-3">
              <Card title="Your zBTC" value={zbtc?.ui ?? "-"} sub="zBTC (Zeus Network)" />
              <Card title="Your FOWLCAT" value={fowlcat?.ui ?? "-"} sub="FOWLCAT (SPL)" />
              <div className="rounded-2xl border border-white/10 p-4 bg-black/20 backdrop-blur-sm">
                <div className="text-xs opacity-70">Treasury</div>
                <div className="text-xs break-all opacity-70">{TREASURY.toBase58()}</div>
              </div>
            </section>

            {/* Jupiter swap */}
            <section className="rounded-2xl border border-white/10 p-4 space-y-3 bg-black/20 backdrop-blur-sm">
              <h2 className="text-lg font-medium">Swap into $FOWLCAT</h2>
              <p className="text-sm opacity-80">
                Swap SOL/USDC → FOWLCAT without leaving this page.
              </p>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://jup.ag/swap/SOL-FOWLCAT"
                  width="100%"
                  height="460"
                  style={{ border: "none", borderRadius: 16 }}
                />
              </div>
            </section>

            {/* Ecosystem actions */}
            <section className="rounded-2xl border border-white/10 p-4 space-y-3 bg-black/20 backdrop-blur-sm">
              <h2 className="text-lg font-medium">Ecosystem Actions</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                <a
                  className="rounded-xl border px-4 py-3 text-center hover:bg-white/10 transition"
                  href="https://app.apolloportal.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get zBTC (APOLLO)
                </a>
                <a
                  className="rounded-xl border px-4 py-3 text-center hover:bg-white/10 transition"
                  href="https://btcsol.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stake SOL → Earn zBTC (btcSOL)
                </a>
              </div>
            </section>

            {/* Soft vault lock */}
            <section className="rounded-2xl border border-white/10 p-4 space-y-3 bg-black/20 backdrop-blur-sm">
              <h2 className="text-lg font-medium">Lock FOWLCAT (Soft Vault)</h2>
              <p className="text-sm opacity-80">
                Lock FOWLCAT to the Treasury to qualify for points, boosts, airdrops, and
                revenue-share events.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <input
                  className="flex-1 rounded-xl border px-3 py-2 bg-transparent"
                  placeholder="Amount (FOWLCAT)"
                  value={amt}
                  onChange={onChangeAmt}
                />
                <button
                  onClick={onSoftLock}
                  disabled={busy || !agree || !amt}
                  className="rounded-2xl px-4 py-2 border hover:bg-white/10 transition"
                >
                  {busy ? "Locking..." : "Lock to Treasury"}
                </button>
              </div>
              <label className="text-xs flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                I understand this sends my FOWLCAT to the project treasury and agree to the
                terms.
              </label>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
