import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export const useUnusedATAs = () => {
    const { connection } = useConnection();
    // const { publicKey } = useWallet();
    const publicKey = new PublicKey("7qbNi8QFrREPfz6iBzTQ483dPzTDeZj4bDpknvNvNs7x");

    const getUnusedATAs = async () => {
        if (!publicKey) return [];

        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
            publicKey,
            { programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") }
        );
        console.log("Fetched token accounts:", tokenAccounts);
        // Filter: zero balance, rent-exempt ATAs
        const unused = tokenAccounts.value.filter(({ account }) => {
            const amount = account.data.parsed.info.tokenAmount.uiAmount;
            return amount === 0; // Only empty accounts
        });

        // Each ATA holds ~0.00203928 SOL as rent
        const estimatedRecovery = (unused.length * 0.00203928).toFixed(5);

        return {
            unused,
            estimatedRecovery: Number(estimatedRecovery),
        };
    };

    return { getUnusedATAs };
};
