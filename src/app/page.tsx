import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  return (
    <div className="container">
      <h1 className="h1">Fowlcat</h1>
      <p className="subtle">Stake $FOWLCAT • Earn Points • No Emissions</p>
      <div className="card" style={{ marginTop: '32px', textAlign: 'center' }}>
        <WalletMultiButton />
        <p style={{ margin: '16px 0' }}>
          <Link href="/staking" className="btn" style={{ marginTop: '16px' }}>
            Go to Staking
          </Link>
        </p>
      </div>
    </div>
  );
}
