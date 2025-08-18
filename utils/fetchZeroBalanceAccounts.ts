import { Connection, PublicKey } from "@solana/web3.js";

export interface ZeroBalanceAccount {
  pubkey: string;
  mint: string;
  rent: number;
  isATA: boolean;
}

const TOKEN_PROGRAM_ID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");

export async function fetchZeroBalanceAccounts(
  connection: Connection,
  owner: PublicKey
): Promise<ZeroBalanceAccount[]> {
  const tesiing = new PublicKey("52C9T2T7JRojtxumYnYZhyUmrN7kqzvCLc4Ksvjk7TxD");
  const resp = await connection.getParsedTokenAccountsByOwner(tesiing, { programId: TOKEN_PROGRAM_ID });
  console.log("response", resp);
  const accounts: ZeroBalanceAccount[] = [];

  for (const { pubkey, account } of resp.value) {
    const info = account.data.parsed.info;
    const uiAmount = info.tokenAmount.uiAmount;

    if (uiAmount === 0) {
      const mint = new PublicKey(info.mint);

      // compute ATA
      const [ata] = PublicKey.findProgramAddressSync(
        [owner.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
        ASSOCIATED_TOKEN_PROGRAM_ID
      );

      // rent (better: use getMinimumBalanceForRentExemption)
      const rent = await connection.getMinimumBalanceForRentExemption(account.data.space);

      accounts.push({
        pubkey: pubkey.toString(),
        mint: mint.toString(),
        rent: rent / 1e9, // lamports -> SOL
        isATA: ata.equals(pubkey),
      });
    }
  }

  return accounts;
}
