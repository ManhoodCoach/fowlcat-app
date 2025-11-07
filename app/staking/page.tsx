"use client";
import { useEffect, useMemo, useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { ZBTC_MINT, FOWLCAT_MINT, TREASURY } from "@/zeus/constants";
import { buildSplTransferTx } from "@/lib/spl";
import { getReferrer } from "@/lib/referrals";

type Bal = { ui: string; raw: bigint; decimals: number };

async function fetchTokenBalance(
  connection: any, owner: PublicKey, mint: PublicKey, fallbackDecimals = 9
): Promise<Bal> {
  try {
    const ata = await getAssociatedTokenAddress(mint, owner, true);
    const info = await connection.getTokenAccountBalance(ata);
    const raw = BigInt(info.value.amount);
    const decimals = info.value.decimals ?? fallbackDecimals;
    const ui = (Number(raw) / 10 ** decimals).toLocaleString(undefined, { maximumFractionDigits: decimals });
    return { ui, raw, decimals };
  } catch {
    return { ui: "0", raw: 0n, decimals: fallbackDecimals };
  }
}

function Card({ title, value, sub }: { title: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border p-4">
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
  const [amt, setAmt] = useState("");
  const [agree, setAgree] = useState(false);
  const [busy, setBusy] = useState(false);
  const referrer = useMemo(getReferrer, []);

  useEffect(() => {
    if (!publicKey) { setZbtc(null); setFowlcat(null); return; }
    (async () => {
      const [zb, fc] = await Promise.all([
        fetchTokenBalance(connection, publicKey, ZBTC_MINT, 8),
        fetchTokenBalance(connection, publicKey, FOWLCAT_MINT, 9),
      ]);
      setZbtc(zb); setFowlcat(fc);
    })();
  }, [publicKey, connection]);

  const onSoftLock = async () => {
    if (!publicKey || !amt || !agree) return;
    try {
      setBusy(true);
      // Convert UI amount -> raw (assume 9 dp for FOWLCAT unless you later query decimals)
      const raw = BigInt(Math.round(parseFloat(amt) * 1e9));
      if (raw <= 0n) throw new Error("Invalid amount");
      const tx = await buildSplTransferTx(connection, publicKey, TREASURY, FOWLCAT_MINT, raw);
      const sig = await sendTransaction(tx, connection);
      // naive toast
      alert(`Soft lock submitted!\nSignature:\n${sig}`);
      setAmt("");
    } catch (e: any) {
      alert(`Transfer failed: ${e?.message || e}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">FOWLCAT Staking • Zeus zBTC</h1>
        <WalletMultiButton />
      </header>

      {referrer ? (
        <div className="rounded-xl border p-3 text-xs opacity-80">
          Referred by: <span className="font-mono">{referrer}</span>
        </div>
      ) : null}

      {!publicKey ? (
        <p>Connect your wallet to view balances and actions.</p>
      ) : (
        <>
          <section className="grid gap-4 sm:grid-cols-3">
            <Card title="Your zBTC" value={zbtc?.ui ?? "-"} sub="zBTC (Zeus Network)" />
            <Card title="Your FOWLCAT" value={fowlcat?.ui ?? "-"} sub="FOWLCAT (SPL)" />
            <div className="rounded-2xl border p-4">
              <div className="text-xs opacity-70">Treasury</div>
              <div className="text-xs break-all opacity-70">{TREASURY.toBase58()}</div>
            </div>
          </section>

          {/* Jupiter Swap */}
          <section className="rounded-2xl border p-4 space-y-3">
            <h2 className="text-lg font-medium">Swap into $FOWLCAT</h2>
            <p className="text-sm opacity-80">
              Swap SOL/USDC → FOWLCAT without leaving this page. (Referral routing can be added later.)
            </p>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://jup.ag/swap/SOL-FOWLCAT"  /* adjust pair symbol if needed */
                width="100%"
                height="460"
                style={{ border: "none", borderRadius: 16 }}
              />
            </div>
          </section>

          {/* Actions */}
          <section className="rounded-2xl border p-4 space-y-3">
            <h2 className="text-lg font-medium">Ecosystem Actions</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              <a className="rounded-xl border px-4 py-3 text-center hover:bg-white/10 transition"
                 href="https://zeusnetwork.xyz/apollo" target="_blank" rel="noreferrer">
                Get zBTC (APOLLO)
              </a>
              <a className="rounded-xl border px-4 py-3 text-center hover:bg-white/10 transition"
                 href="https://btcsol.co" target="_blank" rel="noreferrer">
                Stake SOL → Earn zBTC (btcSOL)
              </a>
            </div>
          </section>

          {/* Soft Lock to Treasury */}
          <section className="rounded-2xl border p-4 space-y-3">
            <h2 className="text-lg font-medium">Lock FOWLCAT (Soft Vault)</h2>
            <p className="text-sm opacity-80">
              Lock FOWLCAT to the Treasury to qualify for points, boosts, airdrops, and revenue-share events.
              This sends tokens to the project treasury. Withdrawals are processed by the team (until the on-chain program is live).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <input
                className="flex-1 rounded-xl border px-3 py-2 bg-transparent"
                placeholder="Amount (FOWLCAT)"
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
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
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              I understand this sends my FOWLCAT to the project treasury and agree to the terms.
            </label>
            <p className="text-xs opacity-60">
              Coming soon: On-chain staking program for permissionless withdraw/claim.
            </p>
          </section>
        </>
      )}
    </main>
  );
}
