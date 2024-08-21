import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <body>
      <main className="flex flex-col justify-center gap-4 px-2 lg:px-4 w-full lg:w-[1200px] mx-auto">
        <Header />
        <HeroSection />
      </main>
    </body>
  );
}
