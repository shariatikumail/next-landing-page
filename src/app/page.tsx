import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-pink-700 text-transparent bg-clip-text">Kumail Shariati </h1>
      <div className="bg-yellow-400 w-[500px] h-[250px] flex flex-col items-center justify-center rounded-xl shadow-xl">
        <p className="text-5xl font-bold text-white">Student</p>
        <p className="text-4xl font-bold text-white">Student</p>
        <p className="text-3xl font-bold text-white">Student</p>
        <p className="text-2xl font-bold text-white">Student</p>
        <p className="text-xl font-bold text-white">Student</p>
        <p className="text-lg font-bold text-white">Student</p>
        </div>
    </main>
  );
}
