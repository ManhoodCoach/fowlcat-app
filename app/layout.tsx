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
          {/* Logo served from Arweave/Irys (SVG, 32×32) */}
          <img
            className="logo"
            src="https://arweave.net/6JF4HvcsF68x2zuyRKAsoOrx9QhgERbidlssIQIZ6Jg"
            alt="FOWLCAT"
            width={42}
            height={42}
          />
          <span className="tag">LIVE</span>
          <div style={{ flex: 1 }} />
          <a className="btn" href="https://fowlcat.com" rel="noopener">
            Back to Site
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
