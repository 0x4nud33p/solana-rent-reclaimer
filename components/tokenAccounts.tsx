"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { TokenInfoForDisplay, fetchTokenInfo } from "@/utils/fetchTokenAccounts";

const TokenAccounts = () => {
  const [myTokens, setMyTokens] = useState<TokenInfoForDisplay[]>([]);
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const wallet = useWallet();
  const payer = wallet.publicKey;

  const TOKEN_PROGRAM_ID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
  const TOKEN_2022_PROGRAM_ID = new PublicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"); 

  useEffect(() => {
    if (!payer) return;

    fetchTokenInfo(connection, payer, TOKEN_PROGRAM_ID, "Token Program")
      .then((tokens) => setMyTokens((prev) => [...prev, ...tokens]))
      .catch(console.error);

    fetchTokenInfo(connection, payer, TOKEN_2022_PROGRAM_ID, "Token Extensions Program")
      .then((tokens) => setMyTokens((prev) => [...prev, ...tokens]))
      .catch(console.error);
  }, [payer]);

  return (
    <div>
      <h1>Test Page</h1>
      <pre>{JSON.stringify(myTokens, null, 2)}</pre>
    </div>
  );
};

export default TokenAccounts;
