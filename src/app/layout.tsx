import './globals.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import Script from 'next/script';

export const metadata = {
  title: 'FOWLCAT Portal',
  description: 'Swap, Pay, and Mint with $FOWLCAT on Solana.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <head>
  <Script src="https://plugin.jup.ag/plugin-v1.js" strategy="beforeInteractive" />
</head>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
