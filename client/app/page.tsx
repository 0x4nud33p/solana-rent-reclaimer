"use client";

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import Faq from "@/components/landing/faq";

const Index = () => {
  return (
    <>
      <div className="overflow-hidden">
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
