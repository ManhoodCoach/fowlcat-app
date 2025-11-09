import { Connection, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import {
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
} from "@solana/spl-token";

/**
 * Ensures a destination ATA exists and returns it. Adds a create ix if missing.
 */
export async function ensureAtaAndBuildTx(
  connection: Connection,
  payer: PublicKey,
  owner: PublicKey,
  mint: PublicKey
) {
  const ata = await getAssociatedTokenAddress(mint, owner, true);
  const info = await connection.getAccountInfo(ata);
  const tx = new Transaction();
  if (!info) {
    tx.add(createAssociatedTokenAccountInstruction(payer, ata, owner, mint));
  }
  return { ata, tx };
}

/**
 * Build an SPL transfer (no approve; direct if sender is owner).
 */
export async function buildSplTransferTx(
  connection: Connection,
  sender: PublicKey,
  recipient: PublicKey,
  mint: PublicKey,
  amountRaw: bigint
) {
  const { ata: fromAta } = await ensureAtaAndBuildTx(connection, sender, sender, mint);
  const { ata: toAta, tx } = await ensureAtaAndBuildTx(connection, sender, recipient, mint);
  tx.add(createTransferInstruction(fromAta, toAta, sender, amountRaw));
  return tx;
}
