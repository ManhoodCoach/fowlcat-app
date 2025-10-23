import ClientPortal from '@/components/ClientPortal';

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <h1 className="text-3xl font-bold">FOWLCAT Portal</h1>
      <p className="opacity-80">Connect → Swap → Pay → Mint</p>
      <ClientPortal />
    </main>
  );
}
