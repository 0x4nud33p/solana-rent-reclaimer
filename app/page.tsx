"use client";

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import Faq from "@/components/landing/faq";
import { UnusedAccountsModal } from "@/components/unused-accounts-model";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { connected, publicKey } = useWallet();

  useEffect(() => {
    if(connected && publicKey) {
      setIsModalOpen(true);
    }
  }, [connected, publicKey]);

  return (
    <>
      <div className="overflow-hidden">
        {connected && (
          <UnusedAccountsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onCloseAccounts={async (selectedAccounts: string[]) => {}}
          />
        )}
        <div className="bg-red-400">
          <Navbar />
        </div>
        <Hero />
        <main className="max-w-6xl mx-auto">
          <div className="px-4">
            <Faq />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;