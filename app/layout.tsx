import "./globals.css";
import SolanaProviders from "@/providers/SolanaProviders";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-yellow-400"
        style={{ minHeight: "100vh", backgroundColor: "#fde047" }}
      >
        <SolanaProviders>{children}</SolanaProviders>
      </body>
    </html>
  );
}
