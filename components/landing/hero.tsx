"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { IconPointerFilled, IconSparkles } from "@tabler/icons-react";
import { LogoCarousel } from "../ui/logo-carousel";
import Gradient from "../gradient";
import FloatingIcons from "../floating-icons";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { LoaderIcon, Star } from "lucide-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <section className="flex max-w-6xl mx-auto relative flex-col items-center justify-center h-full pt-24 px-4 sm:pt-36">
        <div
          className={cn(
            "group relative rounded-full border border-black/5 bg-neutral-100 text-sm sm:text-base max-sm:mb-2 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-0.5">
            <span>✨ Connect Wallet & Start Cleaning</span>
            <ArrowRightIcon className="ml-1 size-2.5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>

        <Gradient />
        <FloatingIcons />

        <div className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-medium text-center">
          Reclaim Your <br />
          <span className="font-semibold bg-gradient-to-tr from-white via-primary to-white bg-clip-text text-transparent">
            SOL
          </span>{" "}
          from Unused Accounts
        </div>

        <div className="text-base md:text-lg mt-8 font-bold w-full lg:w-[50%] text-center text-neutral-500">
          Scan your wallet for stale accounts,{" "}
          <span className="text-neutral-900 font-extrabold dark:font-bold dark:text-neutral-300">
            close them safely,
          </span>{" "}
          and recover rent-exempt SOL in seconds.{" "}
          <br className="md:block hidden" />
        </div>

        <div className="mt-10 flex sm:flex-row flex-col w-full md:w-auto items-center gap-4">
          {!isMounted ? (
            <Button>
              <LoaderIcon className="animate-spin" />
            </Button>
          ) : (
            <>
              <div className="block md:hidden w-[180]">
                <main className="bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg w-full">
                  <WalletMultiButton />
                </main>
              </div>

              <div className="hidden md:block">
                <Link
                  href="https://github.com/0x4nud33p/solana-rent-reclaimer"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="h-8 px-6 py-5 transition-all hover:shadow-[0_0_20px_2px_hsl(var(--primary))]"
                  >
                    Github{" "}
                    <Star className="ml-2 size-4 inline-block fill-current text-yellow-500" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>

        <LogoCarousel />
      </section>
    </div>
  );
}
