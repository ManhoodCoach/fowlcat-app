import "./globals.css";
import type { Metadata, Viewport } from "next";
import SolanaProvider from "@/providers/SolanaProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://app.fowlcat.com"),
  title: "FOWLCAT — Staking Portal",
  description: "Stake & earn with $FOWLCAT and Zeus zBTC.",
  icons: {
    icon: [
      {
        url: "https://gateway.irys.xyz/-X5RuwrEZ5C1r0gFI5Y9w-cwLdN1ze2sm0KjhA7hgRE",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "https://gateway.irys.xyz/-X5RuwrEZ5C1r0gFI5Y9w-cwLdN1ze2sm0KjhA7hgRE",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gradient-to-b from-[#0b1b34] to-[#050915] text-white antialiased">
        <SolanaProvider>{children}</SolanaProvider>
      </body>
    </html>
  );
}