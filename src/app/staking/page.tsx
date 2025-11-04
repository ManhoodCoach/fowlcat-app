'use client';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

export default function StakingPage() {
  const { publicKey } = useWallet();
  return (
    <div className="container">
      <h1 className="h1">Stake & Earn</h1>
      <p className="subtle">
        Connect your wallet to start earning FOWLCAT Points. No emissions.
      </p>
      <div className="card" style={{ marginTop: '32px', textAlign: 'center' }}>
        <WalletMultiButton />
        {publicKey ? (
          <div style={{ margin: '20px 0' }}>
            <p>Wallet connected:</p>
            <code style={{ fontSize: '14px', wordBreak: 'break-all' }}>
              {publicKey.toBase58().slice(0, 8)}...{publicKey.toBase58().slice(-6)}
            </code>
          </div>
        ) : (
          <p style={{ margin: '20px 0' }}>Connect to view your stake</p>
        )}
        <button className="btn" style={{ marginTop: '16px' }}>
          Stake 100 $FOWLCAT
        </button>
        <button className="btn btn--ghost" style={{ marginTop: '8px', marginLeft: '8px' }}>
          Claim Rewards
        </button>
      </div>
      <div className="card" style={{ marginTop: '24px', fontSize: '14px' }}>
        <p><strong>Total Staked:</strong> 1,234,567 $FOWLCAT</p>
        <p><strong>APY:</strong> 12% (points only)</p>
        <p><strong>Your Points:</strong> 0</p>
      </div>
    </div>
  );
}
