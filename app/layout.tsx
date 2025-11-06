import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FOWLCAT App",
  description: "Stake & Earn FOWLCAT Points",
  themeColor: "#0b1b34", // deep navy
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
        // iOS likes PNG
        url: "https://gateway.irys.xyz/-X5RuwrEZ5C1r0gFI5Y9w-cwLdN1ze2sm0KjhA7hgRE",
      },
    ],
  },
  openGraph: {
    title: "FOWLCAT — Staking",
    description: "Stake & Earn FOWLCAT Points.",
    url: "https://app.fowlcat.com/staking",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Tailwind-friendly base; swap colors later if you like */}
      <body className="min-h-dvh bg-[#0b1b34] text-white">
        {children}
      </body>
    </html>
  );
}