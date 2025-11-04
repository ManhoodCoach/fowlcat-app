import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Fowlcat • Stake & Earn",
  description: "Stake $FOWLCAT, earn points. No emissions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
