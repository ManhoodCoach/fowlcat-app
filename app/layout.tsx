// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "FOWLCAT App",
  description: "Stake & Earn FOWLCAT Points",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="container" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Put your logo at /public/logo-fowlcat.svg (or change the src to your file) */}
          <img className="logo" src="/logo-fowlcat.svg" alt="FOWLCAT" />
          <span className="tag">LIVE</span>
          <div style={{ flex: 1 }} />
          <a className="btn" href="https://fowlcat.com" rel="noopener">Back to Site</a>
        </header>
        {children}
      </body>
    </html>
  );
}
