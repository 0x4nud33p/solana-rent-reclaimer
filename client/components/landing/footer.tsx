import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconRocket,
} from "@tabler/icons-react";
import FooterGradient from "../ui/footer-gradient";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="h-[30rem] border-t md:h-[40rem] relative py-10 mt-20">
        <div className="bg-background z-[-1] opacity-95 absolute inset-0 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div>
        <FooterGradient />
        <div className="flex z-[20] flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center justify-center">
            <Badge
              variant="outline"
              className="w-fit px-4 py-2 rounded-full flex items-center mb-4 gap-2"
            >
              Reclaim your SOL now <IconRocket className="size-4" />
            </Badge>
            <h1 className="text-4xl md:text-6xl text-center font-medium">
              Take back control of your
              <span className="text-muted-foreground/40 text-3xl md:text-5xl">
                <br /> unused{" "}
                <span className="bg-gradient-to-tr mx-2 from-white via-primary to-white bg-clip-text text-transparent">
                  Solana Accounts
                </span>
              </span>
            </h1>
            <p className="text-muted-foreground mt-4 text-center max-w-2xl">
              SolSweep helps you easily close unused accounts on Solana and
              reclaim your rent-exempt SOL — secure, fast, and gas-efficient.
            </p>
            <div className="mt-8">
              <Link href="#" className="inline-block">
                <Button className="bg-primary text-white hover:bg-primary/90 transition-colors">
                  Start Sweeping
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex border-border/40 pt-8 w-full">
            <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between">
              <div className="text-sm md:text-base">
                &copy; {new Date().getFullYear()} SolSweep
              </div>
              <div className="flex gap-4 items-center justify-center">
                <Link
                  href="https://github.com/0x4nud33p/solana-rent-reclaimer"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <IconBrandGithub className="size-5 md:size-8" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/0x4nud33p/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <IconBrandLinkedin className="size-5 md:size-8" />
                </Link>
                <Link
                  href="https://x.com/0x4nud33p"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <IconBrandX className="size-5 md:size-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
