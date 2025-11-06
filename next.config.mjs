/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // NOTE: Do NOT set X-Frame-Options when using frame-ancestors; browsers ignore ALLOW-FROM.
    const stakingCsp = [
      // Allow scripts from self + Vercel runtime; allow inline for Next runtime & Tailwind hydration
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel.app https://vercel.live",
      // Allow CSS (inline for Tailwind) and Google Fonts if you add them later
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      // Images from anywhere + data/blob (Irys/Arweave/CDNs)
      "img-src 'self' data: blob: https://*",
      // XHR/WebSocket targets (Solana, Helius, WalletConnect, Irys/Arweave)
      "connect-src 'self' https://api.devnet.solana.com wss://api.devnet.solana.com https://*.helius.dev https://*.walletconnect.org https://gateway.irys.xyz https://arweave.net",
      // Framing: only our marketing host may embed this route; direct viewing still allowed
      "frame-ancestors 'self' https://fowlcat.com https://www.fowlcat.com",
      // Basic defaults
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "frame-src 'self' https://fowlcat.com https://www.fowlcat.com",
      "media-src 'self' blob: data:",
      "manifest-src 'self'"
    ].join('; ');

    return [
      // Global: no framing elsewhere, but no CSP that could block Next scripts.
      {
        source: "/((?!staking).*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" }
        ]
      },
      // /staking: allow embedding from fowlcat.com and use relaxed CSP for Next/Tailwind/wallets
      {
        source: "/staking",
        headers: [
          { key: "Content-Security-Policy", value: stakingCsp },
        ]
      }
    ];
  }
};
export default nextConfig;
