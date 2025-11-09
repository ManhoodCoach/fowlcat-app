import { PublicKey } from "@solana/web3.js";
export const ZBTC_MINT = new PublicKey("zBTCug3er3tLyffELcvDNrKkCymbPWysGcWihESYfLg"); // zBTC (8 dp)
export const FOWLCAT_MINT = new PublicKey(process.env.NEXT_PUBLIC_FOWLCAT_MINT!);      // (likely 9 dp)
export const TREASURY = new PublicKey(process.env.NEXT_PUBLIC_TREASURY!);
export const CLUSTER = process.env.NEXT_PUBLIC_CLUSTER || "mainnet-beta";
