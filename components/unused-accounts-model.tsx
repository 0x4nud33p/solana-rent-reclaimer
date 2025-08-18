"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Loader2, ExternalLink } from "lucide-react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { fetchZeroBalanceAccounts, ZeroBalanceAccount } from "@/utils/fetchZeroBalanceAccounts"


interface UnusedAccountsModalProps {
  isOpen: boolean
  onClose: () => void
  onCloseAccounts: (selectedAccounts: string[]) => Promise<void>
}

export function UnusedAccountsModal({ isOpen, onClose, onCloseAccounts }: UnusedAccountsModalProps) {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [accounts, setAccounts] = useState<ZeroBalanceAccount[]>([]);
  const [selectedAccounts, setSelectedAccounts] = useState<Set<string>>(new Set())
  const [isClosing, setIsClosing] = useState(false)

 useEffect(() => {
  const fetchAccounts = async () => {
    if (!isOpen || !publicKey) return;
    
    setIsLoading(true);
    setProgress(10);
    setSelectedAccounts(new Set());

    try {
      const zeroBalanceAccounts = await fetchZeroBalanceAccounts(connection, publicKey);

      setProgress(100);
      setAccounts(zeroBalanceAccounts);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchAccounts();
}, [isOpen, publicKey, connection]);

  const handleAccountToggle = (accountId: string) => {
    const newSelected = new Set(selectedAccounts)
    if (newSelected.has(accountId)) {
      newSelected.delete(accountId)
    } else {
      newSelected.add(accountId)
    }
    setSelectedAccounts(newSelected)
  }

  const totalReclaimable = accounts
    .filter(account => selectedAccounts.has(account.pubkey))
    .reduce((sum, account) => sum + account.rent, 0)

  const handleCloseSelected = async () => {
    try {
      setIsClosing(true)
      await onCloseAccounts(Array.from(selectedAccounts))
      // Remove closed accounts from local state
      setAccounts(accounts.filter(account => !selectedAccounts.has(account.pubkey)))
      setSelectedAccounts(new Set())
    } catch (error) {
      console.error("Error closing accounts:", error)
    } finally {
      setIsClosing(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Unused Token Accounts</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-4 py-8">
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="text-muted-foreground">Scanning your wallet...</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
              {accounts.length === 0 ? (
                "No unused token accounts found. All accounts have balances."
              ) : (
                "These accounts have 0 balance. Closing them will refund rent back to your wallet."
              )}
            </div>

            {accounts.length > 0 && (
              <>
                <div className="border rounded-lg overflow-hidden max-h-96 overflow-y-auto">
                  {accounts.map((account) => (
                    <div key={account.pubkey} className="border-b last:border-b-0 p-4 hover:bg-muted/30 transition-colors">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          checked={selectedAccounts.has(account.pubkey)}
                          onCheckedChange={() => handleAccountToggle(account.pubkey)}
                          className="mt-1"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center space-x-2">
                            {/* <span className="font-medium">
                              {account.tokenInfo?.symbol || "Unknown"}
                            </span> */}
                            <a 
                              href={`https://solscan.io/account/${account.pubkey}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-muted-foreground font-mono hover:underline flex items-center"
                            >
                              {account.pubkey.slice(0, 4)}...{account.pubkey.slice(-4)}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                            <span className="text-xs bg-secondary px-2 py-1 rounded">
                              {account.isATA ? "ATA" : "Extra"}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Mint: <span className="font-mono">{account.mint.slice(0, 4)}...{account.mint.slice(-4)}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Rent: ~{account.rent.toFixed(6)} SOL
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Selected: {selectedAccounts.size}/{accounts.length}</div>
                    <div className="text-sm font-medium">Total to reclaim: ~{totalReclaimable.toFixed(6)} SOL</div>
                  </div>
                  <Button 
                    onClick={handleCloseSelected} 
                    disabled={selectedAccounts.size === 0 || isClosing}
                    className="min-w-32"
                  >
                    {isClosing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Close Selected"
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}