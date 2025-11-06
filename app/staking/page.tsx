export default function StakingPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-8">
      <div className="max-w-xl w-full text-center space-y-4">
        <img
          src="https://gateway.irys.xyz/6JF4HvcsF68x2zuyRKAsoOrx9QhgERbidlssIQIZ6Jg"
          alt="FOWLCAT"
          className="mx-auto h-12 w-12"
        />
        <h1 className="text-3xl font-bold tracking-tight">Stake & Earn</h1>
        <p className="text-white/70">
          Connect your wallet to start earning <b>FOWLCAT Points</b>.
        </p>
        <div className="rounded-2xl border border-white/10 p-6">
          <p className="text-sm text-white/60">
            Staking UI mounts here. We’ll wire program + RPC after deploy.
          </p>
        </div>
      </div>
    </main>
  );
}
