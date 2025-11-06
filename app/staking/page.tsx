import Image from "next/image";

export default function StakingPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-8">
      <div className="max-w-xl w-full text-center space-y-5">
        <div className="flex justify-center">
          <Image
            src="/fowlcat-logo.png"
            alt="FOWLCAT"
            width={560}   // adjust width as you like
            height={160}  // keep aspect; actual size controlled by CSS below
            priority
            className="h-16 w-auto drop-shadow-[0_0_12px_rgba(255,255,0,0.25)]"
          />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">Stake & Earn</h1>
        <p className="text-white/70">
          Connect your wallet to start earning <b>FOWLCAT Points</b>.
        </p>

        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <p className="text-sm text-white/70">
            Staking UI mounts here. We’ll wire program + RPC after deploy.
          </p>
        </div>
      </div>
    </main>
  );
}
