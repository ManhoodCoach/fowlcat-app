/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Lock down everything except /staking
        source: "/((?!staking).*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value:
            "default-src 'self'; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self';" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" }
        ]
      },
      {
        // Allow ONLY fowlcat.com to embed /staking
        source: "/staking/:path*",
        headers: [
          { key: "Content-Security-Policy", value:
            "default-src 'self'; frame-ancestors https://fowlcat.com https://www.fowlcat.com; object-src 'none'; base-uri 'self'; form-action 'self';" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" }
        ]
      }
    ];
  }
};
export default nextConfig;
