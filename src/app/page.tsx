import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <body className="bg-black">
      
    <div className="bg-black p-5 grid grid-cols-6  flex-2 text-left">
       <a href="" className="text-white text-left ">Dashboard</a>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between bg-black p-24 h[200]">
      <h1 className="text-9xl bg-gradient-to-r from-pink-950 to-pink-700 text-transparent bg-clip-text m-11 ">testing</h1>
        <div className="text-white flex-col grid-cols-1">want to buy it for upload you codes?
           <button>click</button>
           <Button>Click Me</Button>
        </div>
      </main>
    </body>
  );
}
