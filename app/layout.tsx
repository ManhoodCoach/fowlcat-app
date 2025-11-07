// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SolanaProvider from "@/providers/SolanaProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://app.fowlcat.com"),
  title: "FOWLCAT App — Staking",
  description: "Stake & Earn FOWLCAT Points.",
  themeColor: "#0b1b34",
  icons: {
    icon: [
      {
        url: "https://gateway.irys.xyz/6JF4HvcsF68x2zuyRKAsoOrx9QhgERbidlssIQIZ6Jg",
        type: "image/svg+xml",
        sizes: "32x32",
      },
      {
        url: "https://gateway.irys.xyz/-X5RuwrEZ5C1r0gFI5Y9w-cwLdN1ze2sm0KjhA7hgRE",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: [
      {
        url: "https://gateway.irys.xyz/6JF4HvcsF68x2zuyRKAsoOrx9QhgERbidlssIQIZ6Jg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "https://gateway.irys.xyz/-X5RuwrEZ5C1r0gFI5Y9w-cwLdN1ze2sm0KjhA7hgRE",
      },
    ],
  },
  openGraph: {
    title: "FOWLCAT — Staking",
    description: "Stake & Earn FOWLCAT Points.",
    url: "/staking",
    siteName: "FOWLCAT",
    images: [
      {
        url: "https://gateway.irys.xyz/-X5RuwrEZ5C1r0gFI5Y9w-cwLdN1ze2sm0KjhA7hgRE",
        width: 512,
        height: 512,
        alt: "FOWLCAT logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "FOWLCAT — Staking",
    description: "Stake & Earn FOWLCAT Points.",
    images: [
      "https://gateway.irys.xyz/-X5RuwrEZ5C1r0gFI5Y9w-cwLdN1ze2sm0KjhA7hgRE",
    ],
  },
  // Helps mobile address bars match your theme
  other: {
    "color-scheme": "dark",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh bg-gradient-to-b from-[#0b1b34] to-[#081325] text-white antialiased">
        <SolanaProvider>
          {children}
        </SolanaProvider>
      </body>
    </html>
  );
}
