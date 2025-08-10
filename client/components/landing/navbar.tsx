"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LoaderIcon } from "lucide-react";
import { ToggleTheme } from "../theme-toggler";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <header className="fixed max-w-6xl mx-auto px-4 top-0 left-0 right-0 z-50">
      <nav className="border border-accent/50 backdrop-blur-md text-sm rounded-xl mt-4 flex justify-between items-center py-2 px-5">
        <Link href="/" className="font-semibold flex-1">
          SOLSWEEP
        </Link>
        <div className="flex items-center flex-1 justify-end space-x-4">
          <ToggleTheme />
          {!isMounted && (
            <Button>
              <LoaderIcon className="animate-spin" />
            </Button>
          )}
          <main className="bg-primary text-white hover:bg-primary/90 transition-colors hidden md:inline-block rounded-lg">
            <WalletMultiButton />
          </main>
        </div>
      </nav>
    </header>
  );
}
